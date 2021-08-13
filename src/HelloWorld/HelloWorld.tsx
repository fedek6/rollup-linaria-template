import * as React from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const headerModifier = css`
  text-transform: uppercase;
`;

const Header = styled.h1`
  color: White;
`;

interface Props {
  children: React.ReactNode;
}

export const HelloWorld = ({ children }: Props) => {
  return <Header className={headerModifier}>{ children }</Header>;
};
