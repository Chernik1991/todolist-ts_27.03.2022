import React, {useState} from 'react';
import {filterValueType} from './App';
import {Button} from './components/Button';
import {Input} from './components/Input';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    tasksFilter: (filterValue: filterValueType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    let [newTitle, setNewTitle] = useState('')
    const onClickHandler = () => {
        props.addTask(newTitle)
        setNewTitle(' ')
    }
    // const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
    //         onClickHandler()
    //     }
    // }
    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNewTitle(event.currentTarget.value)
    // }

    const filterHandler = (filterValue: filterValueType) => {
        props.tasksFilter(filterValue)
    }
    const removeTaskHandler = (el: string) => {
        props.removeTask(el)
    }
    return <div>
        <h3>{props.title}</h3>
        <Input newTitle={newTitle} setNewTitle={setNewTitle} callBack={onClickHandler}/>
        {/*<FullInput callBack={props.addTask}/>*/}
        {/*<div>*/}
        {/*    <input value={newTitle}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           onChange={onChangeHandler}/>*/}
        {/*    /!*<button onClick={onClickHandler}>+</button>*!/*/}
        <Button name={'+'} callBack={onClickHandler}/>
        <ul>
            {props.tasks.map((el) => {
                return (
                    <li key={el.id}>
                        {/*<button onClick={() => {removeTaskHandler(el.id)}}>X</button>*/}
                        <Button name={"X"} callBack={() => {removeTaskHandler(el.id)}}/>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button callBack={() => {filterHandler('All')}} name={'All'}/>
            <Button callBack={() => {filterHandler('Active')}} name={'Active'}/>
            <Button callBack={() => {filterHandler('Completed')}} name={'Completed'}/>

            <button onClick={() => {filterHandler('All')}}>All</button>
            <button onClick={() => {filterHandler('Active')}}>Active</button>
            <button onClick={() => {filterHandler('Completed')}}>Completed</button>
        </div>
    </div>
}
