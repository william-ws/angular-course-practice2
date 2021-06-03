import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-ligne]',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() username: string | undefined;
  @Input() email: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
