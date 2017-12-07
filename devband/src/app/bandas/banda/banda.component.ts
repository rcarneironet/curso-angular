import { Component, OnInit, Input } from '@angular/core';
import { Banda } from './banda.model';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html'
})
export class BandaComponent implements OnInit {

  @Input() banda : Banda
  
  constructor() { }

  ngOnInit() {
  }

}
