import moment from 'moment';

const isDebug = process.env.NODE_ENV === 'debug';

console.log('Get to coding!');
console.log(`Debug mode: ${isDebug ? 'on' : 'off'}`);

export function titleCase (str) {
  const splitStr = str.toLowerCase().split('_');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

export function toDateString (timestamp) {
  return moment(timestamp).format('MMMM DD, YYYY');
}

