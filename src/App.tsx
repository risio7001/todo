import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, ModalTitle } from 'react-bootstrap';
import Counter from './counter/Counter';
import { Header } from './component/Header';
import { Todo } from './todo/Todo';

function App() {
  const [selectToggle, setSelectToggle] = useState("TodoList");

  const toggleChange = (toggle: Toggle) => {
    setSelectToggle(toggle.toggle);
  }


  const toggleRouter = (selectToggle: Toggle) => {
    switch (selectToggle.toggle) {
      case 'TodoList':
        return <>
          <Todo />
        </>

      case 'Counter':
        return <>
          <Counter />
        </>
    }
  }

  return (
    <div className="App">
      <Header toggle={{ toggle: selectToggle }} change={toggleChange} />
      <h1>{selectToggle}</h1>

      {toggleRouter({ toggle: selectToggle })}

    </div>
  );
}

export default App;