import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Object;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.getAllUser().subscribe((data) => (this.users$ = data['data']));
  }

  onDelete(id) {
    this.data.deleteUser(id).subscribe((data) => {
      if (data['message'] === 'User deleted successfully') {
        this.ngOnInit();
        console.log('User deleted successfully');
      } else {
        console.log('User deletion failed');
      }
    });
  }
}
