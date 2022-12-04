import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Langue } from '../model/langue.model';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html'
})
export class UpdatePaysComponent implements OnInit {
  currentPays = new Pays();
  langues! : Langue[];
  updatedLangId! : number;
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private paysService: PaysService ) {}
  ngOnInit(): void {

    this.paysService.listeLangue().subscribe(langs => { this.langues = langs._embedded.langues;
      console.log(langs); });
    

    this.paysService.consulterPays(this.activatedRoute.snapshot.params['id']).subscribe(p => { this.currentPays = p ;
    this.updatedLangId = this.currentPays.langue.idLang;
  });
    console.log(this.currentPays);
  }

  updatePays() {
    this.currentPays.langue = this.langues.find(lang => lang.idLang == this.updatedLangId)!;
    this.paysService.updatePays(this.currentPays).subscribe(p => {
      this.router.navigate(["pays"]);
    });
    
  }

}
