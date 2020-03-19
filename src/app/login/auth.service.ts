import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  enviar(usuario: Usuario){
    if (usuario.email === 'mbw@hotmail.com' && usuario.senha === '123'){

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/Menu']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);

      window.alert("Usuário não autorizado");
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
