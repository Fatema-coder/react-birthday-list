import React, { useState, useEffect } from 'react';
import { Data } from './data.js'
import List from './list.js'
import AddForm from './AddForm.js';

function App() {
  let [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("birthdays");
    return saved ? JSON.parse(saved) : Data;
   });
  useEffect(() => {
    localStorage.setItem("birthdays", JSON.stringify(people))
  }, [people]);

  let [showForm, setShowForm]= useState(false)
  const handleWish = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id); 
    setPeople(updatedPeople);
  }
  const handleAdd = (newPerson) => {
    setPeople((prevPeople) => [...prevPeople, newPerson]);
    setShowForm(false)
  }
  
  return (
    <main className="p-8">
      <h1 className= "text-3xl font-bold text-center mb-6">Birthday List</h1>
      <List people={people} onWish={handleWish} />
      {people.length === 0 && <p className="text-center text-gray-600 italic mt-8 text-lg">🎉 No more birthdays left! 🎈 </p>}

      <div className="flex justify-center mt-6">
        <button onClick={() => setShowForm(!showForm)} className="bg-purple-400 text-white px-4 py-3 rounded-full shadow-md hover:bg-purple-500 transition duration-200 text-lg"
        >{showForm ? 'Cancel' : '+ Add Them' }</button>
      </div>
      {showForm && <AddForm onAdd={handleAdd} />}
    </main>
  );
}

export default App;