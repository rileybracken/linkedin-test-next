/* global IN */
import React, { Component } from 'react';
import Head from 'next/head'

class App extends Component {
  callbackFunction = () => {
    const params = '/people/~:(id,first-name,last-name,email-address,public-profile-url)';

    IN.API.Raw(params).result((data) => {
      const { firstName, lastName, emailAddress, publicProfileUrl } = data;

      console.log({
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        linkedin_url: publicProfileUrl,
      });
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    IN.User.authorize(this.callbackFunction, '');
  }

  render() {
    return (
      <div className="App">
        <Head>
          <script type="text/javascript" src="//platform.linkedin.com/in.js">
            api_key: [API_KEY]
          </script>
        </Head>
        <button onClick={ this.handleClick }>Authenticate</button>
      </div>
    );
  }
}

export default App;
