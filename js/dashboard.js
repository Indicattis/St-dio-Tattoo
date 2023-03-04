$('.dashboard--change').click(function () {
    $('.dashboard--change--toggle').toggleClass('change')
    $('#change--list').toggleClass('change')
    $('#change--calendar').toggleClass('change')
    $('.request--list').toggleClass('change')
    $('#request--calendar').toggleClass('change')
    }
  )
const clickedButton = document.getElementsByClassName('request--item--show--info');

window.onload = getLineIndex();
function getLineIndex(){
    for(x=0;x<clickedButton.length;x++){
        // arranjo os listeners com os index das linhas
        (function(index){
        clickedButton[x].addEventListener("click", function(){
            infoShow(index);
        });
        })(x);
    }
}
function infoShow(element){ // element é o index da linha clicada
    console.log(element); // mostrar index da linha como exemplo

    $('.request--item--edit'+'.'+element).toggleClass('show')

// removo os listeners
    for(x=0;x<clickedButton.length;x++){
        objclone = clickedButton[x].cloneNode(true);
        clickedButton[x].parentNode.replaceChild(objclone, clickedButton[x]);
    }
getLineIndex();
}



function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

document.addEventListener('DOMContentLoaded', function () {
    const monthsBr = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',];
    const tableDays = document.getElementById('dashboard--calendar--show--days');
    function GetDaysCalendar (month, year) {
        document.getElementById('dashboard--calendar--current--month').innerHTML = monthsBr[month];
        document.getElementById('dashboard--calendar--current--year').innerHTML = year;

        let firstDayOfWeek = new Date(year,month,1).getDay()-1;
        let getLastDayThisMonth = new Date(year,month+1,0).getDate();

        for (var i = -firstDayOfWeek,index = 0; i < (42-firstDayOfWeek); i++,index++) {
            let dt = new Date(year,month,i);
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('prev--month');
            dayTable.classList.remove('next--month');
            dayTable.classList.remove('today');
            dayTable.classList.remove('select');
            dayTable.innerHTML = dt.getDate();

            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate())
            {
                dayTable.classList.add('today');
            }
            if(i < 1) {
                dayTable.classList.add('prev--month');
            }
            if(i > getLastDayThisMonth) {
                dayTable.classList.add('next--month');
            }
            dayTable.onclick = function() {
                dataToInput = new Date(year+'-'+(month+1)+'-'+dayTable.innerHTML);
                formatDate(dataToInput);

                showDate = document.getElementById('dashboard--calendar--current--date');

                showDate.value = formatDate(dataToInput);
            }
        }
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();

    GetDaysCalendar(month,year);


    const nextMonth = document.getElementById('dashboard--nextMonth');
    const prevMonth = document.getElementById('dashboard--prevMonth');

    nextMonth.onclick = function() {
        month++;
        if(month>11) {
            month = 0;
            year++;
        }
        GetDaysCalendar(month,year);
    }
    prevMonth.onclick = function() {
        month--;
        if(month<0) {
            month = 11;
            year--;
        }
        GetDaysCalendar(month,year);
    }
})

// const itemPrice = document.getElementsByClassName('request--item--price');

// itemPrice.addEventListener("change", () => {
//     itemPrice.value = 'R$'+itemPrice.value+',00'
//     console.log(itemPrice.value);
// })


const clickedEditButton = document.getElementsByClassName('request--item--edit--submit');
window.onload = getEditIndex();
function getEditIndex(){
    for(x=0;x<clickedEditButton.length;x++){
        // arranjo os listeners com os index das linhas
        (function(index){
            clickedEditButton[x].addEventListener("click", function(){
            postData(index);
        });
        })(x);
    }
}
function postData(line) {
    console.log(line); // mostrar index da linha como exemplo
    const clientName = document.getElementById('client--name'+' '+line).value;
    const clientContact = document.getElementById('client--contact'+' '+line).value;
    const reqDate = document.getElementById('req--date'+' '+line).value;
    const reqId = document.getElementById('req--id'+' '+line).value;
    const reqTurn = document.getElementById('req--turn'+' '+line).value;

    $.ajax
            ({
                //Configurações
                type: 'POST',//Método que está sendo utilizado.
                dataType: 'html',//É o tipo de dado que a página vai retornar.
                url: './data/updateRequest.php',//Indica a página que está sendo solicitada.
                //função que vai ser executada assim que a requisição for enviada
                beforeSend: function () {
                    $("#request--waiting").toggleClass('load')
                    $("#request--waiting--gif").html("<img src='./img/48x48.gif'>");
                },
                //Dados para envio
                data: {
                    clientName: clientName,
                    clientContact: clientContact,
                    reqDate: reqDate,
                    reqId: reqId,
                    reqTurn: reqTurn
                },
                //função que será executada quando a solicitação for finalizada.
                success: function (msg)
                {
                   $("#request--waiting").html(msg);
                }
            });
}
function closeSpan() {
    $("#request--waiting").removeClass('load')
}