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
    <div>
      <div className="bg-green-200 w-[60%] mx-auto">
        <div className="grid grid-cols-2 w-[60%]  gap-y-12 py-12 pl-10 gap-x-96">{cards}</div>
      </div>
    </div>
  );
}

export default App;
