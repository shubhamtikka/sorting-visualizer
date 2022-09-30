import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem } from 'src/Model/SortItem';
import { swap } from './SwapSortItem';

export async function bubbleSort(list: SortItem[], delay: number) {
  let N = list.length;
  for (var i = 0; i < N - 1; i++) {
    for (var j = 0; j < N - i - 1; j++) {
      if (list[j].value > list[j + 1].value) {
        list[j].active = true;
        list[j + 1].active = true;
        await sleep(delay);
        swap(list[j], list[j + 1]);
        await sleep(delay);
        list[j].active = false;
        list[j + 1].active = false;
      }
    }
  }
}
