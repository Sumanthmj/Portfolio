import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  config: any;
  certificates: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.certificates = this.profileService.getCertificates();
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: this.certificates.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
