import React from 'react';
import { Button } from 'react-bootstrap';

interface HeaderProps{
    toggle:Toggle;
    change:(toggleChange:Toggle)=>void;
}

export const Header:React.FC<HeaderProps> = ({toggle, change}) =>{
    
    return<>
        <div style={{display:'flex', justifyContent:'center'}}>
            <Button style={{margin:5}} variant='primary' onClick={()=>change({toggle:"TodoList"})}>TodoList</Button>
            <Button style={{margin:5}} variant='primary'  onClick={()=>change({toggle:"Counter"})}>Counter</Button>
        </div>
    </>
}