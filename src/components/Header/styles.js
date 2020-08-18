import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 24px 32px;

  img {
    width: 145px;
  }

  span {
    cursor: pointer;
  }
`;