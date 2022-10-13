import React from "react";
import { Form } from "react-bootstrap";

interface CardProps {
    todo:Todo;
    checkHandle:CheckHandle;
    idx:number;
}

export const TodoItem:React.FC<CardProps> = ({todo,checkHandle,idx}) => {
    
    return <>
        <tr>
            <td>{idx+1}</td>
            <td>{todo.name}</td>
            <td>{todo.title}</td>
            <td><Form.Check type='checkbox' checked={todo.check} onChange={()=>checkHandle(todo)}></Form.Check></td>
        </tr>
    </>
}
