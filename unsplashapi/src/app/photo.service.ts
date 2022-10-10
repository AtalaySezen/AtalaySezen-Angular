import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface callResponse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  subscribe: any;

  constructor(private http: HttpClient) { }
  getPhotos() {
    return this.http.get<callResponse>('https://api.unsplash.com/photos/random?client_id=cNbRKZMoX5x-tUWtZ4mBnGesM4ufULSp8MdG4YinpeE', {
    }
    );
  }








}
