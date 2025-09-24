### workshop 6.1

#### `Button.tsx`

##### `ButtonProps` เป็นการกำหนด Type ให้ Props ที่จะรับเข้ามา ซึ่งได้แก่ 
##### - `variant` ที่เป็นการกำหนด style ของปุ่ม มี 4 แบบคือ `primary`, `secondary`, `danger` และ `outline`
##### - `size` กำหนดขนาดของปุ่ม มี 3 แบบคือ `sm`, `md` และ `lg`
##### - `children` เป็นเนื้อหาที่อยู่ภายในปุ่ม
##### `baseStyles` เป็นคลาส Tailwind พื้นฐานที่ใช้กับปุ่มทุกแบบ
##### `variantStyles` ใช้คำสั่ง `switch` เพื่อกำหนดสีและ style ตาม variant ที่เลือก เช่น `primary` ปุ่มสีน้ำเงิน, `secondary` ปุ่มสีเทา เป็นต้น
##### `sizeStyles` ใช้คำสั่ง `switch` เพื่อกำหนดขนาดของปุ่มตาม `size` ที่เลือกโดยจะต่างกันที่ระยะห่างภายใน (padding) และขนาดตัวอักษร
##### `combinedClassName` เป็นการรวม class ทั้งหมด รวมถึง `className` ที่ User ส่งเข้ามา เพื่อให้ได้ class สุดท้ายที่พร้อมใช้งาน

#### `ProductCard.tsx`

##### `ProductProps` กำหนด Type ให้ Props ที่จำเป็น ได้แก่ `imageUrl`, `title`, `description`, `price` และฟังก์ชัน `onAddToCart`
##### return กลับไปด้วย HTML โดยใช้ `div` เป็น container หลัก กำหนด style ด้วย Tailwind 
##### ส่วนบนของ container เป็นการแสดงรูปภาพสินค้า 
##### ส่วนล่างคือส่วนรายละเอียดของสินค้า
##### - `h3` สำหรับ `title`
##### - `p` สำหรับ `description`
##### - `span` สำหรับ `price` โดยใช้ `toLocalString()` เพื่อจัดรูปแบบตัวเลขให้ดูง่ายขึ้น
##### - สุดท้ายเป็นการใช้ Component `Button` ที่สร้างไว้ โดยกำหนด `variant="primary"` และผูกฟังก์ชัน `onAddToCart` เข้ากับ Event `onClick`

#### `App.tsx`

##### สร้าง Array `Products` เป็นการเก็บข้อมูลสินค้า 3 รายการ แต่ละรายการเป็น Object ที่มี `id`, `imageUrl`, `title`, `description` และ `price`
##### `handleAddToCart` เป็นฟังก์ชันที่จะถูกเรียกเมื่อ user คลิกปุ่ม "Add to Cart" โดยจะแสดงข้อความแจ้งเตือน (alert)
##### return กลับไปด้วย HTML โดยใช้ `div` เป็น container หลักสำหรับหน้อจอทั้งหมด
##### `h2` แสดงหัวข้อ "รายการสินค้าของเรา"
##### ใช้ `.map()` เพื่อวนลูปผ่าน Array `Products`
##### ในแต่ละรอบของลูป จะคืนค่าเป็น Component `<Products />` 1 รายการ โดยส่งข้อมูลของสินค้าแต่ละรายการเข้าไปเป็น Props
##### `key={product.id}` เป็น key ที่ให้ React จัดการรายการในการลูปได้อย่างมีประสิทธิภาพ