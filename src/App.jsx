import Joke from "./components/Joke";
import data from "./data";
function App() {
const jokes = data.map((obj)=> <Joke key={obj.id} {...obj}/>)
 return (
  <div>
    {jokes}
  </div>
 )
}

export default App;
