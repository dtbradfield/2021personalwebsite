import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { RandomuserService } from './randomuser-service.service'

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.scss']
})
export class RandomuserComponent implements OnInit {
  @Output() dataLoaded = new EventEmitter<object>();
  userList: any = [];

  constructor(private rUService: RandomuserService) { }

  ngOnInit(): void {
    this.rUService.getUserData(15, 'female', 'rippindabs').subscribe((users: any) => {
      users['results'].forEach((user: any) => {
        this.userList.push(user);
      })
    })
    setTimeout(() => {
      this.dataLoaded.emit({
        loaded: true
      })
    }, 1000);
  }

}
