export interface RichiesteDiPagamento {
  numRisultati: number;
  numPagine: number;
  risultatiPerPagina: number;
  pagina: number;
  prossimiRisultati: string;
  maxRisultati: number;
  risultati: RisultatiRichieste[];
}

export interface RisultatiRichieste {
  stato: string; 
  dettaglioStato: string;
//   bloccante: boolean;
  segnalazioni: Segnalazioni[];
  pendenza: Pendenza;
}

export interface Segnalazioni {
  // da mostrare in tabella separata
  data: Date;
  codice: number;
  descrizione: string;
  dettaglio: string;
}

interface Pendenza {
  idA2A: string;
  idPendenza: string;
  tipoPendenza: TipoPendenza;
  dominio: Dominio;
  // stato: string;
  dataUltimoAggiornamento: Date;
  anomalo: boolean;
  // verificato: boolean;
  tipo: string;
  nome: string;
  causale: string;
  soggettoPagatore: SoggettoPagatore;
  importo: number;
  numeroAvviso: number;
  dataScadenza: Date;
}

interface TipoPendenza {
  descrizione: string;
}

interface Dominio {
  // alcune voci potrebbero essere aggiunte in seguito
  ragioneSociale: string;
}

interface SoggettoPagatore {
  anagrafica: string;
}


export interface Filtro {
  tipo: 'IUV' | 'email' | 'ente';
  filtro: string
}