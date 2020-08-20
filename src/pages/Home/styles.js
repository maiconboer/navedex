import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 32px;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    h1 {
      font-size: 40px;
      font-weight: 600;
    }

    button {
      width: 176px;
    }

    @media screen and (max-width: 400px) {
      flex-direction: column;

      button {
        margin-top: 18px;
      }
    }
  }

  .cards-navers {
   display: flex;
   flex-wrap: wrap; 
   gap: 32px;
  
    @media screen and (max-width: 1279px) {
      justify-content: center;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;