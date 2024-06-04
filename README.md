# JS Tenkaichi

## Cos'è?

Un piccolo giochino di manipolazione dati in Javascript Vanilla.

## Come funziona?

**Lista Combattenti:**

Si parte da una lista predefinita di combattenti e di armi

**Scelta dell’arma:**

Ogni combattente sceglie casualmente un'arma. Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

**Allenamento:**

ogni combattente si sottopone ad un allenamento che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

**Qualificazione:**

Viene escluso dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

**Combattimento:**

I combattimenti si svolgono tra un partecipante e il successivo dell'elenco, ognuno combatte una sola volta.

In ogni scontro vince il combattente con la potenza più alta. In caso di parità vince chi "gioca in casa", ossia chi viene prima nell'elenco.

**NB:** In caso di qualificati dispari, verrà aggiunto un combattente "Robot" con potenza "4000" all'ultimo minuto.

**Premiazione:**

Tra tutti i vincitori degli scontri, salgono sul podio i 3 combattenti con la potenza più alta, in ordine decrescente.

## Risultati

Tutti i risultati vengono mostrati in console, nonché raccontati dal nostro amatissimo presentatore biondo.
