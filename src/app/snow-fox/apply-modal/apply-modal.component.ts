import { NotificationService } from './../../SHARED/services/notification/notification.service';
import { UsersService } from '../../SHARED/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.scss']
})
export class ApplyModalComponent implements OnInit {
  public submitted = false; 
  signupForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private usersService: UsersService,
    private spinner: NgxSpinnerService,
    private notificationService: NotificationService


  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phonenumber: ['', [Validators.required, Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{11}\s*,?$')] ],
    })
  }

  get formControl() {
    return this.signupForm.controls;
  }

  // showSuccess() {
  //   this.notificationService.showWarning('Hello world!', 'Toastr fun!');
  //   this.spinner.show()
  // }

  registerUser(){
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }else{
      this.spinner.show()
      console.log(this.signupForm.value)
      this.usersService.register(this.signupForm.value).subscribe((resp:any)=>{
        console.log(resp)
        this.spinner.hide()
        this.notificationService.showSuccess(resp.message, "success")
        this.signupForm.reset()
        // location.reload()
      },(err=>{
        this.notificationService.showWarning("Error", "error")
        console.log(err)
      }))
    }
  }


}
