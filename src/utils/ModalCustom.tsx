import React, { Children, FC, ReactNode, useState } from 'react'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'
interface ModalProps {
    // showModal:boolean;
    // data:[];
    // todo:Todo;
    onInsert: AddTodo;
    children: [];
}
const ModalCustom: React.FC<ModalProps> = ({ onInsert }) => {

    const [name, setName] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const [newTodo, setNewTodo] = useState({});

    const submit = () => {
        onInsert({name, title, check:false});
    }
    

    return <>
        <Modal.Body>
            <Form>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control onChange={(e) => setName(e.target.value)} placeholder='제목'></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control onChange={(e) => setTitle(e.target.value)} placeholder='내용'></Form.Control>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Button variant='primary' onClick={() => submit()} >Add</Button>
            </Row>
        </Modal.Body>
    </>
}
export default ModalCustom;