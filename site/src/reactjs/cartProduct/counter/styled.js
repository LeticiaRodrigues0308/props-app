import styled from "styled-components";


const ContainerCounter = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-family: Roboto;

  & > * {
    margin: .5em;
    background-color: #f5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .minus {
    border-radius: 100%;
    cursor: pointer;
  }

  .quantidade {
    padding: 0.3em 1em;
  }

  .plus {
    border-radius: 100%;
    cursor: pointer;
  }
`

export {ContainerCounter}