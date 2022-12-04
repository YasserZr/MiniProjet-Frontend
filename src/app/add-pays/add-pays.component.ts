import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Langue } from '../model/langue.model';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html'
})
export class AddPaysComponent implements OnInit {
  newPays = new Pays();

  message :String | undefined ;

  langues!: Langue[];

  newIdLang!: number;
  newLang!: Langue;
  constructor(private paysService: PaysService, private router: Router) {}
  
  ngOnInit(): void {
    this.paysService.listeLangue().subscribe(langs => {
      this.langues = langs._embedded.langues;
      console.log(langs);
  });

  }

  addPays() {
    this.newPays.langue = this.langues.find(lang => lang.idLang == this.newIdLang)!;
    this.paysService.ajouterPays(this.newPays).subscribe(p => {
      console.log(p);
      this.router.navigate(["pays"]);
    })
    

  }

}
