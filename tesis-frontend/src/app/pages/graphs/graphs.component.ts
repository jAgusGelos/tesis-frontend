import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { StatsService } from 'src/app/core/services/stats.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})


export class GraphsComponent implements OnInit {

  chartOption: EChartsOption;
  data = [];
  selectedOption = false;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {

  }

  selectStats(value: string): void {
    this.selectedOption = false;
    switch (value) {
      case 'topEval':
        this.statsService.getTopEval().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'topSimpo':
        this.statsService.getTopSimposioXCongreso().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'topSimpoCongre':
        this.statsService.getTopSimpoGeneral().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'topSimpoXEval':
        this.statsService.getTopSimpoXEval().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'gEtario':
        this.statsService.getEdadesXCongress().subscribe((res: any) => {
          this.data = [
            { name: 'Menores 18', value: res.data[0]['menor-18'] },
            { name: 'Entre 18-24', value: res.data[0]['entre-18-24'] },
            { name: 'Entre 25-40', value: res.data[0]['entre-25-40'] },
            { name: 'Mayores de 40', value: res.data[0]['mayor-40'] }
          ];
        });
        break;
      case 'participSede':
        this.statsService.getPartXSede().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'califSimposios':
        this.statsService.getSimpoXCalif().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'topEventos':
        this.statsService.getTopEventos().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'cancelaciones':
        this.statsService.getEvalXCancelXCongreso().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'cancelCongre':
        this.statsService.getEvalXCancel().subscribe((res: any) => {
          this.data = res.data;
        });
        break;
      case 'estadoArt':
        this.statsService.getEstadoArticulos().subscribe((res: any) => {
          this.data = [
            { name: 'Aprobados', value: res.data.aprobados },
            { name: 'Reentregados', value: res.data.reentrega },
            { name: 'Rechazados', value: res.data.rechazados }
          ];
        });
        break;
      default:
        break;
    }

  }

  // "line" | "bar" | "scatter" | "pie" | "radar" | "map" | "tree" | "treemap" | "graph" | "gauge"
  // | "funnel" | "parallel" | "sankey" | "boxplot" | "candlestick" | "effectScatter" |"custom"
  selectGraph(value: any): void {
    const datos = [];
    const labels = [];
    this.selectedOption = true;
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      datos.push(element.value);
      labels.push(element.name.substring(0, 26));
    }
    console.log(labels);
    switch (value) {
      case 'bar':
        this.chartOption = {
          tooltip: {
            show: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: labels,

          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: datos,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              },
              label: {
                show: true,
                color: 'white',
                fontSize: 12,
              },
            }
          ]
        };
        break;
      case 'pie':
        this.chartOption = {
          tooltip: {
            show: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          legend: {
            show: true
          },
          series:
          {
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            data: this.data,
            label: {
              position: 'outer',
              alignTo: 'labelLine',
              bleedMargin: 5
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
          },
        };
        break;
      default:
        break;
    }
  }

}
