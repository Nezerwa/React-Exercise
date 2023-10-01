function Joke({ setup, punchline }) {
  return (
    <div className="bg-red-700">
      <h1>{setup}</h1>
      <p>{punchline}</p>
    </div>
  );
}
export default Joke;
