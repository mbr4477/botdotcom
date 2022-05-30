/**
 * A message.
 */
export class Message {
  /**
   *
   * @param {boolean} isOutgoing True if the message is outgoing
   * @param {string} senderName The name of the sender
   * @param {string} body The body of the message
   */
  constructor(isOutgoing, senderName, body) {
    this.isOutgoing = isOutgoing;
    this.senderName = senderName;
    this.body = body;
  }
}
