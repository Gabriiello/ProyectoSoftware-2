import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule], // Incluye FormsModule aquí
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private http: HttpClient) {}

  onSubmit(registroForm: any) {
    if (registroForm.valid) {
      const nuevoUsuario = {
        nombre: registroForm.value['nombre'],
        email: registroForm.value.email,
        contraseña: registroForm.value.password,
        rol: 'USUARIO'
      };

      this.http.post('http://localhost:8080/api/auth/register', nuevoUsuario).subscribe(response => {
        console.log('Usuario registrado:', response);
        // Maneja la respuesta, muestra un mensaje de éxito o redirige al usuario
      }, error => {
        console.error('Error al registrar usuario:', error);
        // Maneja el error, muestra un mensaje de error
      });
    }
  }
}

