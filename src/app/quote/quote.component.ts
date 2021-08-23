import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1,  'Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.', "Carl Sagan", "manHasNoName", false),
    new Quote(2,  'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.', "Albert Einstein", "bananaGuy", false ),
    new Quote(3,  'Be the change that you wish to see in the world', "Mahatma Gandhi", "whiskers" ,false ),
    new Quote(4,  'Go to heaven for the climate and hell for the company.', " Benjamin Franklin Wade", "humbleMan" , false)
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

  deleteQuote(index){
    this.quotes.splice(index,1)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
