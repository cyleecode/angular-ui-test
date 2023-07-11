import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostTargetIdComponent } from './pages/post-target-id/post-target-id.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostTargetIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
