import { Component } from '@angular/core';
import { ResponseRendicontazione, Risultato } from '../../../models/rendicontazione';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { MESI } from '../../../costants/costanti';

@Component({
  selector: 'app-bar-rendicontazioni',
  standalone: true,
  imports: [],
  templateUrl: './bar-rendicontazioni.component.html',
  styleUrl: './bar-rendicontazioni.component.css',
})
export class BarRendicontazioniComponent {
  constructor(private http: HttpClient) {}
  rendicontazioni!: Risultato[];
  months: string[] = [
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
  labels = MESI
  conteggi: { [mese: string]: { positivi: number; negativi: number } } = {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<ResponseRendicontazione>('assets/json/rendicontazione.json').subscribe({
      next: (res)=>{
        console.log(res)
        this.rendicontazioni = res.risultati
        this.generateDatas()

      }
    })
  }


  generateDatas(){
    this.conteggi = {}

    this.months.forEach(month =>{
      this.conteggi[month] = {positivi: 0, negativi: 0} //Inizializzo i conteggi
    })
    console.log(this.conteggi)
    this.rendicontazioni.forEach(rendicontazione =>  {
      const data = new Date(rendicontazione.data)
      const mese = this.months[data.getMonth()]
      console.log(rendicontazione.data)
      if(rendicontazione.esito === 0){
        this.conteggi[mese].positivi++
      }else{
        this.conteggi[mese].negativi++
      }
    })
    const datasetPositivi = this.months.map((mese) => this.conteggi[mese].positivi);
    const datasetNegativi = this.months.map((mese) => this.conteggi[mese].negativi);

    this.generateChart(datasetNegativi, datasetPositivi)
  }
  generateChart(negativi: number[], positivi: number[]){
    const ctx = document.getElementById('rend-chart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Esiti Negativi',
            data: negativi,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
              'rgb(255, 99, 132)',

            ],
            borderWidth: 1,
          },
          {
            
            label: 'Esiti Positivi',
            data: positivi,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
              'rgb(54, 162, 235)',

            ],
            borderWidth: 1,
          }
        ],
      },
      options: {
        responsive: true, // Consente al grafico di adattarsi alla dimensione del contenitore
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true, // Mostra la legenda
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
