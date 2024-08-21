# 🍽️ AppRistorante

Benvenuti in **AppRistorante**! Questa è l'app pensata per il Capstone Project Epicode. 
Con **RistoranteApp**, puoi prenotare tavoli, sfogliare il menu, e molto altro ancora!

## 🚀 Funzionalità

- 📅 **Prenotazione Tavoli**: Prenota il tuo tavolo preferito in pochi clic.
- 🍝 **Sfoglia il Menu**: Scopri i nostri piatti deliziosi con descrizioni dettagliate.
- 🕒 **Orari di Apertura**: Controlla gli orari di apertura del ristorante.
- 🗺️ **Ordina da asporto**: Per ordinare direttamente dal menu.
- ⭐ **Recensioni**: Leggi e lascia recensioni sui nostri piatti e servizi.

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React, HTML5, CSS3
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: Axios per la gestione delle richieste HTTP

## 💻 Installazione

1. **Clona il repository:**
2.  **Lancia npm install nella cartella front-end**
3.   **Lancia npm install nella cartella back-end**
4.   **Avvia il server: node server.js**
5.   **Avvia il client con npm run-dev nella cartella front-end**

   
## 📦 Struttura del Progetto
```
app-ristorante/
│
├── backend/
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorHandlers.js
│   │   └── upload.js
│   │
│   ├── models/
│   │   ├── Author.js 
│   │   └── BlogPost.js
│   │   ├── ListaOrdine.js
│   │   └── Prenotazioni.js
│   │
│   ├── node_modules/
│   │
│   ├── routes/
│   │   ├── authorRoutes.js
│   │   ├── authRoutes.js 
│   │   └── blogPostRoutes.js
│   │   ├── ordineRoutes.js
│   │   └── prenotazioniPostRoutes.js
│   │
│   ├── Services/
│   │   ├── emailService.js
│   │   └── keyGenerator.js
│   │
│   ├── utils/
│   │   └── jwt.js
│   │
│   ├── .env 
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── node_modules/
    │
    ├── public/
    │   └── vite.svg
    │
    ├── src/
    │   ├── components/
    │   │   ├── Footer
    │   │   │  ├── footer.css
    │   │   │  └──  Footer.jsx
    │   │   ├── Jumbotron
    │   │   │   ├── jumbotron.css
    │   │   │   ├── Jumbotron.jsx
    │   │   │   └── PrimaParte.jsx
    │   │   ├── menu
    │   │   │   ├── AreaOrdine.jsx
    │   │   │   ├── ContentMenu.jsx
    │   │   │   ├── Figurina.jsx
    │   │   │   ├── menu.css
    │   │   │   └── SingolaFigurina.jsx
    │   │   ├── Navbar
    │   │   │  ├── BarraDiNavigazione.css
    │   │   │  └── BarraDiNavigazione.jsx
    │   │   ├── PrenotaTavolo
    │   │   │  ├── prenota.css
    │   │   │  └── Prenota.jsx
    │   │   ├── RecensioniECommenti
    │   │   │  ├── LasciaUnCommento.jsx
    │   │   │  ├── PaginaRecensioni.jsx
    │   │   │  ├── recensioniEcommenti.css
    │   │   │  └── VisualizzaRecensioni.jsx
    │   │   ├── RegisterLogin
    │   │   │  ├── Login.jsx
    │   │   │  ├── Register.jsx
    │   │   │  └── registerLogin.css
    │   │   ├── visualizzaOrdine
    │   │   │  ├── visualizzaOrdine.css
    │   │   │  └── VisualizzaOrdine.jsx
    │   │
    │   ├── services/
    │   └── api.js
    │   │
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├──  .eslintrc.cjs
    ├──  .gitignore
    ├──  index.html
    ├──  package-lock.json
    ├──  package.json
    ├──  README.md
    ├──  tailwind.config.js
    └──  vite.config.js

```
## 📚 API Endpoints
### Prenotazione Tavoli
POST /api/prenotazioni - Crea una nuova prenotazione.
GET /api/prenotazioni/:id - Ottieni i dettagli di una prenotazione.
Menu
GET /api/menu - Ottieni l'elenco dei piatti disponibili.
GET /api/menu/:id - Ottieni i dettagli di un piatto specifico
   
