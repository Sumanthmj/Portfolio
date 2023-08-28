import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':increment, :decrement', [
            style({ opacity: 0, scale: 0.7}),
            animate('500ms ease-out', style({ opacity: 1, scale: 1}))
      ])
    ])
  ]
})

export class CertificatesComponent implements OnInit {
  certificates: any = [];
  currentPage: number = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.certificates = this.profileService.getCertificates();
  }
}
