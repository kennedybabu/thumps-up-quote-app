
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import {Quote} from "../quote"


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {


  //output the quote details
  @Input() quote: Quote= {id:8, quote: '', author:'', submittedBy:'', upVote: 0, downVote: 0, deleteQuote: false}
  @Output() isDeleteQuote = new EventEmitter<boolean>()


  quoteDelete(deleteQuote: boolean){
    this.isDeleteQuote.emit(deleteQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
