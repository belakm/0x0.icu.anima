import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.theme.zLevels.background};
  background: ${props => props.theme.colors.background};
`;

export default Background;