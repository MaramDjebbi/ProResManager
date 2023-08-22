import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {
  private filterTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filterText$: Observable<string> = this.filterTextSubject.asObservable();

  setFilterText(filter: string) {
    this.filterTextSubject.next(filter);
  }

  getFilterText(): Observable<string> {
    return this.filterText$;
  }
}
