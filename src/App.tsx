import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/Card';
import Card from './component/Card';
import { dummy } from './data/dummy';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form } from 'react-bootstrap';

function App() {
  const [data, setData] = useState(dummy);

  useEffect(()=>{ // 확인용
    console.log(data);
  },[data]);

  const onCheck = (name:string) =>{
    setData(data.map((el)=>el.name === name ?{...el, check:!el.check}:el));
  }
  
  const onDelete = (name:string) =>{
    setData(data.filter((el)=>el.name!==name));
    
  };

  return (
    <div className="App">
      <h1>ToDoList</h1>
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
          {data.map((item, idx:number) => (
            <tr key={idx}>
              <td>{idx+1}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
              <td><Form.Check type='checkbox' checked={item.check} onChange={()=>onCheck(item.name)}></Form.Check></td>
              <td><Button variant='danger' onClick={()=>onDelete(item.name)}>Del</Button></td>
            </tr>
          ))}  
        </tbody>
      </Table>
    </div>
  );
}

export default App;