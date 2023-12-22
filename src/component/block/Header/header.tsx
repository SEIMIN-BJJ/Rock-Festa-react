import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

`;

const Logo = styled.h4`
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  padding: 0 4rem;
  font-size: 0.8rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-right: 23rem;

`;

const MainLogo = styled.h4`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;
  margin-right: 8rem;
`;

const Nav = styled.nav`
  width: 100%;

`;

const Ul = styled.ul`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10rem;

`;

const Li = styled.li`
  width: 5%;
  display: flex;
  margin-right: 2rem;

  a {
    color: #fef;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 1.3rem;
    transition: background-color 0.3s;
  }

`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1.2rem 1rem auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 200;
  background-color: #000;
  color: #fff;
  transition: background-color 0.5s, opacity 0.5s, transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

    ${Li} {

      a{
      color: #ffffff; 

      .insta:hover {
        color: #e48f64;
      }
      .mail:hover {
        color: #76adfb;
      }
      .youtube:hover {
        color: #FF0000;
      }
    }
  }
`;


const HeaderComp = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHidden(scrollPosition > 500);
    // setHidden(scrollPosition > 0 && scrollPosition < 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header>
      <HeaderDiv className={hidden ? "hidden" : ""}>
        <Logo>SEIMIN ROCKFESTA</Logo>
        <MainLogo>MUSIC FESTIVAL</MainLogo>
        <Nav>
          <Ul>
          <Li>
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="/">
                <FaInstagram className="insta" />
              </a>
            </Li>
            <Li>
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="/">
                <FaFacebook className="mail" />
              </a>
            </Li>
            <Li>
              <a                       
              href="/"
              target="_blank"
              rel="noopener noreferrer">
                <FaYoutube className="youtube"/>
              </a>
            </Li>
          </Ul>
        </Nav>
      </HeaderDiv>
    </Header>
  );
};

export default HeaderComp;