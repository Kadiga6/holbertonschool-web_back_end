export default function updateUniqueItems(map1) {
  if (!(map1 instanceof Map)) {
    throw new Error('Cannot process');
  }
  map1.forEach((value, key) => {
    if (value === 1) {
      map1.set(key, 100);
    }
  });
}
