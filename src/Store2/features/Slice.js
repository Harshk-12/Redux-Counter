import { createSlice } from "@reduxjs/toolkit";
let counterslice=createSlice({
    name:'counter',
    initialState:{value:0},
reducers:{

// inc:(state,action)=>{state.value +=1},
// dec:(state,action)=>{state.value -=1}

 inc(state,action){state.value +=1},
dec(state,action){state.value -=1}


}
})
export default counterslice.reducer;
export const{inc,dec}=counterslice.actions;