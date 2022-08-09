import React from 'react';

function Option({ className, text, correct, ...rest }) {
  return (
    <>
      <label
        className={`w-full md:w-1/2 flex gap-2 p-4 ${
          correct ? 'bg-gray-200' : 'bg-red-200'
        } text-slate-900 font-semibold`}
      >
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </>
  );
}

export default Option;
