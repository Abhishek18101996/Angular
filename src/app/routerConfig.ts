import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CandidateComponent} from './candidate/candidate.component';
import {CloginComponent} from './clogin/clogin.component';
import {EstablishmentComponent} from './establishment/establishment.component';
import {EloginComponent} from './elogin/elogin.component';
import {SearchComponent} from './search/search.component';

export const appRoutes:Routes=[
    {path:'home',
     component:HomeComponent
    },
    {path:'about',
     component:AboutComponent
    },
    {path:'candidate',
     component:CandidateComponent
    },
    {path:'clogin',
     component:CloginComponent
    },
    {path:'establishment',
     component:EstablishmentComponent
    },
    {path:'elogin',
     component:EloginComponent
    },
    {path:'search',
     component:SearchComponent
    }
]