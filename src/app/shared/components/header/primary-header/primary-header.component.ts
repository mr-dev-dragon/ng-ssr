import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss'],
})
export class PrimaryHeaderComponent {
  @ViewChild('mySidenav') !mySidenav:any 

  openNav() {
  this.mySidenav.style.width = '250px';
  }

  closeNav() {
  this.mySidenav.style.width = '0';
  }
}
