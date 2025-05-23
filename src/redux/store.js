import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './TempReducers';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  filters: {
    name: '',
  },
};

// {
//   contacts: {
// 		items: []
// 	},
//   filters: {
// 		name: ""
// 	}
// }

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'contacts/addContact': {
      // Потрібно повернути копію об'єкту поточного стану
      // в якому є всі дані існуючого стану
      return {
        ...state,
        contacts: {
          // та новий масив задач в якому є всі існуючі завдання
          // та об'єкт нового завдання
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
