import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/Card';
import Card from './component/Card';
import { dummy } from './data/dummy';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap';

function App() {
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
          </tr>
        </thead>
        <tbody>
          {dummy.map((item, idx:number) => (
            // <div key={idx} >
            //   <Card name={item.name} title={item.title} check={item.check} />
            // </div>
            <tr>
              <td>{idx+1}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
              <td><Form.Check type='checkbox' checked={item.check}></Form.Check></td>
            </tr>
          ))}  
        </tbody>
        
      </Table>
    </div>
  );
}

export default App;