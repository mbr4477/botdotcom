/**
 * Create the corpus needed by the bot.
 *
 * @param {object} smsContent The SMS content in the format from the SMS Backup Android app.
 * @returns The corpus text.
 */
export function createCorpus(smsContent) {
  let corpus = "";
  for (const message of smsContent) {
    const sender =
      message["messageDirection"] === "OUTGOING" ? "%from%" : "%to%";
    corpus += `${sender} ${message.body.replaceAll("\n", " ")}\n`;
  }
  corpus = corpus.replaceAll(/\s+/gi, " ");
  return corpus.toLowerCase();
}
