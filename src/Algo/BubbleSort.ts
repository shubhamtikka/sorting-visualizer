import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem } from 'src/Model/SortItem';
import { swap, swapAsync } from './SwapSortItem';

export async function bubbleSort(list: SortItem[], delay: number) {
  let N = list.length;
  var i, j;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N - i - 1; j++) {
      list[j].active = true;
      await sleep(delay);
      if (list[j].value > list[j + 1].value) {
        //list[j + 1].active = true;
        //await sleep(delay);
        swap(list[j], list[j + 1]);
        //await sleep(delay);
        //list[j + 1].active = false;
      }
      list[j].active = false;
    }
    list[j].sorted = true;
    await sleep(delay);
  }
}
