import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1,  'wash utensils', "theGreat", "manHasNoName"),
    new Quote(2,  'hulla ballooo', "alexander", "collo" ),
    new Quote(3,  'wash the cat', "noOne", "whiskers" ),
    new Quote(4,  'get cat food', "mimi", "humbleMan" )
  ]

  upvoteQuote(index:number){
    this.quotes[index].upVote +=1

    console.log(this.quotes[index].upVote)
  }

  downVote(index:number){
    this.quotes[index].downVote -=1

    console.log(this.quotes[index].downVote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
