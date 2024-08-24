import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Figurina from "./Figurina";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import "./menu.css";

export default function ContentMenu() {
  const antipasti = [
    {
      nome: "Carpaccio di Scampi con Agrumi e Caviale",
      descrizione:
        "Delicati scampi freschi affettati sottilmente, marinati con un'emulsione di agrumi e guarniti con perle di caviale per un tocco di lusso.",
      immagine: "./src/assets/immaginiPiatti/Uovo.webp",
      prezzo: "4.50€",
    },
    {
      nome: "Tartare di Manzo Wagyu con Tuorlo Marinato e Tartufo Nero",
      descrizione:
        "Tartare di manzo Wagyu finemente tritata, arricchita da un tuorlo d'uovo marinato, scaglie di tartufo nero e una delicata emulsione di senape.",
      immagine: "./src/assets/immaginiPiatti/AntipastoDue.webp",
      prezzo: "8.50€",
    },
    {
      nome: "Fagottini di Capesante con Crema di Piselli e Menta",
      descrizione:
        "Fagottini di pasta fresca ripieni di capesante e ricotta, serviti su una vellutata crema di piselli e menta, con un tocco di zeste di limone per freschezza.",
      immagine: "./src/assets/immaginiPiatti/AntipastoTre.webp",
      prezzo: "7.50€",
    },
    {
      nome: "Terrina di Foie Gras con Gelatina di Sauternes e Noci Caramellate",
      descrizione:
        "Foie gras d'anatra servito in una terrina, accompagnato da una delicata gelatina al Sauternes e croccanti noci caramellate, un connubio di sapori dolci e salati.",
      immagine: "./src/assets/immaginiPiatti/Antipasto4.webp",
      prezzo: "6.50€",
    },
  ];

  const primi = [
    {
      nome: "Risotto allo Zafferano con Gamberi Rossi e Polvere di Olive Nere",
      descrizione:
        "Cremoso risotto allo zafferano, mantecato con burro e Parmigiano Reggiano, arricchito con gamberi rossi freschi e una spolverata di olive nere essiccate.",
      immagine: "./src/assets/immaginiPiatti/Risotto.webp",
      prezzo: "14.50€",
    },
    {
      nome: "Tortelli di Zucca con Burro Nocciola e Salvia Croccante",
      descrizione:
        "Tortelli fatti a mano, ripieni di purea di zucca dolce e mostarda di frutta, conditi con burro nocciola e foglie di salvia croccanti.",
      immagine: "./src/assets/immaginiPiatti/Tortelli.webp",
      prezzo: "15.00€",
    },
    {
      nome: "Tagliolini al Tartufo Bianco d'Alba",
      descrizione:
        "Tagliolini freschi preparati con uova e farina, serviti con una salsa cremosa al Parmigiano e burro, generosamente guarniti con tartufo bianco d'Alba affettato sottilmente.",
      immagine: "./src/assets/immaginiPiatti/Tagliolini.webp",
      prezzo: "12.50€",
    },
    {
      nome: "Ravioli di Aragosta con Crema di Porri e Caviale Oscietra",
      descrizione:
        "Ravioli ripieni di polpa di aragosta, serviti su una vellutata crema di porri, impreziositi da caviale Oscietra e un filo d'olio extravergine d'oliva.",
      immagine: "./src/assets/immaginiPiatti/Ravioli.webp",
      prezzo: "13.50€",
    },
  ];

  const secondi = [
    {
      nome: "Filetto di Manzo al Vino Rosso con Purea di Topinambur",
      descrizione:
        "Tender filetto di manzo cotto al punto giusto, servito con una salsa ridotta al vino rosso e accompagnato da una vellutata purea di topinambur.",
      immagine: "./src/assets/immaginiPiatti/FilettoManzo.webp",
      prezzo: "16.50€",
    },
    {
      nome: "Spigola in Crosta di Sale con Emulsione di Limone e Finocchio",
      descrizione:
        "Spigola fresca cotta in crosta di sale per mantenere la succosità, servita con una delicata emulsione di limone e finocchio, e un contorno di verdure di stagione.",
      immagine: "./src/assets/immaginiPiatti/FilettoBranzino.webp",
      prezzo: "15.50€",
    },
    {
      nome: "Anatra Laccata al Miele di Castagno con Riduzione di Frutti di Bosco",
      descrizione:
        "Petto d'anatra laccato con miele di castagno, cotto lentamente per esaltare la tenerezza della carne, servito con una riduzione di frutti di bosco.",
      immagine: "./src/assets/immaginiPiatti/Anatra.webp",
      prezzo: "14.50€",
    },
    {
      nome: "Polpo con Crosta di Pistacchio e Crema di Zucchine",
      descrizione:
        "Filetto di branzino avvolto in una crosta croccante di pistacchi, adagiato su una leggera crema di zucchine e guarnito con olio di basilico.",
      immagine: "./src/assets/immaginiPiatti/Polpo.webp",
      prezzo: "18.00€",
    },
    {
      nome: "Contorno: Patate Fondenti al Timo e Aglio",
      descrizione:
        "Patate tagliate a cubetti e cotte lentamente nel burro e brodo, fino a diventare fondenti, profumate con timo fresco e aglio.",
      immagine: "./src/assets/immaginiPiatti/PatateArrosto.jpg",
      prezzo: "4.50€",
    },
    {
      nome: "Contorno: Asparagi Grigliati con Scaglie di Parmigiano e Riduzione di Balsamico",
      descrizione:
        "Asparagi freschi grigliati, conditi con scaglie di Parmigiano Reggiano e un tocco di riduzione di aceto balsamico per un equilibrio di sapori dolci e salati.",
      immagine: "./src/assets/immaginiPiatti/Contorno.webp",
      prezzo: "5.00€",
    },
  ];

  const vini = [
    {
      nome: "Château Margaux",
      descrizione:
        "Un Bordeaux Premier Grand Cru Classé noto per la sua eleganza e complessità. Offre aromi di cassis, violetta, tabacco e cedro, con tannini setosi e una lunga persistenza.",
      immagine: "./src/assets/immaginiPiatti/PinotNero.webp",
      prezzo: "30.00€",
    },
    {
      nome: "Sassicaia - Tenuta San Guido",
      descrizione:
        "Un iconico Super Tuscan prodotto a Bolgheri, Italia. Questo blend di Cabernet Sauvignon e Cabernet Franc è conosciuto per i suoi aromi di frutti neri, erbe aromatiche, e una struttura tannica fine.",
      immagine: "./src/assets/immaginiPiatti/Rosso.webp",
      prezzo: "35.00€",
    },
    {
      nome: "Domaine de la Romanée-Conti Échézeaux",
      descrizione:
        "Un prestigioso Pinot Noir dalla Borgogna, con note di ciliegia, lampone, spezie e sottobosco. È un vino raffinato con una texture setosa e un finale persistente.",
      immagine: "./src/assets/immaginiPiatti/AngeloNegro.webp",
      prezzo: "30.00€",
    },
    {
      nome: "Opus One",
      descrizione:
        "Un Cabernet Sauvignon della Napa Valley, realizzato in collaborazione tra Robert Mondavi e il Barone Philippe de Rothschild. Offre ricchi aromi di cassis, prugna, cioccolato fondente e tabacco.",
      immagine: "./src/assets/immaginiPiatti/BruteRose.webp",
      prezzo: "40.00€",
    },
    {
      nome: "Chardonnay - Domaine Leflaive Puligny-Montrachet",
      descrizione:
        "Un elegante Chardonnay della Borgogna, noto per la sua mineralità e complessità. Presenta note di agrumi, mela, burro e nocciola, con una struttura vibrante e un lungo finale.",
      immagine: "./src/assets/immaginiPiatti/Rosso.webp",
      prezzo: "35.00€",
    },
    {
      nome: "Riesling - Egon Müller Scharzhofberger Spätlese",
      descrizione:
        "Un pregiato Riesling della Mosella, Germania, celebre per la sua freschezza e acidità vivace. Ha aromi di frutta a polpa bianca, pietra focaia e leggere note floreali.",
      immagine: "./src/assets/immaginiPiatti/SoloUva.webp",
      prezzo: "15.00€",
    },
    {
      nome: "Amarone della Valpolicella - Dal Forno Romano",
      descrizione:
        "Un vino rosso veneto noto per la sua concentrazione e intensità. Ha ricchi aromi di ciliegia nera, prugna, cioccolato e spezie, con un corpo pieno e tannini morbidi.",
      immagine: "./src/assets/immaginiPiatti/TestaBianca.webp",
      prezzo: "25.00€",
    },
    {
      nome: "Syrah - Penfolds Grange",
      descrizione:
        "Un iconico vino australiano, rinomato per i suoi intensi aromi di frutti di bosco, spezie e cioccolato. È robusto e potente, con un potenziale di invecchiamento eccezionale.",
      immagine: "./src/assets/immaginiPiatti/VinoTestaRossa.webp",
      prezzo: "20.00€",
    },
    {
      nome: "Gewürztraminer - Zind-Humbrecht Clos Windsbuhl",
      descrizione:
        "Un Gewürztraminer dell'Alsazia, noto per i suoi aromi intensi di litchi, rosa, spezie e pepe bianco. Questo vino bianco aromatico è complesso e persistente.",
      immagine: "./src/assets/immaginiPiatti/TestaBianca.webp",
      prezzo: "35.00€",
    },
    {
      nome: "Château d'Yquem",
      descrizione:
        "Un leggendario Sauternes dolce, famoso per i suoi aromi di albicocca, miele, zafferano e vaniglia. Equilibrato da un'acidità vibrante, è considerato uno dei migliori vini da dessert al mondo.",
      immagine: "./src/assets/immaginiPiatti/VinoUno.webp",
      prezzo: "30.00€",
    },
  ];

  let [type, setType] = useState(primi);

  return (
    <Container>
      <Row className="d-flex flex-wrap align-items-center justify-content-between text-center p-3 m-2 ">
        <h1 className="titleStyle">
          La proposta culinaria del nostro ristorante
        </h1>
        <div>
          <Button
            className="buttonStyle"
            variant="outline-secondary"
            onClick={() => setType(antipasti)}
          >
            I nostri Antipasti
          </Button>{" "}
          <Button
            className="buttonStyle"
            variant="outline-secondary"
            onClick={() => setType(primi)}
          >
            Primi Piatti
          </Button>{" "}
          <Button
            className="buttonStyle"
            variant="outline-secondary"
            onClick={() => setType(secondi)}
          >
            Secondi&Contorni
          </Button>{" "}
          <Button
            className="buttonStyle"
            variant="outline-secondary"
            onClick={() => setType(vini)}
          >
            La carta dei Vini
          </Button>{" "}
          {type === "antipasti" && <Figurina piatti={antipasti} />}
          {type === "primi" && <Figurina piatti={primi} />}
          {type === "secondi" && <Figurina piatti={secondi} />}
          {type === "vini" && <Figurina piatti={vini} />}
        </div>
      </Row>
      <Figurina piatti={type} />
    </Container>
  );
}
