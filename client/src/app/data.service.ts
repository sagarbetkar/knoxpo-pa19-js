import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  createUser(data) {
    //return this.http.post('http://localhost:2611/api/v1/create', data);
    return this.http.post('api/v1/create', data);
  }

  getAllUser() {
    //return this.http.get('http://localhost:2611/api/v1/getAll');
    return this.http.get('api/v1/getAll');
  }

  deleteUser(id) {
    return this.http.delete(`/api/v1/delete/${id}`);
    //return this.http.delete(`http://localhost:2611/api/v1/delete/${id}`);
  }

  getUserById(id) {
    return this.http.get(`/api/v1/get/${id}`);
    //return this.http.get(`http://localhost:2611/api/v1/get/${id}`);
  }

  updateUser(data, id) {
    return this.http.put(`/api/v1/update/${id}`, data);
    //return this.http.put(`http://localhost:2611/api/v1/update/${id}`, data);
  }
  postWeather(data) {
    return this.http.post('/api/v1/weather', data);
    //return this.http.post('http://localhost:2611/api/v1/weather', data);
  }
}
