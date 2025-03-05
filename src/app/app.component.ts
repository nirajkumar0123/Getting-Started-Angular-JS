import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  imageUrl: string = 'assets/logo.jpg';
  url: string = 'https://www.bridgelabz.com';
  userName: string = '';
  nameError: string = '';

  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    this.nameError = namePattern.test(this.userName) ? '' : 'Incorrect Name!';
  }

  onClick(event: Event): void {
    console.log("Save button is clicked", event);
    window.open(this.url, "_blank");
  }

  onInput(event: Event): void {
    console.log("Change Event Occurred", event);
    this.validateUserName();
  }
}
