import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
})
export class PaysComponent implements OnInit{
  
  pays? : Pays[];

  constructor(private paysService: PaysService) {
    //this.pays = this.paysService.listePays();
  }

  ngOnInit(): void {
    this.chargerPays();
  }

  chargerPays() {
    this.paysService.listePays().subscribe(p => {
      console.log(p);
      this.pays = p;
    });
  }

  deletePays(p: Pays) {
    let conf = confirm("etes-vous sûr?");
    if (conf) {
      this.paysService.supprimerPays(p.idPays).subscribe(() => {
        console.log("produit supprimé");
        this.chargerPays();
      })
    }
  }



  

}
