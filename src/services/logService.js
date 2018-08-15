//import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://0130c611532840fca57d5a51a48ea6cf@sentry.io/1259253"
  // ).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
