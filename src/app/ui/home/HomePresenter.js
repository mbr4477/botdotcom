import { createCorpus } from "../../../domain/CreateCorpus";
import { makeBot } from "../../../domain/MakeBot";

class HomePresenter {
  /**
   *
   * @param {Home} view
   */
  constructor(view) {
    this._view = view;
  }

  /**
   * Handle when the user clicks the start button
   */
  userDidClickGetStarted() {
    this._view.showFileSelector();
  }

  /**
   * Handle when the user picks a file
   *
   * @param {string} path Path to the file
   */
  userDidSelectFile(path) {
    console.debug(path);
    window
      .fetch(path)
      .then((res) => {
        return res.json();
      })
      .then((content) => {
        makeBot(content);
        // Redirect page
        this._view.showConversation();
      });
  }
}

export default HomePresenter;
