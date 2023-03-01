import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./features/Slice";

export default configureStore({
    reducer:{
    counter:counterslice
    }
})