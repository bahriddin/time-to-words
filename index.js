// expecting time to be a string in the format like '8:15' or '12:30'

const HOUR_TO_WORD = {
  0: 'midnight',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'midday',
};

const MINUTE_NAMES = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
  30: 'half',
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  // Straight o'clock times
  const [hours, minutes] = time.split(':').map((word) => parseInt(word));
  if (minutes == 0) {
    return `${HOUR_TO_WORD[hours]} o'clock`;
  }

  // minutes <= 30
  if (minutes <= 30) {
    return `${MINUTE_NAMES[minutes]} past ${HOUR_TO_WORD[hours]}`;
  }
  return `${MINUTE_NAMES[60 - minutes]} to ${HOUR_TO_WORD[hours + 1]}`;
}

module.exports = { convertTimeToWords };
