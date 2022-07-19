import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

export const todolistsReducer = (state: Array<TodolistType>, action: todolistsReducerType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payLoad.todolistId)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payLoad.title, filter: 'all'};

            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            // const todolist = todolists.find(tl => tl.id === action.payLoad.id);
            // if (todolist) {
            //     // если нашёлся - изменим ему заголовок
            //     todolist.title = action.payLoad.title;
            //     setTodolists([...todolists]);
            //
            // return setTodolists
            return state.map(el => el.id === action.payLoad.id ? {...el, title: action.payLoad.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(el=>el.id===action.payLoad.id ? {...el,filter:action.payLoad.filter}:el)
        }
        default:
            return state
    }

}
type todolistsReducerType = removeTodolistACType | addTodolistACType
    | changeTodolistTitleACType | changeTodolistFilterACType;

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payLoad: {
            todolistId
        }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payLoad: {
            title
        }
    } as const
}
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payLoad: {
            id,
            title
        }
    } as const
}
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payLoad: {
            id,
            filter
        }
    } as const
}