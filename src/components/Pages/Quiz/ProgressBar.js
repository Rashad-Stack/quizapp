import React from 'react';
import Button from './Button';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function ProgressBar() {
  return (
    <div className="hidden w-11/12 h-16 md:flex justify-between items-center gap-5 bg-white fixed left-1/2 -translate-x-1/2 bottom-5 shadow rounded-md px-3">
      <Button>
        <BsArrowLeft size={20} />
      </Button>
      <div className="w-full h-1 bg-gray-200">
        <div className="w-1/3 h-1 bg-slate-900 progress-bar-thumb cursor-pointer"></div>
      </div>
      <a href="#!">
        <Button>
          <BsArrowRight size={20} />
        </Button>
      </a>
    </div>
  );
}

export default ProgressBar;
