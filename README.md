# pro e contro nell'aprire le popUP da rotta
 ## PRO
 Si ereditano i vantaggi offerti dalle rotte:
 - Lazy Loading
 - Ridotte dipendenze
 - Guard.
 - grazie al @ngrx/router-store funziona perfettamente il time travel"
 - history back del broser (esteso lo store @ngrx/router-store)
 - i dati per la popUp/pagina vengono passati usando le rotte. 
 ```
// azione per l'apertura di una nuova pagina
    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: [....],
      data // dati passati alla pagina di destinazione
    }));

// azione specifica per l'apertura delle popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: [....],
      data // dati passati alla poUp di destinazione
    }));
```
 
 ## Contro
 - per ogni route-outlet è possibile aprire una sola PopUp. 
        
 
# Info struttura
```
src/                            
|- app/                         
|  |- core/                     
|  |  |- components/
|  |  |- directive/
|  |  |- interceptors/
|  |  |- models/
|  |  |- pipe/
|  |  +- utils/
|  |- main/                     
|  |  |- components/
|  |  |- models/
|  |  |- services/
|  |  +- views/
|  |  |  |-  book/
|  |  |  |  |-  ...
|  |  |  |  |-  book-edit/      popUp per la modifica
|  |  |  |  |-  ...
|  |  |  |-  coin/
|  |  |  |  |-  ...
|  |  |  |  |-  coin-edit/      popUp per la modifica
|  |  |  |  |-  ...
|  |  |  |-  home/
|  |  |  |  |-  ...
|  |  |  |  |-  home-edit/      popUp per la modifica
|  |  |  |  |-  ...
|  |- root-store/               store per la gestione delle rotte
|  |  |- router-store/     
|  |  |  |-  ...
|  |  |  |-  pop-up-base.component.ts           -> componente base per l'implementazione delle popUP
|  |  |  |-  ...
|  |  |- index.ts
|  |  |- root-reducer.ts
|  |  |- root-store.module.ts
|  |  |- selectors.ts
|  |  +- state.ts
|  |- app.component.*           
|  |- app.module.ts             
|  |- app.routing.ts            
|  +- ...                       
+ ...
```

# Utilizzo

Attualmente sono presenti due route-outlet:

    <router-outlet></router-outlet> // primary  
    <router-outlet name='popUp'></router-outlet>

## apertura pagina su <router-outlet>
 
 - azione:  
 ````
    const data = {
      name:'blablabal',
      value:{a:1,q:2...},
      ...
    };

    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home'],
      data
    }));
    
 ````

 - store:
 ````
{
    router: {
        navigationId: 2,
        extras: null,
        primary: {
                       name:'blablabal',
                       value:{a:1,q:2...},
                       ...
                 },
        popUp: null
    },
    ...
}
````

per accedere al dato:

````
this.store$.select(RouterStoreSelectors.selectPrimary);
````

## apertura pagina su <router-outlet name='popUp'>

 - azione:  
 ````
    const data = {
      valuea:{},
      valueb:{},
      valuec:{},
      blabla: '...', 
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['home', {outlets: {left: ['edit']}}],
      data
    }));
    
 ````
 - store:
 ````
{
    router: {
        navigationId: 2,
        extras: null,
        primary: {
                   name:'blablabal',
                   value:{a:1,q:2...},
                   ...
                 },
        popUp: {
                 valuea:{},
                 valueb:{},
                 valuec:{},
                 blabla: '...', 
               }
    },
    ...
}
````

per accedere al dato:

````
this.store$.select(RouterStoreSelectors.selectPopUp)
````

