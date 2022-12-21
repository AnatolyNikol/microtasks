import React from 'react';
import './App.css';
import {Header} from "./microtask 1/Header";
import {Body} from "./microtask 1/Body";
import {Footer} from "./microtask 1/Footer";

function App() {
    return (
        <>
            {/*Microtask 1*/}
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
        </>
    );
}

export default App;
