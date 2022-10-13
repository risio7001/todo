import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps{
    todos:Array<Todo>;
    checkHandle:CheckHandle
}

export const TodoList:React.FC<TodoListProps> = ({todos, checkHandle}) =>{
    
    return<>
        {todos.map((el,idx)=>{
            return <TodoItem key={idx} todo={el} checkHandle={checkHandle} idx={idx}/>
        })}
    </>
}