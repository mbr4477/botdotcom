import "./Conversation.css";
import { Button } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import ConversationPresenter from "./ConversationPresenter";
import { Conversation } from "../../../model/Conversation";

class ConversationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navToHome: false, conversation: new Conversation([]) };
  }

  componentDidMount() {
    this.presenter = new ConversationPresenter(this);
  }

  /**
   * Go back to the home page.
   */
  showHome() {
    this.setState({ navToHome: true });
  }

  /**
   * Show the conversation.
   *
   * @param {Conversation} conversation The conversation
   */
  showConversation(conversation) {
    this.setState({ conversation });
  }

  render() {
    return (
      <div className="conversation">
        {this.state.navToHome ? <Navigate to="/" /> : <></>}
        <div className="dialog">
          {this.state.conversation.messages.length > 0 ? (
            this.state.conversation.messages.map((m) => (
              <Message
                senderName={m.senderName}
                body={m.body}
                isOutgoing={m.isOutgoing}
              />
            ))
          ) : (
            <div className="empty">No messages (click refresh)</div>
          )}
        </div>
        <Button
          variant="contained"
          className="refresh-button"
          onClick={() => this.presenter.userDidClickNewConversation()}
        >
          Refresh
        </Button>
      </div>
    );
  }
}

function Message({ senderName, isOutgoing, body }) {
  return (
    <div className={"message" + (isOutgoing ? " outgoing" : "")}>
      <div className="body">{body}</div>
    </div>
  );
}

export default ConversationView;
