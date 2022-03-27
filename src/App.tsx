import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

const App=()=>{
    return (
        <div className="App">
            <Todolist title={'What to learn111111111'} />
            <Todolist title={'What to learn111111111'}/>
        </div>
    );
}

export default App;
