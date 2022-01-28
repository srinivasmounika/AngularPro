import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    setTimeout(() => {
      console.log("i am oninit");
          }, 8000);
  
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      console.log("i am Afetr view checked");
          }, 7000);
    }
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log("AfterViewInit");
          }, 6000);
  
  }
  ngAfterContentChecked(): void {
    setTimeout(() => {
      console.log("i am AfterContentChecked");
          }, 5000);
  
  }
  ngAfterContentInit(): void {
    setTimeout(() => {
      console.log("i am AfterContentInit");
          }, 4000);
  
  }
  ngDoCheck(): void {
    setTimeout(() => {
      console.log("i am Docheck");
          }, 3000);
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      console.log("i am onchenges");
          }, 2000);
  
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("i am oninit");
          }, 1000);
  }

}
