import ListComponent from "./component/ListComponent";
function App() {
  const animal = [" 🐶dog", "😺 cat", "🐔 chicken", "🐮 cow", "🐑 sheep", "🐴 horse"];
  console.log(animal)
  return (
    <div>
      <ListComponent items={animal} />
    </div>
  );
}

export default App;
