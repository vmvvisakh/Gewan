import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate , useNavigate } from 'react-router';
import { url } from '../Service';


function LoginPage() {
        const [apiData, setApiData] = useState('vmv')
        const [userName,SetUserName] = useState('')
        const [password,SetPassword] = useState('')
        const navigate = useNavigate()
       

        const handleApi = (e) => {
            e.preventDefault();

            axios.post(url, {
                user_name: userName,
                password: password,
              })
              
              .then( (response) => {

                console.log("data",response.data.data);
                // console.log("msg", response.data.data);
                // const { user } = response.data;
                // setApiData(response.data.app_msg)
                setApiData(response.data.app_msg);
                // console.log("apiData",apiData);
                if (response.data.is_success){
                  // console.log(response.data.data); 
                    navigate("/",{ state:  {apiData:response.data}   });
                    //apiData - key
                }

              })
              .catch( (error) => {
                console.log(error);
              });
        }

      
        

  return (
    <div>
    <form onSubmit={handleApi}>
     <label>
    UserName:
    <input type="text" name="username" onChange={(e) => SetUserName(e.target.value)} value={userName} />
  </label><br /><br />
  <label>
    Password:
    <input type="password" name="password" onChange={(e) => SetPassword(e.target.value)} value={password} />
  </label><br /> <br />
  <input type="submit"  />
</form>
</div>
  )
}

export default LoginPage