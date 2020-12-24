import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';


const routes: Routes = [
    { path: '', redirectTo: 'layout', pathMatch: 'full'},
    {
        path:'layout',
        component: BoutiqueComponent,
        data:{
            keep:false,
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BoutiqueRoutingModule {}
