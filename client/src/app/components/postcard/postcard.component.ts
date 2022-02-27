
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {

  constructor(public _data:DataService, public router:Router) { }

  @Input()
  post: any;

  ngOnInit(): void {
  }

  like(id){
    this._data.newLike(id);
    this._data.opensnakebar('you like this post!','Dismiss');
  }


}
