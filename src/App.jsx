function App() {
  const clickHandler = ()=>{
    alert('Clicked!')
  }
  return (
    <div className="flex items-center justify-center h-[500px]">
      <button className=" bg-gray-400 text-xl text-white rounded w-40" onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
