import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaBeer } from 'react-icons/fa';
import { BiBluetooth } from "react-icons/bi";

const todos =[
    {   
        id: uuidv4(),
        title: "todos1",
        description: "todos description1"
    },
    {
        id: uuidv4(),
        title: "todos2",
        description: "todos description2"
    },
    {
        id: uuidv4(),
        title: "todos3",
        description: "todos description3"
    },
];
const List = () => {
    return (
        <div>
            {todos.map((todo)=> {
                const {title, description,id}= todo
                return <div key = {id}>
                    <h1>{title}<FaBeer /></h1>
                    <p>{description}<BiBluetooth /></p>
                </div>
            })}
        </div>
    );
};

export default List;