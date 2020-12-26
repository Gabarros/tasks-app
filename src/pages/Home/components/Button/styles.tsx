import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border-radius: 50%;
  border: 1px solid black;
  width: 150px;
  height: 150px;


  button{
    border: none;
    background-color: inherit;
    font-size: 18px;

    
  }

  #icon{
    font-size: 80px;
  }

  &:hover{
    cursor: pointer;
  }
`;
