import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl ("", [
    Validators.required,
    Validators.email
  ]);
  hide = true;

  public usuario : Usuario = new Usuario();

  constructor(public authService: AuthService) { 

  }

  ngOnInit(): void {
    
  }

  enviar(){
    this.authService.enviar(this.usuario);
  }
}
