import React from "react";
import "./index.css";
import SlotM from "./SlotMach";



const App =() =>{
  return(
  <>
  <h1 className="heading_style"> π°Welcome to Slot Machine Gameπ°</h1>
 <div className="slot_mech">
  <SlotM  x = ' π₯'  y = ' π₯'  z = ' π₯'  />
  <SlotM   x = ' π'  y = ' π₯'  z = ' π©οΈ' />
  <SlotM  x = ' π'  y = ' π'  z = ' πΈ'  />
  <SlotM  x = ' πΊ'  y = ' πΊ'  z = ' πΊ' />
  </div> 
  </>
  

  )

};


export default App;
