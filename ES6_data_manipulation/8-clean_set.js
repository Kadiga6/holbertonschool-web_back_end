export default function cleanSet(set, starString) {
  if (typeof starString !== 'string' || starString.length === 0) {
    return '';
  }
  const filteredArray = Array.from(set).filter((value) => value.startsWith(starString));
  const cleanedArray = filteredArray.map((value) => value.slice(starString.length));
  return cleanedArray.join('-');
}
