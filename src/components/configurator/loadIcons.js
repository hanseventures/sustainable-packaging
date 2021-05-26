const context = require.context('@streamlinehq/streamlinehq/img/', true, /.svg$/);
import splitOnLast from './splitOnLast'

const obj = {};
context.keys().forEach((key) => {
  const countryCode = splitOnLast(key, '-').shift().split('./').pop() // remove the first 2 characters
    .substring(0, key.length - 6); // remove the file extension
  obj[countryCode] = context(key);
});

export default obj;
