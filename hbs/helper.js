const hbs = require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/datas.json', 'utf8'));

hbs.registerHelper('getProduct',function(){
    var pro = "";
    obj.forEach(Object => {
        pro += '<div class="productos">';
        pro += '<img class="img-prod" src="'+ Object.img +'"width="200px"';
        pro += '<br><br>'
        pro += '<figcaption>'+Object.p+ ' </figcaption><br><br>';
        pro += '<h4>'+Object.nombre+'</h4>';
        pro += '</div>';
        
    
        
    });
    return new hbs.SafeString(pro);
});