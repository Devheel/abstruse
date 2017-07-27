import { requestEdited, header } from '../../../webhooks/github/PullRequestEvent';
import { sendRequest } from '../../../utils/utils';
import * from 'http';

export default function() {
  return Promise.resolve()
    .then(() => sendRequest(requestEdited, header))
    .then(parsedBody => {
      // console.log(parsedBody);
      return Promise.resolve();
    })
    .catch(err => {
      // console.log(err);
      return Promise.reject(err);
    });
}