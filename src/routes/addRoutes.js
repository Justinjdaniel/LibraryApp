const express = require ('express');

const addRouter = express.Router();
function router(nav){

    addRouter.get('/',(req,res)=>{
        res.render("signup",
        {
            nav,
            title:'Add Book | Library App',
            head:'Add Book',
        });
    });

    return addRouter;
}

module.exports = router;