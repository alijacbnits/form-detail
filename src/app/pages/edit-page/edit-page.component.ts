import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostType } from 'src/app/services/post';
import { getDetails, updatePost } from 'src/app/services/post.service';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  form: FormGroup; 
  id = 0;
  post: PostType[] = [];
  showErrors = false;
  selectedLanguage:any=[];
  Countries: any[] = [
    {
      id: 1, name: 'India'
    },
    {
      id: 2, name: 'Bangalore'
    },
    {
      id: 3, name: 'Delhi'
    }
  ]


  Languages = [
    {
      id: 1, 
      name: 'Bengali'

    },
    {
      id: 2, 
      name: 'English'
    },
    {
      id: 3, 
      name: 'Hindi'
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^((\\+91-?)|0)?[0-9]{10}$"))]),
      country: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      selectedLanguage : new FormControl([],Validators.required)
    })
   }
  //  CountriesSelected: {value: string, text: string} = {'value':'', 'text':''};
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.post = getDetails(this.id);
    this.form.get('selectedLanguage')?.patchValue(this.post[0].languages);
    this.selectedLanguage =  this.post[0].languages;
    // console.log(this.post)
  }

  onSelectLanguage(event: any) {
    if(event.target.checked) {
      this.selectedLanguage.push(event.target.value as string);
    } else {
      const index = this.selectedLanguage.findIndex((e:string) => e === event.target.value);
      if(index > -1){
        this.selectedLanguage.splice(index,1);
      }
    }

    this.form.get('selectedLanguage')?.patchValue(this.selectedLanguage);
  }

  // updateItem() {
  //   updatePost(this.form.value,this.id);
  //   this.router.navigateByUrl('post/list');
  // }
  
  validate() {
    this.showErrors = true;
    return this.form.valid;
  }

  updateItem() {
    if(this.validate()) {
      updatePost(this.form.value,this.id);
      this.router.navigateByUrl('post/list');
      // console.log("data",this.form.value);
    }
    // return;
    
  }
}
