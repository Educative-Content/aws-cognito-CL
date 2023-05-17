import React from "react";


const Home = () =>{
    const domain = "<Provide your domain here>";
    const client_id = "<Provide your client id here>";
    const public_ip_address = "<Provide your public ip address here>";
    const URL = `${domain}/login?response_type=code&client_id=${client_id}&redirect_uri=http://${public_ip_address}:3000/AccessRes`;

    return(
        <div>
            <h1>Hello</h1>
            <a class="link to cognito user pool" href={URL}>Click to login or signup</a>
        </div>
    );
}

export default Home;
