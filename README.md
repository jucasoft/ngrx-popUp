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
# Test apertura popUP
Entrare in una delle sezioni home, book, coin.  
Nella colonna "Actions" per ogni riga sono presenti dei pulsanti, cliccare su uno dei pulsanti blu (modifica e copia) per aprire la popUP

# TODO
[-] Riuscire a far funzionare meglio il sistema delle rotte per aprire le popUp  
[+] Verificare che un custom serializer possa sostituire l'estensione dello store attuale.  
    - Creacto un serializzatore custom per aggiungere allo store delle rotte i dati di NavigationExtras  
    

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
