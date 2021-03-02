import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
//import { Router } from "@angular/router";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { ServicesService } from "src/app/shared/services/services/service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // Chart
  public chart: any;
  public chart1: any;
  public chart2: any;
  public chart3: any;
  private clicked: any = true;
  private clicked1: any = false;
  public on_off: number;
  public on_off2: number;
  public dashboardData;

  constructor(
    private zone: NgZone,
    private SS: ServicesService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.checkLC();
    this.checkLC2();
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  time_splitter(x) {
    if (x > 59 && x < 3600) {
      return Math.floor(x / 60) + " min " + Math.floor(x % 60) + " sec";
    } else if (x > 3599) {
      let hour = Math.floor(x / 3600);
      let minute = Math.floor(x % 3600);
      let thestatement = "";

      thestatement = thestatement + hour + " hr ";

      if (minute > 59) {
        thestatement =
          thestatement +
          Math.floor(minute / 60) +
          " min " +
          Math.floor(minute % 60) +
          " sec";
      } else {
        thestatement = thestatement + "0 min " + minute + " sec";
      }

      return thestatement;
    } else {
      return x + " sec";
    }
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.SS.giveReport("dashboard", 0, 0).subscribe((res) => {
        this.dashboardData = res;

        this.dashboardData.averageSpent = this.time_splitter(
          this.dashboardData.averageSpent
        );

        this.dashboardData.averageWait = this.time_splitter(
          this.dashboardData.averageWait
        );

        this.getChart();
        this.getChart1();
        // this.getChart2();
        // this.getChart3();
      });
    });
  }

  checkLC() {
    this.SS.checkToggle().subscribe((res) => {
      this.on_off = res.status;
    });
  }

  lcswitch() {
    this.SS.toggleLcSwitch().subscribe(
      (res) => {
        if (res.status == "success") {
          this.notifySuccess("Success");
        }
      },
      (error) => {}
    );
  }

  checkLC2() {
    this.SS.checkToggle2().subscribe((res) => {
      this.on_off2 = res.status;
    });
  }

  lcswitch2() {
    this.SS.toggleLcSwitch2().subscribe(
      (res) => {
        if (res.status == "success") {
          this.notifySuccess("Success");
        }
      },
      (error) => {}
    );
  }

  notifySuccess(message) {
    let title = "Success";
    this.notifyService.openToastr(title, message);
  }

  getChart() {
    let chart = am4core.create("chart_dashboard_2", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "conversation";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "conversation";
    series.dataFields.valueX = "total";
    series.tooltipText = "{valueX.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text = "{values.valueX.workingValue}";
    labelBullet.locationX = 1;
    //.formatNumber('#.0as')

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;
    chart.data = [
      {
        conversation: "Monday",
        total: this.dashboardData.monday,
      },
      {
        conversation: "Tuesday",
        total: this.dashboardData.tuesday,
      },
      {
        conversation: "Wednesday",
        total: this.dashboardData.wednesday,
      },
      {
        conversation: "Thursday",
        total: this.dashboardData.thursday,
      },
      {
        conversation: "Friday",
        total: this.dashboardData.friday,
      },
      {
        conversation: "Saturday",
        total: this.dashboardData.saturday,
      },
      {
        conversation: "Sunday",
        total: this.dashboardData.sunday,
      },
    ];

    this.chart = chart;
  }

  getChart1() {
    let chart = am4core.create("chart_dashboard_3", am4charts.PieChart);

    // Add data
    chart.data = [
     
    ];

    this.dashboardData.top_1 != 0
    ? chart.data.push({
        category: this.dashboardData.top_1_name,
        value: this.dashboardData.top_1,
      })
    : ""; 

    this.dashboardData.top_2 != 0
      ? chart.data.push({
          category: this.dashboardData.top_2_name,
          value: this.dashboardData.top_2,
        })
      : "";

    this.dashboardData.top_3 != 0
      ? chart.data.push({
          category: this.dashboardData.top_3_name,
          value: this.dashboardData.top_3,
        })
      : "";

    this.dashboardData.top_4 != 0
      ? chart.data.push({
          category: this.dashboardData.top_4_name,
          value: this.dashboardData.top_4,
        })
      : "";

    this.dashboardData.top_5 != 0
      ? chart.data.push({
          category: this.dashboardData.top_5_name,
          value: this.dashboardData.top_5,
        })
      : "";

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  // getChart2() {
  //   let chart = am4core.create("chart_dashboard_3", am4charts.XYChart);
  //   chart.paddingRight = 20;

  //   chart.data = generateChartData();

  //   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   dateAxis.baseInterval = {
  //     timeUnit: "minute",
  //     count: 1,
  //   };
  //   dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.tooltip.disabled = true;

  //   let series = chart.series.push(new am4charts.LineSeries());
  //   series.dataFields.dateX = "date";
  //   series.dataFields.valueY = "visits";
  //   // series.tooltipText = "Visits: [bold]{valueY}[/]";
  //   series.fillOpacity = 0.3;

  //   chart.cursor = new am4charts.XYCursor();
  //   chart.cursor.lineY.opacity = 0;

  //   dateAxis.start = 0.8;
  //   dateAxis.keepSelection = true;

  //   function generateChartData() {
  //     let chartData = [];
  //     // current date
  //     let firstDate = new Date();
  //     // now set 500 minutes back
  //     firstDate.setMinutes(firstDate.getDate() - 500);

  //     // and generate 500 data items
  //     let visits = 500;
  //     for (var i = 0; i < 500; i++) {
  //       let newDate = new Date(firstDate);
  //       // each time we add one minute
  //       newDate.setMinutes(newDate.getMinutes() + i);
  //       // some random number
  //       visits += Math.round(
  //         (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
  //       );
  //       // add data item to the array
  //       chartData.push({
  //         date: newDate,
  //         visits: visits,
  //       });
  //     }
  //     return chartData;
  //   }
  // }

  // getChart3() {
  //   let chart = am4core.create("chart_dash_4", am4charts.XYChart);
  //   chart.paddingRight = 20;

  //   // Add data
  //   chart.data = [
  //     {
  //       year: "08:00",
  //       value: 1,
  //     },
  //     {
  //       year: "09:00",
  //       value: 2,
  //     },
  //     {
  //       year: "10:00",
  //       value: 3,
  //     },
  //     {
  //       year: "11:00",
  //       value: 5,
  //     },
  //     {
  //       year: "12:00",
  //       value: 6,
  //     },
  //     {
  //       year: "13:00",
  //       value: 3,
  //     },
  //     {
  //       year: "14:00",
  //       value: 2,
  //     },
  //     {
  //       year: "15:00",
  //       value: 5,
  //     },
  //     {
  //       year: "16:00",
  //       value: 2,
  //     },
  //     {
  //       year: "17:00",
  //       value: 6,
  //     },
  //     {
  //       year: "19:00",
  //       value: 2,
  //     },
  //     {
  //       year: "20:00",
  //       value: 3,
  //     },
  //     {
  //       year: "21:00",
  //       value: 2,
  //     },
  //     {
  //       year: "22:00",
  //       value: 4,
  //     },
  //     {
  //       year: "23:00",
  //       value: 7,
  //     },
  //   ];

  //   // Create axes
  //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  //   categoryAxis.dataFields.category = "year";
  //   categoryAxis.renderer.minGridDistance = 50;
  //   categoryAxis.renderer.grid.template.location = 0.5;
  //   categoryAxis.startLocation = 0.5;
  //   categoryAxis.endLocation = 0.5;

  //   // Create value axis
  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.baseValue = 0;

  //   // Create series
  //   let series = chart.series.push(new am4charts.LineSeries());
  //   series.dataFields.valueY = "value";
  //   series.dataFields.categoryX = "year";
  //   series.strokeWidth = 2;
  //   series.tensionX = 0.77;

  //   // bullet is added because we add tooltip to a bullet for it to change color
  //   let bullet = series.bullets.push(new am4charts.Bullet());
  //   bullet.tooltipText = "{valueY}";

  //   bullet.adapter.add("fill", function (fill, target: any) {
  //     if (target.dataItem.valueY < 0) {
  //       return am4core.color("#FF0000");
  //     }
  //     return fill;
  //   });
  //   let range = valueAxis.createSeriesRange(series);
  //   range.value = 0;
  //   range.endValue = -1000;
  //   range.contents.stroke = am4core.color("#FF0000");
  //   range.contents.fill = range.contents.stroke;

  //   // Add scrollbar
  //   let scrollbarX = new am4charts.XYChartScrollbar();
  //   scrollbarX.series.push(series);
  //   chart.scrollbarX = scrollbarX;

  //   this.chart3 = chart;
  // }
}
