$(document).ready(function() {
    
    $('#btnbmiHitung').click(function() {
        var heightbmiCm = parseFloat($('#tinggibmiInput').val());
        var weightbmiKg = parseFloat($('#beratbmiInput').val());
        var bmi = (weightbmiKg / ((heightbmiCm/100) * (heightbmiCm/100)));
        $('#bmibox').val(bmi);
    });
    
});