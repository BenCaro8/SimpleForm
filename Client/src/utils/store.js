import { configureStore } from '@reduxjs/toolkit';
import errorsReducer from './reducers/errors';
import singleSelectReducer from './reducers/singleSelect';

export default configureStore({
  reducer: {
    ERRORS: errorsReducer,
    SINGLESELECT: singleSelectReducer,
  },
  middleware: [],
});
