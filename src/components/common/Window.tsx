import React from 'react';
import styled from 'styled-components'
import { Frame, Icon } from '@react95/core';
import icons from '@react95/icons';
import Theme from '../../theme/themes/default/Default';

interface WindowWrapperProps {
  width: number | 'auto'
  height: number | 'auto'
}

const WindowContent = styled.section`
  padding: ${props => props.theme.window.padding };
`

const TitleBar = styled.h1`
  height: 18px;
  padding: 2px 2px;
  display: flex;
  background-color: ${ props => props.theme.window.color.headerBackground };
  color: ${ props => props.theme.window.color.headerText };
  font-size: 1em;
  margin: 0;
`;

const Title = styled.div`
  flex-grow: 1;
  font-weight: 400;
`;

const iconStyle = {
  marginRight: '4px'
};

interface WindowProps {
  title: string,
  icon: keyof typeof icons,
  children: React.ReactNode
}

const Window = ({ children, title, icon, width = 360, height = 'auto' } : WindowProps & WindowWrapperProps) => {
  return (
      <Frame width={width} height={height} bg={Theme.window.color.background} boxShadow={Theme.shadows.out} padding='4px'>
        <TitleBar>
          {icon && <Icon name={icon} width={15} height={13} style={iconStyle} />}
          <Title>{title}</Title>
        </TitleBar>
        <WindowContent>
          {children}
        </WindowContent>
      </Frame>
  )
}

export default Window