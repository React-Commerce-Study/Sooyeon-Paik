import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../user/userLogin/userLogin';
import { postUserLogin } from '../../api/Apis';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('Buyer');
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputValue;

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleUserType = (e) => {
    e.target.id === 'Buyer' ? setUserType('Buyer') : setUserType('Seller');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' && password === '') {
      setError('emptyFields');
    } else if (username === '') {
      setError('emptyUsername');
    } else if (password === '') {
      setError('emptyPassword');
    } else {
      
    postUserLogin({
      username,
      password,
      login_type: userType,
    })
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/');
      })
      .catch((error) => {
        if (error.request.status === 401) {
          console.log(error);
        }
      })
    };
  };

  return (
    <UserLogin
      userType={userType}
      onClick={handleUserType}
      onChange={handleData}
      onSubmit={handleLogin}
    />
  );
};

export default LoginPage;
