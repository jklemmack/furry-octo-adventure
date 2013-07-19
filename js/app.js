require.config({
    baseUrl: 'lib',

    paths: {
        app: '../js',
        tpl: '../templates'        
    },
    
    map: {
        '*' : {
        //    'app/models/product' : 'app/models/memory/product'
        }
    },
    
    shim: {
        
    }
    
});


require(['jquery'], function($) {
    "use strict";

    //var router = Router();    
});