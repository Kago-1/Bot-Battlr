import React,{useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);

  //fetch data 
  useEffect(()=>{
    fetch(`http://localhost:8002/bots`)
    .then(res => res.json())
    .then(data => {
      setBots(data)})

  },[]);
//display selected bots
  function castBot(id,cast=true){
    setBots(bots.map(bot => id === bot.id ? {...bot, isCast:cast}  : bot))
  } 

  // function unCastBot(id){
  //   setBots(bots.map(bot => id === bot.id ? {...bot, isCast:false}  : bot))
  // } 
  
//discharge a bot completely
function deleteBot(id) {
  setBots(bots.filter(bot => id !== bot.id))
}

  return (
    <div>
      <YourBotArmy bots={bots.filter(bot => bot.isCast)} handleClick={(id)=>castBot(id,false)} handleDelete={deleteBot}/>
      <BotCollection bots={bots} handleClick={castBot} handleDelete={deleteBot}/>
    </div>
  )
}

export default BotsPage;
