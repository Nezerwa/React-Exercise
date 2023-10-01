function App() {
  const clickHandler = ()=>{
    alert('Clicked!')
  }
  return (
    <div className="flex flex-col gap-10 bg-yellow-500 w-[500px]">
      <h1 className="text-3xl">Event handling exercise</h1>
      <button className=" bg-gray-400 text-xl text-white rounded w-40" onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
