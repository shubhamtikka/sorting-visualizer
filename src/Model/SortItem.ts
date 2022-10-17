export interface SortItem {
  value: number;
  active: boolean;
  swapping: boolean;
  finalrun: boolean;
  pivot: boolean;
  smallest: boolean;
  sorted: boolean;
}
export function compare(a: SortItem, b: SortItem): boolean {
  return a.value >= b.value ? true : false;
}
