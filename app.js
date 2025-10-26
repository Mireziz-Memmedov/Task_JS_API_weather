"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let text = $('input').val().trim();
    //     if (text === '') return;
    //     if (isNaN(text)) {
    //         $('.col-md-12').append(`<button>${text}</button>`);
    //     } else {
    //         let a = parseInt(text);
    //         for (let i = 1; i <= a; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);
    //         }
    //     }
    //     $('input').val('');
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     let a = $('input').val().trim();

    //     if (isNaN(a)) {
    //         $('.col-md-12').append(`<button>${a}</button>`);
    //     } else {
    //         let r = parseFloat(a);
    //         for (let i = 1; i <= r; i++) {
    //             $('.col-md-12').append(`<button>${i}</button>`);

    //         }
    //     }
    //     $('input').val('');

    // });




    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         if (isNaN(m)) {
    //             $('.col-md-12').append(`<button>${m}</button>`);
    //         } else {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<button>${i}</button>`);
    //             }
    //         }
    //     }
    //     a($('input').val());
    //     $('input').val('');
    // });



    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = (m) => {
    //         m = parseFloat(m);
    //         for (let i = 1; i <= m; i++) {
    //             $('.col-md-12').append(`<button>${m}</button>`);

    //         }
    //     }
    //     a($('input').val());
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = m => {
    //         if (!isNaN(m)) {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //             }
    //         } else if (!$.trim($('input').val()) == '') {
    //             $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //         }
    //     }
    //     a($('input').val());
    //     $('input').val('');
    // });


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {

    //         let n = (m) => {
    //             for (let i = 1; i <= m; i++) {
    //                 $('.col-md-12').append(`<div class="minibox">${m}</div>`);
    //             }
    //         }

    //         let s = (h) => isNaN(h)
    //             ? $('.col-md-12').append(`<div class="minibox">${h}</div>`)
    //             : '';

    //         n($('input').val());
    //         s($('input').val());
    //     }

    //     $('input').val('');

    // });

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     if (!$.trim($('input').val()) == '') {
    //         let a = b => {
    //             for (let i = 1; i <= b; i++) {
    //                 $('.minibox').append(`<h2>${b}</h2>`);
    //             }
    //         }
    //         let v = f => parseFloat(f) == f
    //             ? a(f)
    //             : $('.minibox').append(`<h2>${f}</h2>`);

    //         v($('input').val());
    //     }
    //     $('input').val('');
    // });

    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {
    //         let v = (n) => {
    //             for (let i = 1; i <= n; i++) {
    //                 $('.mini').append(`<h4>${n}</h4>`);
    //             }
    //         }
    //         let s = (m) => Number(m)
    //             ? v(m)
    //             : $('.mini').append(`<h4>${m}</h4>`);

    //         s($('input').val());
    //     } else {
    //         alert('zehmet olmasa xanani bos qoymayin')
    //     }
    //     $('input').val('');

    //     document.querySelector('.mini').scrollTo(0, document.querySelector('.mini').scrollHeight)
    // });






    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('input').val()) == '') {

    //         let a = b => Number(b)
    //             ? $('.minibox').append(`<h2>${b}</h2>`)
    //             : $('.minibox').append(`<h2>${'Error'}</h2>`)

    //         a($('input').val());


    //     }
    //     $('input').val('');

    // });

    // let a = [1, 'salam', 5, 4]

    // for (let i = 0; i < a.length; i++) {
    //     console.log(a.length)
    // }


    // $('.btn').click(function (e) {
    //     e.preventDefault();

    //     let a = b => Number(b) ? $('.minibox').append(`<h2>${Number(b) + 5}</h2>`) : '';
    //     a($('input').val())
    //     $('input').val('');



    // });

    // $('#sentme').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('#inputme').val()) == '') {

    //         let a = b => {
    //             $('#me').append(`<h2 class="right">${b}</h2>`)
    //             $('#you').append(`<h2 class="left">${b}</h2>`)
    //         }
    //         a($('#inputme').val());

    //     }
    //     $('#inputme').val('');

    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)
    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    // });

    // $('#sentyou').click(function (e) {
    //     e.preventDefault();

    //     if (!$.trim($('#inputyou').val()) == '') {

    //         let a = b => {
    //             $('#you').append(`<h2 class="right">${b}</h2>`)
    //             $('#me').append(`<h2 class="left">${b}</h2>`)
    //         }
    //         a($('#inputyou').val());

    //     }
    //     else {
    //         return
    //     }
    //     $('#inputyou').val('');

    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    // });

    // sentme-ye click edende a funksiyasi yarat b parametri qebul eden. Eger b-ya deyer elave etmesek b-nin deyeri olsun '' bosluq.
    // sonra sert yazmisiq ki burdan true cixsa val adinda deyisen yarat ve deyeri inputme-ye yazdigimiz olsun.
    // newh2 deyisen yarat ve qebul etsin h2 -ni. clas line-i, div ise bos div yaratsin ve b parametrini ora elave etsin.
    // newh2-ye append ele val yeni iputmeye ne yazaciqsa onu. clasa elave ele newh2-ni, div-e elave ele clasi ve returun ele div-i.
    // yeni ki butun bunlari bir birinin icine yigib geri qaytarsin. if serti duz olmasa else-ni returun ele. yeni ki tam basa dusmedim bunu izah edersen.
    // sonra a funksiyasini cagiririq ve you-ya append edirik a-ni cagiraraq b-ye deyeri right veririk. 

    // $('#sentme').click(function (e) {
    //     e.preventDefault();
    //     function a(b = '') {
    //         if (!$.trim($('#inputme').val()) == '') {
    //             let val = $('#inputme').val()
    //                 , newh2 = $('<h2></h2>')
    //                 , clas = $('<div class="line"></div>')
    //                 , div = $(`<div ${b}></div>`)
    //             $(newh2).append(val)
    //             $(clas).append(newh2)
    //             $(div).append(clas)
    //             return div
    //         }
    //         else {
    //             // alert("bos qoymaq olmaz")
    //             // let bos = $('<h3>bos qoymaq olmaz</h3>')
    //             //     , bosdiv = $('<div class="non"></div>')
    //             // $(bosdiv).append(bos)
    //             // return bosdiv
    //             return
    //         }
    //     }
    //     $('#you').append(a('class="right"'))
    //     $('#me').append(a('class="right"'))
    //     $('#inputme').val('');

    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    // });

    // $('#sentyou').click(function (e) {
    //     e.preventDefault();
    //     function a(b = '') {
    //         if (!$.trim($('#inputyou').val()) == '') {
    //             let val = $('#inputyou').val()
    //                 , newh2 = $('<h2></h2>')
    //                 , clas = $('<div class="line"></div>')
    //                 , div = $(`<div ${b}></div>`)
    //             $(newh2).append(val)
    //             $(clas).append(newh2)
    //             $(div).append(clas)
    //             return div
    //         }
    //         else {
    //             return
    //         }
    //     }
    //     $('#you').append(a('class="left"'))
    //     $('#me').append(a('class="left"'))
    //     $('#inputyou').val('')

    //     document.querySelector('#you').scrollTo(0, document.querySelector('#you').scrollHeight)
    //     document.querySelector('#me').scrollTo(0, document.querySelector('#me').scrollHeight)

    // });

    // "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0f00d91e0d6240d5d87650eafe9d9bc2&units=metric"
    //  &lang=az

    //     $(document).on('keypress', function (e) {
    //         if (e.which == 13) {
    //             let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myweather').val()}&appid=0f00d91e0d6240d5d87650eafe9d9bc2&units=metric`
    //             async function weather() {
    //                 let responce = await fetch(url);
    //                 let data = await responce.json();
    //                 $('#city').html(data.name);
    //                 $('#temp').html(data.main.temp);
    //                 $('#feels').html(data.main.feels_like);
    //                 $('#myweather').val('')
    //                 console.log(data)
    //             }
    //             weather()
    //         }
    //     });

    // });
    //     $('#btn').click(function (e) {
    //         e.preventDefault();
    //         let url = `https://api.openweathermap.org/data/2.5/weather?q=${$('#myweather').val()}&appid=0f00d91e0d6240d5d87650eafe9d9bc2&units=metric`
    //         async function weather() {
    //             let responce = await fetch(url);
    //             let data = await responce.json();
    //             $('#city').html(data.name);
    //             $('#temp').html(data.main.temp);
    //             $('#feels').html(data.main.feels_like);
    //             $('#myweather').val('')
    //             console.log(data)
    //         }
    //         weather()
    //     });

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






