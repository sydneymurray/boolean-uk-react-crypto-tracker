import { useEffect, useState } from "react";
import { getCriptoUpdateUrl } from "../constants";


// This function give us the current time in seconds
function currentTime() {
  return Math.round(Date.now() / 1000);
}


/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}


export default function MainDetail({selectedCripto}) {
  let {name, symbol, current_price, last_updated} = selectedCripto
  let [timeDilated, setTimeDilated] = useState(0)

  function timeDilation(){
    setTimeDilated(Date.now()/1000 - convertToSeconds(last_updated))
  }

  useEffect(() => {
    let handle = setInterval(() => timeDilation(),1000)
    return () => clearInterval(handle)
  },[])

  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          {/* -- Leave this section in for the challenge -- */}
        </div>
        <div class="main-detail__name">
          <h2>{name}</h2>
          <p><span className="small">a.k.a </span>{symbol}</p>
        </div>
        <div className="main-detail__price">
          <p>£{current_price}</p>
          <p>Updated {timeDilated.toFixed()} seconds ago</p>
        </div>
      </section>
    </>
  );
}
