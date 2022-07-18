import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBookmarkComponent } from './navigation-bookmark/navigation-bookmark.component';
import { NavigationCustiomComponent } from './navigation-custiom/navigation-custiom.component';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';

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
                    keep:false,
                }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule {}
