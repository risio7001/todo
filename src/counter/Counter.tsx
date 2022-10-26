import React, { Children, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../reducers';

interface Props {
}

const Counter: React.FC<Props> = () => {

    const dispatch = useDispatch();
    let cnt = useSelector((state:RootReducer)=>state.countReducer.count);

    return <>
             
    <div style={{display:'flex', justifyContent:'center'}}>

        <div style={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column',
            padding: 20,
            border: '1px solid green',
            borderRadius: 10,
        }}>
            {/* <Row> */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                <div style={{
                    width: 100, height: 100, borderRadius: 100, backgroundColor: 'grey', display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column', color: 'white', fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    {cnt}
                </div>
            </div>
            {/* </Row> */}
            <Button style={{marginTop:10}} onClick={() => dispatch({type:'INCREMENT'})}>+</Button>
            <Button style={{marginTop:10}} onClick={() => dispatch({type:'DECREMENT'})}>-</Button>

        </div>
    </div>
    </>
}
export default Counter;