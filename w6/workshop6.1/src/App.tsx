import React from 'react';
import ProductCard from './Component/PostCard';
import './App.css';
import Button from './Component/Button';

const Products = [
  {
    // Product 1
    id: 1,
    imageUrl: 'https://th.bing.com/th/id/OIP._1uXTYiNgIiL6uCQfarJ4wHaHa?w=182&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title: 'iPhone 16',
    description: 'สมาร์ทโฟนที่มาพร้อมกับความคุ้มค่า',
    price: 799,
  },
  {
    // Product 2
    id: 2,
    imageUrl: 'https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title: 'AirPods Pro 2nd Gen',
    description: 'AirPods Pro ให้คุณมากกว่าหูฟังทั่วไป',
    price: 249,
  },
  {
    // Product 3
    id: 3,
    imageUrl: 'https://th.bing.com/th?id=OIF.cii4BgiXWL%2fKRVWfcMj3nA&w=157&h=169&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title: 'Apple Pencil 1',
    description: 'Apple Pencil เหมาะสำหรับทุกวัย ไม่ว่าจะเป็นการ จด Lecture หรือการวาดภาพ',
    price: 89,
  },
];

const App: React.FC = () => {
  const handleAddToCart = () => {
    alert(`เพิ่มสินค้าเข้าตะกร้าแล้ว!`);
  };

  return (
    <body className='bg-gray-200'>
        <div className="bg-gray-300 rounded-xl shadow-lg p-6 container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">รายการสินค้าของเรา</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {Products.map(product => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => handleAddToCart()}
              />
            ))}
          </div>
        </div>
    </body>
  );
};

export default App;