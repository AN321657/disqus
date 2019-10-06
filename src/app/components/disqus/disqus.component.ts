import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {Disqus} from '../../models/disqus.model';
import { TimeagoIntl } from 'ngx-timeago';
import {strings as englishStrings} from 'ngx-timeago/language-strings/en';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.css']
})
export class DisqusComponent implements OnInit, OnChanges{


  @Input() disqus :Observable<Disqus[]>;
  commentInput:string;
  comments1:any;
  showCommentBox:boolean;
  constructor(intl: TimeagoIntl) {
    intl.strings = englishStrings;
    intl.changes.next();
  }

  ngOnInit() {
    this.showCommentBox = false;
    if (this.disqus instanceof Observable) {
      this.disqus.subscribe(val=>{
        this.comments1 = val;
      })
    }else{
      this.comments1 = this.disqus;
    }
  }

  getCommentBox(data){
    data.displayCommentBox = true;
  }

  reply(data){
    data.reply.push({
            name: "Albert",
            comment: data.reply.comment,
            time: new Date().valueOf(),
            reply: [],
            displayCommentBox: false,
            imageUrl:"../../assets/img5.png"
          });
    delete data.reply["comment"];
    data.reply.displayCommentBox = false;
  }

  close(data){
    data.reply.displayCommentBox = false;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
