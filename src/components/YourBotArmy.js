import React from "react";
import BotCard from "./BotCard";
import BotsPage from "./BotsPage";
import BotSpecs from "./BotSpecs";

function YourBotArmy({bots,handleClick,handleDelete}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        Your Bot Army
          {/*...and here...*/}
          {bots.map((bot)=><BotSpecs
          key={bot.id}
          bot={bot}
          handleClick ={handleClick}
          handleDelete ={handleDelete}
          />)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
