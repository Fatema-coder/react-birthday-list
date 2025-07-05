import React from 'react';

const List = ({ people, onWish }) => {
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {people.map((person) => {
        const { id, name, age, image, birthDate, birthMonth } = person;
        const isBirthdayToday =
          Number(birthMonth) === currentMonth && Number(birthDate) === currentDate;

        return (
          <div
            key={id}
            className="bg-[#fefcf8] w-60 min-h-[320px] rounded-2xl shadow-xl flex flex-col items-center text-center p-6 pt-8 gap-3 hover:scale-[1.02] transition-transform"
          >
            {/* Image Ring */}
            <div className="w-24 h-24 rounded-full bg-[#e8eee8] flex items-center justify-center shadow-inner">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col items-center gap-1 mt-2">
              <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-600 -mt-1">Age: {age}</p>
              <p className="text-sm text-gray-600">
                Birthday: {`${String(birthMonth).padStart(2, '0')}/${String(birthDate).padStart(2, '0')}`}
              </p>
            </div>

            {/* Button or Message */}
            <div className="mt-auto">
              {isBirthdayToday ? (
                <button
                  onClick={() => onWish(id)}
                  className="bg-[#d0e3dc] text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-[#bad3ca] transition"
                >
                  🎉 Wish Them
                </button>
              ) : (
                <p className="text-gray-500 text-sm">🎈 Coming Soon</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;