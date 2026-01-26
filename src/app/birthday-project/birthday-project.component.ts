import { Component, Output, EventEmitter, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-birthday-project',
  imports: [],
  templateUrl: './birthday-project.component.html',
  styleUrl: './birthday-project.component.css'
})

export class BirthdayProjectComponent {
  @Output() prClick = new EventEmitter();
  @Input({ required: true }) biComp!: string;

  onBiPrClick() {
    this.prClick.emit(this.biComp);
  }
}
