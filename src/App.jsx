import React, { useState } from "react";
import Tours from "./components/Tours";
import data from './data'
const App = () => {
  const[tours,setTours]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  function handlerefresh(){
    setTours(data);
  }

  if(tours.length==0)
  {
    return(
      <div className="refresh">
        <p className="refresh-heading">No Tours Left</p>
        <button className="btn-white" onClick={handlerefresh}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}
export default App;
