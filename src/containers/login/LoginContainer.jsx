import Inputform from '../../components/login/InputForm';
import LoginButton from '../../components/login/LoginButton';
import ValidationCheckBox from '../../components/login/ValidationCheckBox';
import CheckPasswordValidation from '../../components/login/CheckPasswordValidation';

import { checkEmailValidation, checkPasswordValidation } from '../../services/validation'; 

import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { saveItem } from '../../services/storage';

import styled from 'styled-components';

const Wrapper = styled.div({
  display: 'flex',
  width: '100%',
  verticalAlign: 'center'
});

export default function LoginContainer({ email, password }) {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValidation, setEmailValidation] = useState();
  const [errorCodes, setErrorCodes] = useState();
  
  useEffect(() => {
    emailRef.current.value = email;
    passwordRef.current.value = password;
  }, []);

  const handleChangeEmail = () => {
    setEmailValidation(checkEmailValidation(emailRef.current.value));
  }

  const handleChangePassword = () => {
    setErrorCodes(checkPasswordValidation(passwordRef.current.value))
  }
    
  const handleSubmit = () => {
    if (emailValidation && errorCodes.length === 0) {
      saveItem('email', emailRef.current.value);
      saveItem('password', passwordRef.current.value);
      navigate('/');
    }
  };

  return (
    <>
      <Wrapper>
        <Inputform
          info={{
            type: 'email',
            id: 'email',
            name: 'email',
            ref: emailRef
          }}
          onChange={handleChangeEmail}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <ValidationCheckBox
          validation={emailValidation}
        />
      </Wrapper>
      <Wrapper>
        <Inputform
          info={{
            type: 'password',
            id: 'password',
            name: 'password',
            ref: passwordRef
          }}
          onChange={handleChangePassword}
          placeholder="비밀번호"
        />
        <ValidationCheckBox
          validation={errorCodes ? errorCodes.length === 0 : errorCodes}
        />
      </Wrapper>
      <Wrapper>
        <CheckPasswordValidation
          errorCodes={errorCodes ? errorCodes : [1, 2, 3]}
        />
      </Wrapper>
      <LoginButton
        onSubmit={handleSubmit}
      />
    </>
  )
}