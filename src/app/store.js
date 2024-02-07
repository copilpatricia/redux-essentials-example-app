import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

// every time we create a new slice in Redux we need to add its reducer to the Redux store
// we need to pass the postsReducer as a reducer field names posts
//This tells Redux that we want our top-level state object to have a field named posts inside, and all the data for state.posts will be updated by the postsReducer function when actions are dispatched.
export default configureStore({
  reducer: {

    posts: postsReducer,
  }

})
