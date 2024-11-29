import { Component } from '@angular/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component'; // Import StopwatchComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Standalone component
  imports: [StopwatchComponent], // Register StopwatchComponent here
})
export class AppComponent { }

