import React from 'react'
import styled from 'styled-components';

// theme is now fully typed
export const MainColor = styled.div`
  background: grey;
`;

type AppProps = { message: string }; /* could also use interface */
const TopBar = ({ message }: AppProps) => (
  <MainColor>{message}</MainColor>
)

export default TopBar
