import { Data } from '@angular/router';

export interface RispostaRichiestaPagamento {
  numRisultati: number;
  numPagine: number;
  risultatiPerPagina: number;
  pagina: number;
  prossimiRisultati: string;
  maxRisultati: number;
  risultati: RisultatiRichiestaPagamento[];
}
export interface Segnalazioni {
  data: Date;
  codice: number;
  descrizione: string;
  dettaglio: string;
}
export interface RisultatiRichiestaPagamento {
  stato: string;
  dettaglioStato: string;
  bloccante: boolean;
  segnalazioni: Segnalazioni[];
  pendenza: Pendenza;
  modello: string;
}
interface TipoPendenza{
  idTipoPendenza: string;
  descrizione: string;
  tipo: string;
}
interface Dominio{
  idDominio: number;
  ragioneSociale: string;
  indirizzo: string;
  civico: string;
  cap: number;
  localita: string;
  provincia: string;
  nazione: string;
  email: string;
  cf_iban: string;
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
  abilitato: boolean;
  autStampaPosteItaliane: string;
  area: string;
  intermediato: boolean;
  tassonomiaPagoPA: number;
  unitaOperative: string;
  contiAccredito: string;
  entrate: string;
  tipiPendenza: string;
}

interface UnitaOperativa {
  idUnita: number;
  ragioneSociale: string;
  indirizzo: string;
  civico: string;
  cap: number;
  localita: string;
  provincia: string;
  nazione: string;
  email: string;
  cf_iban: string;
  tel: number;
  fax: number;
  web: string;
  area: string;
  abilitato: boolean;
}
interface SoggettoPagatore{
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
interface Pendenza {
  idA2A: string;
  idPendenza: string;
  tipoPendenza:TipoPendenza ;
  dominio: Dominio;
  unitaOperativa: UnitaOperativa ;
  stato: string;
  iuvAvviso: number;
  dataUltimoAggiornamento: Date;
  dataPagamento: Date;
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
  dataCaricamento: Date;
  dataValidita: Date;
  dataScadenza: Data;
  annoRiferimento: number;
  cartellaPagamento: string;
  tassonomia: string;
  tassonomiaAvviso: string;
  direzione: string;
  divisione: string;
  documento: Documento;
  dataNotificaAvviso: Data;
  dataPromemoriaScadenza: Data;
  rpp: string;
  pagamenti: string;
}
export interface Documento {
  identificativo: string;
  descrizione: string;
  rata: number;
}
export interface Filtro {
  filtroMail: string;
  filtroIUV: string;
  filtroEnte: string;
  filtroCF_PI: string;
}

export interface FiltroFiles{
  filtroIUV: string;
  filtroEnte: string;
  filtroID: string;
}
