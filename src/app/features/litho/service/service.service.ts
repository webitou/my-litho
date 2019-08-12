import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  color = 'color',
  zodiac = 'zodiac'
}

@Injectable({
  providedIn: 'root'
})
export class LithoService {

  url = 'https://guarded-savannah-51370.herokuapp.com/api/v2/items';

  constructor( private http: HttpClient ) { }

  searchData( name: string, type: SearchType ): Observable<any> {
    return this.http.get(`${ this.url }?s=${ encodeURI( name ) }&type=${ type }`)
    .pipe(
        map( results => results[ 'Search' ] )
    );
  }

  getDetails( id ) {
    return this.http.get( `${this.url}?i=${id}&plot=full` );
  }
}
