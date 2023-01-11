import React, {useState} from 'react';
import './App.css';
import {Header} from "./microtask 1/Header";
import {Body} from "./microtask 1/Body";
import {Footer} from "./microtask 1/Footer";
import {NewComponent} from "./microtask 2/NewComponent";
import {ButtonComponent} from "./microtask 3/ButtonComponent";
import UniversalButtonComponent from "./microtask 3/UniversalButtonComponent";
import {Hook} from "./microtask 4/Hook";

function App() {
    {/*Microtask 2*/}
    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]);

    const Button1Func = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }

    const Button2Func = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Func = () => {
        console.log('I`m stupid button')
    }

    return (
        <>
            {/*Microtask 1*/}
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
            {/*Microtask 2*/}
            <NewComponent students={students}/>
            {/*Microtask 3*/}
            {/*<ButtonComponent/>*/}
            <UniversalButtonComponent name={'MyYouTubeChanel-1'} callBack={() => Button1Func('I`m Vasya!', 21, 'Live in Minsk')}/>
            <UniversalButtonComponent name={'MyYouTubeChanel-2'} callBack={() => Button2Func('I`m Ivan!')}/>
            <UniversalButtonComponent name={'Stupid Button'} callBack={Button3Func}/>
            {/*Microtask 4*/}
            <Hook/>
        </>
    );
}

export default App;
