import Option from './Option';

function Answers({ type }) {
  return (
    <div className="grid md:grid-cols-2 mt-5 gap-x-2 gap-y-5">
      <Option text="Test answer" type={type} correct />
      <Option text="Test answer" type={type} correct={false} />
      <Option text="Test answer" type={type} />
      <Option text="Test answer" type={type} />
      <Option text="Test answer" type={type} />
      <Option text="Test answer" type={type} />
    </div>
  );
}

export default Answers;
