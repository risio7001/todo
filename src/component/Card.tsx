import React from "react";
import { Form } from "react-bootstrap";

interface CardProps {
    no:number;
    name: string;
    title: string;
    check:boolean;
    
}

const Card = ({ no, name, title, check }: CardProps) => {


    
    const onChangeHandler = () => {
        
    }

    return <>
        <tr>
            <td>{no+1}</td>
            <td>{name}</td>
            <td>{title}</td>
            <td><Form.Check type='checkbox' checked={check} onChange={()=>check=!check}></Form.Check></td>
        </tr>
    </>
}

export default Card;