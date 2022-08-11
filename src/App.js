import React, { useState } from 'react';
import './App.css';
import FormData from './components/FormInput/FormData'
import UserData from './components/UserData/UserData';


const App = () => 
{
  let [userInfo,setUserInfo] = useState([]);

  const passDataHandler = (newInput) =>
  {
      setUserInfo((prevInfo) => {
        return [ newInput, ...prevInfo]
      });

  }

  return (
<div>
    <FormData passData={passDataHandler}/>
    <UserData details={userInfo} />
</div>
 );
}

export default App;
