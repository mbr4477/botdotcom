import { generateConversation } from "../../../domain/GenerateConversation";
import { MarkovBot } from "../../bot/MarkovBot";

/**
 * A presenter for the conversation view.
 */
class ConversationPresenter {
  /**
   *
   * @param {Conversation} view
   */
  constructor(view) {
    this._view = view;
    if (!MarkovBot.getInstance().ready()) {
      this._view.showHome();
    } else {
      this.userDidClickNewConversation();
    }
  }

  /**
   * Handle when the user requests a new conversation
   */
  userDidClickNewConversation() {
    const convo = generateConversation();
    this._view.showConversation(convo);
  }
}

export default ConversationPresenter;
