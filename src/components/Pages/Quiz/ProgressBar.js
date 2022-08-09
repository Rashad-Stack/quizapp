import React from 'react';
import Button from '../Button';

function ProgressBar() {
  return (
    <div className="w-[calc(100vw-100px)]">
      <div className="">
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="">
        <div className="">24% Cimplete!</div>
        <div className="">
          <div className="" style={{ width: '20%' }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className="">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
}

export default ProgressBar;
