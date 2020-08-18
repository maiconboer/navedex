import styled from 'styled-components';

export const InputElement = styled.input`
  width: 100%;
  border: 1px solid var(--background-dark);
  display: block;
  font-size: 16px;
  padding: 8px;
  margin-bottom: 32px;
  transition: all 0.2s;

  &::placeholder {
    color: var(--color-text-placeholder);
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 4px;
`;