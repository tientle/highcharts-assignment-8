Highcharts.chart('container', {

    title: {
        text: 'Florida 4-Year Public High School Graduation Rates Compared to National Average 2010-2013'
    },

    subtitle: {
        text: 'Source: https://nces.ed.gov/ccd/tables/ACGR_2010-11_to_2012-13.asp'
    },

    yAxis: {
        title: {
            text: 'Graduation Rate (%)'
        }
    },

    xAxis: {
      categories: [
        '2010-11',
        '2011-12',
        '2012-13'
      ],
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'Florida',
        data: [71, 75, 76]
    }, {
        name: 'United States/National Average',
        data: [79, 80, 81]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Florida Graduation Rates by Race/Ethinicity & Demographics in 4-Year Public High Schools 2012-13'
    },
    subtitle: {
        text: 'Source: https://nces.ed.gov/ccd/tables/ACGR_RE_and_characteristics_2012-13.asp'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Percent (%)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Graduation Rate: <b>{point.y:.1f} percent</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Indian/Alaska Native', 77],
            ['Asian/Pacific Islander', 88.4],
            ['Hispanic', 74.9],
            ['Black', 64.6],
            ['White', 80.5],
            ['Economically Disadvantaged', 67.0],
            ['Limited English Proficiency', 57.5],
            ['Students With Disabilities', 52.3],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
