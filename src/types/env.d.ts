export { }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LAT: string,
        NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LNG: string,
        NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string
    }
  }
}