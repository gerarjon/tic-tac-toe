import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';

const JoinGame = () => {
  const [opp, setOpp] = useState("");
  const { client } = useChatContext(); 
  const [channel, setChannel] = useState(null); 
  const createChannel = async () => {
    const response = await client.queryUsers({name: { $eq: opp }});

    if (response.users.length === 0) {
      alert("user not found");
      return;
    };

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id]
    });

    await newChannel.watch();
    setChannel(newChannel);
  }

  return (
    <div className='container'>
      { channel ? ( 
        <div>Game start</div>
      ) : (
        <div>
          <h1>Create Game</h1>
          <p>Logged in as: {client._user.name}</p>

          <div className='field'>
            <label className='label'>Enter Opponent Username</label>
            <div className='control'>
              <input
                className='input'
                type="text" 
                placeholder="username of player" 
                onChange={(event) => {
                  setOpp(event.target.value)}
              }/>
            </div>
          </div>
          <div className='control'>
            <button className='button is-success'>Start</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default JoinGame;