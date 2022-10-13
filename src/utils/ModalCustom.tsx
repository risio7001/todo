import React, { Children, FC, ReactNode, useState } from 'react'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'
interface ModalProps {
    // showModal:boolean;
    // data:[];
    // openModal: () => void;
    onInsert: (pp: string) => void;
    children: [];
}
const ModalCustom: React.FC<ModalProps> = ({ onInsert }) => {

    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();

    const onChange = (e: string) => {
        setTitle(e);
    }

    return <>
        <Modal.Body>
            <Form>
                <Row className='mb-3'>
                    <Col>
                        <Form.Control onChange={(e) => onChange(e.target.value)} placeholder='제목'></Form.Control>
                    </Col>
                    <Col>
                        <Form.Control placeholder='내용'></Form.Control>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Button variant='primary' onClick={() => onInsert("Asdf")} >Add</Button>
            </Row>
        </Modal.Body>
    </>
}
export default ModalCustom;