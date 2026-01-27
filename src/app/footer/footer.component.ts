import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showContactPopup = false;
  showAboutPopup = false;
  email = 'barjun25@gmail.com';
  phone = '+91-9742321839';

  openContactPopup() {
    this.showContactPopup = true;
  }

  closeContactPopup() {
    this.showContactPopup = false;
  }

  openAboutPopup() {
    this.showAboutPopup = true;
  }

  closeAboutPopup() {
    this.showAboutPopup = false;
  }
}