import { ShipRegisterComponent } from './ship/ship-register/ship-register.component';
import { ShipListComponent } from './ship/ship-list/ship-list.component';
import { ShipComponent } from './ship/ship.component';

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'ships', component: ShipComponent,
        children: [
            { path: '', component: ShipListComponent },
            { path: 'register-ship', component: ShipRegisterComponent }
        ]
    }

];