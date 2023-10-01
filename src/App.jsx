function App() {
  const arr = ["dog", "cat", "chicken", "cow", "sheep", "horse"].map(
    (elements) => <li className="text-xl">{elements}</li>
  );
  return (
    <div className="flex flex-col my-36 px-32">
      <ul className="list-disc">{arr}</ul>
    </div>
  );
}

export default App;
