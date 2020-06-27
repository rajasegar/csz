import stylis from './stylis.js';

// Cache object to store dynamically fetched stylesheets
// If you are fetching /index.css for the second time
// it will return from the cache instead of processing
const cache = {};

// Creating the Hash
const hash = () =>
  Math.random()
    .toString(36)
    .replace('0.', '');

// Adding internal stylesheet
const sheet = document.createElement('style');
document.head.appendChild(sheet);

// Temporary ruleset to prevent FOUC
const none = hash => `.${hash}{display:none}`;
const hide = hash => (sheet.innerHTML = none(hash) + sheet.innerHTML);
const show = hash =>
  (sheet.innerHTML = sheet.innerHTML.replace(none(hash), ''));

// Utility to check external stylesheet
const isExternalStyleSheet = key => /^(\/|https?:\/\/)/.test(key.trim());

// Processing Engine
// This is where stylis is used
const process = key => hash => rules => {
  sheet.innerHTML += (cache[key] = {
    hash,
    rules: stylis()(`.${hash}`, rules)
  }).rules;
  if (isExternalStyleSheet(key)) show(hash);
};

// Main default export function which returns the classnames
// in the format csz-****
export default (strings, ...values) => {

  const key = strings[0].startsWith('/')
    ? strings[0]
    : strings.reduce(
        (acc, string, i) =>
          (acc += string + (values[i] == null ? '' : values[i])),
        ''
      );

  if (cache[key]) return cache[key].hash;

  const className = 'csz-' + hash();
  const append = process(key)(className);

  if (isExternalStyleSheet(key)) {
    hide(className);
    fetch(key)
      .then(res => res.text())
      .then(append);
  } else append(key);

  return className;
};
