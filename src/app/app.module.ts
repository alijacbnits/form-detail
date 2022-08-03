import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    ViewPageComponent,
    EditPageComponent,
    ListPageComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
