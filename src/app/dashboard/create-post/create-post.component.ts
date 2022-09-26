import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private activeModal:NgbActiveModal,private postService:PostService,private modalService:NgbModal, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.postForm = this.formBuilder.group({
      title:['',[Validators.required]],
      body:['',[Validators.required]]
    });
  }
  registrar(){


    this.postService.crearPost(this.postForm.value).subscribe((data:any)=>{
      alert("registrado correctamente")
      this.activeModal.close(data);
    })

  }

}
