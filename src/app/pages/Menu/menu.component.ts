import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }
} 