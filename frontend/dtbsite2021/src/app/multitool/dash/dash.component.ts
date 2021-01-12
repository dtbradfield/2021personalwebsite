import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy {

  top: string = '';
  left: string = '';
  expand: boolean = false;
  loading: boolean = false;
  routeSub: any = '';
  routeParams: any = '';
  startBlank: boolean = true;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.routeSub = this.route.queryParams.subscribe(params => {
      this.routeParams = params;
    })
    if (Object.keys(this.routeParams).length === 0 && this.router.url === '/multitool') {
      this.startBlank = true;
    } else if (Object.keys(this.routeParams).length !== 0 && this.router.url === '/multitool') { // TO DO: handle endpoints to load the dash with the correct components
      this.startBlank = false; //also find which screen is needed here

    } else {//this means the route url will be providing us with the info we need to load up the components

    }
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

  ngOnDestroy(): void {

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