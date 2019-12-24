import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('postArr') post;

  constructor() {
    console.info('I`m a constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit is run')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is run');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is run');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is run');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is run');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is run');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is run');
  }

  addNewValue() {
    this.post.newValue = 1;
  }

}
