import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = "jefe";
  contrasena: string = "117";  
  inputUsuario: string = "";
  inputContrasena: string = "";  

  constructor(private router: Router) {}

  login() {
    if (this.inputUsuario === this.usuario && this.inputContrasena === this.contrasena) {
      this.router.navigate(['/menu']);
    } else {
      alert("Credenciales incorrectas");
    }
  }
}
