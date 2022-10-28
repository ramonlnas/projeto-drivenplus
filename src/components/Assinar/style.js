import styled from "styled-components";

export const Ion = styled.div`
  background: #0e0e13;
  padding: 24px 0px 0px 22px;
  width: 375px;

  ion-icon {
    width: 28px;
    height: 28px;
    color: #ffffff;
  }
`;
export const Corpo = styled.div`
  font-family: "Roboto";
  width: 375px;
  display: flex;
  background: #0e0e13;
  color: white;
  flex-direction: column;
  align-items: center;

  h2,
  p {
    color: #ffffff;
  }

  button {
    width: 299px;
    height: 52px;
    border-radius: 8px;
    background-color: #ff4791;
    color: #ffffff;
    margin-bottom: 34px;
    font-family: "Roboto";

  }
  input {
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
  }
`;

export const LogoConteiner = styled.div`
  margin-bottom: 22px;

  img {
    width: 164px;
    height: 145px;
    margin: 36px 0px 12px 0px;
  }
  p {
    font-weight: 700;
    color: #ffffff;
    font-size: 32px;
    line-height: 38px;
  }
`;
export const ConteinerInfo = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 36px 0px 36px;
`;

export const DivBeneficios = styled.div`
  margin-bottom: 12px;
  h1 {
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 16px;
  }
  ion-icon {
    width: 12px;
    height: 16px;
    color: #ff4791;
    margin-right: 5px;
  }
`;

export const DivPreços = styled.div`
  margin-bottom: 34px;
  h1 {
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 16px;
  }
  ion-icon {
    width: 12px;
    height: 16px;
    color: #ff4791;
    margin-right: 5px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InputCima = styled.div`
  input {
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 18px 122px 18px 14px;
  }
`;

export const InputBaixo = styled.div`
  display: flex;

  input {
    width: 145px;
    height: 52px;
    margin: 0px 9px 12px 0px;
    background: #ffffff;
    border-radius: 8px;
    padding: 0px 0px 0 7px;
  }
`;
