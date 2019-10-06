import {Action} from '@ngrx/store';
import {Disqus} from '../models/disqus.model';
import * as DisqusAction  from '../actions/disqus.action';


const initialState : Disqus[] = [
    {
        name: "Matt",
        comment: "How artistic!",
        time: 1570366099992,
        reply: [],
        displayCommentBox:false,
        imageUrl:"../../assets/img2.png"
    },
    {
        name: "Elliot Fu",
        comment: "This has been very usefull for my research. Thanks as well!!",
        time: 1570389871612,
        reply: [
          {
            name: "Jenny Hess",
            comment: "Elliot you are always so right :)",
            time: 1570387871612,
            reply: [],
            displayCommentBox:false,
            imageUrl:"../../assets/img1.png"
          }
        ],
        displayCommentBox:false,
        imageUrl:"../../assets/img3.png"
      },
      {
        name: "Joy Handerson",
        comment: "Dude it's awesome. Thank you so much.",
        time: 1570456711612,
        reply: [],
        displayCommentBox:false,
        imageUrl:"../../assets/img4.png"
      }
]

export function reducer(state:Disqus[]= initialState,action:DisqusAction.Action){

    switch(action.type){
        case DisqusAction.ADD_COMMENT :
            return [action.payload,...state];
        default :
        console.log(state);
        return state;
    }

}
