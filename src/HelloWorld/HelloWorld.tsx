import * as React from "react";
import { css } from "@linaria/core";

const header = css`
  text-transform: uppercase;
`;

interface Props {
  children: React.ReactNode;
}

export const HelloWorld = ({ children }: Props) => {
  return <h1 className={header}>{ children }</h1>;
};
