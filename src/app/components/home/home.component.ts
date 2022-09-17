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
      "price": "$15",
      "benefits": [
        {"included": true, "benefit": "Authentication"},
        {"included": true, "benefit": "Analytics"},
        {"included": true, "benefit": "Performance Monitoring"},
        {"included": false, "benefit": "Cloud Messaging"},
        {"included": false, "benefit": "Remote Config"},
        {"included": false, "benefit": "A / B Testing"},
      ]
    },
    {
      "name": "Intermmediate",
      "price": "$20",
      "benefits": [
        {"included": true, "benefit": "Authentication"},
        {"included": true, "benefit": "Analytics"},
        {"included": true, "benefit": "Performance Monitoring"},
        {"included": true, "benefit": "Cloud Messaging"},
        {"included": false, "benefit": "Remote Config"},
        {"included": false, "benefit": "A / B Testing"},
      ]
    },
    {
      "name": "Professional",
      "price": "$35",
      "benefits": [
        {"included": true, "benefit": "Authentication"},
        {"included": true, "benefit": "Analytics"},
        {"included": true, "benefit": "Performance Monitoring"},
        {"included": true, "benefit": "Cloud Messaging"},
        {"included": true, "benefit": "Remote Config"},
        {"included": true, "benefit": "A / B Testing"},
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
