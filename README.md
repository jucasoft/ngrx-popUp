# obbiettivi
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

# tracciare i cambiamenti della history

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
