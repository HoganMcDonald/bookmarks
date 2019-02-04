import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const focus = css`
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${props => props.theme.colors.seafoam};
  }
`;
