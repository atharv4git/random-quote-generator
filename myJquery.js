$(document).ready(function () {
    $("#btn1").click(function () {
        $.getJSON("quotes.json", function (data1) {
            const rndInt = Math.floor(Math.random() * 48391) + 1
            console.log(rndInt)
            console.log(data1['quotes'][rndInt])
            var q1 = data1['quotes'][rndInt]
            $('#quote').text(JSON.stringify(q1['Quote']))
            $('#author').text(JSON.stringify(q1['Author']))
        });

        
    });
});