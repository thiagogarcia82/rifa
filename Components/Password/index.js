import styled from 'styled-components';

export default function Password({value, setValue}) {
  return (
    <StyledPassword>
      <h1>Por favor coloque a senha</h1>
      <input type="password" value={value} onChange={({ target: { value }}) => setValue(value) } />
    </StyledPassword>
  )
}


const StyledPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`
