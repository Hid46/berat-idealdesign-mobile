$(document).ready(function() {
    
    $('#btnHitung').click(function() {
        var heightCm = parseFloat($('#tinggiInput').val());
        var idealWeightKg = (heightCm - 100) * 0.9;
        $('#beratbox').val(idealWeightKg + ' kg');
    });
    
});