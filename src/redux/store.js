import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './TempReducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
