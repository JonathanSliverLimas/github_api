//Importar los modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Importar componentes para hacer una pag. exclusiva
import {PerfilComponent} from './components/perfil/perfil.component';


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: PerfilComponent},
    {path: 'home', component: PerfilComponent},
    {path: '**', redirectTo: ''}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
