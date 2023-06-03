import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/Logo-hodu.png';
import Button from '../../common/button/Button';
import UserTab from './userTab';

export const UserLogin = ({ userType, onClick, onChange, onSubmit, error }) => {
  
const renderErrorMessage = () => {
    if (error === 'emptyFields') {
      return <p>아이디와 비밀번호를 입력해주세요.</p>;
    } else if (error === 'emptyUsername') {
      return <p>아이디를 입력해주세요.</p>;
    } else if (error === 'emptyPassword') {
      return <p>비밀번호를 입력해주세요.</p>;
    } else if (error === 'incorrectCredentials') {
      return <p>아이디 또는 비밀번호가 일치하지 않습니다.</p>;
    }
    return null;
  };  
    return (
    <LoginWrapper>
      <Link to='/'>
        <img src={Logo} alt='호두마켓 로고' />
      </Link>
      <UserTab userType={userType}>
        <button type='button' id='Buyer' onClick={onClick}>
          구매회원 로그인
        </button>
        <button type='button' id='Seller' onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
      <LoginForm onSubmit={onSubmit}>
        <input
          type='text'
          id='id'
          name='username'
          placeholder='아이디'
          onChange={onChange}
          required
        />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='비밀번호'
          className='password'
          onChange={onChange}
          required
        />
        {renderErrorMessage()}
        <Button width='100%' type='submit' size='medium' onClick={onSubmit}>
          로그인
        </Button>
      </LoginForm>
      <LinkWrapper>
        <Link to='/signup'>회원가입</Link>|
        <Link to='/signup'>비밀번호 찾기</Link>
      </LinkWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  img {
    width: 238px;
    margin-bottom: 70px;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 34px 35px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: white;
  z-index: 99;
  > input {
    height: 60px;
    border: none;
    gap: 6px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 6px;
    padding: 20px 0;
    .password {
        margin-bottom: 26px;
    }
    &::placeholder {
      font-size: 16px;
      color: var(--signup-color);
    }
  }
  p {
    font-size: 18px;
    line-height: 20px;
    margin: 26px 0;
    color: #eb5757;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
  > a {
    color: var(--signup-color);
  }
`;

export default UserLogin;