import React from 'react';
import Button from './components/Button';
import './App.css'

function App() {
  const handleButtonClick = (type: string) => {
    alert(`${type} button clicked!`);
  }

  return (
    <>
      <div className='space-x-2'>
        <Button variant='primary' size='sm' onClick={() => handleButtonClick('Primary')}>Primary SM</Button>
        <Button variant='primary' size='md' onClick={() => handleButtonClick('Primary')}>Primary MD</Button>
        <Button variant='primary' size='lg' onClick={() => handleButtonClick('Primary')}>Primary LG</Button>
      </div>
      <div className='sapce-x-2 mt-4'>
        <Button variant='secondary' size='sm' onClick={() => handleButtonClick('Secondary')}>Secondary SM</Button>
        <Button variant='secondary' size='md' onClick={() => handleButtonClick('Secondary')}>Secondary MD</Button>
      </div>
    </>
  )
}

export default App;