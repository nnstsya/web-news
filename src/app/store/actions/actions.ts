import { createAction, props } from '@ngrx/store';
import {LoadNewsFailurePayload, LoadNewsPayload, LoadNewsSuccessPayload} from "@store/models/actions.model";

export const loadNews = createAction(
  '[News] Load News',
  props<LoadNewsPayload>()
);

export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  props<LoadNewsSuccessPayload>()
);

export const loadNewsFailure = createAction(
  '[News] Load News Failure',
  props<LoadNewsFailurePayload>()
);
