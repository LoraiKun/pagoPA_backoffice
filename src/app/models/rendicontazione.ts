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

export const FILE_FR: string[] = [
  '100001234500', '100001234501', '100001234502', '100001234503', '100001234504',
  '100001234505', '100001234506', '100001234507', '100001234508', '100001234509',
  '100001234510', '100001234511', '100001234512', '100001234513', '100001234514',
  '100001234515', '100001234516', '100001234517', '100001234518', '100001234519',
  '100001234520', '100001234521', '100001234522', '100001234523', '100001234524',
  '100001234525', '100001234526', '100001234527', '100001234528', '100001234529',
];
