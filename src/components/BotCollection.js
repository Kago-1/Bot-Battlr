import React from "react";
import BotSpecs from "./BotSpecs";

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot)=> <BotSpecs
        key={bot.id}
        bot={bot} />
)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
