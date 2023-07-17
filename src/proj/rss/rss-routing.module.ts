import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssHomeComponent } from './rss-home/rss-home.component';
import { RssCustomComponent } from './rss-custom/rss-custom.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: RssHomeComponent
    },
    {
        path:'custom',
        component: RssCustomComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RssRoutingModule {}
