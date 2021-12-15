import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationCustiomComponent } from './navigation-custiom/navigation-custiom.component';
import { NavigationGalleryComponent } from './navigation-gallery/navigation-gallery.component';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path:'home',
        component: NavigationHomeComponent,
        children: [
            { path: '', redirectTo: 'gallery', pathMatch: 'full'},
            {
                path:'gallery',
                component: NavigationGalleryComponent,
            },{
                path:'custom',
                component: NavigationCustiomComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule {}
