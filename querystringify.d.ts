declare module 'querystringify' {
  export function stringify(obj: any, prefix?: string | boolean): string;
  export function parse(query: string): any;
}