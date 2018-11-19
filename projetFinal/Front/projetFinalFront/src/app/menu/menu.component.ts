import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuGlobal: MenuItem[];
  pageActuel: MenuItem;
  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.menuGlobal = [
      { label: 'Accueil', url: '/'},
      { label: 'Produit' },
      { label: 'Panier'}
    ];
    if(this.activatedRoute.snapshot.url.length === 0)
    {
      // on est sur la page d'accueil
      this.pageActuel = this.menuGlobal[0];
    }
    else
    {
      /*if(this.activatedRoute.snapshot.url[0].path === 'rechercherProduit')
      {
          // on est dans la recherche de produit
      }*/
    }
  }

}