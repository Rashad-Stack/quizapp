import Questions from './Questions';
function Analysis() {
  return (
    <>
      <div className="mt-10 border-b-2">
        <h1 className="text-heading text-xl md:text-4xl font-bold">
          Question Analysis
        </h1>
        <h5 className="text-gray-400 text-md md:text-lg font-medium md:font-semibold my-2">
          You answered 5 out of 10 questions correctly
        </h5>
      </div>
      <Questions />
      <Questions />
    </>
  );
}

export default Analysis;
