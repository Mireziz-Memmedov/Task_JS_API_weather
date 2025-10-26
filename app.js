"use strict";
$(document).ready(function () {

    async function weather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myweather').val()}&appid=0f00d91e0d6240d5d87650eafe9d9bc2&units=metric`
        let city = !$.trim($('#myweather').val())
        if (city == '') {
            let responce = await fetch(url);
            let data = await responce.json();

            if (data.cod == 200) {
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#feels').html(data.main.feels_like);
            } else {
                $('#city').html('Şəhər tapılmadı');
                $('#temp').html('-');
                $('#feels').html('-');
            }
        } else {
            $('#city').html('Zəhmət olmasa şəhər daxil et');
        }
        $('#myweather').val('')
        console.log(data)
    }

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            weather()
        }
    });
    $('#btn').click(function (e) {
        e.preventDefault();
        weather()
    });
});






