import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

const cardWidth = 420;
const borderRadius = 22;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${cardWidth + 4}px;
  height: 300px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;

const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.975em;
  
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: #2874A6;
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Style = styled.button`
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Card = ({ hexa, title, name, usn, issuer, description, image, date }) => (
  
  <Style>
    <div class="rounded-3 bg-grad text-white" style={{margin: -10}}>
    <Screenshot image={"https://ipfs.infura.io/ipfs/" + image} >
    
      </ Screenshot>
    <Content>
      
      <Title> Type: {title}</Title>
      <Description>Name: {name}</Description>
      <Description>USN: {usn}</Description>
      <Description>Desc: {description}</Description>
      <Description>Date: {moment.unix(date).format('h:mm:ss A M/D/Y')}
        </Description>
      <Description>
      <button type="button" class="btn btn-outline-dark">
      <a
                            href={"https://etherscan.io/address/" + issuer}
                            rel="noopener noreferrer"
                            target="_blank">
                            Issuer: {issuer.substring(0,30)}...
                          </a>
      </button>
      
      </Description>
      <Title>
      <button type="button" class="btn btn-outline-primary">
      <a
                            href={"https://ipfs.infura.io/ipfs/" + image}
                            rel="noopener noreferrer"
                            target="_blank">
                            View Document
                          </a>
      </button>
      
      </Title>
      <BottomBar background={hexa}/>
      
    </Content>
    </div>
  </Style>
);

export default Card;
