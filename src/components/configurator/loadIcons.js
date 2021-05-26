const context = require.context('@streamlinehq/streamlinehq/img/', true, /.svg$/);
import splitOnLast from './splitOnLast'

const obj = {};
context.keys().forEach((key) => {
  const countryCode = splitOnLast(key, '-').shift().split('./').pop()
    .substring(0, key.length - 6);
  obj[countryCode] = context(key);
});

export default obj;
