import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAllUser().subscribe((data) => (this.users$ = data['data']));
  }
}
