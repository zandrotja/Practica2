import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../core/services/post.service';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    post:any;
    closeResult="";
  constructor(private servicePost:PostService, private modalService:NgbModal) {

   }

  ngOnInit(): void {
    this.Mostrar();
  }

  Mostrar(){

    this.servicePost.listarUsuarios().subscribe((data:any) => {
      this.post =data;
      console.log(this.post);
    })

  }
  registrar(){
    this.modalService.open(CreatePostComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //algo pasa cuando se cierra el modal
      this.Mostrar();
    });
  }
  }
