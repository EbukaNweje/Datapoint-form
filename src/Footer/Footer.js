import React from "react";
import styled from "styled-components";
import FooterComp from "./FooterComp";
import { AiFillFacebook, AiFillYoutube, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import logo from "../img/Logo.PNG"

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterComp
          header="Engineering Tracks"
          nav="Front End Engineering"
          nav1="Back End Engineering"
          nav2="Cloud Engineering"
        />
        <FooterComp
          header="Courses"
          nav="ReactJS"
          nav1="NodeJS"
          nav2="Azure"
          nav3="Firebase"
          nav4="GraphQL"
          nav5="WebSocket"
        />
        <FooterComp
          header="Companies"
          nav="Companies"
          nav1="Collaborate with us"
        />
        {/* <FooterComp
          header="About Us"
          nav="Our Story"
          nav1="Our Story"
          nav2="Blog"
          nav2="Merch Store (Coming soon)"
        /> */}
        <FooterComp header="Resources" nav="Terms of Service" nav1="FAQs" />
      </Wrapper>
      <Bottom>
        <Logo src={logo} />
        <Content>
          <P>Powered by</P>
          <Span>Eflex Code</Span>
        </Content>
        <Text>
          <AiFillFacebook style={{
            "margin": "0px 5px",
            "cursor": "pointer",
          }} />
          <AiFillYoutube style={{
            "margin": "0px 5px",
            "cursor": "pointer",
          }}  />
          <AiFillInstagram style={{
            "margin": "0px 5px",
            "cursor": "pointer",
          }}  />
          <AiOutlineWhatsApp  style={{
            "margin": "0px 5px",
            "cursor": "pointer",
          }} />
        </Text>
      </Bottom>
    </Container>
  );
};

export default Footer;

const P = styled.div``;
const Span = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Text = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 45px;
`;
const Logo = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 3px;
  object-fit: contain;
  margin: 20px 0;
  display: flex;
`;
const Bottom = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;

  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  background: black;
  min-height: 500px;
  height: 100%;
  padding-bottom: 20px;
`;
