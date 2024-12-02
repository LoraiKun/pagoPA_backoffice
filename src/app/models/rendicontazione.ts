export interface Risultato {
  iuv: string;
  iur: string;
  indice: number;
  importo: number;
  esito: number;
  data: string;
  segnalazioni: Segnalazione[];
  flussoRendicontazione: FlussoRendicontazione;
  vocePendenza: VocePendenza;
  codEntrata: string;
}

export interface Segnalazione {
  data: string;
  codice: string;
  descrizione: string;
  dettaglio: string;
}

export interface FlussoRendicontazione {
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
  segnalazioni: Segnalazione[];
}

export interface VocePendenza {
  indice: number;
  idVocePendenza: string;
  importo: number;
  descrizione: string;
  stato: string;
  descrizioneCausaleRPT: string;
  contabilita: Contabilita;
  dominio: Dominio;
  pendenza: Pendenza;
}

export interface Contabilita {
  quote: Quota[];
  proprietaCustom: any;
}

export interface Quota {
  capitolo: string;
  annoEsercizio: number;
  importo: number;
  accertamento: string;
  proprietaCustom: any;
  titolo: string;
  tipologia: string;
  categoria: string;
  articolo: string;
}

export interface Dominio {
  idDominio: number;
  ragioneSociale: string;
  indirizzo: string;
  civico: string;
  cap: number;
  localita: string;
  provincia: string;
  nazione: string;
  email: string;
  pec: string;
  tel: number;
  fax: number;
  web: string;
  gln: number;
  cbill: number;
  iuvPrefix: string;
  stazione: number;
  auxDigit: number;
  segregationCode: number;
  logo: string;
  abilitato: string;
  autStampaPosteItaliane: string;
  area: string;
  intermediato: boolean;
  tassonomiaPagoPA: string;
  unitaOperative: string;
  contiAccredito: string;
  entrate: string;
  tipiPendenza: string;
}

export interface Pendenza {
  idA2A: string;
  idPendenza: string;
  tipoPendenza: TipoPendenza;
  dominio: Dominio;
  unitaOperativa: UnitaOperativa;
  stato: string;
  iuvAvviso: number;
  dataUltimoAggiornamento: string;
  dataPagamento: string;
  importoPagato: number;
  importoIncassato: number;
  iuvPagamento: number;
  anomalo: boolean;
  verificato: boolean;
  tipo: string;
  UUID: string;
  nome: string;
  causale: string;
  soggettoPagatore: SoggettoPagatore;
  importo: number;
  numeroAvviso: number;
  dataCaricamento: string;
  dataValidita: string;
  dataScadenza: string;
  annoRiferimento: number;
  cartellaPagamento: string;
  tassonomia: string;
  tassonomiaAvviso: string;
  direzione: string;
  divisione: string;
  documento: Documento;
}

export interface TipoPendenza {
  idTipoPendenza: string;
  descrizione: string;
  tipo: string;
}

export interface UnitaOperativa {
  idUnita: number;
  ragioneSociale: string;
  indirizzo: string;
  civico: string;
  cap: number;
  localita: string;
  provincia: string;
  nazione: string;
  email: string;
  pec: string;
  tel: number;
  fax: number;
  web: string;
  area: string;
  abilitato: boolean;
}

export interface SoggettoPagatore {
  tipo: string;
  identificativo: string;
  anagrafica: string;
  indirizzo: string;
  civico: string;
  cap: number;
  localita: string;
  provincia: string;
  nazione: string;
  email: string;
  cellulare: number;
}

export interface Documento {
  identificativo: string;
  descrizione: string;
  rata: number;
}


export interface ResponseRendicontazione{
  
numRisultati: number,
numPagine: number
risultatiPerPagina: number,
pagina: number,
prossimiRisultati: string,
maxRisultati: number,
risultati: Risultato[]
}