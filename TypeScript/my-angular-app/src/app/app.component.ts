import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-message',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  message?: string
  ngOnInit() {
    this.message = 'No messages, yet'
  }
}
