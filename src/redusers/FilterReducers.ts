import {FilterValuesType} from '../App';

export const FilterReducers=(state:FilterValuesType,action:FilterReducerType)=>{
    switch (action.type){
        case "CHANGE-FILTER":{
            return action.payload.value
        }
        default:
            return state
    }
}
type FilterReducerType=changeFilterACType
type changeFilterACType=ReturnType<typeof changeFilterAC>
export const changeFilterAC=(value: FilterValuesType)=>{
    return {
        type: "CHANGE-FILTER",
        payload:{
            value:value
        }
    } as const
}