$(document).ready(function() {
    
    $('#btnHitung').click(function() {
        var heightCm = parseFloat($('#tinggiInput').val());
        var idealWeightKg = (heightCm - 110) - (heightCm - 110) * 0.1;
        $('#beratbox').val(idealWeightKg + ' kg');
    });
    
});