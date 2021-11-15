// StatusType.ts

import type { IDataOption } from './IDataOption';

//
export enum StatusType {
  Unknown = 0,
  Persisted = 1,
  Tail = 2,
  Disabled = 3,
  Inserted = 4,
  Updated = 5,
  Deleted = 6,
  Info = 7,
  Normal = 8,
  Active = 9,
  Inactive = 10,
  Busy = 11,
  Closed = 12,
  Done = 13,
  Free = 14,
} // enum StatusType
export function GetStatusTypeOptions(): readonly IDataOption[] {
  const options: readonly IDataOption[] = [
    { value: '', name: '' },
    { value: '0', name: 'Unknown' },
    { value: '1', name: 'Persisted' },
    { value: '2', name: 'Tail' },
    { value: '3', name: 'Disabled' },
    { value: '4', name: 'Inserted' },
    { value: '5', name: 'Updated' },
    { value: '6', name: 'Deleted' },
    { value: '7', name: 'Info' },
    { value: '8', name: 'Normal' },
    { value: '9', name: 'Active' },
    { value: '10', name: 'Inactive' },
    { value: '11', name: 'Busy' },
    { value: '12', name: 'Closed' },
    { value: '13', name: 'Done' },
    { value: '14', name: 'Free' },
  ];
  return options;
} // get_status_options
export function StatusType2String(etype: StatusType): string {
  switch (etype) {
    case StatusType.Unknown:
      return '0';
    case StatusType.Persisted:
      return '1';
    case StatusType.Tail:
      return '2';
    case StatusType.Disabled:
      return '3';
    case StatusType.Inserted:
      return '4';
    case StatusType.Updated:
      return '5';
    case StatusType.Deleted:
      return '6';
    case StatusType.Info:
      return '7';
    case StatusType.Normal:
      return '8';
    case StatusType.Active:
      return '9';
    case StatusType.Inactive:
      return '10';
    case StatusType.Busy:
      return '11';
    case StatusType.Closed:
      return '12';
    case StatusType.Done:
      return '13';
    case StatusType.Free:
      return '14';
  } // etype
  return '0';
} // status_to_string
export function String2StatusType(s: string): StatusType {
  if (s) {
    const ss = s.trim();
    switch (ss) {
      case '1':
        return StatusType.Persisted;
      case '2':
        return StatusType.Tail;
      case '3':
        return StatusType.Disabled;
      case '4':
        return StatusType.Inserted;
      case '5':
        return StatusType.Updated;
      case '6':
        return StatusType.Deleted;
      case '7':
        return StatusType.Info;
      case '8':
        return StatusType.Normal;
      case '9':
        return StatusType.Active;
      case '10':
        return StatusType.Inactive;
      case '11':
        return StatusType.Busy;
      case '12':
        return StatusType.Closed;
      case '13':
        return StatusType.Done;
      case '14':
        return StatusType.Free;
      default:
        break;
    } // s
  } // ok
  return StatusType.Unknown;
} // string_to_status
export function ConvertStatusTypeToString(t: StatusType): string {
  switch (t) {
    case StatusType.Persisted:
      return 'Persisted';
    case StatusType.Tail:
      return 'Tail';
    case StatusType.Disabled:
      return 'Disabled';
    case StatusType.Inserted:
      return 'Inserted';
    case StatusType.Updated:
      return 'Updated';
    case StatusType.Deleted:
      return 'Deleted';
    case StatusType.Info:
      return 'Info';
    case StatusType.Normal:
      return 'Normal';
    case StatusType.Active:
      return 'Active';
    case StatusType.Inactive:
      return 'Inactive';
    case StatusType.Busy:
      return 'Busy';
    case StatusType.Closed:
      return 'Closed';
    case StatusType.Done:
      return 'Done';
    case StatusType.Free:
      return 'Free';
    default:
      break;
  } // t
  return `Unknown`;
} // convertStatusTypeToString
