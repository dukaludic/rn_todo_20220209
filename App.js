import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';

import FinishedTodos from './components/FinishedTodos';
import TodoHome from './components/TodoHome';

function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/finished" element={<FinishedTodos />} />
      </Routes>
    </NativeRouter>
  );
}

export default App;
