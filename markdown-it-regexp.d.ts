declare module 'markdown-it-regexp' {
  interface Utils {
    escape(html: string): string;
  }

  interface Replacer {
    (match: RegExpMatchArray, utils?: Utils): string;
  }

  interface Plugin {
    (regexp: RegExp, replacer: Replacer): Plugin;
  }

  const Plugin: Plugin;

  export = Plugin;
}

declare module 'markdown-it-regexp/lib/utils' {
  export function escape(html: string): string;
}