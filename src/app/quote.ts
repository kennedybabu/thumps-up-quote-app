export class Quote {
    upVote: number;
    downVote: number;

    constructor(public id: number, public quote: string, public author: string, public submittedBy: string, public deleteQuote:boolean) {
        this.upVote = 0;
        this.downVote =0
    }
    
}
