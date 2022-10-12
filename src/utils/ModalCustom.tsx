import React, { Children, FC, ReactNode, useState } from 'react'
import { Modal,Form, Row, Col, Button } from 'react-bootstrap'
interface modalProps{
    // showModal:boolean;
    openModal:()=>void;
    // onInsert:()=>void;
    children:boolean;
}
const ModalCustom = ({ openModal,children}:modalProps) =>{

    const [title, setTitle]=useState<string>();
    const [content, setContent]=useState<string>();

    const onChange = (e:string) =>{
        setTitle(e);
    }

    return<>
        <Modal
        show={children}
            onHide={() => openModal()}
            size='lg'>
            <Modal.Body>
                <Form>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control onChange={(e)=>onChange(e.target.value)} placeholder='제목'></Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder='내용'></Form.Control>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Button variant='primary' >Add</Button>
                </Row>
            </Modal.Body>
        </Modal>
    </>
}
export default ModalCustom;