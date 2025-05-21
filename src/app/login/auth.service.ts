import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  mostrarMenuEmmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true

      this.mostrarMenuEmmitter.emit(true)

      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmmitter.emit(false)
    }
  }

}
