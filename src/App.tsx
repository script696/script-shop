import React from 'react';
import MainPage from "./pages/Main/ui/MainPage";

// @ts-ignore
const tg = window.Telegram.WebApp

console.log(tg)
const App = () => {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
