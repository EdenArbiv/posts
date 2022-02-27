import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public _data:DataService, public _fb:FormBuilder) { }

  ngOnInit(): void {
    this._data.getpostData(this._data.postData[0].id)
  }

  
  form:FormGroup =  this._fb.group({
    name:['', [Validators.required]],
    body:['', [Validators.required]]
  })

  like(id){
    this._data.newLike(id);
    this._data.opensnakebar('you like this post!','Dismiss');
    this._data.getpostData(id)
  }

  addComment(id, form){
    this._data.newComment(id, form)
    this._data.opensnakebar('comment uploaded!','Dismiss');
  }

  deletePost(id){
    this._data.deletePost(id)
    this._data.opensnakebar('post deleted!','Dismiss');
  }

}
