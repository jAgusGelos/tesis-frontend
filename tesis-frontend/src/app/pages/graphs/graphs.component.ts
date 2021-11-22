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
  dataLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  data = [120, 200, 150, 80, 70, 110, 130];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {

  }

  selectStats(value: string): void {
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
              // trabajar esto:
              console.log(res.data);
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
                  this.data = res.data;
                });
                break;
      default:
        break;
    }

  }

  // "line" | "bar" | "scatter" | "pie" | "radar" | "map" | "tree" | "treemap" | "graph" | "gauge"
  // | "funnel" | "parallel" | "sankey" | "boxplot" | "candlestick" | "effectScatter" |"custom"
  selectGraph(value: any): void {
    const pieData = [];
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      const label = this.dataLabel[i];
      pieData.push({ name: label, value: element });
    }
    switch (value) {
      case 'bar':
        this.chartOption = {
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: this.dataLabel,
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: this.data,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        };
        break;
      case 'pie':
        this.chartOption = {
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
            data: pieData,
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
