import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userprofileForm=new FormGroup({
    firstname:new FormControl('',Validators.required),
    lastname:new FormControl('',),
    email_id:new FormControl('',Validators.required)
  })
  onSubmit(){
    console.log(this.userprofileForm.value);
    console.log(this.userprofileForm.controls['firstname'].value)

  }
}
