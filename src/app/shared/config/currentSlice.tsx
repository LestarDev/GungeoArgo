import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import PageType from './pageInterface'
import Blank from '../components/blank'
import Player from '../components/player'
import WoodenSword from '../components/items/woodenSword'
import HealPotion2 from '../components/items/healPotion2'


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
  page6: HealPotion2,
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
      state.page2 = action.payload;
    },
    setPage3: (state, action: PayloadAction<PageType>) => {
      state.page3 = action.payload;
    },
    setPage4: (state, action: PayloadAction<PageType>) => {
      state.page4 = action.payload;
    },
    setPage5: (state, action: PayloadAction<PageType>) => {
      state.page5 = action.payload;
    },
    setPage6: (state, action: PayloadAction<PageType>) => {
      state.page6 = action.payload;
    },
    setPage7: (state, action: PayloadAction<PageType>) => {
      state.page7 = action.payload;
    },
    setPage8: (state, action: PayloadAction<PageType>) => {
      state.page8 = action.payload;
    },
    setPage9: (state, action: PayloadAction<PageType>) => {
      state.page9 = action.payload;
    },


    setPageNr1: (state, action: PayloadAction<number>) => {
      state.page1.pageNr = action.payload;
    },
    setPageNr2: (state, action: PayloadAction<number>) => {
      state.page2.pageNr = action.payload;
    },
    setPageNr3: (state, action: PayloadAction<number>) => {
      state.page3.pageNr = action.payload;
    },
    setPageNr4: (state, action: PayloadAction<number>) => {
      state.page4.pageNr = action.payload;
    },
    setPageNr5: (state, action: PayloadAction<number>) => {
      state.page5.pageNr = action.payload;
    },
    setPageNr6: (state, action: PayloadAction<number>) => {
      state.page6.pageNr = action.payload;
    },
    setPageNr7: (state, action: PayloadAction<number>) => {
      state.page7.pageNr = action.payload;
    },
    setPageNr8: (state, action: PayloadAction<number>) => {
      state.page8.pageNr = action.payload;
    },
    setPageNr9: (state, action: PayloadAction<number>) => {
      state.page9.pageNr = action.payload;
    },
  },
})

export const { setPageNr1, setPageNr2, setPageNr3, setPageNr4, setPageNr5, setPageNr6, setPageNr7, setPageNr8, setPageNr9, addATK, addHP, addGOLD, subGOLD, subATK, subHP, setPage1, setPage2, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9 } = currencySlice.actions

export default currencySlice.reducer