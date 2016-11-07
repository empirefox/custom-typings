declare module 'timeago.js' {
  interface Timeago {
    new (nowDate: string, defaultLocale: string): Timeago;
    format(value: Date | number, locale?: string): string;
  }

  const Timeago: Timeago;

  export = Timeago;
}