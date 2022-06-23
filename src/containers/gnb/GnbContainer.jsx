import Logo from '../../components/common/Logo';
import SearchField from '../../components/gnb/SearchField';

import { AiFillHome, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  width: '100vw',
  padding: '5px',
  display: 'flex',
  position: 'fixed',
  justifyContent: 'space-around',
  borderBottom: '1px solid lightgray',
});

const RightSide = styled.div({
  gap: '10px',
  display: 'flex',
  alignItems: 'center',
});

export default function GnbContainer() {
  return (
    <Wrapper>
      <Logo size='100px'/>
      <SearchField />
      <RightSide>
        <AiFillHome fontSize='25px'/>
        <AiOutlineHeart fontSize='25px'/>
        <AiOutlineSend fontSize='25px'/>
      </RightSide>
    </Wrapper>
  )
}