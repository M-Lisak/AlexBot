import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const {tg, onClose} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])//удалить tg из зависимостей

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path={'form'} element={<div></div>}></Route>
      </Routes>

      <button className='footer' onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
