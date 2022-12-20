import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUser: User[] = [
    { id: 1, nome: 'Alessio', cognome: 'Rossi', dataDiNascita: '10/06/1987' },
    { id: 2, nome: 'Mario', cognome: 'Gialli', dataDiNascita: '11/07/1990' },
    { id: 3, nome: 'Luca', cognome: 'Verdi', dataDiNascita: '21/02/1983' },
    { id: 4, nome: 'Giacomo', cognome: 'Blu', dataDiNascita: '02/12/1998' },
    { id: 5, nome: 'Giovanni', cognome: 'Bianchi', dataDiNascita: '25/02/1996' },
    { id: 6, nome: 'Pippo', cognome: 'Marroni', dataDiNascita: '28/01/2001' },
    { id: 7, nome: 'Igor', cognome: 'Smeraldo', dataDiNascita: '10/06/1987' },
    { id: 8, nome: 'Flavio', cognome: 'Azzurro', dataDiNascita: '11/07/1990' },
    { id: 9, nome: 'Alessandro', cognome: 'Celeste', dataDiNascita: '21/02/1983' },
    { id: 10, nome: 'Aldo', cognome: 'Verdino', dataDiNascita: '02/12/1998' },
    { id: 11, nome: 'Claudio', cognome: 'Nero', dataDiNascita: '25/02/1996' },
    { id: 12, nome: 'Maurizio', cognome: 'Fucsia', dataDiNascita: '28/01/2001' },
  ];

  constructor() { }

  getUserList(): Observable<User[]>{
    return of(this.listaUser);
  }


  updateUser(user: User){
    this.listaUser = this.listaUser.map(ele => {
      if(ele.id === user.id){
        ele = {...user};
      }
      return ele;
    })
  }

  deleteUser(idUser: number){
    this.listaUser = this.listaUser.filter(ele => ele.id !== idUser);
  }

  aggiungiUser(user: User){
    user.id = this.listaUser.sort((a,b) => a.id - b.id).reverse()[0].id +1;
    this.listaUser.push(user);
  }


  getUserById(idUser: number): Observable<User | null>{
    const user = this.listaUser.find(ele => ele.id === idUser);
    if(user){
      return of(user);
    }
    return of(null);
  }
}
