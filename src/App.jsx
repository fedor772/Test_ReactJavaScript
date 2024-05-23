import './App.css'
import { useState } from 'react';

function Hello({ count, onClick }) {
  return (
    <button className="submit" onClick={onClick}>Отправить</button>
  );
}

function Divader() {
  return (
    <div className="divader"></div>
  )
}

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Вы не ввели имя");
  
  function handleClick() {
    setCount(count + 1);
  }

  function handleInputChange(event) {
    if (event.target.value) {
       setName(event.target.value);
    } else {
       setName("Вы не ввели имя");
    }
  }
  
  return (
    <main>
      <input placeholder="Введите своё имя" className="name" onChange={handleInputChange}></input>
      <Hello count={count} onClick={handleClick} />
      <Divader />
      <p>Кнопка нажата {count} раз</p>
      <p>Ваше имя: {name}</p>
    </main>
  )
}