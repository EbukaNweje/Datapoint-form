import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBar = ({ text, toggle, setToggle }) => {
  console.log(toggle);
  return (
    <Container>
       <NavBar>
                <Nav to="/"
                   onClick={() => {
                    setToggle(false);
                  }}>Home</Nav>
                <Nav to="about"
                onClick={() => {
                  setToggle(false);
                }}>About</Nav>
                {/* <Nav>Pricing</Nav> */}
                <Nav to="course"
                onClick={() => {
                  setToggle(false);
                }}>Courses</Nav>
                <Nav to="/"
                onClick={() => {
                  setToggle(false);
                }}>Our Teacher</Nav>
                <Nav to="/"
                onClick={() => {
                  setToggle(false);
                }}>Our Sponsors</Nav>
                {/* <Nav to="/"
                onClick={() => {
                  setToggle(false);
                }}>Contact</Nav> */}
            </NavBar>
    </Container>
  );
};

export default SideBar;
const Nav = styled(NavLink)`
    color: black;
    transition: all 350ms;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transform: scale(1);
    position: relative;
    margin: 0px 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 40px;
    margin: 10px 0px;
    /* border-top: 2px solid rgba(226, 11, 93, 0.767); */
    border-bottom: 2px solid rgba(226, 11, 93, 0.767);
    text-decoration: none;
    color: black;
    
    /* :after{
        content: "";
        position: absolute;
        height: 1px;
        background-color: black;
        width: 100%;
        bottom: -2px;
        left: 0;
        opacity: 0;
        transform: scale(0);
        transform-origin: left;
        transform: all 350ms;

    } */

    :hover{
        cursor: pointer;
        color: #D41E49;
        transform: scale(1.03);

        /* :after{
            opacity: 1;
            transform: scale(1.05)
        } */
    }
`
const NavBar = styled.div`
    width: 70%;
    margin-left: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
  display: none;
  /* z-index: 1000px; */

  @media screen and (max-width: 1154px) {
    background-color: white;
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 12;
    margin-top: 120px;
    /* top: 100px; */
  }
`;
// const Wrapper = styled.div`
//   width: 100%;
//   height: 70px;
//   /* margin: 20px; */
//   border-top: 2px solid rgba(255, 255, 255, 0.4);
//   border-bottom: 2px solid rgba(255, 255, 255, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;
