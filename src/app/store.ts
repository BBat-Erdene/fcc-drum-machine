import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import powerReducer from '../features/power/powerSlice'
import bankReducer from '../features/bank/bankSlice'
import descriptionSlice from '../features/description/descriptionSlice'

export const store = configureStore({
  reducer: {
    power: powerReducer,
    bank: bankReducer,
    description: descriptionSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
