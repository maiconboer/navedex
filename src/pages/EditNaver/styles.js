import styled from 'styled-components';

export const Section = styled.section`
  max-width: 664px;
  width: 100%;
  margin: 40px auto 0;
  padding: 24px 32px;

  p {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;

    a {
      display: flex;
      align-items: center;
      color: var(--color-text-dark);
    }

    svg {
      margin-left: -8px;
      margin-right: 24px;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    position: relative;

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-gap: 0px;
    }

    button {
      position: absolute;
      right: 0;
      width: 176px;
      grid-column: 2 / 2;
      grid-row: 2 / 2;

      @media screen and (max-width: 480px) {
        position: relative;
        width: 100%;
        grid-column: 1;
        grid-row: 7;
      }
    }
  }
`;