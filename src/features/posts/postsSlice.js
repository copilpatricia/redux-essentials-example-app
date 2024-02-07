import { createSlice } from '@reduxjs/toolkit'

// we need to have some initial data included so that the Redux store has those values loaded when the app starts
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

// create a reducer function that will handle the initial data
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})

export default postsSlice.reducer