import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent  {
  result : String[]=['']
  constructor(private fb :FormBuilder){}


   contactForm = this.fb.group({

     firstName:['',[Validators.required, Validators.minLength(3)]],
     lastName:['',[Validators.required, Validators.minLength(3)]],
     email:['',[Validators.required, Validators.email]],
     subject:['',[Validators.required]],
     message:['',[Validators.required,Validators.maxLength(500),Validators.minLength(3)]]

   })

   get firstName(){ return this.contactForm.get('firstName') as FormControl}
   get lastName(){ return this.contactForm.get('lastName') as FormControl}
   get email(){ return this.contactForm.get('email') as FormControl}
   get subject(){ return this.contactForm.get('subject') as FormControl}
   get message(){ return this.contactForm.get('message') as FormControl}
   



 onSub(){
   console.log(this.contactForm)
  this.result=[`Ditt meddelande har skickats from   `+ this.email.value ]
  // this.firstName.setValue('')
  // this.lastName.setValue('')
  // this.email.setValue('')
  // this.subject.setValue('')
  // this.message.setValue('')
 }
  
}