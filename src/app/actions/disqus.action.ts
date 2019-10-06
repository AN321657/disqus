import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Disqus} from '../models/disqus.model';

export const ADD_COMMENT = '[COMMENT] ADD';
export class AddComment implements Action {
    readonly type = ADD_COMMENT;
    constructor(public payload: Disqus){}
}
export type Action = AddComment;