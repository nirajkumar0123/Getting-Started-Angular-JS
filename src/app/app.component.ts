import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imageUrl = 'assets/logo.jpg'; // Ensure this file exists in src/assets/
  url = 'https://www.bridgelabz.com';

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank');
  }
}