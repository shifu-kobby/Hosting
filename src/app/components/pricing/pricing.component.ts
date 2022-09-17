import { Component, Input, OnInit } from '@angular/core';
import { Benefit } from 'src/app/models';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  @Input() name: String = "";
  @Input() price: String = "";
  @Input() benefits: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
