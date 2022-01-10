import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usertlist',
  templateUrl: './usertlist.page.html',
  styleUrls: ['./usertlist.page.scss'],
})
export class UsertlistPage implements OnInit {

characters = [];
  
  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe (res => {
      console.log(res);
      this.characters = res.results;
    })
    
  }

}
