export default function getString(array, key) {
  return array.map(item => item[key]).join(', ');
}
