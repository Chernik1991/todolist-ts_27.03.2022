import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

const App = () => {


    // const tasks1 = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false}
    // ]
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ])
    const removeTask = (newId: number) => {
        setTasks(tasks.filter(t => t.id !== newId))
    }
    const[valueButton,setValueButton]=useState('all')
    const tasksFilter = (filterValue:string) => {
        setValueButton(filterValue)
    }
    let prokladka=tasks
    if (valueButton==='active'){
        prokladka=tasks.filter(t=>t.isDone===false)
    }
    if (valueButton==='complited') {
        prokladka=tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn111111111'}
                      tasks={prokladka}
                      removeTask={removeTask}
                      tasksFilter={tasksFilter}
            />
        </div>
    );
}

export default App;
