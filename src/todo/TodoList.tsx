import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps{
    todos:Array<Todo>;
    checkHandle:CheckHandle
    deleteHandle:DeleteHandle
    modalToggle:ModalToggle;
}

export const TodoList:React.FC<TodoListProps> = ({todos, checkHandle,deleteHandle, modalToggle, }) =>{
    
    return<>
        {todos.map((el,idx)=>{
            return <TodoItem key={idx} todo={el} 
            checkHandle={checkHandle} deleteHandle={deleteHandle} idx={idx} modalToggle={modalToggle} />
        })}
    </>
}