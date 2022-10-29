import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Driven_white 1.png";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { tokenStorage, setUser, memberStorage } = useContext(AuthContext);

  function fazerLogin(event) {
    event.preventDefault();

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
      {
        email: email,
        password: password,
      }
    );

    promise.then((res) => {
      // if (localStorage.getItem("member") !== null) {
      //   tokenStorage(res.data.token)
      //   memberStorage(res.data.membership)
      //   setUser(res.data.name)
      //   navigate("/home")
  
      // }
      console.log(res.data);
      tokenStorage(res.data.token)
      memberStorage(res.data.membership)
      setUser(res.data.name)
      navigate("/subscriptions")
      if (res.data.membership !== null) {
        navigate("/home");
      } else {
        navigate("/subscriptions")
      }

    });
    promise.catch((err) => alert("Algo deu errado, tente novamente"));
  }

  return (
    <Corpo>
      <img src={logo} alt="Logo" />

      <DivLogin>
        <form onSubmit={fazerLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            
          />

          <button type="submit">Entrar</button>
        </form>
      </DivLogin>
      <Link to={"/cadastro"}>
        <p>Não possuí uma conta? Cadastre-se</p>
      </Link>
    </Corpo>
  );
}

export const Corpo = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e13;

  img {
    width: 299px;
    height: 49px;
    margin-bottom: 100px;
  }
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
