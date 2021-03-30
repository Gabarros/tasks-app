import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;

  p {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;

  button:nth-of-type(1) {
    margin-right: 20px;
  }
`;
