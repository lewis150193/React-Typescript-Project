import * as React from "react";

interface MyProps {
    name: string;
}

interface extendedProps extends  MyProps{
    age: number
}
export const Hello = (props: extendedProps) => <h1>Hello {props.name}my age is {props.age}</h1>;