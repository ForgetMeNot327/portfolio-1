export const changeValue = (start, end, scrollLimit, state, setState) => {
  if (state) return end;
  if (window.scrollY < scrollLimit) {
    return start;
  } else if (window.scrollY > scrollLimit) {
    setState(true);
    return end;
  }
};
