import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'shareholders',
  templateUrl: './capture-shareholders.component.html',
  styleUrls: ['./capture-shareholders.component.css']
})

export class ShareholdersRegistrationComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(){}

  gotoCompany(): void {
    this.router.navigate(['/company']);
  }
}
