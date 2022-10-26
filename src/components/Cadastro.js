import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  function fazerCadastro(event) {
    event.preventDefault();
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
      {
        email: email,
        name: nome,
        cpf: cpf,
        password: password,
      }
    );

    promise.then((res) => {
      console.log(res.data);
      alert("Cadastro realizado com sucesso!");
      Navigate("/");
    });
    promise.catch((err) => {
      alert("Algo deu errado, tente novamente");
      console.log(err.data.message)
    });
  }

  return (
    <Corpo>
      <DivLogin>
        <form onSubmit={fazerCadastro}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
          />
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <input
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </DivLogin>
      <Link to={"/"}>
        <p>Já possuí uma conta? Entre</p>
      </Link>
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

  p {
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    text-decoration-line: underline;
  }
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 299px;

  input {
    height: 52px;
    width: 299px;
    border-radius: 8px;
    padding: 18px 0px 18px 14px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 16px;
  }

  button {
    width: 298px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    margin: 8px 0px 24px 0px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
`;
