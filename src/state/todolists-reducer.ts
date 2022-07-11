import {TodolistType} from '../App';

export const todolistsReducer=(state:Array<TodolistType>,action:todolistsReducerType)=>{
    switch (action.type){
        case 'REMOVE-TODOLIST':{

            return state.filter(el=>el.id!==action.payLoad.todolistId)
        }
        default:return state
    }

}
type todolistsReducerType=removeTodolistACType;

type removeTodolistACType=ReturnType<typeof removeTodolistAC>
export const removeTodolistAC=(todolistId:string)=>{
    return{
        type: 'REMOVE-TODOLIST',
        payLoad:{
            todolistId
        }
    } as const
}