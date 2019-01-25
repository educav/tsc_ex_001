import startup from "./startup";

let port = process.env.PORT || "3050";

startup.app.listen(port, function(){

    console.log(`servidor escutando na porta ${port}`);

});

