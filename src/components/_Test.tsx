import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const NonStyledIcon: React.FunctionComponent<Props> = ({ className, ...props }) => (
  <div className={`material-icons ${className}`} {...props}>
    {props.children}
  </div>
);

const Icon = styled(NonStyledIcon)`
  font-size: ${props => props.theme.fontSizes.large};
`;

export default Icon;