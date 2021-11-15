export type IDataUrlCreator = {
  readonly createUrl: (
    docid: string,
    attname: string,
    mimetype?: string,
    data?: Blob | ArrayBuffer
  ) => string | undefined;
}; // interface IDataUrlCreator
