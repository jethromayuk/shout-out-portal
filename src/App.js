import React, { useEffect } from "react";
import './App.css';

const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

    return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there everyone!
        </div>

        <div className="bio">
        I'm Jethro and I just started my journey into Web 3.0.
        </div>

        <p className="bio">
        Connect your Ethereum wallet and wave at me!
        </p>

        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}

export default App
