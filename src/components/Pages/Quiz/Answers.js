import Option from './Option';

function Answers() {
  return (
    <div className="grid md:grid-cols-2 mt-5 gap-x-2 gap-y-5">
      <Option text="Test answer" correct />
      <Option text="Test answer" correct={false} />
      <Option text="Test answer" />
      <Option text="Test answer" />
      <Option text="Test answer" />
      <Option text="Test answer" />
    </div>
  );
}

export default Answers;
