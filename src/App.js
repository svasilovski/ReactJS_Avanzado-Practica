import React from 'react';
import './App.css';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';
import axios from "axios";

const App = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  const [newItem, setNewItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const [msgTitle, setMsgTitle] = React.useState("");
  const [msgBody, setMsgBody] = React.useState("");

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }

  const sendMessage = () => {
    axios.post('http://localhost:8000/notification', {
      title: msgTitle,
      message: msgBody
    })
    .then(() => console.log('http://localhost:8000/notification OK'))
    .catch(function (err) {
      console.error(err);
    });
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>** Proyecto PWA - Lista de la compra **</h1>
        {newServiceWorkerDetected && <div style={{ backgroundColor: 'red', marginBottom: 20, padding: 20 }}>
          <h3>¡Nueva actualización! ¿Quieres actualizar?</h3>
          <button onClick={onLoadNewServiceWorkerAccept} style={{ padding: 15 }}>¡Actualizar!</button>
        </div>}
        <input style={{ fontSize: 24 }} type="text" onKeyPress={e => e.key === 'Enter' && addNewItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: 24 }} onClick={addNewItem}>Añadir</button>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
        <div style={{ border: '1px solid #666666', marginTop: 20, padding: 20 }}>
          <input type="text" onChange={e => setMsgTitle(e.target.value)} value={msgTitle} />
          <input type="text" onChange={e => setMsgBody(e.target.value)} value={msgBody} />
          <button onClick={sendMessage} style={{ padding: 15 }}>Enviar Mensaje</button>
        </div>
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App);
