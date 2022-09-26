import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  post:any;
  constructor(private servicePost:PostService) { }

  ngOnInit(): void {
    this.Mostrar();
  }

  Mostrar(){

    this.servicePost.listarUsuarios().subscribe((data:any) => {
      this.post =data;
      console.log(this.post);
    })

  }

}
