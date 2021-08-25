import React from 'react';

const Card = (props) => {
  return (
    <div className="flex flex-col items-center gap-8 text-gray-800 shadow-md bg-white p-12 w-full h-full md:h-auto md:w-3/5 xl:w-2/5">
      {props.children}
    </div>
  );
};

export default Card;
