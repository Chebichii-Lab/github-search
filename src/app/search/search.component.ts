import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: string | undefined                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  @Output() emitUserName = new EventEmitter<string>()
  search(username: string | undefined){
    this.emitUserName.emit(username)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
