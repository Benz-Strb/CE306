import React from 'react'
import Greeting from './components/Greeting';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
  return (
    <div>
      <Greeting name="ผู้ใช้งาน TyprScript" messageCount={5} />
      <Greeting name="นักพัฒนา Vite" />

      <WelcomeBanner title="ยินดีต้องรับสู่โลกของ TypeScript!">
        <p>เนื้อหานี้ส่งผ่าน children prop</p>
      </WelcomeBanner>

    </div>
  );
};

export default App