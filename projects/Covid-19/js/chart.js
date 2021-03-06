// function to display in chart -> CONTINENT info
function barChart(element,data){
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: toArray(element.list,"name"),
            datasets: [{
                label: `${stat} `,
                data: data,
                fill: false,
                backgroundColor: bgColor(data),
                hoverBackgroundColor: hoverBgColor(data),
                borderColor: borderColor(data),
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: `${element.name}`,
                fontSize: 20,
                fontColor: 'white',
            },
            legend: {
                labels: {
                fontColor: '#cccccc',
                fontSize: 20
                }
             },
            scales:  {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontColor: '#cccccc', 
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: false,
                        fontColor: '#cccccc', 
                    }
                }]
            }
        }
    });
}


