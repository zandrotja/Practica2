import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id:any;
  post:any;

  constructor(private route: ActivatedRoute, private servicePost:PostService) {

   }

  ngOnInit(): void {
    this.route.params.subscribe((routeparam) =>{
      this.ConseguirPostPorId(routeparam['id']);

    })


  }

  ConseguirPostPorId(id: any){
    this.servicePost.listarPostById(id).subscribe((data:any)=>{
      this.post =data;


    })

  }

}
