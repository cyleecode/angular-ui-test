import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './pages/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './materials/materials.module';
import { PostTargetIdComponent } from './pages/post-target-id/post-target-id.component';
import { SearchCommentsComponent } from './templates/search-comments/search-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostTargetIdComponent,
    SearchCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
