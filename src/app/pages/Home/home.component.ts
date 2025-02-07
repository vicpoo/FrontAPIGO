import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoginOpen = false;
  inputUsuario = "";
  inputContrasena = "";

  constructor(private router: Router) {}

  openLogin() {
    this.isLoginOpen = true;
  }

  closeLogin() {
    this.isLoginOpen = false;
  }

  login() {
    if (this.inputUsuario === "jefe" && this.inputContrasena === "117") {
      alert("Inicio de sesión exitoso");
      this.router.navigate(['/menu']);
    } else {
      alert("Credenciales incorrectas");
    }
  }
}
