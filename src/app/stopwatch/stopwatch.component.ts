import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class StopwatchComponent {
  time: number = 0;
  isActive: boolean = false;
  isPaused: boolean = false;
  interval: any;
  currentYear: number = new Date().getFullYear();

  start() {
    if (!this.isActive || this.isPaused) {
      this.isActive = true;
      this.isPaused = false;
      this.interval = setInterval(() => {
        this.time += 10;
      }, 10);
    }
  }

  pause() {
    if (this.isActive && !this.isPaused) {
      this.isPaused = true;
      clearInterval(this.interval);
    }
  }
  reset() {
    this.isActive = false;
    this.isPaused = false;
    this.time = 0;
    clearInterval(this.interval);
  }

  formatTime(): string {
    const milliseconds = String(Math.floor((this.time % 1000) / 10)).padStart(2, '0');
    const seconds = String(Math.floor((this.time / 1000) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((this.time / (1000 * 60)) % 60)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
