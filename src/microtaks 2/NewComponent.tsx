import React from "react";

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {topCars.map((objectFromTopCarsArray, index) => {
                    debugger
                    return (
                            <tr key={index + 1}>
                                <td>{objectFromTopCarsArray.manufacturer}</td>
                                <td>{objectFromTopCarsArray.model}</td>
                            </tr>
                    )
                })}
            </table>
        </>
    )
}