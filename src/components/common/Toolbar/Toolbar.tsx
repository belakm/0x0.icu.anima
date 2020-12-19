import * as React from 'react';
import styled from 'styled-components';

export interface StyledToolbarProps {
  noPadding?: boolean
}

const StyledToolbar = styled.div<StyledToolbarProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => (props.noPadding ? '0' : '4px')};
`;

export interface ToolbarProps {
  children: React.ReactNode
  noPadding?: boolean
};

const Toolbar = ({ children, noPadding } : ToolbarProps) => {
  return (<StyledToolbar noPadding={noPadding}>
    {children}
  </StyledToolbar>);
};

export default Toolbar;