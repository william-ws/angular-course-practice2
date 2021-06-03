import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.users = [];
    
    this.users.push({
      id: 1,
      username: 'nicole',
      email: 'niclo@gh.com'
    });

    this.users.push({
      id: 2,
      username: 'nice',
      email: 'nicffo@gh.com'
    });

    this.users.push({
      id: 3,
      username: 'nico',
      email: 'nic@gh.com'
    });

    this.users.push({
      id: 4,
      username: 'nico',
      email: 'nic@gh.com'
    });
  }

}
