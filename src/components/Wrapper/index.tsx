import React, { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
  styling: any;
};
export const Wrapper = ({ children, styling }: Props) => (
  <div style={styling}>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);
