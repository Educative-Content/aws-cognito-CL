import React from "react";


const Home = () =>{
    return(
       // const domain="DD";
        <div>
            <h1>Hello</h1>
            <a class="Cognito User Pool Credentials"  href="<PROVIDE YOUR DOMAIN HERE>/login?response_type=code&client_id=<Provide YOUR CLIENT ID HERE&redirect_uri=https://<PROVIDE PUBLIC IP ADDRESS HERE>:3000/AccessRes">Click to login or signup</a>
       </div>
    );
}

export default Home;
