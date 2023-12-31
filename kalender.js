
            // JavaScript-Code für den Kalender
            document.addEventListener('DOMContentLoaded', function () {
                generateCalendar();
            });

            function generateCalendar() {
                var calendarBody = document.getElementById('calendar').getElementsByTagName('tbody')[0];
                var currentDate = new Date();
                var year = currentDate.getFullYear();
                var month = currentDate.getMonth();

                var daysInMonth = new Date(year, month + 1, 0).getDate();
                var firstDay = new Date(year, month, 1).getDay();

                var dayCount = 1;

                for (var i = 0; i < 6; i++) {
                    var row = calendarBody.insertRow(i);

                    for (var j = 0; j < 7; j++) {
                        var cell = row.insertCell(j);

                        if ((i === 0 && j < firstDay) || dayCount > daysInMonth) {
                            // Leerzellen vor dem ersten Tag und nach dem letzten Tag des Monats
                            cell.innerHTML = "";
                        } else {
                            cell.innerHTML = dayCount;
                            dayCount++;
                        }
                    }
                }
            }