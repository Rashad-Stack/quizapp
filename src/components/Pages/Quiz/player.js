import { useState } from 'react';

import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
function Player() {
  const [popupPLayer, setPopupPlayer] = useState(true);

  const playerPopupHandler = () => {
    setPopupPlayer((o) => !o);
  };

  return (
    <div className="fixed right-5 bottom-24">
      {popupPLayer ? (
        <button
          className="w-14 h-14 bg-slate-900 hover:bg-green-400 text-green-400 hover:text-slate-900 flex justify-center items-center rounded-full"
          onClick={playerPopupHandler}
        >
          <AiFillPlayCircle size="25" />
        </button>
      ) : (
        <div className="w-80 bg-white border-2 p-2 rounded-md relative">
          <img
            src="/assets/images/3.jpg"
            alt="thumbnail"
            className="w-100 object-cover animate-scale"
            loading="eager"
          />
          <p className="text-slate-900 text-sm font-medium py-2">
            #23 React Hooks Bangla - React useReducer hook Bangla
          </p>
          <button className="bg-white border-2 p-1 absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 rounded-full ">
            <AiOutlineClose size={20} onClick={playerPopupHandler} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Player;
