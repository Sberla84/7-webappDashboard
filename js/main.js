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

// TRAFFIC CHART

var tchart = document.getElementById('mytrafficChart');

var myChart = new Chart(tchart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(116, 119, 191, 1)',
            barThickness: 'flex' ,
        }]
    },
    options: {
        maintainAspectRatio:false,
    legend: {
        display: false,
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// USERS CHART

var uchart = document.getElementById('myusersChart');

var myChart = new Chart(uchart, {
    type: 'pie',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [13, 17, 70],
            backgroundColor: [
            'rgba(116, 119, 191, 1)',
            'rgba(129, 201, 143, 1)',
            'rgba(116, 177, 191, 1)'                                     
        ]
            
        }]
    },
    options: {
        maintainAspectRatio:false,
        legend: {
            display:true,
            position: 'right',
        },
        
    }
});

//  ALERT BOX AND BELL ANIMATIONS



$(document).ready(function(){
    $('.bell').click(function(){
        $('#alert-box').slideDown();
    });
    $('#alert-box p span').click(function(){
        $(this).parent().slideUp(500, function(){
            $(this).remove();
            if ($('#alert-box').children().length === 0){
                $('.bell-green-circle').addClass('Bell-circle-hide');
            }
        });
         
    });
    
});

// ALERT ANIMATION

$(document).ready(function(){
    $('#close-x').click(function(){
        $(this).parent().fadeOut();
    });
});

// MESSAGE WIDGET
$( "#autocomplete" ).autocomplete({
    source: [ "Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"]
  });

$(document).ready(function(){
    $('.button-send').click(function(e){
        e.preventDefault();
        // let $name = $('.search-name').val();
        // let $message = $('.textarea_style').val();
        if ($('.search-name').val() ===  "" && $('.textarea_style').val() === "" ){
            alert("You have to complete both fields");
        }
         else if ($('.search-name').val() === "" && $('.textarea_style').val() != ""){
            alert("You have to add a name");
        }
        else if ($('.search-name').val() != "" && $('.textarea_style').val() === ""){
            alert("You have to add a message");
        }
        else {
            alert("Your message to " + $('.search-name').val() + " has been sent!");
        };
    });
});

// LOCAL STORAGE


$(document).ready(function(){

    $(".button-save").click(function(){
    localStorage.setItem("email", $("#email").is(':checked'));
    localStorage.setItem("public", $("#public").is(':checked'));
    localStorage.setItem("timezone", $('#timezone').val());

 });
});

function load(){    
    var checkedmail = JSON.parse(localStorage.getItem('email'));
    var checkedpublic = JSON.parse(localStorage.getItem('public'));
    document.getElementById('email').checked = checkedmail;
    document.getElementById('public').checked = checkedpublic;
    $('#timezone').val(localStorage.getItem('timezone'));
}

$(document).ready(function(){

    $(".button-cancel").click(function(){

    localStorage.removeItem("email");
    localStorage.removeItem("public");
    localStorage.removeItem("timezone");

    document.getElementById('email').checked = false;
    document.getElementById('public').checked = false;
    $('#timezone').val("");
   });
});

load();


// NAVIGATION FUNCTIONS

$(document).ready(function(){
    $('.navi').click(function(){
        $('.ico-nav').removeClass('ico-clicked');
        $(this).find('path').addClass('ico-clicked');
    });
});