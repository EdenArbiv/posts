import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {

  constructor(public _data:DataService, public router:Router, public _fb:FormBuilder) { }

  form:FormGroup =  this._fb.group({
    name:['', [Validators.required]],
    title:['', [Validators.required]],
    image:['', [Validators.required]]
  })

  addPost(form){
    this._data.newPost(form)
    this._data.opensnakebar('post uploaded!','Dismiss');
  }


  
  ngOnInit(): void {
  }
  


}
