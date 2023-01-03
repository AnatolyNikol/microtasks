import React, {useState} from 'react';
import './App.css';
import {Header} from "./microtask 1/Header";
import {Body} from "./microtask 1/Body";
import {Footer} from "./microtask 1/Footer";
import {NewComponent} from "./microtaks 2/NewComponent";

function App() {

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

    return (
        <>
            {/*Microtask 1*/}
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
            <NewComponent students={students}/>
        </>
    );
}

export default App;
