$('document').ready(function(){
           // var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
            var sound = new Audio("./alarm.mp3");
            sound.loop = true;
            var h2 = document.getElementById('clock');
            // display current time by the second
            var currentTime = setInterval(function () {
                var date = new Date();
                var hours = (12 - (date.getHours()));
                // var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
                // convert military time to standard time
                if (hours < 0) {
                    hours = hours * -1;
                } else if (hours == 00) {
                    hours = 12;
                } else {
                    hours = hours;
                } h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
            }, 1000);

            function addZero(time) {

                return(time < 10) ? "0" + time : time;

            }

            function hoursMenu() {

                var select = document.getElementById('alarmhrs');
                var hrs = 12

                for (i = 1; i <= hrs; i ++) {
                    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

                }
            }
            hoursMenu();

            function minMenu() {

                var select = document.getElementById('alarmmins');
                var min = 59;

                for (i = 0; i <= min; i ++) {
                    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
                }
            }
            minMenu();

            function secMenu() {

                var select = document.getElementById('alarmsecs');
                var sec = 59;

                for (i = 0; i <= sec; i ++) {
                    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
                }
            }
            secMenu();


            function alarmSet() {

                var hr = document.getElementById('alarmhrs');

                var min = document.getElementById('alarmmins');

                var sec = document.getElementById('alarmsecs');

                var ap = document.getElementById('ampm');


                var selectedHour = hr.options[hr.selectedIndex].value;
                var selectedMin = min.options[min.selectedIndex].value;
                var selectedSec = sec.options[sec.selectedIndex].value;
                var selectedAP = ap.options[ap.selectedIndex].value;

                var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
                console.log('alarmTime:' + alarmTime);

                document.getElementById('alarmhrs').disabled = true;
                document.getElementById('alarmmins').disabled = true;
                document.getElementById('alarmsecs').disabled = true;
                document.getElementById('ampm').disabled = true;


                // when alarmtime is equal to currenttime then play a sound
                var h2 = document.getElementById('clock');

                /*function to calcutate the current time 
    then compare it to the alarmtime and play a sound when they are equal
    */

                setInterval(function () {

                    var date = new Date();

                    var hours = (12 - (date.getHours()));
                    // var hours = date.getHours();

                    var minutes = date.getMinutes();

                    var seconds = date.getSeconds();

                    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


                    // convert military time to standard time

                    if (hours < 0) {
                        hours = hours * -1;
                    } else if (hours == 00) {
                        hours = 12;
                    } else {
                        hours = hours;
                    }

                    var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


                    if (alarmTime == currentTime) {
                        sound.play();
                    }

                }, 1000);


                // console.log('currentTime:' + currentTime);

            }


            function alarmClear() {

                document.getElementById('alarmhrs').disabled = false;
                document.getElementById('alarmmins').disabled = false;
                document.getElementById('alarmsecs').disabled = false;
                document.getElementById('ampm').disabled = false;
                sound.pause();
            }
            
                      function formatTextDate(date_string, id) {

                var d_names = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];

                var m_names = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ];

                var dateArray = date_string.split("-"); // Need to convert to Array to get to work in all browsers. Example format: Year, month, day: 2013-06-18
                var d = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); // Subtract 1 from the month because it is 0-11
                var s_day = d.getDay();
                var s_date = d.getDate();
                var sup = ""; // To add superscript text to date.
                var s_month = d.getMonth();
                var s_year = d.getFullYear();

                // Following code is optional for adding a superscript to the day of the week

                if (s_date == 1 || s_date == 21 || s_date == 31) {
                    sup = "st";
                } else if (s_date == 2 || s_date == 22) {
                    sup = "nd";
                } else if (s_date == 3 || s_date == 23) {
                    sup = "rd";
                } else {
                    sup = "th";
                }

                // Example of "sup": document.write(d_names[s_day] + ", " + m_names[s_month] + " " + s_date + sup + ", " + s_year);

                var output_date = d_names[s_day] + ", " + m_names[s_month] + " " + s_date + ", " + s_year;

                // console.log(output_date);

                // Pass the string to an element by ID or to a text input by ID
                if (document.getElementById) {
                    x = document.getElementById(id);
                } else if (document.all) { // For IE Support
                    x = document.all[id];
                }

                if (x.tagName && x.tagName.toLowerCase() == "input" && x.type.toLowerCase() == "text") { // Check if this is a text input
                    console.log('this is a text input');
                    x.value = '';
                    x.value = output_date;
                } else { // Else this is an element
                    console.log('this is an element');
                    x.innerHTML = '';
                    x.innerHTML = output_date;
                }

            }

            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; // months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            formatTextDate(`${year}-${month}-${day}`, "display-date");
                        var totalCount = 53;
            function ChangeIt() {
                var num = Math.ceil(Math.random() * totalCount);
                document.body.background = 'walls/' + num + '.jpg';
                document.body.style.backgroundSize = "cover"; // Background repeat
            }ChangeIt()

});
