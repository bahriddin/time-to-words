const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles straight o\'clock', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles 15 - 5:15', () => {
    const timeInWords = convertTimeToWords('5:15');
    expect(timeInWords).toBe('quarter past five');
  });

  it('Handles minutes before 30', () => {
    expect(convertTimeToWords('2:03')).toBe('three past two');
    expect(convertTimeToWords('3:11')).toBe('eleven past three');
  });

  it('Handles times after 30 mins - 2:45', () => {
    expect(convertTimeToWords('0:45')).toBe('quarter to one');
    expect(convertTimeToWords('2:40')).toBe('twenty to three');
    expect(convertTimeToWords('11:56')).toBe('four to midday');
    expect(convertTimeToWords('2:33')).toBe('twenty seven to three');
    expect(convertTimeToWords('2:55')).toBe('five to three');
  });
});
