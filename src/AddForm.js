import React, { useState } from 'react'

function AddForm({ onAdd}){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [birthMonth, setbirthMonth] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      id: Date.now(),
      name,
      age,
      image,
      birthDate,
      birthMonth,

    };
    onAdd(newPerson);

    setName('');
    setImage('');
    setbirthDate('');
    setbirthMonth('');
    setAge('');
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto mt-8 space-y-4 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">🎂 Add a Birthday 🎉</h2>

      <div className='mb-3'>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
      </div>
      <div className='mb-3'>
        <label className="block text-sm font-medium mb-1">Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
      </div>
      <div className='mb-3'>
        <label className="block text-sm font-medium mb-1">Image</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
      </div>
      <div className='mb-3'>
        <label className="block text-sm font-medium mb-1">Birthdate</label>
        <input type="number" value={birthDate} onChange={(e) => setbirthDate(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
      </div>
      <div className='mb-3'>
        <label className="block text-sm font-medium mb-1">Birthmonth</label>
        <input type="text" value={birthMonth} onChange={(e) => setbirthMonth(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
      </div>
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-200">Add Birthday</button>
    </form>
  );
}

export default AddForm;
