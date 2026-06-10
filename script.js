//O JavaScript é uma linguagem WEB

//Variáveis - Valores armazenados na memória do computador

//Funções - Blocos de código

function carregar(){
    //alert("Bem vindo ao JavaScript")
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var data = new date ()
    var hora = data.gethours()
    var minutos = data.getminutos()
    
    msg.innerHTML = `agora sao ${hora}:${minutos}am`
    }
