import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  page: number,
  ATK: number,
  statDEF: number,
  HP: number,
  MOC: number
}

// Define the initial state using that type
const initialState: CounterState = {
  page: 0,
  ATK: 1,
  statDEF: 3,
  HP: 10,
  MOC: 1 
}

export const currencySlice = createSlice({
  name: 'currency',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addATK: (state, action: PayloadAction<number>) => {
      state.ATK += action.payload
    },
    addStaticDEF: (state, action: PayloadAction<number>) => {
        state.statDEF += action.payload
    },
    addHP: (state, action: PayloadAction<number>) => {
        state.HP += action.payload
    },
    addMOC: (state, action: PayloadAction<number>) => {
        state.MOC += action.payload
    },
    subATK: (state, action: PayloadAction<number>) => {
        state.ATK -= action.payload
      },
      subStaticDEF: (state, action: PayloadAction<number>) => {
          state.statDEF -= action.payload
      },
      subHP: (state, action: PayloadAction<number>) => {
          state.HP -= action.payload
      },
      subMOC: (state, action: PayloadAction<number>) => {
          state.MOC -= action.payload
      },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
})

export const { setPage, addATK, addHP, addMOC, addStaticDEF, subATK, subHP, subMOC, subStaticDEF } = currencySlice.actions

export default currencySlice.reducer