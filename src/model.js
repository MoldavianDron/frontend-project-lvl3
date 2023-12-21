import onChange from 'on-change';

import {Status} from "src/constants.js";
import {render} from "src/view/index.js";

const state = {
  status: Status.IDLE,
  statusMessage: "",
  downloadedSources: [],
  rssObjects: [],
}

export const watchedModel = onChange(state, function (path, value) {
  render(path, value);
});