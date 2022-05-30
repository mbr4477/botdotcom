import { createCorpus } from "./CreateCorpus";
import { MarkovBot } from "../app/bot/MarkovBot";

/**
 * Initialize the global bot from the SMS content.
 *
 * @param {object} smsContent The SMS content.
 */
export function makeBot(smsContent) {
  const corpus = createCorpus(smsContent);
  MarkovBot.getInstance().setCorpus(corpus);
}
