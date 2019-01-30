import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  createUser(data) {
    return this.http.post('http://localhost:2611/api/v1/create', data);
  }

  getAllUser() {
    return this.http.get('http://localhost:2611/api/v1/getAll');
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:2611/api/v1/delete/${id}`);
  }
}
