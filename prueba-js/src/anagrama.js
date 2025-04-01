export default (word1, word2) => {
  const value1 = word1 ?? "";
  const value2 = word2 ?? "";

  if (value1.length !== value2.length) {
    return false;
  }

  const value1Array = Array.from(value1.toLowerCase().trim());
  const value2Array = Array.from(value2.toLowerCase().trim());

  return value1Array.sort().join('') === value2Array.sort().join('');
};
