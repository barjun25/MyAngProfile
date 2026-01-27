import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { BirthdayProjectComponent } from './birthday-project/birthday-project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.css'
})
export class AppComponent {
  @Input({ required: true }) link!: string;
  showPrayaghPopup = false;
  showATSPopup = false;
  showDXCPopup = false;
  showEpicorPopup = false;

  get elementLink() {
    this.link = '<app-birthday-project />';
    return this.link;
  }

  onBiPrClick() {
  }

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


