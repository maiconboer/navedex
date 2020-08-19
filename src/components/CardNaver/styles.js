import styled from 'styled-components';

export const Card = styled.div`
  max-width: 280px;
  width: 100%;
 
  .wrapper {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 280px;
    }

    .name {
      margin: 16px 0 4px 0;
      font-weight: 600;
    }

    .job_role {
      margin-bottom: 16px;
    }

    span {
      margin-right: 8px;
      cursor: pointer;
    }

    a {
      color: var(--color-text-dark);
    }
  }
`;

