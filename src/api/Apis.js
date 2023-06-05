import axios from 'axios';

const url = 'https://openmarket.weniv.co.kr';

// 인스턴스 생성 - 기본 URL, 요청 헤더
export const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postUserLogin = async (formData) => {
  const response = await instance.post('/accounts/login/', formData);
  return response.data;
};

export const getProducts = async () => {
  const response = await instance.get('/products/');
  return response.data;
}
