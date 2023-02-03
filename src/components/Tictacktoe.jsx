import React from 'react'
import Squarebox from './Squarebox'
import "../styles/tictack.css"
const Tictacktoe = () => {
    const [state,setstate]=React.useState(Array(9).fill(null));
    const [Xturn,setXturn]=React.useState(true)
    console.log(state)
    function handleclick(index){
   const copy=[...state];
   copy[index]=Xturn?"X":"0"
   setstate(copy);
   setXturn(!Xturn);
   console.log("clicked")
    
    }
    const checkwinner=()=>{
  const chances=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let logic of chances){
    const [a,b,c]=logic;
    if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c]){
      return state[a];

    }
    
  }
  return false;
   
    }
    const winner=checkwinner();
    console.log(winner);
    function handleplayagain(){
        setstate(Array(9).fill(null));
        console.log("clicked");
    }
  return (
    <>
   
    <div className='main'>
        <div><Squarebox onClick={()=>handleclick(0)} value={state[0]}/></div>
        <div><Squarebox onClick={()=>handleclick(1)} value={state[1]}/></div>
        <div><Squarebox onClick={()=>handleclick(2)} value={state[2]} /></div>
        <div><Squarebox onClick={()=>handleclick(3)} value={state[3]} /></div>
        <div><Squarebox onClick={()=>handleclick(4)} value={state[4]} /></div>
        <div><Squarebox onClick={()=>handleclick(5)} value={state[5]} /></div>
        <div><Squarebox onClick={()=>handleclick(6)} value={state[6]} /></div>
        <div><Squarebox onClick={()=>handleclick(7)} value={state[7]} /></div>
        <div><Squarebox onClick={()=>handleclick(8)} value={state[8]} /></div>
        <br/>
        <br/>
      
    </div>
    <div>{Xturn?<h4>player X move</h4>:<h4>player 0 move</h4>}</div>
    { winner?<h1>winner -{winner}</h1>:""}
    <button className='btn' onClick={handleplayagain}>Play Again</button>

    </>
  )
}

export default Tictacktoe