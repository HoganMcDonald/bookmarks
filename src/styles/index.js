import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const focus = css`
  transition: ${props => `${props.theme.transition}`};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${props => props.theme.colors.seafoam};
  }
`;
