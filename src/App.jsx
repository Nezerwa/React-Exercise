import { useEffect, useState } from "react";
import Flip from "./components/Flip";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const cards = data.map((items) => {
    return <Flip {...items} key={items.id} />;
  });
  return (
    <div className="bg-white">
      <div className="flex justify-center pb-10 pt-10">
        <button className="bg-red-600 py-2 px-12 text-white">
          Fetch Random
        </button>
      </div>
      <div className="w-[80%]">
        <div className="grid grid-cols-2 w-full  gap-y-12 py-12 pl-10 gap-x-24 mx-32">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
