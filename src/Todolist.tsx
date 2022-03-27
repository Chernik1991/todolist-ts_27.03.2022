import React from 'react';
type TasksPropsType={
    id:number,
    title: string,
    isDone:boolean
}

type TodolistPropsType={
    title:string
    task:Array<TasksPropsType>
}

export const Todolist=(props:TodolistPropsType)=>{
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map((t)=>{
                    debugger
                    return(
                        <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}