import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({bot}) {
  
  return (
    <div className="ui segment" >
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              // onClick={() =>handleClick(bot.id)}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              // onClick={() => handleClick(bot.id)}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;

// {
//   "id": 101,
//   "name": "wHz-93",
//   "health": 94,
//   "damage": 20,
//   "armor": 63,
//   "bot_class": "Support",
//   "catchphrase": "1010010101001101100011000111101",
//   "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
//   "created_at": "2018-10-02T19:55:10.800Z",
//   "updated_at": "2018-10-02T19:55:10.800Z"
// },
