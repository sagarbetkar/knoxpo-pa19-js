import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup, FormBuilder} from '@angular/forms';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user$: Object;
  userForm: FormGroup;
  id: String = '';
  name: String = '';
  email: String = '';
  mobile: String = '';
  job_title: String = '';
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe((params) => (this.user$ = params.id));
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      //id: [],
      name: [''],
      email: [''],
      mobile: [''],
      job_title: ['']
    });
    this.data.getUserById(this.user$).subscribe((data) => {
      this.id = data['data']['id'];
      this.userForm.setValue({
        name: data['data']['name'],
        email: data['data']['email'],
        mobile: data['data']['mobile'],
        job_title: data['data']['designation']
      });
    });
  }
}
