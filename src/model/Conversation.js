import { Message } from "./Message";

/**
 * A conversation.
 */
export class Conversation {
  /**
   *
   * @param {Array<Message>} messages The conversation messages.
   */
  constructor(messages) {
    this.messages = messages;
  }
}
