import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'upload',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})

export class UploadDocumentsComponent implements OnInit{
  @ViewChild('fileInput') fileInput;

  constructor(private router: Router){}
  ngOnInit(){}

  doUpload(){

    let fileBrowser = this.fileInput.nativeElement;

    if(fileBrowser.files && fileBrowser.files[0]){
      const formData = new FormData();

      formData.append("image", fileBrowser.files[0]);
      //do stuff from the Service to upload file
    }

  }

}
