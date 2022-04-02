import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {ModalWindow} from './components/ModalWindow';

export type filterValueType="All"|"Active"|"Completed";

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const removeTask = (newId: string) => {
        let filtered = tasks.filter((el) => el.id !== newId)
        setTasks(filtered)
    }

    let [valueButton, setValueButton] = useState('All')

    const tasksFilter = (filterValue: filterValueType) => {
        setValueButton(filterValue)
    }
    const addTask=(newTitle:string)=>{
        let newTask={id: v1(), title: newTitle, isDone: false}
        setTasks([newTask,...tasks])
    }

    let prokladka = tasks
    if (valueButton === "Active") {
        prokladka = tasks.filter(el => el.isDone)
    }
    if (valueButton === "Completed") {
        prokladka = tasks.filter(el => !el.isDone)
    }
    return (
        <div className="App">
            {/*<ModalWindow name={'Window1'}>*/}
            {/*    {*/}
            {/*        <>*/}
            {/*            <input type='text'/>*/}
            {/*            <input type='text'/>*/}
            {/*            <input type='checkbox'/>*/}
            {/*        </>*/}
            {/*    }*/}
            {/*</ModalWindow>*/}
            {/*<ModalWindow name={'Window22'}>*/}
            {/*    {*/}
            {/*        <>*/}
            {/*            <button>xxxx</button>*/}
            {/*            <button>xxxx</button>*/}
            {/*            <input type='checkbox'/>*/}
            {/*        </>*/}
            {/*    }*/}
            {/*</ModalWindow>*/}
            <Todolist
                title={"What to learn"}
                tasks={prokladka}
                removeTask={removeTask}
                tasksFilter={tasksFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
