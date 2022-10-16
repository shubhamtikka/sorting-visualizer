import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { compare, SortItem } from 'src/Model/SortItem';

export async function MergeSort(list: SortItem[], delay: number) {
  let aux = Array<SortItem>(list.length);

  mergeSortRec(0, list.length - 1);

  async function mergeSortRec(lo: number, hi: number) {
    if (hi <= lo) return;
    let mid = lo + Math.floor((hi - lo) / 2);
    await mergeSortRec(lo, mid);
    await mergeSortRec(mid + 1, hi);
    await merge(lo, mid, hi);
  }

  async function merge(lo: number, mid: number, hi: number) {
    for (let i = lo; i <= hi; i++) {
      aux[i] = list[i];
    }

    let j = lo;
    let k = mid + 1;

    for (let i = lo; i <= hi; i++) {
      list[i].active = true;
      await sleep(delay);
      if (j > mid) {
        list[i] = aux[k];
        k++;
      } else if (k > hi) {
        list[i] = aux[j];
        j++;
      } else if (compare(aux[j], aux[k])) {
        list[i] = aux[k];
        k++;
      } else {
        list[i] = aux[j];
        j++;
      }
      list[i].active = false;
      await sleep(delay);
    }
  }
}
