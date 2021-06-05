import styled from 'styled-components';

export default function Sheet({names}) {
  return (
    <StyledSheet>
      <h1>Rifa das Bandas</h1>
      <SheetBox>
        { Object.entries(names, i).map(([name, owner]) => (
          <div key={name}>
            <h2>{name}</h2>
            <p>{owner}</p>
            <p>{i + 1}</p>
          </div>
        ))}
      </SheetBox>
    </StyledSheet>
  )
}


const StyledSheet = styled.div`
  border: 1px solid black;
  margin: 20px;

  h1 {
    text-align: center;
  }
`

const SheetBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;

  div {
    border: 1px solid black;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    justify-content: space-between;

    h2 {
      text-align: center;
      font-size: 18px;
      margin: 0;
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`
