import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssHomeComponent } from './rss-home/rss-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: RssHomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RssRoutingModule {}
