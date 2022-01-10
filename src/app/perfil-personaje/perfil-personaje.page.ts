import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-perfil-personaje',
  templateUrl: './perfil-personaje.page.html',
  styleUrls: ['./perfil-personaje.page.scss'],
})
export class PerfilPersonajePage implements OnInit {

   perfilpersonajeId: string;
   character;
  constructor(
     private activedRoute: ActivatedRoute,
     private http: HttpClient
  ) { }

  ngOnInit() {
    this.perfilpersonajeId = this.activedRoute.snapshot.paramMap.get('id')
    this.http.get ('https://rickandmortyapi.com/api/character/' + this.perfilpersonajeId)
     .subscribe(res => this.character = res);
  }

}
