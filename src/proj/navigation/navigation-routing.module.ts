import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'src/app/biz/services/common/can-activate.guard';
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
                data:{
                    keep:true,
                }
            },{
                path:'custom',
                component: NavigationCustiomComponent,
                canActivate: [CanActivateGuard],
                data:{
                    keep:true,
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
