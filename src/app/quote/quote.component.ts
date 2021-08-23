import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1,  'wash utensils', "theGreat", "manHasNoName", false),
    new Quote(2,  'hulla ballooo', "alexander", "collo", false ),
    new Quote(3,  'wash the cat', "noOne", "whiskers" ,false ),
    new Quote(4,  'get cat food', "mimi", "humbleMan" , false)
  ]


  //upvote a quote
  upvoteQuote(index:number){
    this.quotes[index].upVote +=1

  }


  //downvote a quote
  downVote(index:number){
    this.quotes[index].downVote -=1

  }


  //add new quote in the quotes array
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length
    quote.id = quoteLength+3
    this.quotes.unshift(quote)    
  }



  constructor() { }

  ngOnInit(): void {
  }

}
