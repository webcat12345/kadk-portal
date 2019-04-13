import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'send-idea', loadChildren: './pages/send-idea-page/send-idea-page.module#SendIdeaPageModule'},
      {path: 'browse-ideas', loadChildren: './pages/browse-ideas-page/browse-ideas-page.module#BrowseIdeasPageModule'},
      {path: 'feedback', loadChildren: './pages/feedback-page/feedback-page.module#FeedbackPageModule'},
      {path: '**', redirectTo: 'send-idea'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
