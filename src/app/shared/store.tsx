import { configureStore } from '@reduxjs/toolkit'
import currencySlice from './config/currentSlice'
export const store = configureStore({
  reducer: {
    currency: currencySlice, 

  },
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch