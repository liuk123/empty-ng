import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    {
        path:'about',
        component: AboutComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'contact',
        component: ContactComponent,
        data:{
            keep:true,
        }
    },
    {
        path:'links',
        component: LinksComponent,
        data:{
            keep:true,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolRoutingModule {}
