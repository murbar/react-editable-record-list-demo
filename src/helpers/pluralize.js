export default function pluralize(count, suffix = 's') {
  return count === 1 ? '' : suffix;
}
