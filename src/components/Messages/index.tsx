import React from "react";
import { MessageBoxProps } from "./types";
import { Div } from "../../styled-components/div";

export const MessageBox = ({ date, title, value }: MessageBoxProps) => (
  <Div>
    <p>
      <strong>Title:</strong>
      {title}
    </p>
    <p>
      <strong>Message:</strong>
      {value}
    </p>
    <p>
      <strong>Id:</strong>
      {date}
    </p>
  </Div>
);
