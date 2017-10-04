import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Company} from '../services/company';

@Component({
  selector: 'company',
  templateUrl: './capture-company.component.html',
  styleUrls: ['./capture-company.component.css']
})

export class CompanyRegistrationComponent implements OnInit{

  name: string;
  services: Array<string>;

  model = new Company(
    12,
  '10001JC/200502',
  'Mkhambeni Caterer',
    'BCS123TX',
    '42 Monte Carlo Str',
    'DBN',
    '3002',
    '0112343333',
    '0112340000',
    'pm@home.com',
    'Restaurant',
    this.services,
    '07h00-22h00'
  );

  submitted= false;


  constructor(private router: Router){}
  ngOnInit(){}

  onSubmit(){this.submitted = true}

  get diagnostic(){return JSON.stringify(this.model)}

  gotoUpload(): void {
    this.router.navigate(['/upload']);
  }
}
