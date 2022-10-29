import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
    const navigate = useNavigate()
    const { user, token, member } = useContext(AuthContext)
    const { image, perks } = member
    console.log(perks, user)

    function mudarPlano () {
      navigate("/subscriptions")
    }

    function deletarPlano () {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const promise = axios.delete(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        config
      );
  
      promise.then((res) => {
        navigate("/subscriptions")
        console.log(res.data);
      });

      promise.catch((err) => console.log(err.response))
  
  
    }

    

  return (
    <Conteiner>
      <User>
        <img alt="Logo" src={image} />
        <ion-icon name="person-circle-outline"></ion-icon>
      </User>
      <Body>
        <p>Olá, {user}</p>
        {perks.map((i) => {
          const {id, link, membershipId, title} = i
          return (
            <a href={link} target="_blank" key={id}><button>{title}</button></a>
          )
        })}
        
      </Body>
      <Footer>
        <button onClick={mudarPlano}>Mudar Plano</button>
        <button onClick={deletarPlano} style={{backgroundColor: "#FF4747"}}>Cancelar Plano</button>
      </Footer>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  height: 667px;
  background: #0e0e13;
  font-family: "Roboto";
`;
const User = styled.div`
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  img {
    width: 75px;
    height: 50px;
    margin-left: 38px;
  }

  ion-icon {
    width: 34px;
    height: 32px;
    color: #ffffff;
    margin-right: 24px;
  }
`;

const Body = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 124px;

  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin: 12px 0px 54px 0px;
    color: #ffffff;
  }

  button {
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    color: #ffffff;
    margin-bottom: 8px;
  }
`;



const Footer = styled.div`
  width: 375px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  button {
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    color: #ffffff;
    margin-bottom: 8px;
  }
`;
