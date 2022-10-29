import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export default function Subscriptions() {
  const [info, setInfo] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
      config
    );

    promise.then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });

    promise.catch((err) => {
      console.log(err.data.message);
      alert("Algo deu errado, por favor, atualize a página.");
    });
  }, []);
  return (
    <Corpo>
      <h1>Escolha seu plano</h1>
      {info.map((i) => {
        const { id, image, price } = i;
        return (
          <Link key={id} to={`/assinar/${id}`}>
            <DivPlanos>
              <img src={image} alt="Imagem" />
              <p>{price}</p>
            </DivPlanos>
          </Link>
        );
      })}
    </Corpo>
  );
}

const Corpo = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e13;

  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    margin-bottom: 24px;
  }
`;

const DivPlanos = styled.div`
  width: 290px;
  height: 180px;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 0px 16px 0px 16px;
  img {
    width: 139.38px;
    height: 95.13px;
    margin-right: 21px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;
