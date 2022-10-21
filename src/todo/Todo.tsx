import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { dummy } from "../data/dummy";
import ModalCustom from "../utils/ModalCustom";
import { TodoList } from "./TodoList";


export const Todo: React.FC = () => {

    const [data, setData] = useState(dummy);
    const [showModal, setShowModal] = useState<boolean>(false);
    
  const checkHandle = (select: Todo) => {
    const tt = data.map((el) => {
      if (el === select) {
        return {
          ...el,
          check: !el.check
        }
      }
      return el;
    });
    setData(tt);
  }

  const deleteTodo = (select:Todo) => {
    setData(data.filter((el)=>el!=select));
  }

  const addTodo = (add:Todo) => {
    setData([...data, add]);
    setShowModal(false);
  }
    return <>
        <Table striped={true} bordered={true} hover={true}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>Check</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <>
                    <TodoList todos={data} checkHandle={checkHandle} deleteHandle={deleteTodo} />
                </>
            </tbody>
        </Table>
        <Button variant='primary' onClick={() => setShowModal(!showModal)}>add+</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <ModalCustom onInsert={addTodo} children={[]} />
        </Modal>

    </>
}