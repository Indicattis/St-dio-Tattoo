//DROPDOWN MENU FUNCTION
document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('menu--mobile--toggle')
    if (!isDropdownBtn && e.target.closest('.menu--mobile') != null) return;
  
    if (isDropdownBtn) {
  
      $('.header--menu--navbar--mobile').toggleClass("show")
  
    }
    else {

      $('.header--menu--navbar--mobile').removeClass("show")

    }
  })



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
    const tableDays = document.getElementById('calendar--show--days');
    function GetDaysCalendar (month, year) {
        document.getElementById('calendar--current--month').innerHTML = monthsBr[month];
        document.getElementById('calendar--current--year').innerHTML = year;

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

                showDate = document.getElementById('calendar--current--date');

                showDate.value = formatDate(dataToInput);
            }
        }
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();

    GetDaysCalendar(month,year);


    const nextMonth = document.getElementById('nextMonth');
    const prevMonth = document.getElementById('prevMonth');

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
document.addEventListener('click', (e) => {
    const isDropdownBtn = e.target.classList.contains('calendar--day')
    if (!isDropdownBtn && e.target.closest('#modal--scheduling') != null) return;
  
    if (isDropdownBtn) {
  
      $('#modal--scheduling--bakground').toggleClass("show")
        
    }
    else {

      $('#modal--scheduling--bakground').removeClass("show")

    }
  })

  importProject = document.getElementById('projectSend');
  document.getElementById('import--project').onclick = function() {
    importProject.click();
  }
  document.getElementById('modal--scheduling--close').onclick = function() {
    $('#modal--scheduling--bakground').removeClass("show")
  }
  let uploadfoto = document.getElementById('projectSend');
  let fotopreview = document.getElementById('fotopreview');
  
  uploadfoto.addEventListener('change', function(e) {
      showThumbnail(this.files);
  });
  
  function showThumbnail(files) {
      if (files && files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
         fotopreview.src = e.target.result;
      }
  
          reader.readAsDataURL(files[0]);
      }
      fotopreview.style.display = 'block';
  }

$('#radio--ico--1').on('click',function() {
    const elChecked = document.getElementById("turn1").checked = true;
    if (elChecked) {
        $('#radio--ico--1').toggleClass('selected');
        $('#radio--ico--2').removeClass('selected');
        $('#radio--ico--3').removeClass('selected');
    }
    else {
        $('#radio--ico--1').removeClass('selected');
    }
})
$('#radio--ico--2').on('click',function() {
    const elChecked = document.getElementById("turn2").checked = true;
    if (elChecked) {
        $('#radio--ico--1').removeClass('selected');
        $('#radio--ico--2').toggleClass('selected');
        $('#radio--ico--3').removeClass('selected');
    }
    else {
        $('#radio--ico--2').removeClass('selected');
    }
})
$('#radio--ico--3').on('click',function() {
    const elChecked = document.getElementById("turn3").checked = true;
    if (elChecked) {
        $('#radio--ico--1').removeClass('selected');
        $('#radio--ico--2').removeClass('selected');
        $('#radio--ico--3').toggleClass('selected');
    }
    else {
        $('#radio--ico--3').removeClass('selected');
    }
})

const infoDate = document.querySelector('#calendar--info--day');
const infoUser = document.querySelector('#calendar--info--user');
const infoTattoo = document.querySelector('#calendar--info--tattoo');
stage = 1;
document.querySelector('#dot--1').
    addEventListener('click', () => {
        infoDate.style.transform = "translateX(0px)"
        infoUser.style.transform = "translateX(600px)"
        infoTattoo.style.transform = "translateX(1200px)"
        document.querySelector('#calendar--next--button').
        style.display = 'block';

        stage = 1;
    })
document.querySelector('#dot--2').
    addEventListener('click', () => {
        infoDate.style.transform = "translateX(-600px)"
        infoUser.style.transform = "translateX(0px)"
        infoTattoo.style.transform = "translateX(600px)"
        document.querySelector('#calendar--next--button').
        style.display = 'block';
        
        stage = 2;
    })
document.querySelector('#dot--3').
    addEventListener('click', () => {
        infoDate.style.transform = "translateX(-1200px)"
        infoUser.style.transform = "translateX(-600px)"
        infoTattoo.style.transform = "translateX(0px)"
        document.querySelector('#calendar--next--button').
        style.display = 'none';
        
        stage = 3;
    })
document.querySelector('#calendar--next--button').
    addEventListener('click', () => {
        if(stage==1) {
            infoDate.style.transform = "translateX(-600px)"
            infoUser.style.transform = "translateX(0px)"
            infoTattoo.style.transform = "translateX(600px)"
        }
        if(stage==2) {
            infoDate.style.transform = "translateX(-1200px)"
            infoUser.style.transform = "translateX(-600px)"
            infoTattoo.style.transform = "translateX(0px)"

        }
        stage+=1;
        if(stage==3) {
            document.querySelector('#calendar--next--button').
            style.display = 'none';
            stage = 1;

        }
    })