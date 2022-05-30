import Text from "markov-chains-text";

let instance = null;

/**
 * A markov chain bot.
 */
export class MarkovBot {
  /**
   *
   * @param {string} corpus The corpus text.
   */
  constructor(corpus = null) {
    this.setCorpus(corpus);
  }

  /**
   * Set the corpus.
   *
   * @param {string} corpus The corpus text.
   */
  setCorpus(corpus) {
    if (corpus !== null) {
      this._chain = new Text(corpus);
    } else {
      this._chain = null;
    }
  }

  /**
   * Get a sentence from the bot.
   *
   * @param {string} startFrom Start from this phrase.
   */
  getSentence(startFrom) {
    if (this._chain === null) {
      throw "Corpus was not set!";
    }
    const out = this._chain.makeSentence(startFrom, { tries: 100, maxOverlapTotal: 8 });
    return out;
  }

  /**
   * Check if the bot is ready
   *
   * @returns True if the bot is read
   */
  ready() {
    return this._chain !== null;
  }

  /**
   * Get the singleton instance.
   *
   * @returns The MarkovBot singleton
   */
  static getInstance() {
    if (instance === null) {
      instance = new MarkovBot();
    }
    return instance;
  }
}
