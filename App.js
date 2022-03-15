import React from "react";
import "./index.css";

const SlotM =(props) => {
  //let x = '😄';
  //let y = '😄';
  //let z = '👍';
  let {x , y , z} = props;
  if(x===y && y===z){
return(
  <>
    <div className="slot_inner">
      <h1>{x} {y} {z}</h1>
      <h1>This is Matching...</h1>
      <hr />

    </div>
  </>
)
  }
  else{
    return(
      <>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1>This is Not Matching...</h1>
          <hr />
    
        </div>
      </>
    )

  }

}


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