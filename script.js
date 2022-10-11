// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
  };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var newdate;
var remainingTime;
function currentTime()
{
    var timer = setInterval(function () {
        var visitorTime = document.getElementById("visitorTime").value;
        var currentdate = new Date();
        var time = currentdate.getMinutes();

        var time2 = newdate.getMinutes() + parseInt(visitorTime);
        console.log(time2);
        remainingTime = parseInt(time2) - parseInt(time);
        console.log('Remaining Time = '+ remainingTime + ' minutes');

        if(remainingTime == 0)
        {
            var bookTable = document.getElementsByClassName('bookTable');
            var table = document.getElementsByClassName('tableName');
            var status = document.getElementsByClassName('status');
            var visitorName = document.getElementById("visitorName").value;

            let labelVal = document.getElementById("tableNumber").value;
            alert('Now your table is Ready');

            for(var i=0;i<table.length;i++)
            {
                if(labelVal == table[i].innerText)
                {
                    if(status[i].innerHTML == 'Booked')
                    {
                        status[i].innerHTML = 'Not Booked';
                        bookTable[i].style.backgroundColor = 'rgb(172, 172, 172)'; 
                                
                    }
                }
            }

                
            clearInterval(timer);
        }
    }, 1000);
    /*var visitorTime = document.getElementById("visitorTime").value;
    var currentdate = new Date();
    var time = currentdate.getMinutes();

    var time2 = newdate.getMinutes() + parseInt(visitorTime);
    console.log(time2);
    var remainingTime = parseInt(time2) - parseInt(time);
    console.log('Remaining Time = '+ remainingTime + ' minutes');

    if(remainingTime == 0)
    {
        return remainingTime;
    }*/
}




function bookTable(event)
{
    //console.log(event.target.value);
    
    var bookTable = document.getElementsByClassName('bookTable');
    var table = document.getElementsByClassName('tableName');
    var status = document.getElementsByClassName('status');
    var visitorName = document.getElementById("visitorName").value;

    let labelVal = document.getElementById("tableNumber").value;

    
    newdate = new Date();
    

    for(var i=0;i<table.length;i++)
    {
        if(labelVal == table[i].innerText)
        {
            if(status[i].innerHTML == 'Booked')
            {
                for(var j=i+1;j<table.length;j++)
                {
                    if(status[j].innerHTML == 'Booked')
                    {
                        alert('All the tables are Booked, and will update the booking once available');
                        return;
                    }
                }
                
                alert('We have added you to the queue, and will update the booking once available. Else please select another table');
                return;
            }
            else
            {
                status[i].innerHTML = 'Booked';
                bookTable[i].style.backgroundColor = '#4db34a'; 
                alert('Thanks, '+ visitorName +' for Booking with Us');
            }
        }
    }
    currentTime();
    
    modal.style.display = "none";
}