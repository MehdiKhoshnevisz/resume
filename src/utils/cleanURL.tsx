export default function cleanURL(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "");
}
