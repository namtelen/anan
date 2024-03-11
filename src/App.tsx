// src/App.tsx

import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [address, setAddress] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [formOutput, setFormOutput] = useState<JSX.Element | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const output = (
      <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <p>Birthday: {birthday}</p>
      </>
    );
    setFormOutput(output);
  };

  const handleFormReset = () => {
    setName('');
    setAge('');
    setAddress('');
    setBirthday('');
    setFormOutput(null);
  };

  return (
    <div id="personalFormContainer">
      <h1>PERSONAL FORM</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleFormReset}>Reset</button>
        </div>
      </form>

      {formOutput && (
        <div id="formOutput">
          <h2>Form Output</h2>
          <p>{formOutput}</p>
        </div>
      )}
    </div>
  );
};

export default App;
