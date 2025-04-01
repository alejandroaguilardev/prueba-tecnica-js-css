export default (json) => {
  const ages = json.reduce((value, current) => current.edad + value, 0);
  const length = json.length;

  return ages / length;
};
