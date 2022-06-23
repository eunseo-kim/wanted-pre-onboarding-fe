import styled from '@emotion/styled';

const Button = styled.button({
  color: 'white',
  width: '100%',
  padding: '6px',
  marginTop: '7px',
  fontWeight: 'bolder',
  borderRadius: '3px',
  backgroundColor: '#0095f6',
  cursor: 'pointer',
});

export default function LoginButton({ onSubmit }) {
  return (
    <Button
      type="button"
      onClick={onSubmit}
    >
        로그인
    </Button>
  )
}