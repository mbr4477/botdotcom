import { MarkovBot } from "../app/bot/MarkovBot";
import { Conversation } from "../model/Conversation";
import { Message } from "../model/Message";

/**
 * Make a conversation data structure from the raw bot output.
 *
 * @param {string} rawBotOutput The raw output from the bot.
 * @param {string} from The name to use for the "from" (outgoing) messages.
 * @param {string} to The name to use for the "to" (incoming) message.
 * @returns The conversation.
 */
export function generateConversation(from = "FROM", to = "TO") {
  const bot = MarkovBot.getInstance();
  let out = "";
  out = bot.getSentence();
  const regex = /%(to|from)%\s(.*?)(?=%to%|%from%|$)/g;
  const matches = [...out.matchAll(regex)];
  const messages = [];
  matches.forEach((match) => {
    const sender = match[1];
    const body = match[2];
    messages.push(new Message(sender === "from", sender, body));
  });
  const convo = new Conversation(messages);
  
  return convo;
}
