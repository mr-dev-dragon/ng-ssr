import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {


  @HostBinding('class.dark-mode') darkMode = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
