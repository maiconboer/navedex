import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 448px;
    width: 100%;
    border: 1px solid var(--background-dark);

    img {
      padding: 40px 0px 0px 0px;
      width: 53%;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 40px 32px;
      position: relative;
      
      span {
        position: absolute;
        margin: 20px 0 0 0;
        bottom: 10px;
        color: red;
      }
    }
  }
`;