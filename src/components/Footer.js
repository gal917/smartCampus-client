import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <>
      <Separator />
      <Container>
        <Quote>
          An innovative approach to optimal resource use and maximal comfort.
        </Quote>
        <Link href="https://www.hit.ac.il/">HIT College Site</Link>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F0FFFF;
  padding: 32px;
  margin-top: 64px;
`;

const Quote = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
`;

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #cccccc;
`;

const Link = styled.a`
  font-size: 16px;
  color: #000000;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;
