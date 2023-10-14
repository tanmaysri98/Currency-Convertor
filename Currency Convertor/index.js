$(document).ready(function () {
    $("#convert").click(function () {
        var amount = parseFloat($("#amount").val());
        var from = $("#from").val();
        var to = $("#to").val();

        // Replace this with a real API that provides currency conversion rates
        var conversionRate = getConversionRate(from, to);

        if (conversionRate === null) {
            $("#result").text("Error: Conversion rate not available");
        } else {
            var convertedAmount = amount * conversionRate;
            $("#result").text(amount + " " + from + " is " + convertedAmount.toFixed(2) + " " + to);
        }
    });

    function getConversionRate(from, to) {
        // Replace this with a real API call to get the conversion rate
        // For simplicity, we'll hardcode a few conversion rates here
        var rates = {
            "USD": {
                "EUR": 0.85,
                "GBP": 0.73
            },
            "EUR": {
                "USD": 1.18,
                "GBP": 0.88
            },
            "GBP": {
                "USD": 1.38,
                "EUR": 1.13
            }
        };

        if (rates[from] && rates[from][to]) {
            return rates[from][to];
        } else {
            return null;
        }
    }
});
