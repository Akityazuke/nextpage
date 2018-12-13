$().ready(function(){
    var taste = ['甘口','ほんのり甘口','ほんのり辛口','辛口'];
    var density = ['薄味','やや薄味','やや濃味','濃味'];

    $.getJSON('../pass_json/recipe_data.json',function(data){
        $.each(data,function(index,recipe){
            if(index != 0){
                var input_text = '<table border = "1"><tr><th>'+recipe.name+":"+taste[recipe.taste]+"で"+density[recipe.density]+'</th><tr></table>';
                $("#view_recipe").append(input_text);
            }else {
                
            }
        });
    });
});