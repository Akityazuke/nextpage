<?php
print_r(get_magic_quotes_gpc());

//検索で選択した検索項目とワードからレシピ（またはお酒）をDBから取得する
    //POSTデータ
    $postData = file_get_contents('php://input');
    $search_json = json_decode($postData,true); 

    //DBのユーザネームとパスワード
    $url = "../pass_json/pass.json";
    $json = file_get_contents($url);
    $pass_json = json_decode($json,true);

    $pdo = new PDO('mysql:host=localhost;dbname=nextpage;port=3306;charset=utf8',$pass_json['db_user'],$pass_json['db_pass']);

    //検索ワードから取得するデータを選択
    if($search_json['word'] == '%%'){
        $recipe = sprintf("SELECT * FROM recipedb");
        $stmt = $pdo -> query($recipe);
    }else if($search_json['word'] != ''){
        $search_word = $search_json['word'];
        $recipe = $pdo -> prepare(
            "SELECT * FROM recipedb 
            WHERE content 
            LIKE :word");
        $exec_recipe = array(":word"=>$search_word);
        $recipe -> execute($exec_recipe);
        $stmt = $recipe;
    }

    $recipe_table = $stmt->fetchAll();
    array_unshift($recipe_table,$search_json['category']);
    echo json_encode($recipe_table,JSON_UNESCAPED_UNICODE);
?>