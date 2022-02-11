import React, {createContext, useReducer} from 'react';

export const GlobalState = createContext();

const GlobalStateProvider = props => {
  const initialState = {
    todos: [
      {
        id: 1,
        title: 'Buy Groceries',
      },
    ],
  };

  const reducer = (currentState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log('ADD_TODO');
        // currentState.todos.push(action.payload);
        break;
      case 'REMOVE_TODO':
        break;

      default:
        return state;
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;
