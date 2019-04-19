import React, {ReactNode} from 'react';
import {Footer} from "../Footer";
import {Header} from "../Header";

type Props = {
    children: ReactNode
}
export const Wrapper = ({children}: Props) => (
    <>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
)