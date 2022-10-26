import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import PageType from './pageInterface'
import Blank from '../components/blank'
import Player from '../components/player'


// Define a type for the slice state
interface CounterState {
  page1: PageType,
  page2: PageType,
  page3: PageType,
  page4: PageType,
  page5: PageType,
  page6: PageType,
  page7: PageType,
  page8: PageType,
  page9: PageType,
  ATK: number,
  HP: number,
  GOLD: number
}

// Define the initial state using that type
const initialState: CounterState = {
  page1: Blank,
  page2: Blank,
  page3: Blank,
  page4: Blank,
  page5: Player,
  page6: Blank,
  page7: Blank,
  page8: Blank,
  page9: Blank,
  ATK: 1,
  HP: 10,
  GOLD: 0
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
    addHP: (state, action: PayloadAction<number>) => {
        state.HP += action.payload
    },
    subATK: (state, action: PayloadAction<number>) => {
      state.ATK -= action.payload
    },
    subHP: (state, action: PayloadAction<number>) => {
        state.HP -= action.payload
    },
    setPage1: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    addGOLD: (state, action: PayloadAction<number>) => {
      state.GOLD += action.payload
    },
    subGOLD: (state, action: PayloadAction<number>) => {
      state.GOLD -= action.payload
    },
    setPage2: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage3: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage4: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage5: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage6: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage7: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage8: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
    setPage9: (state, action: PayloadAction<PageType>) => {
      state.page1 = action.payload;
    },
  },
})

export const { addATK, addHP, addGOLD, subGOLD, subATK, subHP, setPage1, setPage2, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9 } = currencySlice.actions

export default currencySlice.reducer