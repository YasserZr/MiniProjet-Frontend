import { Component, OnInit } from '@angular/core';
import { Langue } from '../model/langue.model';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-recherche-par-langue',
  templateUrl: './recherche-par-langue.component.html'
})
export class RechercheParLangueComponent implements OnInit {
  idLangue!: number;
  langues!: Langue[];
  pays!: Pays[];
  constructor(private paysService : PaysService) {}
  ngOnInit(): void {
    this.paysService.listeLangue().subscribe(langs => {
      this.langues = langs._embedded.langues;
      console.log(langs);
    });
  }

  onChange() {
    this.paysService.rechercheParLangue(this.idLangue).subscribe(p =>{this.pays = p});
  }
}
