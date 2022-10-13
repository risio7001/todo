import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { dummy } from './data/dummy';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Card, Form, Modal } from 'react-bootstrap';
import Counter from './component/Counter';
import { TodoItem } from './component/TodoItem';
import { TodoList } from './component/TodoList';
import { Header } from './component/Header';
// import Modal from './utils/ModalCustom';
// import ModalCustom from './utils/ModalCustom';


function App() {
  const [data, setData] = useState(dummy);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectToggle, setSelectToggle] = useState("TodoList");
  // const openModal = useCallback(() => {
  //   setShowModal(!showModal);
  // }, [showModal]);
  const toggleChange = (toggle: Toggle) => {
    setSelectToggle(toggle.toggle);
  }

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

  return (
    <div className="App">
      <Header toggle={{ toggle: selectToggle }} change={toggleChange} />
      <h1>{selectToggle}</h1>

      {selectToggle === 'TodoList' ?
        <div>
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
                <TodoList todos={data} checkHandle={checkHandle} />
              </>
            </tbody>
          </Table>
          <Button variant='primary' >add+</Button>
        </div>
        :
        <Counter>
          {(count, setCount) => (
            <div>
              {count}
              <Button onClick={() => setCount(count + 1)}>+</Button>
            </div>
          )}

        </Counter>
      }
    </div>
  );
}

export default App;