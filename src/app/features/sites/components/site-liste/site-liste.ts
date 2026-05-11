import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from '../../services/site';

@Component({
  selector: 'app-site-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-liste.html'
})
export class SiteListeComponent implements OnInit {
  sites: any[] = [];

  constructor(private siteService: SiteService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.siteService.getSites().subscribe(data => {
      this.sites = data;
      this.cdr.detectChanges();
    });
  }
}
