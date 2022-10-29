import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import {
  Ion,
  Corpo,
  LogoConteiner,
  ConteinerInfo,
  DivBeneficios,
  DivPreços,
  DivFlex,
  InputBaixo,
  InputCima,
} from "./style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


<Modal appElement={document.querySelector('#Assinar')}></Modal>

export default function Assinar() {
  const { idSubs } = useParams();
  const { token, setInfoAssinatura} = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [beneficios, setBeneficios] = useState([]);
  const [nome, setNome] = useState("");
  const [cartao, setCartao] = useState("");
  const [cvv, setCvv] = useState("");
  const [validade, setValidade] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  let subtitle;


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    //subtitle.style.color = 'red';
  }
  function closeModal() {
    setIsOpen(false);
  }

  function fazerAssinatura(event) {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
      {
        membershipId: idSubs,
        cardName: nome,
        cardNumber: cartao,
        securityNumber: cvv,
        expirationDate: validade,
      },
      config
    );

    promise.then((res) => {
      console.log(res.data);
      setInfoAssinatura(res.data.membership);
      navigate("/home")
    });

    promise.catch((err) => console.log(err.response));
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idSubs}`,
      config
    );

    promise.then((res) => {
      const { id, image, name, perks, price } = res.data;
      setBeneficios(perks);
      setInfo(res.data);
    });
    promise.catch((err) => {
      console.log(err.response);
      alert("Algo deu errado, por favor tente novamente.")
    });
  }, [idSubs]);

  return (
    <>
      <Ion>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Ion>
      <Corpo>
        <LogoConteiner>
          <img src={info.image} alt="Logo" />
          <p>{info.name}</p>
        </LogoConteiner>
        <ConteinerInfo>
          <DivBeneficios>
            <DivFlex>
              <ion-icon name="reader-outline"></ion-icon>
              <h2>Benefícios:</h2>
            </DivFlex>
            <ul>
              {beneficios.map((i, index) => {
                const { id, membershipId, title } = i;
                return <li key={id}>{`${index + 1}. ${title}`}</li>;
              })}
            </ul>
          </DivBeneficios>
          <DivPreços>
            <DivFlex>
              <ion-icon name="cash-outline"></ion-icon>
              <p>Preço:</p>
            </DivFlex>
            <p>R$ {info.price} cobrados mensalmente</p>
          </DivPreços>

          <form>
            <InputCima>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome impreso no cartão"
                required
              ></input>
              <input
                type="number"
                value={cartao}
                onChange={(e) => setCartao(e.target.value)}
                placeholder="Digitos do cartão"
                required
              ></input>
            </InputCima>
            <InputBaixo>
              <input
                type="number"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="Código de segurança"
                required
              ></input>
              <input
                type="number"
                value={validade}
                onChange={(e) => setValidade(e.target.value)}
                placeholder="Validade"
                required
              ></input>
            </InputBaixo>
            <button type="button" onClick={openModal}>Assinar</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
              <p>
                Tem certeza que deseja assinar o plano Driven Plus {info.price}?
              </p>
              <button type="button">Não</button>
              <button onClick={fazerAssinatura} type="submit">Sim</button>
            </Modal>
          </form>
        </ConteinerInfo>
      </Corpo>
    </>
  );
}
