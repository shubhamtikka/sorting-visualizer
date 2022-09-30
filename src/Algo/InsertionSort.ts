import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem, compare } from 'src/Model/SortItem';
import { swap } from './SwapSortItem';

export async function insertionSort(list: SortItem[], delay: number) {
  let N = list.length;
  let small_item: SortItem;
  for (let i = 0; i < N; i++) {
    small_item = list[i];
    for (let j = i + 1; j < N; j++) {
      list[j].active = true;
      await sleep(delay);
      small_item = compare(list[j], small_item) ? small_item : list[j];
      list[j].active = false;
      await sleep(delay);
    }
    swap(list[i], small_item);
    // small_item.active = true;
    await sleep(delay);
  }
}
