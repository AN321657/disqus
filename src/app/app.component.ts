import { Component, OnInit, AfterViewInit} from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Disqus} from './models/disqus.model';
import {AppState} from './app.state';
import * as DisqusAction from './actions/disqus.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  commentsData : Observable<Disqus[]>;

  commentText:string;
  newComment : Disqus;

  constructor(private store:Store<AppState>) {
    
  }

   ngOnInit(){
    this.commentsData = this.store.select('disqus');
   }

   addNewComent(){
    this.newComment = {
      name: "Albert",
      comment: this.commentText,
      time: new Date().valueOf(),
      reply: [],
      displayCommentBox: false,
      imageUrl:"../../assets/img5.png"
    };
    this.store.dispatch(new DisqusAction.AddComment(this.newComment));
    this.commentText = "";
  }
}
