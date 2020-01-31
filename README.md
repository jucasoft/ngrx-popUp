# pro e contro nell'aprire le popUP da rotta
 ## PRO
 - Lazy Loading Feature Modules, utilizzando le rotte e creando uno specifico modulo per il componente grafico da aprire.
 - Ridotta dipendenza, il componente grafico viene generato con il sistema di factory dell'autlet
 - Si ereditano i vantaggi offerti dalle rotte, come l'uso delle guard.
 - Il "time travel" funziona
 - lo stato dell'apertura viene gestita da @ngrx/router-store
 
 ## Contro
 - caso di test "render multiplo delle pagine aperte":
    - invoco la rotta "/book/main" associata al componente BookMainComponent  
        - esito: viene renderizzato il componente BookMainComponent 
    - da BookMainComponent invoco la rotta "/home/(main//popUp:edit)" associata al componente BookEditComponent
        - esito: viene renderizzato il componente BookMainComponent e anche BookMainComponent
        
 
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
|  |  |  |-  custom-router-state-serializer.ts  -> aggiunge i valori di NavigationExtras allo store.
|  |  |  |-  pop-up-base.component.ts           -> componente base per l'implementazione delle popUP
|  |  |  |-  ...
|  |  |- index.ts
|  |  |- root-reducer.ts
|  |  |- root-store.module.ts
|  |  |- selectors.ts
|  |  +- state.ts
|  |- app.component.*           app root component (shell)
|  |- app.module.ts             app root module definition
|  |- app.routing.ts            app routes
|  +- ...                       additional modules and components
+ ...
```

# Struttura dati da inviare

Il problema sta nel fatto che se una una seconda router-outlet, l'oggetto in extra.state e unico per entrambi le sezioni  
Quindi succede che:
apro la prima pagina sulla router-outlet predefinita, passando il valore {title:'blabla', props:{}}
 - la prima pagina/componente si apre e fa uso della valore.
 - la seconda pagina/componente resta chiuso. 
apro la seconda pagina su <router-outlet name='left'>, passando il valore {item:{name:'',id:1}}
 - la seconda pagina si apre, recupera i dati e funziona correttamente.
 - la prima pagina resta aperta, recupera nuovamente i dati, che però sono per la seconda pagina.


ipotizzando che di avere i seguenti outlet:
    <router-outlet></router-outlet>
    <router-outlet name='left'></router-outlet>
    <router-outlet name='right'></router-outlet>

la struttura dell'oggetto che si invia per l'apertura della pagina dovrà essere:
{
    primary:{},
    left:{},
    right:{}
}

quindi le chiamate saranno:

 - apertura pagina su <router-outlet> (il valore predefinito di name è primary)
 ````
    const primary = {
      valuea:{},
      valueb:{},
      valuec:{},
      blabla: '....', 
    };

    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home'],
      extras: {state:{primary}}
    }));
    
 ````

 - apertura pagina su <router-outlet name='left'>
 ````
    const left = {
      valuea:{},
      valueb:{},
      valuec:{},
      blabla: '...', 
    };

    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home', {outlets: {left: ['edit']}}],
      extras: {state:{left}}
    }));
    
 ````

 - apertura pagina su <router-outlet name='right'>
 ````
    const right = {
      valuea:{},
      valueb:{},
      valuec:{},
      blabla: '....', 
    };

    this.store$.dispatch(RouterStoreActions.RouterGo({
      path: ['home', {outlets: {right: ['edit']}}],
      extras: {state:{right}}
    }));
    
 ````

Per una migrazione indolore dell'attuale situazione, potrei creare delle azioni/selettori specifici per evitare 

# Test apertura popUP
Entrare in una delle sezioni home, book, coin.  
Nella colonna "Actions" per ogni riga sono presenti dei pulsanti, cliccare su uno dei pulsanti blu (modifica e copia) per aprire la popUP

# TODO
[-] Riuscire a far funzionare meglio il sistema delle rotte per aprire le popUp  
[+] Verificare che un custom serializer possa sostituire l'estensione dello store attuale.  
    - Creato un serializzatore custom per aggiungere allo store delle rotte i dati di NavigationExtras  
[-] capire se le popUP ha senso che siano gestite dallo store o sia meglio vederle come un componente angular. 

# Comandi lanciati in fese di creazione
ng generate ngrx-entity-crud:crud-store --name=coin --clazz=Coin  
ng generate ngrx-entity-crud:crud-section --clazz=Coin  

ng generate ngrx-entity-crud:crud-store --name=book --clazz=Book  
ng generate ngrx-entity-crud:crud-section --clazz=Book  

ng generate ngrx-entity-crud:crud-store --name=home --clazz=Home  
ng generate ngrx-entity-crud:crud-section --clazz=Home  

# Tracciare i cambiamenti della history

## Method 1:
var back = window.history.back;

window.history.back = function() {
    console.log("location: " + document.location + ", state: " + 
        JSON.stringify(window.history.state));

    return back.apply(this, arguments);
}

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.pushState({page: 3}, "title 3", "?page=3");
history.pushState({page: 4}, "title 4", "?page=4");

## Method 2:
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + 
      JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.pushState({page: 3}, "title 3", "?page=3");
history.pushState({page: 4}, "title 4", "?page=4");
