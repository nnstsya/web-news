import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'news',
    loadChildren: () => import('./modules/news-home/news-home.module').then(m => m.NewsHomeModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./modules/news-details/news-details.module').then(m => m.NewsDetailsModule)
  },
  {
    path: '**',
    redirectTo: 'news'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
