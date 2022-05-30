import "./Home.css";
import { Button } from "@mui/material";
import HomePresenter from "./HomePresenter";
import React, { createRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.presenter = new HomePresenter(this);
    this.state = { navToConversation: false };
    this.fileRef = createRef();
  }

  showFileSelector = () => {
    this.fileRef.current.click();
  };

  showConversation = () => {
    this.setState({ navToConversation: true });
  };

  render() {
    return (
      <div className="landing">
        {this.state.navToConversation ? <Navigate to={"/bot"} /> : <></>}
        <h1>
          Hi, I'm <strong>the bot.</strong>
        </h1>
        <div>
          Click the button below to upload the *.json file of messages.
        </div>
        <Button
          variant="contained"
          onClick={() => this.presenter.userDidClickGetStarted()}
        >
          Get Started
        </Button>
        <input
          ref={this.fileRef}
          type="file"
          id="source-file-picker"
          accept="application/json"
          onChange={(e) =>
            this.presenter.userDidSelectFile(
              URL.createObjectURL(e.target.files[0])
            )
          }
        />
        <p className="disclaimer">
          Don't worry, we don't send your messages anywhere.
        </p>
      </div>
    );
  }
}

export default Home;
