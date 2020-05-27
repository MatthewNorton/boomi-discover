// var emails = [];
//     var table = document.getElementsByTagName('th');
//     var rows = table.rows;
//     for (var i = 0; i < table.length; i++) {
//         var rowText = table[i].textContent;
//     }

// console.log(rowText);

//     // document.write(emails);

$('.table').not('.customTable').each(function(){
  table = $(this);
  row = table.find('tr');
  table.find('td').each(function(){
    tdIndex = $(this).index();
    if ($(row).find('th').eq(tdIndex).attr('data-label')) {
      thText = $(row).find('th').eq(tdIndex).data('label');
    } else {
      thText = $(row).find('th').eq(tdIndex).text();
    }
    $(this).attr('data-label', thText + ':');
  });
});
