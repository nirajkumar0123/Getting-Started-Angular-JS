import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloBridgeLabz';
  userName: string = ''; // ✅ Initialize userName
  imageUrl = 'assets/bridge_labz_logo.jpg';
  url = 'https://www.bridgelabz.com';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(): void {
    console.log('BridgeLabz Logo Clicked');
    window.open(this.url, '_blank');
  }
}
