import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        counter: 10,
    },
    reducers: {
        increment(state, { type, payload}) {
            state.counter += payload;
        }
    },
    extraReducers: (builder) => {
        // hydrate 操作, 保证服务器和客户端的一致性
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                ...state, // initialState
                ...action.payload.home // rootState
            }
        })
    }
})

export const { increment } = homeSlice.actions;
export default homeSlice.reducer;