// HTMLが全て読み込まれたら実行
$().ready(function(){
    $('#s_top').click(function(){
        var s_cate = $('option:selected').val();
        var s_word = $('#s_word').val();
    });
});