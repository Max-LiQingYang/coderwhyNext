import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        counter: 1000,
        homeData: {},
    },
    reducers: {
        increment(state, { payload }) {
            console.log('payload', payload);
            state.counter += payload;
        }
    },
    // 添加 reducer, 监听异步 action, 监听 action 异步状态
    extraReducers: (buidler) => {
        buidler.addCase(fetchHomeData.fulfilled, (state, { payload, type }) => {
            // type 可能为 fetchHomeData/fuilled, fetchHomeData/pendding, fetchHomeData/rejected

            state.homeInfo = payload;
        });
    }
});

// 异步 action 
export const fetchHomeData = createAsyncThunk(
    'fetchHomeData',
    async (payload, { diaptch, getState }) => {
        const res = await axios.get('');
        return res.data;
    }
);

// 同步 action
export const { increment } = homeSlice.actions;
// home 生成的 reducer
export default homeSlice.reducer;

