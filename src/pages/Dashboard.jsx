import { useEffect, useState } from "react";
import { getProducts } from "../services/api"

function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await getProducts();
      setCount(res.data.length);
    };

    load();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

    </div>
  );
}

export default Dashboard;