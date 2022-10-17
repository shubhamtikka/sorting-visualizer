import { Component, OnInit } from '@angular/core';
import { Observable, from, Observer, fromEvent, of } from 'rxjs';
import { map, filter, delay, concatMap } from 'rxjs/operators';
import { bubbleSort } from 'src/Algo/BubbleSort';
import { insertionSort } from 'src/Algo/InsertionSort';
import { MergeSort } from 'src/Algo/MergeSort';
import { quickSort } from 'src/Algo/QuickSort';
import { randomIntFromInterval } from 'src/Algo/randomIntFromInterval';
import { SortItem } from 'src/Model/SortItem';
@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css'],
})
export class SortingVisualizerComponent implements OnInit {
  constructor() {}
  list: SortItem[] = [];
  listCopy: number[] = [];
  i: number = 0;

  ngOnInit(): void {
    this.generatenew();
  }

  arrayBars = document.getElementsByClassName(
    'array-bar'
  ) as HTMLCollectionOf<HTMLElement>;

  generatenew() {
    this.list = [];
    this.listCopy = [];
    this.i = 0;
    // this.min_idx = 0;
    /* for (let i = 0; i < 20; i++) {
      this.listCopy.push(randomIntFromInterval(100, 400));
    }

    let source = from(this.listCopy).pipe(
      concatMap((item) => of(item).pipe(delay(50)))
    );

    source.subscribe((x) => this.list.push(x));

    for (let i = 0; i < 20; i++) {
      this.arrayBars[i].style.backgroundColor = 'aqua';
    } */
    this.list = Array(20)
      .fill(null)
      .map(() => ({
        value: randomIntFromInterval(100, 400),
        active: false,
        finalrun: false,
        swapping: false,
        pivot: false,
        smallest: false,
        sorted: false,
      }));
  }

  test() {
    //insertionSort(this.list, 50);
    //bubbleSort(this.list, 50);
    //MergeSort(this.list, 50);
    quickSort(this.list, 50);
  }
}

class myObserver implements Observer<number> {
  next(value: any) {
    return Math.floor(Math.random() * (400 - 100 + 1) + 100);
  }
  error(e: any) {
    console.log(e);
  }
  complete() {
    console.log('complete');
  }
}

async function doSomething(list: any[]) {
  list[0].value = 300;
  list[1].value = 250;
  list[0].active = true;
  list[1].active = true;
  await sleep(500);
  list[3].value = 300;
  list[4].value = 250;
  list[3].active = true;
  list[4].active = true;
}
export function sleep(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms);
  });
}
