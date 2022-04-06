import styled from "styled-components";

import Hero from "../components/hero";

//Styled components
const Main = styled.main`
  padding: 148px 24px;
  max-width: 576px;
  margin: 0 auto 148px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  span {
    margin-left: 8px;
    color: ${(props) => props.theme.colors.red};
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.bodyText};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
  white-space: pre-line;
`;

const Spacer = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.bodyText};
  opacity: 0.12;
  margin-bottom: 24px;
`;

const CryptoTitle = styled.p`
  color: ${(props) => props.theme.titleColor};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.panel};
  border: 1px solid ${(props) => props.theme.navigatorBorder};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 16px;
  color: ${(props) => props.theme.bodyText};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.navigatorBorder};
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <Title>
          Donation<span>❤️</span>
        </Title>
        <Description>
          All donations are welcomed and voluntary. Donations go towards keeping
          the website updated. Long nights need some coffee...
        </Description>
        <Spacer />
        <CryptoTitle>Bitcoin (btc)</CryptoTitle>
        <Input
          type="text"
          value="bc1qpj0hjygujakvhgl9xhrczyy02ak2ld8uupkxuq"
          readonly
        />
        <CryptoTitle>Ethereum (eth)</CryptoTitle>
        <Input
          type="text"
          value="0xCC5dfAd0b7000C253daFCc31Df133F9517b25C44"
          readonly
        />
        <CryptoTitle>Cardano (ada)</CryptoTitle>
        <Input
          type="text"
          value="addr1qy02tequjapxuhjgz54vzu4l07raan4cv6kdzukuv5y5khpfnsjrg4zukdgq9j5rtnkscv29mj7pd903p9rgudwdm45sz3x893"
          readonly
        />
        <CryptoTitle>Dogecoin</CryptoTitle>
        <Input
          type="text"
          value="D8vLbjEvfPqBVVw1hj1w1pWM2HGhZUyb5q"
          readonly
        />
      </Main>
    </>
  );
}
