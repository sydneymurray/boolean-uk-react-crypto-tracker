import { useEffect, useState } from "react";
import {getCryptoList} from "./components/HelperFunctions.js"
import SideListItem from "./components/SideListItem.jsx" 
import MainDetail from "./components/MainDetail";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [cryptoList, setCryptoList] = useState([])

  useEffect(() => getCryptoList(setCryptoList),[])


  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }

  function findCrypto(cryptoId){
    return cryptoList.find(coin => cryptoId === coin.id)
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
          {cryptoList.map(coin => <SideListItem
            isSelectedCripto={isSelectedCripto}
            selectCripto={setSelectedCripto}
            item={coin} />)}
        </ul>
      </aside>
      <main className="main-detail">
        {selectedCripto
          ? <MainDetail selectedCripto={findCrypto(selectedCripto)}/>
          : "Select a coin bro!"}
        {/* News feed component needs to go here */}
      </main>
    </>
  );
}

export default App;
