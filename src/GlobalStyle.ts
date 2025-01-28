'use client';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
`;

export const HorizontalStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;
