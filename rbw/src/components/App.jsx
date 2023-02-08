import React from 'react';
import Tasklist from './lists/TaskList';
// import Settings from './settings/Settings';
import CounterComponent from './counter/CounterComponent';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
    return (
      <div>
        <Tasklist />
        {/* <Settings /> */}
        <CounterComponent />
      </div>
    );
};

export default App;
