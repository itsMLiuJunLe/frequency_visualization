export const getDate = () => {
  const date = +new Date() + 8 * 3600 * 1000;
  return new Date(date).toJSON().substr(0, 19).replace('T', ' ');
}