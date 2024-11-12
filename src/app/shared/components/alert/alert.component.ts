import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() ErrorMessage!:string;
  @Output() close = new EventEmitter<void>();
  // 3

  clickClose() {
    // 2
    this.close.emit();
  }
}
