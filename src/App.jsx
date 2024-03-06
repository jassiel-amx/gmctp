import React from 'react';
import './App.css';
import ChangePassword from './components/changepassword';
import RecoveryPassword from './components/recoverypassword';

function App() {

  return (
    <div className="App">
      <ChangePassword />
      <RecoveryPassword />
    </div>
  );
}

export default App;