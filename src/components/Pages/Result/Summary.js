function Summary() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-20">
      <h5 className="text-black text-xl font-semibold w-36 text-center">
        Your score is 5 out of 10
      </h5>
      <img
        src="/assets/images/success.png"
        alt="success"
        className="w-96 object-cover"
      />
    </div>
  );
}
export default Summary;
