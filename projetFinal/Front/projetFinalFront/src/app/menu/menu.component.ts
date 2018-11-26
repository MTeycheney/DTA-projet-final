import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import { FormBuilder } from '@angular/forms';
import { ListeProduitsService } from '../liste-produits.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuGlobal: MenuItem[];
  pageActuelle: MenuItem;

  searchForm = this.fb.group({
    titre:[''],
    supports:[[]],
    genres:[[]]
  });

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private service: ProduitService, private route:Router, private listeProduitsService: ListeProduitsService) { 
  }

  ngOnInit() {
    this.search();
    this.menuGlobal = [
      { label: 'Accueil', url: '/'},
      { label: 'Produit', url: '/produit'},
      { label: 'Panier', url: '/panier'}
    ];
    if(this.activatedRoute.snapshot.url.length === 0)
    {
      // on est sur la page d'accueil
      this.pageActuelle = this.menuGlobal[0];
    }
    else
    {
      if(this.activatedRoute.snapshot.url[0].path === 'produit')
      {
          // on est dans la recherche de produit
          this.pageActuelle = this.menuGlobal[1];
      }
      else
      {
        
        if(this.activatedRoute.snapshot.url[0].path === 'panier')
        {
            // on est dans la recherche de produit
            this.pageActuelle = this.menuGlobal[1];
        }
      }
    }
  }

  onSubmit(){
    this.search();
    this.route.navigate(['/produit']);
  }

  search(){
    this.service.searchProduit(this.searchForm.value.titre, this.searchForm.value.supports, this.searchForm.value.genres).subscribe(
      p => {
        this.listeProduitsService.setProduits(p);
      });
  }

}
