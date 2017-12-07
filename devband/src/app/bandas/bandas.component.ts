import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Banda } from './banda/banda.model';
import { BandasService } from './bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html'
})


export class BandasComponent implements OnInit {

  bandas: Banda[]
  
  constructor(private bandasService: BandasService) { }

  ngOnInit() {
      this.bandasService.bandas().subscribe(bandas => this.bandas = bandas)
  }

}
