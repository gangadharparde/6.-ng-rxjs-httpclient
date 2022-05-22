import { Component, OnInit, VERSION } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'gd-observable',
  template: 'Check the console for observer log',
})
export class RxJsComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  //Demo1- Basics of Observable
  obs = new Observable(observer => {
    console.log('Demo1 - Observable starts');
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);
  });

  ngOnInit() {
    this.obs.subscribe({
      next: (v) => console.log("Demo1 - " + v),
      error: (e) => console.error("Demo1 - " + e),
      complete: () => console.info("Demo1 - " + 'complete')
    });

    // Demo2- Promise emits a single value while Observable can emit multiple values.
    this.promiseandobservable();

    // Demo3- An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.
    // Demo3- Here multicast means that the Observable execution is shared by multiple Observers.
    this.rxjssubject();

    //Demo4 - It used to temporarily store the current data value of any observer declared before it.
    this.rxjsBehaviorSubject();

    //Demo5 - Replay Subject provides a option to choose how many values we want to emit from the last observer. This subject stores and then passes the last specificed option values to the new observer.
    this.rxjsReplaySubject();

    //Demo6 - A Async Subject emits the last value to observers when the sequence is completed.
    this.rxjsAsyncSubject();
  }

  private promiseandobservable() {
    console.log("Demo2 - Promise emits a single value while Observable can emit multiple values.");
    const promise2 = new Promise((data) => {
      data(1);
      data(2);
      data(3);
    }).then(element => console.log('Demo2 - Promise ' + element));
    // Logs:
    // Promise 1
    const observable2 = new Observable((data) => {
      data.next(1);
      data.next(2);
      data.next(3);
    }).subscribe(element => console.log('Demo2 - Observable ' + element));
  }

  private rxjssubject() {
    console.log("Demo3 - An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.");
    console.log("Demo3 - Here multicast means that the Observable execution is shared by multiple Observers.");
    const subject = new Subject();
    //First Observer
    subject.subscribe({
      next: (data) => console.log('Demo3 - First observer prints ' + data)
    });
    subject.next(1);
    //Second Observer
    subject.subscribe({
      next: (data) => console.log('Demo3 - Second observer prints ' + data)
    });
    subject.next(34);
    subject.next(14);
  }


  private rxjsBehaviorSubject() {
    console.log("Demo4 - It used to temporarily store the current data value of any observer declared before it.");
    const subject = new BehaviorSubject(0);
    //First Observer
    subject.subscribe({
      next: (data) => console.log('Demo4 - First observer prints ' + data)
    });
    subject.next(1111);
    subject.next(2222);
    //Second Observer
    subject.subscribe({
      next: (data) => console.log('Demo4 - Second observer prints ' + data)
    });
    subject.next(3333);
  }

  private rxjsReplaySubject() {
    console.log("Demo5 - Replay Subject provides a option to choose how many values we want to emit from the last observer. This subject stores and then passes the last specificed option values to the new observer.");
    const subject = new ReplaySubject(2);
    //First Observer
    subject.subscribe({
      next: (data) => {
        return console.log('Demo5 - First observer prints ' + data);
      }
    });
    subject.next(1111);
    subject.next(2222);
    //Second Observer
    subject.subscribe({
      next: (data) => {
        return console.log('Demo5 - Second observer prints ' + data);
      }
    });
    subject.next(3333);
  }

  private rxjsAsyncSubject() {
    console.log("Demo6 - A Async Subject emits the last value to observers when the sequence is completed.");
    const subject = new AsyncSubject();
    //First Observer
    subject.subscribe({
      next: (data) => console.log('Demo6 - First observer prints ' + data)
    });
    subject.next(1);
    subject.next(2);
    //Second Observer
    subject.subscribe({
      next: (data) => console.log('Demo6 - Second observer prints ' + data)
    });
    subject.next(3);
    subject.complete();
  }

}
