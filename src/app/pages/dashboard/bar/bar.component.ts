import { Component, Input } from '@angular/core';
import {
  Chart,
  ChartType,
  LegendOptions,
  plugins,
  registerables,
} from 'chart.js';
import {
  RispostaRichiestaPagamento,
  RisultatiRichiestaPagamento,
} from '../../../models/pagamenti';
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables);

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {
  @Input() richieste!: RisultatiRichiestaPagamento[];
  risultatiPerMese: { mese: string; count: number }[] = [];
  data!: number[]
  constructor(http: HttpClient) {
  
  }

  groupAndCountByMonth(): void {
    const monthMap = new Map<string, number>(); // Mappa per memorizzare i conteggi per mese

    // Itera attraverso i risultati e conta per ogni mese
    this.richieste.forEach((richiesta) => {
      const pendenza = richiesta.pendenza;
      if (pendenza.dataCaricamento) {
        // Estrai il mese e anno dalla dataCaricamento (ad esempio '2024-12')
        const monthKey = this.formatMonth(pendenza.dataCaricamento);

        // Se la mappa contiene già quel mese, incrementa il contatore, altrimenti inizializzalo a 1
        if (monthMap.has(monthKey)) {
          monthMap.set(monthKey, monthMap.get(monthKey)! + 1);
        } else {
          monthMap.set(monthKey, 1);
        }
      }
    });

    // Trasforma la mappa in un array di oggetti con formato [{ mese, count }]
    this.risultatiPerMese = Array.from(monthMap, ([mese, count]) => ({
      mese,
      count,
    }));
    console.log(this.risultatiPerMese);
  }

  formatMonth(date: Date): string {
    // Se la data è una stringa, convertila in un oggetto Date
    const validDate = typeof date === 'string' ? new Date(date) : date;

    // Verifica che la data sia valida
    if (validDate instanceof Date && !isNaN(validDate.getTime())) {
      const year = validDate.getFullYear();
      const month = (validDate.getMonth() + 1).toString().padStart(2, '0'); // Aggiungi uno zero se il mese è singolo
      return `${year}-${month}`;
    } else {
      // Se la data non è valida, restituisci una stringa vuota o gestisci l'errore come preferisci
      return '';
    }
  }

  returnMonthArray(): number[]{
    let array: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
    this.risultatiPerMese.forEach(month=>{
      console.log(month.mese)
      if(month.mese.includes('-01')){
        array[0] = month.count
      }
      if(month.mese.includes('-02')){
        array[1] = month.count
      }
      if(month.mese.includes('-03')){
        array[2] = month.count
      }
      if(month.mese.includes('-04')){
        array[3] = month.count
      }
      if(month.mese.includes('-05')){
        array[4] = month.count
      }
      if(month.mese.includes('-06')){
        array[5] = month.count
      }
      if(month.mese.includes('-07')){
        array[6] = month.count
      }
      if(month.mese.includes('-08')){
        array[7] = month.count
      }
      if(month.mese.includes('-09')){
        console.log('test')
        array[8] = month.count
      }
      if(month.mese.includes('-10')){
        array[9] = month.count
      }
      if(month.mese.includes('-11')){
        array[10] = month.count
        
      }
      if(month.mese.includes('-12')){
        array[11] = month.count
      }
    })
    console.log(array)
    return array
  }

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];


  ngOnInit(): void {
    this.groupAndCountByMonth();
    this.data = this.returnMonthArray()
    this.generateChart()
  }

  generateChart(){
    console.log('dentro generate')
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.months,
        datasets: [
          {
            label: 'Numero richieste di pagamento:',
            data: this.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(123, 239, 178, 0.2)',
              'rgba(255, 87, 51, 0.2)',
              'rgba(130, 177, 255, 0.2)',
              'rgba(220, 118, 51, 0.2)',
              'rgba(255, 196, 79, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgba(123, 239, 178)',
              'rgba(255, 87, 51)',
              'rgba(130, 177, 255)',
              'rgba(220, 118, 51)',
              'rgba(255, 196, 79)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Consente al grafico di adattarsi alla dimensione del contenitore
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Mostra la legenda
            position: 'bottom', // Posiziona la legenda in basso
            labels: {
              font: {
                size: 14, // Dimensione del testo
              },
              color: '#000', // Colore del testo
            },
          },
        },
        onClick: (event, chartElement) => {
          if (chartElement.length > 0) {
            // Ottieni il primo elemento cliccato (il grafico a barre potrebbe avere più elementi sovrapposti)
            const element = chartElement[0];

            // Esegui la funzione quando una barra è cliccata
            console.log(element);
          }
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
