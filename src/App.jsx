import Joke from "./components/Joke";
import data from "./data";
function App() {
const jokes = data.map((obj)=> <Joke key={obj.id} {...obj}/>)
 return (
   <div className="bg-green-200 h-[500px] w-[60%] flex mx-auto mt-24">
     <div className="h-[400px] flex gap-5 pt-32 pl-10">{jokes}</div>
   </div>
 );
}

export default App;
