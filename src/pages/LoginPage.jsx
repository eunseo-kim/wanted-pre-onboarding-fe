import styled from '@emotion/styled';

import { loadItem } from '../services/storage';

import LoginContainer from '../containers/login/LoginContainer'
import Logo from '../components/common/Logo';
import { useEffect } from 'react';

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#fafafa',
});

const LoginFieldBox = styled.div({
  width: '22em',
  margin: 'auto',
  padding: '2em',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: '1px solid lightgray',
});

export default function LoginPage() {
  const username = loadItem('username') || '';
  const password = loadItem('password') || '';

  return (
    <Wrapper>
      <LoginFieldBox>
        <Logo size='70%'/>
        <LoginContainer
          username={username}
          password={password}/>
      </LoginFieldBox>
    </Wrapper>
  )
}