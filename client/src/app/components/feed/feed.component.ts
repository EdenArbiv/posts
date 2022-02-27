import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(public _data:DataService, public router:Router) { }

  ngOnInit(): void {
    this._data.getData()
  }

  addPost(){
    this.router.navigate(['/addpost']);
  }
}
