import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../flight-results/flight.results.model';

@Component({
  selector: 'app-flight-modal',
  templateUrl: './flight-modal.component.html',
  styleUrls: ['./flight-modal.component.scss']
})
export class FlightModalComponent {
  @Input() selectedFlight!: Flight;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
