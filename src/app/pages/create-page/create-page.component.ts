import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { createPost } from "../../services/post.service";
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
 
  item:any[] = [];
  showErrors = false;

  list:any[] =[];

  name = '';
  email = '';
  phone = '';
  country = '';
  gender = '';
  selectedLanguage:any = [];
  user: any = {};
  
  Countries: any[] = [
    {
      id: 1, 
      name: 'India'
    },
    {
      id: 2, 
      name: 'Bangalore'
    },
    {
      id: 3, 
      name: 'Delhi'
    }
  ]

  Languages: any[] = [
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

  form: FormGroup; 
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      email: new FormControl("",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl("",[Validators.required, Validators.pattern(new RegExp("^((\\+91-?)|0)?[0-9]{10}$"))]),
      country: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      selectedLanguage : new FormControl([],Validators.required)
    })
   }
   

  ngOnInit(): void {
  }

  validate() {
    this.showErrors = true;
    return this.form.valid;
  }

  submit() {
    if(this.validate()) {
      createPost(this.form.value);
      this.router.navigateByUrl('post/list');
      // console.log("data",this.form.value);
    }
    // return;
    
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

//  fork, observable,promise resolve 
}
