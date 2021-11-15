import type { IBaseDoc } from './IBaseDoc';
import type { IDataOption } from './IDataOption';

export type IItemPayload<T extends IBaseDoc> = {
  readonly error?: string;
  readonly info?: string;
  readonly result?: boolean;
  readonly dataoptions?: readonly IDataOption[];
  readonly items?: readonly T[];
  readonly item?: T;
  readonly prev?: T;
  readonly page?: number;
  readonly itemsCount?: number;
  readonly pagesCount?: number;
  readonly pageSize?: number;
  readonly filter?: Record<string, unknown>;
  readonly field?: string;
  readonly value?: unknown;
  readonly genre?: unknown;
  readonly id?: string;
  //
}; // interface IItemPayload<T>
