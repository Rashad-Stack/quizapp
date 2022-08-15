import { useState } from 'react';
function Option({ className, text, correct, type = 'checkbox', ...rest }) {
  const [answerColor, setAnswerColor] = useState('');
  const colorChangedHandler = () => {
    const answer = correct ? '!bg-green-400' : '!bg-red-200';
    setAnswerColor(answer);
  };
  return (
    <>
      <label
        className={`w-full flex gap-2 p-4 bg-gray-200 text-slate-900 font-semibold rounded cursor-pointer hover:bg-gray-300 transition ${answerColor}`}
      >
        <input type={type} {...rest} onClick={colorChangedHandler} />
        <span>{text}</span>
      </label>
    </>
  );
}
export default Option;
