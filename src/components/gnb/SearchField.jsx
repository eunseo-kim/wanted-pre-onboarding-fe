import { AiOutlineSearch } from 'react-icons/ai';

import styled from '@emotion/styled';

const SearchFieldBox = styled.div({
  margin: '2px',
  padding: '6px',
  display: 'flex',
  verticalAlign: 'center',
  borderRadius: '5px',
  backgroundColor: '#f3f3f3',
  '& svg': {
    height: '100%',
  },
  '& input': {
    backgroundColor: 'transparent',
  }
});

export default function SearchField() {
  return (
    <SearchFieldBox>
      <AiOutlineSearch/>
      <input placeholder="검색"/>
    </SearchFieldBox>
  )
}