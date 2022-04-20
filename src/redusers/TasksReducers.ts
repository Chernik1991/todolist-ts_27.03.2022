import {TaskType} from '../Todolist';

export const tasksReducers=(state:Array<TaskType>,action:any)=>{
    switch (action.type){
        case "FIRST":{
            return state
        }
        default:
            return state
    }
}

export const removeTaskAC=(id: string)=>{
    return{
        type:"REMOVE-TASK",
        payload:{
            id: id
        }
    }
}