export default function getQueryByName(url: string, name: string): string | null {
  var reg = new RegExp("[?&]" + name + "=([^&#]+)");
  var query = url.match(reg);
  return query ? query[1] : null;
}
