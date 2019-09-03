import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from "@angular/forms";
import { GetComponent } from './get/get.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { PostComponent } from './post/post.component';

const appRoutes : Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent
  },
  {
    path: 'get',
    component: GetComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: '',
    component: HelloWorldComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HelloWorldComponent,
    GetComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
