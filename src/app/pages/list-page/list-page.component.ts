import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostType } from 'src/app/services/post';
import { fetchList } from "../../services/post.service";
import { deleteList } from '../../services/post.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  list:any[] =[];

  name = '';
  email = '';
  phone = '';
  country = '';
  selectedLanguage:any = [];
  

  user: any = {};
  
  postList: PostType[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.postList = fetchList();
    console.log(this.postList,"list");

  }

  goToPage() {
    this.router.navigateByUrl('post/create');
  }

  deleteUser(id:Number) {
   deleteList(id);
   this.postList = fetchList();
  }
  
  
  editUser() {
    this.router.navigateByUrl('post/edit');
   }


}
