import styled from 'styled-components'

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ToolCard = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  padding: 20px;

  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  opacity: 1;
  transition: box-shadow 1s;

  &:hover {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 15px #0000001A;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTitle = styled.a`
  font-size: 42px;
  color: #170C3A;
`

export const CardButton = styled.button`
  display: flex;
  outline: 0;
  color: #A53F3F;
  align-items: center;
  background: none;
  border: 0;
  cursor: pointer

  p {
    font-size: 20px;
  }
`

export const CardDescription = styled.p`
  margin: 10px 0 15px;
`

export const TagsContainer = styled.div`
  display: flex;

  div {
    display: flex;
    margin-right: 5px;
  }

  span {
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }
`