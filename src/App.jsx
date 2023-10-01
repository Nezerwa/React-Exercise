function App() {
  const clickHandler = ()=>{
    alert('Clicked!')
  }
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl">Event handling exercise</h1>
      <button className=" bg-blue-700 text-xl text-white rounded w-40" onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
