"use strict";
$(document).ready(function () {

    async function weather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myweather').val()}&appid=0f00d91e0d6240d5d87650eafe9d9bc2&units=metric`
        let city = !$.trim($('#myweather').val())
        if (city == '') {
            let responce = await fetch(url);
            let data = await responce.json();

            if (data.cod == 200) {
                $('#city').html(data.name).css('color', '#ffffff');
                $('#temp').html(data.main.temp).css('color', '#ffffff');
                $('#feels').html(data.main.feels_like).css('color', '#ffffff');
            } else {
                $('#city').html('Şəhər tapılmadı').css('color', '#ff0000ff');
                $('#temp').html('-').css('color', '#ff0000ff');
                $('#feels').html('-').css('color', '#ff0000ff');
            }
            console.log(data)
        } else {
            $('#city').html('Zəhmət olmasa şəhər daxil et').css('color', '#ff0000ff');
            $('#temp').html('-').css('color', '#ff0000ff');
            $('#feels').html('-').css('color', '#ff0000ff');
        }
        $('#myweather').val('')
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






