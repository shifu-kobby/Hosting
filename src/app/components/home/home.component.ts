import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  packages: Package[] = [
    {
      "name": "Beginner",
      "price": "$20",
      "benefits": [
        { "included": true, "benefit": "One Free Website Host" },
        { "included": true, "benefit": "Limited Tools" },
        { "included": false, "benefit": "Personal Coach" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
