export default function getStrapiMediaUrl(url) {
  if (url?.startsWith("/")) {
    return process.env.REACT_APP_API_BASE_URL + url;
  }
  return url;
}
