import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage : string;
  formConfig: any = [
    {type:'text', name:'UserName', label:'User Name' , constraint: Validators.required},
    {type:'password', name:'passWord', label:'Password' , constraint: Validators.required}
  ];

  constructor(private service: ComponentCommunicationService, private builder: FormBuilder, private router: Router, 
    private route: ActivatedRoute) {
   this.loginForm = this.builder.group({});
  }

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.errorMessage = p['msg'];
    })
    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name, new FormControl('', {validators: element.constraint}));
    })
  }

  validate() {
    console.log (this.loginForm.controls.UserName.value);
    const uname = this.loginForm.controls.UserName.value;
    const pwd = this.loginForm.controls.passWord.value;
    if(uname ==='india' && pwd === 'india') {
      sessionStorage.setItem('logged', 'true');
      this.router.navigate(['policies']);
    }
    else{
      this.errorMessage ='Invalid User Name or password - Try Again';
    }
    this.service.changeMessage('logged');
  }
}
