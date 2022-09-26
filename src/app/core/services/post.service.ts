import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:any;

  constructor(private http: HttpClient) { 

    this.url = environment.baseUrl+"posts"

  }

  listarUsuarios(){

    return this.http.get(this.url);

  }
  listarPostById(id:any){

    return this.http.get(this.url+"/"+id);

  }

  crearPost(formData:any){

    return this.http.post<any>(this.url,formData);

  }

}
