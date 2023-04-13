import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBookmarkComponent } from './navigation-bookmark/navigation-bookmark.component';
import { NavigationCustiomComponent } from './navigation-custiom/navigation-custiom.component';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { NavigationBookmarkListComponent } from './navigation-bookmark-list/navigation-bookmark-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: NavigationHomeComponent,
        children: [
            { path: '', redirectTo: 'custom', pathMatch: 'full'},
            {
                path:'custom',
                component: NavigationCustiomComponent,
                data:{
                    keep:true,
                }
            },{
                path:'bookmark',
                component: NavigationBookmarkComponent,
                data:{
                    keep:true,
                }
            }
        ]
    },
    {
        path:'list/:id',
        component: NavigationBookmarkListComponent,
        data:{
            keep: true,
            meta: null
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule {}
