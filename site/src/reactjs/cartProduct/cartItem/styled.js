import styled from 'styled-components'


const ContainerCartItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  font-weight: 700;
  font-size: 1em;
  font-family: Roboto;

  & > div {
    margin: 2em 0em;
    flex-grow: 1;
    text-align: center;
  }

  & > div:nth-child(1) {
    text-align: left;
  }

  span {
    font-weight: 400 !important;
    margin-bottom: .5em;
  }
  
  img {
    width: 7em;
    height: auto;
  }

  .remover img {
    width: 3em;
    cursor: pointer;
  }

  .price, .qtd {
    display: flex;
    flex-direction: column;
  }
`

const RemoveIcon = styled.img`
  content: url('/assets/images/delete.svg')
`


export { ContainerCartItem, RemoveIcon }