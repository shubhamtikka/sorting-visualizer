import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem, compare } from 'src/Model/SortItem';
import { swap, swapAsync } from './SwapSortItem';

export async function insertionSort(list: SortItem[], delay: number) {
  let N = list.length;

  let small_item: SortItem;

  for (let i = 0; i < N; i++) {
    small_item = list[i];
    small_item.smallest = true;

    for (let j = i + 1; j < N; j++) {
      list[j].active = true;
      await sleep(delay);
      small_item.smallest = false;
      small_item = compare(list[j], small_item) ? small_item : list[j];
      small_item.smallest = true;
      list[j].active = false;
      //await sleep(delay);
    }

    /*
    list[i].swapping = true;
    small_item.swapping = true;
    await sleep(delay);
    */
    await swapAsync(list[i], small_item, delay);
    small_item.smallest = false;
    list[i].sorted = true;
    await sleep(delay);
    /*
    list[i].swapping = false;
    small_item.swapping = false;
    await sleep(delay);
    */
  }
}
