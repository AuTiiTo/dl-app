import { Routes } from "@angular/router";
import { DetalleComponent } from "../in-out/detalle/detalle.component";
import { EstadisticaComponent } from "../in-out/estadistica/estadistica.component";
import { InOutComponent } from "../in-out/in-out.component";


export const dashboardRoutes: Routes = [
    {path: '', component: EstadisticaComponent},
    {path: 'in-out', component: InOutComponent},
    {path: 'detalle', component: DetalleComponent}
];