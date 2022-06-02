import { useState } from 'react'
import './App.css'


function App() {
  const [screen, setScreen] = useState("");

  function clearScreen(){
    setScreen("");
  }

  function handleEval(){
    setScreen(eval(screen));
  }

  function handleCalc(e){
    setScreen(screen + e.target.value);
  }

  function handleSq(){
    setScreen(screen * screen);
  }

  function handleSqrt(){
    setScreen(Math.sqrt(screen));
  }

  return (
    <div className="container">
      <input type="text" className="screen" value={screen} readOnly/>

      <div className="textpad">
        <button value="1" onClick={handleCalc} className="item"> 1 </button>
        <button value="2" onClick={handleCalc} className="item"> 2 </button>
        <button value="3" onClick={handleCalc} className="item"> 3 </button>
        <button value="4" onClick={handleCalc} className="item"> 4 </button>
        <button value="5" onClick={handleCalc} className="item"> 5 </button>
        <button value="6" onClick={handleCalc} className="item"> 6 </button>
        <button value="7" onClick={handleCalc} className="item"> 7 </button>
        <button value="8" onClick={handleCalc} className="item"> 8 </button>
        <button value="9" onClick={handleCalc} className="item"> 9 </button>
        <button value="0" onClick={handleCalc} className="item"> 0 </button>
        <button value="+" onClick={handleCalc} className="item"> + </button>
        <button value="-" onClick={handleCalc} className="item"> - </button>
        <button value="/" onClick={handleCalc} className="item"> / </button>
        <button value="*" onClick={handleCalc} className="item"> * </button>
        <button value="C" onClick={clearScreen} className="item  clear"> C </button>
        <button onClick={handleSq} className="item"> ^ </button>
        <button onClick={handleSqrt} className="item"> √ </button>
        <button value="=" onClick={handleEval} className="item eval"> = </button>
      </div>

    </div>
  )
}

export default App
