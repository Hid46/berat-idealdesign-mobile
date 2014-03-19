$(document).ready(function() {
    
    $('#btnbmiHitung').click(function() {
        var tinggiCm = parseFloat($('#tinggibmiInput').val());
        var beratbmiKg = (tinggiCm - 100) * 0.9;
        $('#beratbmibox').val(beratbmiKg + ' kg');
    });
    
});