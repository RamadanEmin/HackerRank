function getCount(objects) {
    return objects.filter(el => { return el.x === el.y }).length;
}

console.log(
    getCount([
      { x: 1, y: 1 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 5 }
    ]),
  );