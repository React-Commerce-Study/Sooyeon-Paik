import React from 'react'; 
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/Logo-hodu.png'

export default function HomeLogo() {
    return (
    <HeaderWrap>
    <Link to="/">
    <MainLogoImg src={Logo} alt="호두 로고" />
    </Link>
    </HeaderWrap>
    )
}

const HeaderWrap = styled.header`
width: 100%;
`

const MainLogoImg = styled.img`
width: 238px;
height: 74px;
margin: 0 auto;
margin-top: 100px;
`
