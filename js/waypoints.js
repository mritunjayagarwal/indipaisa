/* Become partners Page */

  /* chart */
  let module = document.getElementById('bar');
  if (module) {
    new Waypoint({
      element: module,
      offset: '80%',
      handler: function(direction) {
        let chart = document.getElementById('myChart');
        var xValues = ["year 1", "year 2", "year 3", "year 4", "year 5"];
    var yValues = [300, 500, 700, 990, 1250];
    var barColors = ["#F5847E", "#B4B2C2", "#CCA7EF", "#F4827C", "#B1D06E"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        animation: {
              duration: 5000,
          },
        scales: {
          yAxes: [{
            ticks: {
              padding: 20,
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Revenue per month'
            },
            gridLines : {
                    drawBorder : false
                }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
                display: false
              },
            barPercentage: 0.6
          }]
        },
        plugins: {
          labels: {
            render: 'image',
            textMargin: 10,
            images: [
              {
                src: './img/chart/1.png',
                width: 30,
                height: 30
              },
              {
                src: './img/chart/2.png',
                width: 30,
                height: 30
              },
              {
                src: './img/chart/3.png',
                width: 30,
                height: 30
              },
              {
                src: './img/chart/4.png',
                width: 30,
                height: 30
              },
              {
                src: './img/chart/5.png',
                width: 30,
                height: 30
              },
            ]
          }
        },
      }
    });
      }
    })
  }