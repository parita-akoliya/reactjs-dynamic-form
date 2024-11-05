// App.js
import React from 'react';
import { formConfig } from './FormConfig';
import DyanmicForm from './components/DyanmicForm';

const App = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Responsive Dynamic Form</h1>
      <DyanmicForm config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
