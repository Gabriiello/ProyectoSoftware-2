import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Incluye FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      const usuario = {
        email: loginForm.value.email,
        contraseña: loginForm.value.password
      };

      this.http.post('http://localhost:8080/api/auth/login', usuario).subscribe(response => {
        console.log('Usuario autenticado:', response);
        // Maneja la respuesta, muestra un mensaje de éxito o redirige al usuario
      }, error => {
        console.error('Error al autenticar usuario:', error);
        // Maneja el error, muestra un mensaje de error
      });
    }
  }
}
