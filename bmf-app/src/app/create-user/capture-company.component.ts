import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'company',
  templateUrl: './capture-company.component.html',
  styleUrls: ['./capture-company.component.css']
})

export class CompanyRegistrationComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(){}

  gotoUpload(): void {
    this.router.navigate(['/upload']);
  }
}
