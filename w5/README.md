## Week 5

### workshop 5.1

##### - เริ่มจากประกาศฟังก์ชัน Counter ต่อมากำหนดตัวแปร count และ setCount ให้เป็น `Type number` โดยค่าเริ่มต้นเป็น `0`

##### - ให้แสดง Counter Exercise เป็นหัวข้อใหญ่ 

##### - ให้แสดงค่าของ `count` ออกมาเป็นสีฟ้า

##### - เพิ่มปุ่ม 3 ปุ่ม ประกอบไปด้วยปุ่ม
###### - `เพิ่ม` ซึ่งเรียก `setCount` เพื่อเซ็ทค่า `count` ให้ + 1 แล้วแสดงผ่านตัวแปร `count`
###### - `ลด` ซึ่งเรียก `setCount` เพื่อเซ็ทค่า `count` ให้ - 1 แล้วแสดงผ่านตัวแปร `count`
###### - `Reset` ซึ่งเรียก `setCount` เพื่อเซ็ทค่า `count` ให้เป็น 0แล้วแสดงผ่านตัวแปร `count`

### workshop 5.2

##### - ประกาศ `Type FormData` ที่เก็บข้อมูล `name` และ `email` เป็นชนิด `string`

##### - ประกาศฟังก์ชัน `UserForm` และกำหนดตัวแปร `form` และ `setForm` ให้เป็น Type FormData โดยที่ให้ name และ email เป็น string ว่าง ต่อมากำหนดตัวแปรเพิ่ม `message` และ `setMessage`ให้เป็น Type string โดยให้เป็น string ว่าง

##### - ประกาศฟังก์ชัน `handleSubmit` ให้ทำงานเมื่อ มีการกด `submit` 
###### - event.preventDefault() เป็นการป้องกันไม่ให้เกิดการรีเฟรชหน้า 
###### - console.log('Form submitted with data: ', form); แสดงค่าข้อมูลที่ผู้ใช้กรอกไว้
###### - setMessage(`Welcome ${form.name}, You are signing in with email ${form.email}`); แสดงข้อความนี้เมื่อกด submit
###### - setForm({name: '', email: ''}) แสดงเสร็จแล้วเคลียร์ name และ email ให้กลับไปเป็นค่าว่าง

##### - ประกาศฟังก์ชัน `handleClear` เพื่อเป็นการเคลียร์ฟอร์มทั้งหมดให้กลับไปเป็น string ว่าง

##### ให้แสดง User Form Excercise เป็นหัวข้อใหญ่

##### <form onSubmit={handleSubmit}> ... </form> เมื่อ submit ฟังก์ชัน handleSubmit จะทำงาน

##### <button onClick={handleClear}>Clear</button> เมื่อกดปุ่ม Clear ฟังก์ชัน handleClear จะทำงาน