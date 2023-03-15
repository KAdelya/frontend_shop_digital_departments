import {createSlice} from '@reduxjs/toolkit'

export interface UserState {
    isAuth: boolean
}

const initialState: UserState = {
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = true
        }
    },
})

export const {setAuth} = userSlice.actions
export default userSlice.reducer