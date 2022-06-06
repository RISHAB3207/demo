const axios=require("axios");

exports.homeRoutes=(req , res)=>{
    axios.get('https://rocky-brushlands-79029.herokuapp.com/api/users')
    .then(function(response){
        res.render('index',{users : response.data});

    })
    .catch(err=>{
        res.send(err);
    })

}

exports.add_user=(req,res)=>{
    res.render('add_user');
}


exports.update_user = (req, res) =>{
    axios.get('https://rocky-brushlands-79029.herokuapp.com/api/user', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}