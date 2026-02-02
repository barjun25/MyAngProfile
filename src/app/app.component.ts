import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showPrayaghPopup = false;
  showATSPopup = false;
  showDXCPopup = false;
  showEpicorPopup = false;

  openPrayaghPopup() {
    this.showPrayaghPopup = true;
  }

  closePrayaghPopup() {
    this.showPrayaghPopup = false;
  }

  openATSPopup() {
    this.showATSPopup = true;
  }

  closeATSPopup() {
    this.showATSPopup = false;
  }

  openDXCPopup() {
    this.showDXCPopup = true;
  }

  closeDXCPopup() {
    this.showDXCPopup = false;
  }

  openEpicorPopup() {
    this.showEpicorPopup = true;
  }

  closeEpicorPopup() {
    this.showEpicorPopup = false;
  }
}



