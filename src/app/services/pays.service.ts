import { NodeWithI18n } from '@angular/compiler';
import { Injectable, ɵgetDebugNodeR2 } from '@angular/core';
import { Langue } from '../model/langue.model';
import { Pays } from '../model/pays.model';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLLang } from '../config';
import { LangueWrapper } from '../model/langueWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PaysService {
  
  pays! : Pays[];
  langues! : Langue[];
  //payss! : Pays;
  constructor(private http : HttpClient) { 
    
     }

  listePays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(apiURL);
  }

  ajouterPays(p : Pays): Observable<Pays> {
    return this.http.post<Pays>(apiURL, p, httpOptions);
  }

  supprimerPays(id : number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterPays(id: number): Observable<Pays> {
    const url = `${apiURL}/${id}`; 
    return this.http.get<Pays>(url);
  }
  updatePays(p: Pays) {
   return this.http.put<Pays>(apiURL, p, httpOptions);
  }

  /*trierPays() {
    this.pays = this.pays.sort((n1,n2) => {
      if (n1.idPays > n2.idPays) {
        return 1;
      }
      if (n1.idPays < n2.idPays) {
        return -1;
      }
      return 0;
      });
  }*/

  listeLangue():Observable<LangueWrapper> {
    return this.http.get<LangueWrapper>(apiURLLang);
  }

  consulterLangue(id:number):Langue {
    return this.langues.find(lang => lang.idLang == id)!;
  }

  rechercheParLangue(idLang: number): Observable<Pays[]>{
    const url = `${apiURL}/payslang/${idLang}`;
    return this.http.get<Pays[]>(url);
  }

  rechercheParNom(nom: string):Observable<Pays[]> {
    const url = `${apiURL}/paysByName/${nom}`;
    return this.http.get<Pays[]>(url);
  }

}
