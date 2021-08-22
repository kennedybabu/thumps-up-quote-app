import { Component } from '@angular/core';
import { Quote } from "./quote"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  quotes:Quote[] = [
    {id:1, quote: 'wash utensils', author: "theGreat", submittedBy:"manHasNoName" },
    {id:2, quote: 'hulla ballooo', author: "alexander", submittedBy:"collo" },
    {id:3, quote: 'wash the cat', author: "noOne", submittedBy:"whiskers" },
    {id:4, quote: 'get cat food', author: "mimi", submittedBy:"humbleMan" }
  ]

}

