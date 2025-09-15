import React, { useState, type FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
}

const UserForm:React.FC = () => {
    const [form, setForm] = useState<FormData>({name: '', email: ''});
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Form submitted with data: ', form);
        setMessage(`Welcome ${form.name}, You are signing in with email ${form.email}`);
        setForm({name: '', email: ''})
    };

    const handleClear = () => {
        setForm({name: '', email: ''})
    };

    return (
        <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
            <h2>User Form Excercise</h2>
            <form onSubmit={handleSubmit}>
                <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
                    <label>ชื่อ: <br />
                        <input type="text" placeholder='กรอกชื่อของคุณ (จำเป็น)' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </label>
                </div>
                <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
                    <label>อีเมล: </label> <br />
                    <input type="email" placeholder='กรอกอีเมลของคุณ (จำเป็น)' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value})} required />
                </div>
                <button type='submit' style={{margin: '10px', backgroundColor: '#7DDA58', border: 'none', outline: 'none', color: 'white'}}>Submit</button>
                <button onClick={handleClear} style={{margin: '10px', backgroundColor:'#E24949', border: 'none', outline: 'none', color: 'white'}}>Clear</button>
                <br />
                <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', backgroundColor: '#C8C7C7'}}>
                    <h3 style={{fontWeight: 'bold'}}>ข้อมูลปัจจุบัน:</h3>
                    <p>
                        <span style={{fontWeight: 'bold'}}>ชื่อ:</span> {form.name? form.name: 'ยังไม่ได้กรอก'}
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>อีเมล:</span> {form.email? form.email: 'ยังไม่ได้กรอก'}</p>
                </div>
            </form>
            {message && <p style={{color: '#7DDA58'}}>{message}</p>}
        </div>
    );
};

export default UserForm;