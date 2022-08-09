import Option from './Option';

function Answers() {
  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-between mt-5 gap-5">
      <Option text="Test answer" correct />
      <Option text="Test answer" />
      <Option text="Test answer" correct />
      <Option text="Test answer" />
      <Option text="Test answer" correct />
      <Option text="Test answer" />
    </div>
  );
}

export default Answers;
