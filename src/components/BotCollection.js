import React from "react";
import BotSpecs from "./BotSpecs";

function BotCollection({bots, handleClick, handleDelete}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">        
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot)=> <BotSpecs
        key={bot.id}
        bot={bot} 
        handleClick={handleClick}
        handleDelete={handleDelete}/>
  )}
        
      </div>
    </div>
  );
}

export default BotCollection;
