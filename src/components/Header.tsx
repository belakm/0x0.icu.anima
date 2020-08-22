import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const HeaderFC: React.FunctionComponent<Props> = ({ children, className, ...props }) => (
  <div className={className}>
    {children}
  </div>
);

const Header = styled(HeaderFC)`
  text-align: center;
  color: ${ props => props.theme.colors.thistle };
`;

export default Header;