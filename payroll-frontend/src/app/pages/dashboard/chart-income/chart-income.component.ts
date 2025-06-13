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
import {
  NgClass
} from "@angular/common";
import {
  DashboardService
} from "../dashboard.service";

@Component({
  selector: 'app-chart-income',
  standalone: true,
  imports: [
    NgApexchartsModule,
    NgClass
  ],
  templateUrl: './chart-income.component.html',
  styleUrl: './chart-income.component.scss'
})
export class ChartIncomeComponent implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
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
    this.chartOptions = getChartOptions(this.data1, this.data2, this.chartHeight, this.chartColor);
  }
}

function getChartOptions(netProfitData: any,revenueData: any, chartHeight: string, chartColor: string) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  const baseColor = getCSSVariableValue('--bs-' + chartColor);

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
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
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
          return '$' + val + ' revenue';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
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
