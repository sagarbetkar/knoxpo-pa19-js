import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  user: Object = {};
  constructor(private data: DataService) {}

  ngOnInit() {}

  onSubmit() {
    this.data.createUser(this.user).subscribe((data) => {
      if (data['message'] === 'User added successfully') {
        this.user = data;
        console.log('User added successfully');
      } else {
        console.log('User create failed');
      }
    });
  }
}
