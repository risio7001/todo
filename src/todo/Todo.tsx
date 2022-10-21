import React, { useState } from "react";
import { Button, Modal, ModalTitle, Table } from "react-bootstrap";
import { dummy } from "../data/dummy";
import ModalCustom from "../utils/ModalCustom";
import { TodoList } from "./TodoList";


export const Todo: React.FC = () => {

    const [data, setData] = useState(dummy);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [typeT, setTypeT] = useState('Add');
    const [modify_select, setModify_select] = useState<Todo>(data[0]);
    
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

//   const modifyTodo = (modify:Todo) => {
    // const tt = data.map((el)=>{

    // })
//   }

  const addTodo = (add:Todo) => {
    setData([...data, add]);
    setShowModal(false);
  }

  const modalToggle = (select:Todo)=>{
    setTypeT("Modify");
    setModify_select(select);
    setShowModal(!showModal);
  }

  const onModify = (select:Todo)=>{
      const tt = data.map((el)=>{
          if(el.no===select.no){
            return {
                ...el,
                name:select.name,
                title:select.title,
            }
          }
          return el;
      });
      setData(tt);
  }

    return <>
        <Table striped={true} bordered={true} hover={true}>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>Check</th>
                    <th>Modify</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <>
                    <TodoList todos={data} checkHandle={checkHandle} 
                    deleteHandle={deleteTodo} modalToggle={modalToggle}  />
                </>
            </tbody>
        </Table>
        <Button variant='primary' onClick={() => {
            setTypeT("Add");
            setShowModal(!showModal)
        }}>add+</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <ModalTitle style={{ textAlign: 'center' }}>{typeT}</ModalTitle>
            <ModalCustom onInsert={addTodo} children={[]} type={typeT} no={data[data.length - 1].no + 1} todo={modify_select} onModify={onModify}
            />
        </Modal>

    </>
}