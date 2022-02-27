import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import Comment from '../models/comment.model';
import Post from '../models/post.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(public router:Router,  public snakebar:MatSnackBar) { }

  postsArr: Post[] = [];
  commentsArr:Comment[]= [];
  postData: Post;

  opensnakebar(message, action){
    this.snakebar.open(message, action,{duration: 2000});
  }


  async getData(){
    const res = await fetch('http://localhost:1000/')
    const data = await res.json()
    console.log(data)
    this.postsArr = data;
  }

  async newPost(body:{post:Post}){
    const res = await fetch('http://localhost:1000/',{
      method:'POST',
      headers: { 'content-type':'application/json' },
      body: JSON.stringify(body)

    })
    const data = await res.json()
    console.log(data)
    this.router.navigate(['/home']);
  }

  async getpostData(id:number){
    const res = await fetch(`http://localhost:1000/${id}`)
    const data = await res.json()
    this.postData= data.post;
    this.commentsArr= data.comments;
    this.router.navigate([`/${id}`]);
  
  }

  async newComment(id:number,body:{comment:Comment}){
    const res = await fetch(`http://localhost:1000/${id}`,{
      method:'POST',
      headers: { 'content-type':'application/json' },
      body: JSON.stringify(body)

    })
    const data = await res.json()
    console.log(data)
    this.getpostData(data.id)
  }

  async deletePost(id:number){
    if(confirm('Are you sure you want to delete this post?')){
    const res = await fetch(`http://localhost:1000/${id}`,{
      method:'DELETE'
    })
    const data= await res.json()
    console.log(data.msg)
    this.router.navigate(['/home']);
  }}


  async newLike(id:number){
    const res = await fetch(`http://localhost:1000/${id}`,{
      method:'PUT',
      headers:{'Access-Control-Allow-Origin':'*'}
    })
    const data = await res.json()
    console.log(data)
    this.getData()
  }


}

