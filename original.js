let people = [];
let template = $('#people-template').html();
$('#peopleModule').find('button').on('click', function(){
  people.push($('#peopleModule').find('input').val());
  $('#peopleModule').find('input').val('');
  let data = {
    people: people
  };
  $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

// 使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
  let $remove = $(e.target).closest('li');
  let i = $('#peopleModule').find('ul').find('li').index($remove);
  $remove.remove();
  people.splice(i, 1);
});
