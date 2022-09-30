import { SortItem } from 'src/Model/SortItem';

export function swap(a: SortItem, b: SortItem) {
  let temp = a.value;
  a.value = b.value;
  b.value = temp;
}
