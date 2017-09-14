import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../services/user'

@Component({
  selector: 'shareholders',
  templateUrl: './capture-shareholders.component.html',
  styleUrls: ['./capture-shareholders.component.css']
})

export class ShareholdersRegistrationComponent {


  name: string;
  services: Array<string>;
  model = new User(18,'Dr','Peter','Lord','Head',78,'Male','Service');

  submitted = false;

  constructor(private router:Router){
    this.services =  ['Plumbing', 'Electrical', 'Tiling', 'Decking'];
  }

  callName(){
    this.name = 'Hi There';
  }

  onSubmit(){this.submitted = true}

  get diagnostic(){return JSON.stringify(this.model)}



 /*   this.rForm.get('gender').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }*/

  /*addPost(post){
    this.surname = post.surname;
    this.surname = post.surname;
    this.position = post.position;
    this.id_number = post.id_number;
    this.title = post.title;

  }*/

  gotoCompany(): void {
    this.router.navigate(['/company']);
  }
}
