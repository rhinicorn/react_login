import {useState} from 'react';

//components
import Login from './Login';
import Signup from './Signup';

function Portal(){
  //state
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  //helper functions
  const toggleLoginSignup = () => {setShowLogin(!showLogin)}
  const submitForm = () => console.log('Form is sent!\nusername: ${username}\npassword: ${password}')
  

  //render
  return (
    <>
      { showLogin
        ? <Login
          username={username}
          setPassword={setPassword} 
          setUsername={setUsername}
          toggle={toggleLoginSignup}
          submitForm={submitForm}
        />

        : <Signup 
          username={username}
          password={password}
          setPassword={setPassword} 
          setUsername={setUsername}
          toggle={toggleLoginSignup}
          submitForm={submitForm}
        />
      }
    </>
  )
}

export default Portal