import { LithoService, SearchType } from '../../service/service.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-litho-page',
  templateUrl: './litho-page.component.html',
  styleUrls: ['./litho-page.component.scss'],
})
export class LithoPageComponent implements OnInit {

  lithoData$: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;


  constructor( private lithoService: LithoService ) { }

  ngOnInit() { }

  searchChanged() {
    // Call our service function which returns an Observable
    this.lithoData$ = this.lithoService.searchData(this.searchTerm, this.type);
    console.log( this.lithoData$ );
  }

}
