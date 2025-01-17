import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Logo from '../components/common/Logo';
import SearchField from '../components/gnb/SearchField';
import LogoutButton from '../components/gnb/LogoutButton';

import { AiFillHome, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai';

import { removeItem  } from '../services/storage';

const Wrapper = styled.div({
  zIndex: '100',
  width: '100vw',
  padding: '5px',
  display: 'flex',
  position: 'fixed',
  backgroundColor: 'white',
  justifyContent: 'space-around',
  borderBottom: '1px solid lightgray',
  boxShadow: 'rgba(99, 99, 99, 0.1) 0px 2px 8px 0px',
  '@media (max-width: 480px)': {
    justifyContent: 'space-between',
  }
});

const RightSide = styled.div({
  gap: '10px',
  display: 'flex',
  alignItems: 'center',
});

export default function GnbContainer({ setEmail }) {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    setEmail(null);
    removeItem('email');
    removeItem('password');
    navigate('/login');
  }

  return (
    <Wrapper>
      <Logo size='100px'/>
      <SearchField />
      <RightSide>
        <AiFillHome fontSize='25px'/>
        <AiOutlineHeart fontSize='25px'/>
        <AiOutlineSend fontSize='25px'/>
        <LogoutButton
          onClickLogout={handleClickLogout}/>
      </RightSide>
    </Wrapper>
  )
}