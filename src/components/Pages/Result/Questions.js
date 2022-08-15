import { BiHelpCircle } from 'react-icons/bi';
import Answer from '../Quiz/Answers';
function Questions() {
  return (
    <div className="mt-3 bg-slate-50 p-3">
      <h3 className="text-heading text-lg font-semibold flex items-center gap-2">
        <BiHelpCircle size={25} className="text-green-500 cursor-text" />
        Here goes the question from Learn with Sumit?
      </h3>
      <Answer type="hidden" />
    </div>
  );
}

export default Questions;
