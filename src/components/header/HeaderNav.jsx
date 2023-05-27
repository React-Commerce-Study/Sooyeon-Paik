import React from 'react';
import { Link, useNavigate }  from 'react-router-dom';
import styled from "styled-components";
import LogoImg from '../../assets/Logo-hodu.png';
import SearchIcon from '../../assets/search.png'
import CartImg from '../../assets/icon-shopping-cart.svg';
import User from '../../assets/icon-user.svg';


export default function HeaderNav() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const GoToCart = () => {
    navigate("/cart")
  }
  

  return (
    <HeaderWrap>
      <HeaderNavContainer>
      <HeaderNavLeft>
        <h1>
        <MainLogoImg src={LogoImg} alt='호두 로고' />
        </h1>
        <form>
        <SearchProduct placeholder="상품을 검색해보세요!" />
        <SearchBtn alt='상품 검색'>

        </SearchBtn>
        </form>
        </HeaderNavLeft>
        <HeaderNavRight>
        <CartBtn>
        <CartBtnImg src={CartImg} alt='장바구니로 이동' />
        <CartBtnText>장바구니</CartBtnText>
        </CartBtn>
        <StyledLink alt='로그인으로 이동'>로그인</StyledLink>
        </HeaderNavRight>
        </HeaderNavContainer>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
    width: 100%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderNavContainer = styled.nav`
    width: 1080px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  
`
const HeaderNavLeft = styled.div`
  display: flex;
  align-items: center;
`

const MainLogoImg = styled.img`
    display: block;
    width: 124px;
    height: 38px;
    margin-right: 30px;
`

const SearchProduct = styled.input`
    position: relative;
    width: 400px;
    border-radius: var(--input-radius);
    border: 2px solid var(--main-color);
    padding: 13px 22px;
    ::placeholder {
        color: var(--subtext-color);
        font-size: var(--fs-md);
    }
`

const SearchBtn = styled.button`
position: absolute;
width: 28px;
height: 28px;
background: url(${SearchIcon}) no-repeat center center;
`

const HeaderNavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`

const CartBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 50px;
`

const CartBtnImg = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
`

const CartBtnText = styled.span`
  color: var(--subtext-color);
  white-space: nowrap;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 50px;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    background: url(${User}) no-repeat center center;
    background-size: 32px 32px;
    margin-bottom: 4px;
  }
`;
