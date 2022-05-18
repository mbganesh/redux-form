import {createSlice} from '@reduxjs/toolkit'

export const FormSelectorSlice = createSlice({
    name:'formselector',
    initialState:{value:{isSignUp:false}},
    reducers:{
        changeForm:(state , action) => {
            state.value = action.payload
        }
    }
}) 

export const {changeForm } = FormSelectorSlice.actions
export default FormSelectorSlice.reducer