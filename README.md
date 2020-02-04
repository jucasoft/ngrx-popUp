# Passare dati e aprire popUp con @ngrx/router-store
L'applicazione si trova su [ngrx-popup](https://ngrx-popup.herokuapp.com/)
## modifiche effettuate
 - @ngrx/router-store, aggiunto due attributi allo store 'primary' e 'popUp' :
 ````
export const initialState: State = {
  state: null,
  navigationId: null,
  extras: null,
  primary: null,
  popUp: null,
};

````
 - azioni aggiunte:
    - RouterGo
    - RouterGoPerformed
    - RouterGoPopUp
    - RouterGoPopUpPerformed
    - RouterPopState 
    - RouterBack
 - selettori aggiunti:
    - selectOptions
    - selectPrimary
    - selectPopUp
    - hasPopUp
 
 ## PRO
 Si ereditano i vantaggi offerti dalle rotte:
 - Lazy Loading
 - Ridotte dipendenze
 - Guard.
 - grazie al @ngrx/router-store funziona perfettamente il time travel"
 - history back del browser (esteso lo store @ngrx/router-store)
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
 - per ogni route-outlet è possibile aprire una sola PopUp/pagina. 
        
 
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
|  |- root-store/               estensione dello store di @ngrx/router-store gestione delle rotte
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
````
    <router-outlet></router-outlet> // se non viene indicato, il valore predefinito di name è 'primary'
    <router-outlet name='popUp'></router-outlet> // popUp
````
Se necessario è possibile estendere questo sistema per gestire ulteriori router-outlet

## apertura pagina su "router-outlet"
 
 - azione:  
 ````
    // dati necessari alla pagina di destinazione
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

## apertura pagina su "router-outlet name='popUp'"

 - azione:  
 ````
    // dati necessari alla popUp di destinazione
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
        primary: { // primary resta popolato con i dati della pagina attualmente visualizzata
                   name:'blablabal',
                   value:{a:1,q:2...},
                   ...
                 },
        popUp: { // popUp assume il dato passato dall'azione 'RouterGoPopUp'
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

