const countState = (state) => {
  if (state <= 50) {
    return 0;
  }
  if (state <= 100) {
    return 1;
  }
  if (state <= 150) {
    return 2;
  }
  if (state <= 200) {
    return 3;
  }
  if (state <= 300) {
    return 4;
  }
  if (state > 300) {
    return 5;
  }
};
export default countState;
