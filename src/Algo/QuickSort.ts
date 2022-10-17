import { sleep } from 'src/app/sorting-visualizer/sorting-visualizer.component';
import { SortItem } from 'src/Model/SortItem';
import { randomIntFromInterval } from './randomIntFromInterval';
import { swap, swapAsync } from './SwapSortItem';

export async function quickSort(list: SortItem[], delay: number) {
  await quickSortRec(list, 0, list.length - 1, delay);
  list.forEach((item) => (item.sorted = true));
}

async function quickSortRec(
  arr: SortItem[],
  start: number,
  end: number,
  delay: number
) {
  if (start < end) {
    let pIndex = await partition(arr, start, end, delay);
    if (pIndex > start) {
      await quickSortRec(arr, start, pIndex - 1, delay);
    }
    if (pIndex < end) {
      await quickSortRec(arr, pIndex, end, delay);
    }
  }
}

async function partition(
  arr: SortItem[],
  start: number,
  end: number,
  delay: number
) {
  let pIndex = randomIntFromInterval(start, end);

  let pivot: SortItem = arr[pIndex];

  //pivot.sorted = true;
  await sleep(delay);
  while (start < end) {
    // skip smaller in left
    while (start < end && arr[start].value <= pivot.value) {
      arr[start].active = true;
      await sleep(delay);
      arr[start].active = false;
      start++;
    }
    arr[start].active = true;

    // skip larger in right
    while (start < end && arr[end].value >= pivot.value) {
      arr[end].active = true;
      await sleep(delay);
      arr[end].active = false;
      end--;
    }
    arr[end].active = true;

    if (start < end) {
      //console.log(arr[start].value + ' ' + pivot.value);
      //arr[start].sorted = true;
      //arr[end].sorted = true;
      //await sleep(delay);
      await swapAsync(arr[start], arr[end], delay);
      //await sleep(delay);
      //arr[start].sorted = true;
      //arr[end].sorted = true;
    }
    arr[start].active = false;
    arr[end].active = false;
  }

  if (arr[start].value < pivot.value) {
    //console.log(arr[start].value + ' ' + pivot.value);
    /*arr[start].active = true;
    arr[pIndex].active = true;
    await sleep(delay); */
    await swapAsync(arr[pIndex], arr[start], delay);
    /*arr[start].active = false;
    arr[pIndex].active = false;
    //await sleep(delay); */
    //arr[start].sorted = true;
    //arr[pIndex].sorted = true;
  }
  //pivot.pivot = false;
  pivot.sorted = true;
  return start;
}
