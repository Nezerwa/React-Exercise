function Joke({ setup, punchline }) {
  return (
    <div className="py-14 px-10 bg-white text-center border shadow-xl rounded-lg w-[400px]">
      <h1 className="font-bold text-2xl">{setup}</h1>
      <p className="text-lg">{punchline}</p>
    </div>
  );
}
export default Joke;
