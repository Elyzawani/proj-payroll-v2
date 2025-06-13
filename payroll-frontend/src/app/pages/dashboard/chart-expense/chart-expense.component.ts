import {
  Component, Input,
  OnInit
} from '@angular/core';
import {
    NgApexchartsModule
} from "ng-apexcharts";
import {
  getCSSVariableValue
} from "../../../_metronic/kt/_utils";
import {
  NgClass
} from "@angular/common";
import {
  DashboardService
} from "../dashboard.service";

@Component({
  selector: 'app-chart-expense',
  standalone: true,
  imports: [
    NgApexchartsModule,
    NgClass
  ],
  templateUrl: './chart-expense.component.html',
  styleUrl: './chart-expense.component.scss'
})
export class ChartExpenseComponent  implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  @Input() chartData: any;
  chartOptions: any = {};

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.updateChartData();

    setInterval(() => {
      this.updateChartData();
    }, 60000); // 60000 milliseconds = 1 minute
  }

  async updateChartData(): Promise<void> {
    const netProfitData = await this.dashboardService.getNetProfitData().toPromise();
    const revenueData = await this.dashboardService.getNetProfitData().toPromise();
    this.chartOptions = getChartOptions(netProfitData, revenueData, this.chartHeight, this.chartColor);
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
