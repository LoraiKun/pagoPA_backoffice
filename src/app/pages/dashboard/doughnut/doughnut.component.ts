import { Component, Input } from '@angular/core';
import { RisultatiRichiestaPagamento } from '../../../models/pagamenti';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [],
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.css',
})
export class DoughnutComponent {
  @Input() richieste!: RisultatiRichiestaPagamento[];
  statiCount: { [key: string]: number } = {
    // Conta per stato
    Rendicontato: 0,
    Scaduto: 0,
    Sospeso: 0,
    Pagato: 0,
  };
  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  groupAndCountByState(): void {
    this.statiCount = {
      Rendicontato: 0,
      Scaduto: 0,
      Sospeso: 0,
      Pagato: 0,
    };
    this.richieste.forEach((richiesta) => {
      const pendenza = richiesta.pendenza;
      if (pendenza.stato) {
        if (this.statiCount.hasOwnProperty(pendenza.stato)) {
          this.statiCount[pendenza.stato]++;
        }
      }
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.groupAndCountByState();
    this.generateChart();
  }

  generateChart() {
    const ctx = document.getElementById(
      'myDoughtnutChart'
    ) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rendicontato', 'Scaduto', 'Sospeso', 'Pagato'],
        datasets: [
          {
            data: [
              this.statiCount['Rendicontato'],
              this.statiCount['Scaduto'],
              this.statiCount['Sospeso'],
              this.statiCount['Pagato'],
            ],
            backgroundColor: [
              '#84CEEB',
              '#FFC4C4',
              '#FFF2B2 ',
              '#75E6DA',
              '#B4F8C8',
            ],
            hoverBorderColor: [
              '#5CB3E8',
              '#FF9E9E',
              '#FFE08A ',
              '#5DD1C4',
              '#B4F8C8',
            ],
            hoverBackgroundColor: [
              '#5CB3E8',
              '#FF9E9E',
              '#FFE08A ',
              '#5DD1C4',
              '#B4F8C8',
            ],
            hoverBorderWidth: 8,
            offset: 30,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true, // Consente al grafico di adattarsi alla dimensione del contenitore
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          //custom tooltip
        },

        onClick: (event, chartElement) => {
          if (chartElement.length > 0) {
            // Ottieni il primo elemento cliccato (il grafico a barre potrebbe avere più elementi sovrapposti)
            const element = chartElement[0];

            // Esegui la funzione quando una barra è cliccata
          }
        },
      },
    });
  }
}
