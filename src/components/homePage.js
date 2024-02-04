import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
function HomePage() {


    const location = useLocation();
  const { state } = location;
  const apiData = state && state.apiData ;
  console.log("homedata",apiData);
  
  // const { user } = state || {};

 useEffect(() => {

  window.history.replaceState({}, document.title)
  
 }, [])
 

  return (
    <div>

{apiData ? (
  <>
        <h1>HomePage</h1>
       
        <div>
        
        <div>
          <h3>User Information:</h3>
          <p>ID: {apiData.data.first_name}</p>
          <p>ID: {apiData.data.email_id}</p>
          {/* <p>Username: {user.username}</p>
          <p>Email: {user.email}</p> */}
          {/* Display other user properties as needed */}
        </div>
      
        </div>
        </> )
        :
         (
          <p>No user data available. Please log in first.</p>
        )}
        
  
       
    </div>
  )
}

export default HomePage