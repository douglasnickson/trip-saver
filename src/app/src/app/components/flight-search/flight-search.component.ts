import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      origin: '',
      destination: '',
      departureDate: null,
      returnDate: null,
      tripType: 'roundTrip',
      paymentType: 'miles',
      travelers: 1
    });
  }

  onSubmit() {
    const formData = this.searchForm.value;
    console.log(formData); // You can now use formData to send data to APIs or other processes
  }
}
