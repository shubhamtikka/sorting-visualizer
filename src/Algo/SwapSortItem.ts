import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem } from 'src/Model/SortItem';

export function swap(a: SortItem, b: SortItem) {
  let temp = a.value;
  a.value = b.value;
  b.value = temp;
}

export async function swapAsync(a: SortItem, b: SortItem, delay: number) {
  a.swapping = true;
  b.swapping = true;
  await sleep(delay);
  let temp = a.value;
  a.value = b.value;
  b.value = temp;
  await sleep(delay);
  a.swapping = false;
  b.swapping = false;
}
