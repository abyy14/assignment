import { configureStore, createSlice } from "@reduxjs/toolkit";
import {items} from '../components/data.js';

const initialState = {items};

const filterSlicer = createSlice({
    name : 'filter',
    initialState ,
    reducers :{
        filterLists(state,action) {
            state.items = initialState.items;
            if(action.payload.filter['policy']){
                state.items = state.items.filter((val,index,self)=>{
                   console.log(val.price[0].type);
                    return val.price[0].type == 'Outside Policy';
                });
            }
            state.items = state.items.filter((val,index,self)=>{
                if(action.payload.filter['stop'] == 1)
                    return val.stops[0].number == 0;
                 if(action.payload.filter['stop'] == 2)
                    return val.stops[0].number == 1;
                 if(action.payload.filter['stop'] == 3)
                    return val.stops[0].number > 1;
             });
        },

        clearAll(state) {
            state.items = initialState.items;
        }
    }
});

const store  = configureStore({reducer: filterSlicer.reducer}); 
export const filterAction = filterSlicer.actions;

export default store;
