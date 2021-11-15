// IBaseDoc.ts
//

import type { IAttachedDoc } from './IAttachedDoc';
import type { StatusType } from './StatusType';

//
export type IBaseDoc = {
  readonly _id: string;
  readonly _rev: string;
  readonly doctype: string;
  readonly observations?: string;
  readonly status?: StatusType;
  readonly ownerid?: string;
  readonly reptype?: string;
  readonly _attachments?: readonly IAttachedDoc[];
  readonly _loaded?: boolean;
  readonly _modified?: boolean;
  readonly _deleted?: boolean;
  readonly _storeable?: boolean;
  readonly _selected?: boolean;
  readonly _text?: string;
  readonly _linkfield?: string;
}; // interface IBaseDoc
