import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Subscriptions() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTA0LCJpYXQiOjE2NjY4MDMwMTB9.gk-h6pZ2CG_CibagDZGazlC35d2UYE9UtVGERo9quGs",
      },
    };

    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
      config
    );

    promise.then((res) => {
      console.log(res.data);
      setInfo(res.data)
    
    
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
          <DivPlanos key={id}>
            <img src={image} alt="Imagem" />
            <p>{price}</p>
          </DivPlanos>
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
    width: 299px;
    height: 49px;
    margin-bottom: 100px;
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
