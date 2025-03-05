import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule] 
})
export class AppComponent {
  title = 'HelloBridgeLabz';
  userName: string = '';
  imageUrl = 'assets/logo.jpg';
  url = 'https://www.bridgelabz.com';

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz.';
  }

  onClick(): void {
    console.log('BridgeLabz Logo Clicked');
    window.open(this.url, '_blank');
  }
}
