// HTMLが全て読み込まれたら実行
// 検索カテゴリー・検索ワードをPHPに送信
$().ready(function(){
    $('form').submit(function(){
        var s_cate = $('option:selected').val();
        var s_word = $('#s_word').val();
        var $search　= {'category':s_cate,'word':s_word};
        console.log(s_cate);
        console.log(s_word);

//[非同期通信]index.htmlの検索窓で選択された内容送信
        $.ajax('http://localhost:8091/nextpage/php/top_main.php',{
            type: "POST",
            data: $search,
            datatype: 'json',
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //未実装->Ajax通信ができなかった時の処理
            },
            success: function(response){
                //PHPからの値を受け取る
                if(s_cate == 'all' || s_cate == 'liqu'){
                    //未実装->search_result.htmlにレシピデータ受け渡し
                }else {
                    //未実装->search_result_recipe.htmlにレシピデータ受け渡し
                }
            }
        });
    });
});

// 現在の課題
// - indexhtmlでカテゴリーを選択後、どのようにレシピの選別を行うか