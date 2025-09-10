import React from 'react';

// 1.กำหนด Type ของ  Props ด้วย interface
interface GreetingProps {
    name: string;
    messageCount?: number; // '?' หมายถึง Optional Prop
}

// 2. ใช้ Props Type กับ Component
const Greeting = (props: GreetingProps) => {
    return(
        <div>
            <h1>สวัสดี, {props.name}!</h1>
            {props.messageCount && <p>คุณมี {props.messageCount} ข้อความใหม่</p>}
        </div>
    );
};

export default Greeting;