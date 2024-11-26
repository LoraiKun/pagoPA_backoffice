
  
  export interface RisultatoRendicontazione {
    idFlusso: string;
    dataFlusso: string;
    trn: string;
    dataRegolamento: string;
    idPsp: string;
    ragioneSocialePsp: string;
    bicRiversamento: string;
    idDominio: string;
    ragioneSocialeDominio: string;
    numeroPagamenti: number;
    importoTotale: number;
    stato: string;
  }
  
  export interface ResponseRendicontazione {
    numRisultati: string;
    numPagine: string;
    risultatiPerPagina: string;
    pagina: string;
    prossimiRisultati: string;
    maxRisultati: string;
    risultati: RisultatoRendicontazione[];
  }