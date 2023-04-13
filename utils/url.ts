import { ParsedUrlQuery, parse as parseQuery } from 'querystring';
import { UrlObject, parse as parseUrl } from 'url';

export function toUrlObject(href: string | UrlObject): UrlObject {
  return typeof href === 'string' ? parseUrl(href) : href;
}

export function presetQuery(url: UrlObject, query: ParsedUrlQuery): UrlObject {
  return { ...url, query: { ...query, ...parseQueryInput(url.query) } };
}

export function parseQueryInput(query: UrlObject['query']) {
  return typeof query === 'string' ? parseQuery(query) : query;
}

export function getHost() {
  return `${global.location?.protocol}//${global.location?.host}/`;
}
