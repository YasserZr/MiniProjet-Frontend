import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  nomPays!: string;
  pays!: Pays[];
  allPays!: Pays[];
  searchTerm!: string;
  constructor(private paysService: PaysService) {}
  ngOnInit(): void {
    this.paysService.listePays().subscribe(p => {this.pays = p});
  }
  recherchePays() {
    this.paysService.rechercheParNom(this.nomPays).subscribe(p => this.pays= p);
  }
  onKeyUp(filterText: string) {
    this.pays = this.allPays.filter(item => item.nomPays.toLowerCase().includes(filterText));
  }

}
