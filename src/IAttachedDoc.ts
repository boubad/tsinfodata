// IAttachedDoc.ts
//
export type IAttachedDoc = {
  readonly content_type: string;
  readonly data?: string;
  readonly digest?: string;
  readonly encoded_length?: number;
  readonly encoding?: string;
  readonly length?: number;
  readonly revpos?: number;
  readonly stub?: boolean;
  readonly url?: string;
  readonly name?: string;
  readonly docid?: string;
  readonly imgData?: ArrayBuffer;
}; // interface IAttachedDoc
