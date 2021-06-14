import React from 'react';
import './App.css';

import LoadingScreen from './components/LoadingScreen';
import UpperMenu from './components/UpperMenu';
import MainPage from './components/MainPage';

function App() {
  document.addEventListener('DOMContentLoaded', () => {
    const loadingScr = document.querySelector('.LoadingScreen');
    if (loadingScr) {
      loadingScr.classList.add('Hidden');
    }
  });

  return (
    <div className="App">
      <LoadingScreen></LoadingScreen>
      <UpperMenu></UpperMenu>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
