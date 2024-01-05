import { useState } from "react";

function App() {
  //How to write usestate hook
  const [counter,setCounter]=useState(10);

  //let counter=100;
  const increaseHandeler=()=>{
    if(counter<15){
      setCounter(counter+1);
    }
    
    //console.log(counter);
  }
  const deccreaseHandeler=()=>{
    if(counter>0){
    setCounter(counter-1);
    }
    //console.log(counter);
  }
  return (
    <>
      <h1 className="text-center text-3xl">Using the State Hook</h1>
      <div className="container mx-auto h-[100px] bg-red-300 flex items-center justify-center gap-2 mt-4">
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
        <button className="btn">Counter {counter}</button>
      </div>
      <div className="container mx-auto h-[100px] flex items-center justify-center gap-3">
        <button onClick={increaseHandeler} className="btn btn-primary">Increase</button>
        <button onClick={deccreaseHandeler} className="btn btn-primary">Decrease</button>
      </div>
    </>
  );
}

export default App;
