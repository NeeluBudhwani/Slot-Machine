import React from "react";
import "./index.css";
import SlotM from "./SlotMach";



const App =() =>{
  return(
  <>
  <h1 className="heading_style"> 🎰Welcome to Slot Machine Game🎰</h1>
 <div className="slot_mech">
  <SlotM  x = ' 🥇'  y = ' 🥇'  z = ' 🥇'  />
  <SlotM   x = ' 🎅'  y = ' 🥇'  z = ' 🛩️' />
  <SlotM  x = ' 😆'  y = ' 😄'  z = ' 😸'  />
  <SlotM  x = ' 🔺'  y = ' 🔺'  z = ' 🔺' />
  </div> 
  </>
  

  )

};


export default App;
