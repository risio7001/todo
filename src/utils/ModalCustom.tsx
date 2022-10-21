import React, { Children, FC, ReactNode, useState } from 'react'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'
interface ModalProps {
    onInsert: AddTodo;
    onModify: onModify;
    todo: Todo;
    no: number;
    type: string;
    children: [];
}
const ModalCustom: React.FC<ModalProps> = ({ onInsert, no, todo, type, onModify }) => {

    const [name, setName] = useState<string>(type === 'Modify' ? todo.name : "");
    const [title, setTitle] = useState<string>(type === 'Modify' ? todo.title : "");

    const submit = () => {
        if (type === "Modify") {
            onModify({ ...todo, name: name, title: title })
        }
        else {
            onInsert({ no: no, name, title, check: false });
        }
    }

    return <>
        <Modal.Body>
            <Form>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control onChange={(e) => setName(e.target.value)} defaultValue={type === "Modify" ? todo.name : ""} placeholder='제목'>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control onChange={(e) => setTitle(e.target.value)} defaultValue={type === "Modify" ? todo.title : ""} placeholder='내용'>
                        </Form.Control>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Button variant='primary' onClick={() => submit()} >
                    {type === 'Modify' ? 'Modify' : "Add"}
                </Button>
            </Row>
        </Modal.Body>
    </>
}
export default ModalCustom;