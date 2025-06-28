export default function getFormattedDate(date) {
  if (date) return new Date(date).toISOString().slice(0, 10);
  else return "";
}
