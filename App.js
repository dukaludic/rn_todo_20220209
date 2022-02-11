import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';

import FinishedTodos from './components/FinishedTodos';
import TodoHome from './components/TodoHome';
import GlobalStateProvider from './context/GlobalState';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <GlobalStateProvider>
      <ThemeContextProvider>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<TodoHome />} />
            <Route path="/finished" element={<FinishedTodos />} />
          </Routes>
        </NativeRouter>
      </ThemeContextProvider>
    </GlobalStateProvider>
  );
}

export default App;
