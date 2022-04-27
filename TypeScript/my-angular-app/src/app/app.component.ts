import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service'

@Component({
  selector: 'simple-message',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleMessageComponent implements OnInit {
  message?: string
  constructor(
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.messageService.getMessage().subscribe(response => 
      this.message = response.message
    )
  }
}
