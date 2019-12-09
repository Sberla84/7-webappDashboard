// LINE CHART JS

var ctx = document.getElementById('myChart');

var $options = {
    responsive: true,
    maintainAspectRatio:false,
    legend: {
        display: false,
    }
};

var data = {
    labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
        backgroundColor : "rgba(226,227,246,0.5)",
        borderColor : "#9fa2e2",
        borderWidth: "1",
        lineTension: "0",
        pointBorderWidth : "2",
        pointBackgroundColor : "#fff",
        pointBorderColor : "#7377bf",
        pointRadius : "4" ,
        data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2250,1750],
    }]
};

$(document).ready(function(){
    $('.traffic-buttons li').click(function(){
            $('.traffic-buttons li').addClass("normal");
            $('.traffic-buttons li').removeClass("clicked");
            if ($(this).text() === "Hourly" ) {
                data = {
                    labels:['1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12AM'],
                    datasets: [{
                        backgroundColor : "rgba(226,227,246,0.5)",
                        borderColor : "#9fa2e2",
                        borderWidth: "1",
                        lineTension: "0",
                        pointBorderWidth : "2",
                        pointBackgroundColor : "#fff",
                        pointBorderColor : "#7377bf",
                        pointRadius : "4" ,
                        data: [9,18,6,11,13,9,19,16,11,9,10,12],
                    }]
                };
                $(this).addClass("clicked");
            } else if ($(this).text() === "Daily" ) {
                data = {
                    labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    datasets: [{
                        backgroundColor : "rgba(226,227,246,0.5)",
                        borderColor : "#9fa2e2",
                        borderWidth: "1",
                        lineTension: "0",
                        pointBorderWidth : "2",
                        pointBackgroundColor : "#fff",
                        pointBorderColor : "#7377bf",
                        pointRadius : "4" ,
                        data: [215,324,240,190,210,245,230],
                    }]
                };
                $(this).addClass("clicked");
            } else if ($(this).text() === "Weekly") {
                data = {
                    labels:['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
                    datasets: [{
                        backgroundColor : "rgba(226,227,246,0.5)",
                        borderColor : "#9fa2e2",
                        borderWidth: "1",
                        lineTension: "0",
                        pointBorderWidth : "2",
                        pointBackgroundColor : "#fff",
                        pointBorderColor : "#7377bf",
                        pointRadius : "4" ,
                        data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2250,1750],
                    }]
                };
                $(this).addClass("clicked");
            } else if ($(this).text() === "Montly") {
                data = {
                    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    datasets: [{
                        backgroundColor : "rgba(226,227,246,0.5)",
                        borderColor : "#9fa2e2",
                        borderWidth: "1",
                        lineTension: "0",
                        pointBorderWidth : "2",
                        pointBackgroundColor : "#fff",
                        pointBorderColor : "#7377bf",
                        pointRadius : "4" ,
                        data: [2350,4500,4200,3840,3000,3100,2300,2900,3100,3000,3200,3450],
                    }]
                };
                $(this).addClass("clicked");
            }
            Chart.Line(ctx,{
                options: $options,
                data: data
            });
        
        });
        Chart.Line(ctx,{
            options: $options,
            data: data
        });
});



// 

