// HTMLが全て読み込まれたら実行
// 検索カテゴリー・検索ワードをPHPに送信
$().ready(function(){
    $('form').submit(function(){
        var s_cate = $('option:selected').val();
        var s_word = $('#s_word').val();
        var s_word = "%"+s_word+"%";
        var search　= {'category':s_cate,'word':s_word};

//[非同期通信]index.htmlの検索窓で選択された内容送信
        $.ajax('http://localhost:8091/nextpage/php/top_main.php',{
            type: "POST",
            data: JSON.stringify(search),
            contentType: 'application/JSON',
            scriptCharset: `utf-8`,
            datatype: 'json',
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Server error. Once again thank you.");
                console.log("XMLHttpRequest : " + XMLHttpRequest.status);
                console.log("textStatus     : " + textStatus);
                console.log("errorThrown    : " + errorThrown.message);
                },
            success: function(response){
                //PHPからの値を受け取る
                if(s_cate == 'all' || s_cate == 'liqu'){
                    //未実装->search_result.htmlにレシピデータ受け渡し
                    console.log(response);
                    window.location.href = "search_result.html";
                }else {
                    window.location.href = "search_result_recipe.html";
                    //未実装->search_result_recipe.htmlにレシピデータ受け渡し
                }
            }
        });
    });
});