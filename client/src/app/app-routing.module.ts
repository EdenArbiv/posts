import { PostComponent } from './components/post/post.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { FeedComponent } from './components/feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component:FeedComponent },
  {path:"addpost", component:AddpostComponent },
  {path:":id", component:PostComponent },
  {path:"", redirectTo:"home", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
