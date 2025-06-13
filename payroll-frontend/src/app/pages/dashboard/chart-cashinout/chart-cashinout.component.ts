import {
  Component, Input,
  OnInit
} from '@angular/core';
import {
  getCSSVariableValue
} from "../../../_metronic/kt/_utils";
import {
  NgApexchartsModule
} from "ng-apexcharts";

@Component({
  selector: 'app-chart-cashinout',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './chart-cashinout.component.html',
  styleUrl: './chart-cashinout.component.scss'
})
export class ChartCashinoutComponent  implements OnInit {
  @Input() data1: any;
  @Input() data2: any;
  chartOptions: any = {};
  constructor() {}

  ngOnInit(): void {
    this.updateChartData();

    setInterval(() => {
      this.updateChartData();
    }, 60000); // 60000 milliseconds = 1 minute
  }

  updateChartData(): void {
    this.chartOptions = getChartOptions(this.data1, this.data2);
  }
}

function getChartOptions(netProfitData: any,revenueData: any) {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')

  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-info')

  return {
    series: [
      {
        name: 'Net Profit',
        data: netProfitData,
      },
      {
        name: 'Revenue',
        data: revenueData,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      stacked: true,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '12%',
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: -80,
      max: 80,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
