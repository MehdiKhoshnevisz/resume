export default function domainURL(url: string) {
  let newURL = new URL(url);
  return newURL.origin;
}
