import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  top: string = '';
  left: string = '';
  expand: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousedown', ['$event']) onMDown() {
    this.expand = true;
  }

  @HostListener('document:mouseup', ['$event']) onMUp() {
    this.expand = false;
  }

  @HostListener('document:mousemove', ['$event']) onMousemove($event: any) {
    this.top = ($event.pageY - 10) + "px";
    this.left = ($event.pageX - 10) + "px";
  }

}
