import React from 'react';

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask:(id:number)=>void
    tasksFilter:(filterValue:string)=>void
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <button onClick={()=>{props.removeTask(t.id)}}>x</button>
                            <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.tasksFilter('all')}>All</button>
                <button onClick={()=>props.tasksFilter('active')}>Active</button>
                <button onClick={()=>props.tasksFilter('complited')}>Completed</button>
            </div>
        </div>
    )
}