import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchField() {
  return (
    <div
      style={{
        margin: '2px',
        padding: '6px',
        display: 'flex',
        verticalAlign: 'center',
        borderRadius: '5px',
        backgroundColor: '#f3f3f3',
      }}>
      <AiOutlineSearch
        style={{
          height: '100%',
        }}/>
      <input
        placeholder="검색"
        style={{
          backgroundColor: 'transparent',
        }}/>
    </div>
  )
}