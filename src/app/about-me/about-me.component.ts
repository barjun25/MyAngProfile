import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  showAboutPopup = false;

  openAboutPopup() {
    this.showAboutPopup = true;
  }

  closeAboutPopup() {
    this.showAboutPopup = false;
  }
}
