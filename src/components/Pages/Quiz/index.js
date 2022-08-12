import Answers from './Answers';
import ProgressBar from './ProgressBar';
import Player from './player';

function Quiz() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-heading font-Montserrat">
        Pick three of your favorite star Wars Films
      </h1>
      <h4 className="text-md font-semibold text-slate-400 font-Montserrat border-b border-slate-200 mt-3 pb-2">
        Question can have multiple answers
      </h4>

      <Answers />
      <ProgressBar />
      <Player />
    </>
  );
}

export default Quiz;
