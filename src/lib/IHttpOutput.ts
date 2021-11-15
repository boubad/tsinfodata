export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_MODIFIED = 304;
export const HTTP_ERROR = 400;
export const HTTP_NOT_FOUND = 404;
export const HTTP_SERVER_ERROR = 500;
//
export type IHttpOutput = {
  readonly status?: number;
  readonly headers?: Record<string, string> | Record<string, readonly string[]>;
  readonly body?:
    | Record<string, unknown>
    | readonly Record<string, unknown>[]
    | string
    | readonly string[]
    | number
    | boolean
    | ArrayBuffer
    | Blob;
}; // interface IInfoEndPointOutput
