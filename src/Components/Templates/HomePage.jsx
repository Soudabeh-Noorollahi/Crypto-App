import { useState } from "react";
import { useEffect } from "react";
import TableCoin from "../Modules/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-LAfdzTX5LATsBYbEfK68g4UE"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);

  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
