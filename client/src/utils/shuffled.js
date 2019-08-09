function shuffled(arr) {
  const copy = [...arr];
  const outList = [];
  while (copy.length > 0) {
    const selection = Math.floor(Math.random() * copy.length);
    outList.push(...copy.splice(selection, 1));
  }
  return outList;
}

export default shuffled;