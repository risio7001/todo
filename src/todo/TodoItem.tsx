import React from "react";
import { Button, Form } from "react-bootstrap";
import {ReactComponent as Pencil} from '../img/pencil.svg';

interface CardProps {
    todo:Todo;
    checkHandle:CheckHandle;
    deleteHandle:DeleteHandle;
    modalToggle:ModalToggle;
    idx:number;
}

export const TodoItem:React.FC<CardProps> = ({todo,checkHandle,deleteHandle,idx, modalToggle}) => {
    
    return <>
        <tr>
            <td>{idx+1}</td>
            <td>{todo.name}</td>
            <td>{todo.title}</td>
            <td><Form.Check type='checkbox' checked={todo.check} onChange={()=>checkHandle(todo)}></Form.Check></td>
            <td><Button variant="warning" onClick={()=>modalToggle(todo)}>Modify</Button></td>
            <td><Button variant="danger" onClick={()=>deleteHandle(todo)}>Delete</Button></td>
        </tr>
    </>
}
