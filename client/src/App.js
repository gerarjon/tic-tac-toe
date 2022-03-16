import 'bulma/css/bulma.min.css';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StreamChat } from "stream-chat";
import { Chat } from 'stream-chat-react';
import Cookies from "universal-cookie"
import { useState } from 'react';
import JoinGame from './components/JoinGame';
import SignIn from './pages/SignIn';

function App() {
  const api_key= process.env.REACT_APP_API_KEY;
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key)

  const [isAuth, setIsAuth] = useState(false);

  if (token) {
    client.connectUser(
      {
        id: cookies.get("userId"),
        name: cookies.get("username"),
        firstName: cookies.get("firstName"),
        lastName: cookies.get("lastName"),
        hashedPassword: cookies.get("hashedPassword")
      },
      token
    )
    .then((user) => {
      setIsAuth(true);
    });
  }

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    client.disconnectUser();
    setIsAuth(false);
  }
  return (
    <div className="main">
      { isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <button className='button' onClick={(logOut)}>logout</button>
        </Chat>
      ) : (
        <>
          <SignIn setIsAuth={setIsAuth} />
        </>
      )}
    </div>
  );
}

export default App;
