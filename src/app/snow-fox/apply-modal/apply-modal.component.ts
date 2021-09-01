import { NotificationService } from './../../SHARED/services/notification/notification.service';
import { UsersService } from '../../SHARED/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';



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
    private notificationService: NotificationService,
    private router: Router,
    public dialogRef: MatDialogRef<ApplyModalComponent>


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

  registerUser(){
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }else{
      this.spinner.show()
      console.log(this.signupForm.value)
      this.usersService.register(this.signupForm.value).subscribe((resp:any)=>{
        console.log(resp)
        if(resp.status == 200){
          this.spinner.hide()
          this.router.navigate(['snowFox/benefits'])
          this.dialogRef.close();          
          this.notificationService.showSuccess(resp.message, "success")
        }else{
          this.spinner.hide()
          this.dialogRef.close();          
          this.notificationService.showWarning(resp.message, "error")
          this.signupForm.reset()
        }
      },(err=>{
        this.notificationService.showWarning("Error", "error")
        this.spinner.hide()
        console.log(err)
      }))
    }
  }
}
