$('.table').not('.customTable').each(function() {
    console.log($(this));
        table = $(this);
        row = table.find('tr');
        console.log(row);
        table.find('td').each(function() {
            tdIndex = $(this).index();
            if ($(row).find('th').eq(tdIndex).attr('data-label')) {
                thText = $(row).find('th').eq(tdIndex).data('label');
            } else {
                thText = $(row).find('th').eq(tdIndex).text();
            }
            $(this).attr('data-label', thText + ':');
        });
    });	  

console.log('loaded');
console.log($('.table').length); 
