$().ready(function(){
    $.getJSON('pass_json/recipe_data.json',function(data){
        $.each(data,function(index,recipe){
            if(index != 0){
                var input_text = '<table border = "1"><tr><th>'
                                +"name : "+recipe.name
                                +'</th><tr></table>';
                $("#view_recipe").append(input_text);
            }
        });
    });
});