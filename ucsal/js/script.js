//btns
btnStart = document.getElementById('btnStart')
btnAbout = document.getElementById('btnAbout')
btnCalculate = document.getElementById('btnCalculate')
button = document.getElementById('button')
buttonEnviar = document.getElementById('btn')

//array btns para for of
btns = [btnStart, btnAbout, btnCalculate, buttonEnviar]

//efeito no scroll tela
window.addEventListener('scroll', () => {

    document.querySelector('#header').classList.toggle('rolagem', window.scrollY > 100)
    document.querySelector('#button').classList.toggle('btnOn', window.scrollY > 140)
    document.querySelector('#button').classList.toggle('btnOff', window.scrollY < 140)

    if (window.scrollY > 3000) {
        calculate();
    } else if(window.scrollY > 700){
        about();
    } else{
        start();
    }

    
})

//ativação do enviar/calcular
buttonEnviar.addEventListener('click', () => {
  ativacao();
})

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ativacao();
        document.getElementById('calculate').scrollIntoView({ behavior: "smooth" })
    }
})

//função principal do evento do calculo
function ativacao(){
    peso = Number(document.getElementById('pesoInput').value)
    altura = Number(document.getElementById('alturaInput').value)
    idade = Number(document.getElementById('idadeInput').value)
    sexo = mostrarEscolha();

    campoPreenchidoPeso = peso == "" ? false : true
    campoPreenchidoAltura = altura == "" ? false : true
    campoPreenchidoIdade = idade == "" ? false : true
    campoPreenchidoSexo = sexo == null ? false : true
    
    if (!campoPreenchidoPeso || !campoPreenchidoAltura || !campoPreenchidoIdade || !campoPreenchidoSexo) {
        
        alert("Campo em branco!!!")

    } else if (idade >= 60) {

        imcIdoso(peso, altura)

    } else if (idade >= 20) {

        imcAdulto(peso, altura)        

    }else if (idade >= 0){
        
        if (sexo == "FEMININO") {

            imcFeminino(peso,altura, idade)            

        } else {

            imcMasculino(peso,altura, idade)                        

        }

    } else {
        erroLimpar("\nIdade inválida")
    }
}

//IMCS
function imcFeminino(peso, altura, idade) { 

    imcHtml = document.getElementById('imcNumber')
    classificacaoImc = document.getElementById('imcClassificacao')
    escoreZ = 0
    validacao = true
    
    imc = calculoImc(peso, altura)

    switch (idade) {

        case 0:

            if (imc >= 17.6) {
               escoreZ = 3 
            } else if (imc >= 16) {
                escoreZ = 2                 
            } else if (imc >= 14.6) {
                escoreZ = 1                 
            } else if (imc >= 13.36) {
                escoreZ = 0                                 
            } else if(imc >= 12.18) {
                escoreZ = -1
            } else if(imc >= 11.1){
                escoreZ = -2
            } else {
                escoreZ = -3
            }       

            break;

        case 1:

        if (imc >= 21.6) {
            escoreZ = 3 
         } else if (imc >= 19.6) {
             escoreZ = 2                 
         } else if (imc >= 17.87) {
             escoreZ = 1                 
         } else if (imc >= 16.38) {
             escoreZ = 0                                 
         } else if(imc >= 15) {
             escoreZ = -1
         } else if(imc >= 16.8){
             escoreZ = -2
         } else {
             escoreZ = -3
         }       

            break;

        case 2:

            if (imc >= 20.6) {
                escoreZ = 3 
             } else if (imc >= 18.76) {
                 escoreZ = 2                 
             } else if (imc >= 17.16) {
                 escoreZ = 1                 
             } else if (imc >= 15.63) {
                 escoreZ = 0                                 
             } else if(imc >= 14.41) {
                 escoreZ = -1
             } else if(imc >= 13.38){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }       

            break;

        case 3:

            if (imc >= 20.28) {
               escoreZ = 3 
            } else if (imc >= 18.41) {
                escoreZ = 2                 
            } else if (imc >= 16.8) {
                escoreZ = 1                 
            } else if (imc >= 15.4) {
                escoreZ = 0                                 
            } else if(imc >= 14.2) {
                escoreZ = -1
            } else if(imc >= 13.08){
                escoreZ = -2
            } else {
                escoreZ = -3
            }       

        
            break;

        case 4:

        if (imc >= 20.6) {
            escoreZ = 3 
         } else if (imc >= 18.57) {
             escoreZ = 2                 
         } else if (imc >= 16.8) {
             escoreZ = 1                 
         } else if (imc >= 15.22) {
             escoreZ = 0                                 
         } else if(imc >= 13.97) {
             escoreZ = -1
         } else if(imc >= 12.8){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 5:
            if (imc >= 21.03) {
                escoreZ = 3 
             } else if (imc >= 18.8) {
                 escoreZ = 2                 
             } else if (imc >= 16.89) {
                 escoreZ = 1                 
             } else if (imc >= 15.22) {
                 escoreZ = 0                                 
             } else if(imc >= 13.9) {
                 escoreZ = -1
             } else if(imc >= 12.69){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }  
            break;

        case 6:

        if (imc >= 22.10) {
            escoreZ = 3 
         } else if (imc >= 19.35) {
             escoreZ = 2                 
         } else if (imc >= 17) {
             escoreZ = 1                 
         } else if (imc >= 15.3) {
             escoreZ = 0                                 
         } else if(imc >= 13.85) {
             escoreZ = -1
         } else if(imc >= 12.65){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 7:

        if (imc >= 23.25) {
            escoreZ = 3 
         } else if (imc >= 19.6) {
             escoreZ = 2                 
         } else if (imc >= 17.3) {
             escoreZ = 1                 
         } else if (imc >= 15.45) {
             escoreZ = 0                                 
         } else if(imc >= 13.9) {
             escoreZ = -1
         } else if(imc >= 12.7){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 8:

        if (imc >= 24.7) {
            escoreZ = 3 
         } else if (imc >= 20.52) {
             escoreZ = 2                 
         } else if (imc >= 17.75) {
             escoreZ = 1                 
         } else if (imc >= 15.62) {
             escoreZ = 0                                 
         } else if(imc >= 14.05) {
             escoreZ = -1
         } else if(imc >= 12.85){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 9:

        if (imc >= 26.5) {
            escoreZ = 3 
         } else if (imc >= 21.5) {
             escoreZ = 2                 
         } else if (imc >= 18.35) {
             escoreZ = 1                 
         } else if (imc >= 16.05) {
             escoreZ = 0                                 
         } else if(imc >= 14.5) {
             escoreZ = -1
         } else if(imc >= 13.1){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 10:

        if (imc >= 28.4) {
            escoreZ = 3 
         } else if (imc >= 22.55) {
             escoreZ = 2                 
         } else if (imc >= 19.02) {
             escoreZ = 1                 
         } else if (imc >= 16.52) {
             escoreZ = 0                                 
         } else if(imc >= 14.8) {
             escoreZ = -1
         } else if(imc >= 13.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 11:

        if (imc >= 30.15) {
            escoreZ = 3 
         } else if (imc >= 23.65) {
             escoreZ = 2                 
         } else if (imc >= 19.8) {
             escoreZ = 1                 
         } else if (imc >= 17.25) {
             escoreZ = 0                                 
         } else if(imc >= 15.39) {
             escoreZ = -1
         } else if(imc >= 13.9){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 12:

        if (imc >= 31.8) {
            escoreZ = 3 
         } else if (imc >= 25) {
             escoreZ = 2                 
         } else if (imc >= 20.60) {
             escoreZ = 1                 
         } else if (imc >= 18) {
             escoreZ = 0                                 
         } else if(imc >= 16) {
             escoreZ = -1
         } else if(imc >= 14.45){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 13:

        if (imc >= 33.4) {
            escoreZ = 3 
         } else if (imc >= 26.2) {
             escoreZ = 2                 
         } else if (imc >= 21.55) {
             escoreZ = 1                 
         } else if (imc >= 18.65) {
             escoreZ = 0                                 
         } else if(imc >= 16.53) {
             escoreZ = -1
         } else if(imc >= 14.9){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 14:

        if (imc >= 34.6) {
            escoreZ = 3 
         } else if (imc >= 27.3) {
             escoreZ = 2                 
         } else if (imc >= 22.60) {
             escoreZ = 1                 
         } else if (imc >= 19.52) {
             escoreZ = 0                                 
         } else if(imc >= 17.2) {
             escoreZ = -1
         } else if(imc >= 15.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 15:

        if (imc >= 35.5) {
            escoreZ = 3 
         } else if (imc >= 28.2) {
             escoreZ = 2                 
         } else if (imc >= 23.5) {
             escoreZ = 1                 
         } else if (imc >= 20.3) {
             escoreZ = 0                                 
         } else if(imc >= 17.7) {
             escoreZ = -1
         } else if(imc >= 15.8){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 16:

        if (imc >= 36) {
            escoreZ = 3 
         } else if (imc >= 28.8) {
             escoreZ = 2                 
         } else if (imc >= 24.1) {
             escoreZ = 1                 
         } else if (imc >= 20.6) {
             escoreZ = 0                                 
         } else if(imc >= 18.1) {
             escoreZ = -1
         } else if(imc >= 16.2){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 17:

        if (imc >= 36.25) {
            escoreZ = 3 
         } else if (imc >= 29.27) {
             escoreZ = 2                 
         } else if (imc >= 24.5) {
             escoreZ = 1                 
         } else if (imc >= 21) {
             escoreZ = 0                                 
         } else if(imc >= 18.45) {
             escoreZ = -1
         } else if(imc >= 16.38){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 18:

        if (imc >= 36.2) {
            escoreZ = 3 
         } else if (imc >= 29.5) {
             escoreZ = 2                 
         } else if (imc >= 24.75) {
             escoreZ = 1                 
         } else if (imc >= 21.25) {
             escoreZ = 0                                 
         } else if(imc >= 18.55) {
             escoreZ = -1
         } else if(imc >= 16.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 19:
            if (imc >= 36.1) {
                escoreZ = 3 
             } else if (imc >= 29.6) {
                 escoreZ = 2                 
             } else if (imc >= 25) {
                 escoreZ = 1                 
             } else if (imc >= 21.45) {
                 escoreZ = 0                                 
             } else if(imc >= 18.6) {
                 escoreZ = -1
             } else if(imc >= 16.52){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }  
            break;
        
        default:
           validacao = false
            break;
    }

    if (!validacao) {
        erroLimpar("")
    } else {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = escoreZCalculate(escoreZ, idade)        
    }



}

function imcMasculino(peso, altura, idade) { 
    imcHtml = document.getElementById('imcNumber')
    classificacaoImc = document.getElementById('imcClassificacao')
    escoreZ = 0
    validacao = true
    
    imc = calculoImc(peso, altura)

    switch (idade) {

        case 0:

            if (imc >= 18.1) {
               escoreZ = 3 
            } else if (imc >= 16.3) {
                escoreZ = 2                 
            } else if (imc >= 14.8) {
                escoreZ = 1                 
            } else if (imc >= 13.4) {
                escoreZ = 0                                 
            } else if(imc >= 12.2) {
                escoreZ = -1
            } else if(imc >= 11.2){
                escoreZ = -2
            } else {
                escoreZ = -3
            }       

            break;

        case 1:

        if (imc >= 21.6) {
            escoreZ = 3 
         } else if (imc >= 19.8) {
             escoreZ = 2                 
         } else if (imc >= 18.2) {
             escoreZ = 1                 
         } else if (imc >= 16.8) {
             escoreZ = 0                                 
         } else if(imc >= 15.5) {
             escoreZ = -1
         } else if(imc >= 14.4){
             escoreZ = -2
         } else {
             escoreZ = -3
         }       

            break;

        case 2:

            if (imc >= 20.6) {
                escoreZ = 3 
             } else if (imc >= 18.83) {
                 escoreZ = 2                 
             } else if (imc >= 17.35) {
                 escoreZ = 1                 
             } else if (imc >= 16) {
                 escoreZ = 0                                 
             } else if(imc >= 14.8) {
                 escoreZ = -1
             } else if(imc >= 13.8){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }       

            break;

        case 3:

            if (imc >= 20) {
               escoreZ = 3 
            } else if (imc >= 18.38) {
                escoreZ = 2                 
            } else if (imc >= 16.9) {
                escoreZ = 1                 
            } else if (imc >= 15.6) {
                escoreZ = 0                                 
            } else if(imc >= 14.4) {
                escoreZ = -1
            } else if(imc >= 13.4){
                escoreZ = -2
            } else {
                escoreZ = -3
            }       

        
            break;

        case 4:

        if (imc >= 19.85) {
            escoreZ = 3 
         } else if (imc >= 18.2) {
             escoreZ = 2                 
         } else if (imc >= 16.68) {
             escoreZ = 1                 
         } else if (imc >= 15.35) {
             escoreZ = 0                                 
         } else if(imc >= 14.15) {
             escoreZ = -1
         } else if(imc >= 13.08){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 5:
            if (imc >= 20.23) {
                escoreZ = 3 
             } else if (imc >= 18.25) {
                 escoreZ = 2                 
             } else if (imc >= 16.6) {
                 escoreZ = 1                 
             } else if (imc >= 15.2) {
                 escoreZ = 0                                 
             } else if(imc >= 14) {
                 escoreZ = -1
             } else if(imc >= 12.9){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }  
            break;

        case 6:

        if (imc >= 20.60) {
            escoreZ = 3 
         } else if (imc >= 18.5) {
             escoreZ = 2                 
         } else if (imc >= 16.75) {
             escoreZ = 1                 
         } else if (imc >= 15.3) {
             escoreZ = 0                                 
         } else if(imc >= 14.08) {
             escoreZ = -1
         } else if(imc >= 13){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 7:

        if (imc >= 21.55) {
            escoreZ = 3 
         } else if (imc >= 19) {
             escoreZ = 2                 
         } else if (imc >= 17) {
             escoreZ = 1                 
         } else if (imc >= 15.5) {
             escoreZ = 0                                 
         } else if(imc >= 14.25) {
             escoreZ = -1
         } else if(imc >= 13.1){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 8:

        if (imc >= 22.7) {
            escoreZ = 3 
         } else if (imc >= 19.65) {
             escoreZ = 2                 
         } else if (imc >= 17.48) {
             escoreZ = 1                 
         } else if (imc >= 15.7) {
             escoreZ = 0                                 
         } else if(imc >= 14.4) {
             escoreZ = -1
         } else if(imc >= 13.3){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 9:

        if (imc >= 24.2) {
            escoreZ = 3 
         } else if (imc >= 20.5) {
             escoreZ = 2                 
         } else if (imc >= 17.95) {
             escoreZ = 1                 
         } else if (imc >= 16.0) {
             escoreZ = 0                                 
         } else if(imc >= 14.58) {
             escoreZ = -1
         } else if(imc >= 13.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 10:

        if (imc >= 26.1) {
            escoreZ = 3 
         } else if (imc >= 21.4) {
             escoreZ = 2                 
         } else if (imc >= 18.5) {
             escoreZ = 1                 
         } else if (imc >= 16.5) {
             escoreZ = 0                                 
         } else if(imc >= 14.95) {
             escoreZ = -1
         } else if(imc >= 13.65){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 11:

        if (imc >= 28) {
            escoreZ = 3 
         } else if (imc >= 22.5) {
             escoreZ = 2                 
         } else if (imc >= 19.17) {
             escoreZ = 1                 
         } else if (imc >= 17.0) {
             escoreZ = 0                                 
         } else if(imc >= 15.3) {
             escoreZ = -1
         } else if(imc >= 14.0){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 12:

        if (imc >= 30.0) {
            escoreZ = 3 
         } else if (imc >= 23.52) {
             escoreZ = 2                 
         } else if (imc >= 20.0) {
             escoreZ = 1                 
         } else if (imc >= 17.5) {
             escoreZ = 0                                 
         } else if(imc >= 15.7) {
             escoreZ = -1
         } else if(imc >= 14.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 13:

        if (imc >= 31.58) {
            escoreZ = 3 
         } else if (imc >= 24.65) {
             escoreZ = 2                 
         } else if (imc >= 20.7) {
             escoreZ = 1                 
         } else if (imc >= 18.35) {
             escoreZ = 0                                 
         } else if(imc >= 16.35) {
             escoreZ = -1
         } else if(imc >= 14.95){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 14:

        if (imc >= 33.1) {
            escoreZ = 3 
         } else if (imc >= 25.95) {
             escoreZ = 2                 
         } else if (imc >= 21.75) {
             escoreZ = 1                 
         } else if (imc >= 19.0) {
             escoreZ = 0                                 
         } else if(imc >= 17.0) {
             escoreZ = -1
         } else if(imc >= 15.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 15:

        if (imc >= 34.05) {
            escoreZ = 3 
         } else if (imc >= 27.0) {
             escoreZ = 2                 
         } else if (imc >= 22.6) {
             escoreZ = 1                 
         } else if (imc >= 19.7) {
             escoreZ = 0                                 
         } else if(imc >= 17.6) {
             escoreZ = -1
         } else if(imc >= 16){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 16:

        if (imc >= 34.7) {
            escoreZ = 3 
         } else if (imc >= 27.8) {
             escoreZ = 2                 
         } else if (imc >= 23.5) {
             escoreZ = 1                 
         } else if (imc >= 20.5) {
             escoreZ = 0                                 
         } else if(imc >= 18.2) {
             escoreZ = -1
         } else if(imc >= 16.5){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 17:

        if (imc >= 35.2) {
            escoreZ = 3 
         } else if (imc >= 28.55) {
             escoreZ = 2                 
         } else if (imc >= 24.25) {
             escoreZ = 1                 
         } else if (imc >= 21.2) {
             escoreZ = 0                                 
         } else if(imc >= 18.7) {
             escoreZ = -1
         } else if(imc >= 16.9){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  
            break;

        case 18:

        if (imc >= 35.4) {
            escoreZ = 3 
         } else if (imc >= 29.2) {
             escoreZ = 2                 
         } else if (imc >= 24.95) {
             escoreZ = 1                 
         } else if (imc >= 21.7) {
             escoreZ = 0                                 
         } else if(imc >= 19.2) {
             escoreZ = -1
         } else if(imc >= 17.2){
             escoreZ = -2
         } else {
             escoreZ = -3
         }  

            break;

        case 19:
            if (imc >= 35.5) {
                escoreZ = 3 
             } else if (imc >= 29.6) {
                 escoreZ = 2                 
             } else if (imc >= 25.47) {
                 escoreZ = 1                 
             } else if (imc >= 22.18) {
                 escoreZ = 0                                 
             } else if(imc >= 19.18) {
                 escoreZ = -1
             } else if(imc >= 17.5){
                 escoreZ = -2
             } else {
                 escoreZ = -3
             }  
            break;
        
        default:
            validacao = false;           
            break;
    }

    if (!validacao) {
        erroLimpar("")
    } else {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = escoreZCalculate(escoreZ, idade)        
    }
    

}

function imcAdulto(peso, altura) {
 
    imcHtml = document.getElementById('imcNumber')
    classificacaoImc = document.getElementById('imcClassificacao')

    imc = calculoImc(peso, altura)

    if (imc < 16) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Magreza grau III'
    } else if(imc < 17){
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Magreza grau II'        
    } else if (imc < 18.5) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Magreza grau I'                
    } else if (imc < 25) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Peso ideal'                        
    } else if (imc < 30) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Sobrepeso'                                
    } else if (imc < 35) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Obesidade grau I'        
    } else if (imc < 40) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Obesidade grau II'                
    } else {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Obesidade grau III'                        
    }      
    

}

function imcIdoso(peso, altura) {

    imcHtml = document.getElementById('imcNumber')
    classificacaoImc = document.getElementById('imcClassificacao')

    imc = calculoImc(peso, altura)
         
    if (imc < 22) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Magreza'
    } else if (imc < 27) {
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Peso ideal'
    } else{
        imcHtml.textContent = `${imc.toFixed(2)}`
        classificacaoImc.textContent = 'Excesso de peso'
    }
}


//erro limpa tela
function erroLimpar(texto) {
    imcHtml = document.getElementById('imcNumber')
    classificacaoImc = document.getElementById('imcClassificacao')

    imcHtml.textContent = '00.00'
    classificacaoImc.textContent = 'XXXXX'
    document.getElementById('pesoInput').value = ''
    document.getElementById('alturaInput').value = ''
    document.getElementById('idadeInput').value = ''
    alert('ERRO!!!!' + texto)
}

//função para saber a classificação do escoreZ
function escoreZCalculate(escoreZ, idade) {
    classificacao = ''

    //classificação com base ao escore z 
    if(idade >= 0 && idade <= 5){
        if (escoreZ >= 3) {
            classificacao = "Obesidade"
        } else if (escoreZ >= 2) {
            classificacao = "Sobrepeso"            
        } else if (escoreZ >= 1) {
            classificacao = "Risco de sobrepeso"                      
        } else if (escoreZ >= -2) {
            classificacao = "Peso ideal"          
        } else {
            classificacao = "Magreza"        
        }
    } else {
        if (escoreZ >= 3) {
            classificacao = "Obesidade grave"
        } else if (escoreZ >= 2) {
            classificacao = "Obesidade"            
        } else if (escoreZ >= 1) {
            classificacao = "Sobrepeso"                      
        } else if (escoreZ >= -2) {
            classificacao = "Peso ideal"          
        } else {
            classificacao = "Magreza"        
        }

    }

    return classificacao
}
//função para calcular imc
function calculoImc(peso, altura) {
    return peso / (altura ** 2)
}

//input radio retorno
function mostrarEscolha() {
   radios = document.getElementsByName("sexo");    

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {        
        return (radios[i].value.toUpperCase())        
      }
    }
    
    return null

}

//navegação headers
function about() {
    for (const btn of btns) {
        
        if(btn == btnAbout){
            btn.className = 'On'
        } else {
            btn.className = 'Off'
        }

    }
}

function calculate() {
       
    for (const btn of btns) {
        
        if(btn == btnCalculate){
            btn.className = 'On'
        } else {
            btn.className = 'Off'
        }

    }
}

function start() {
    for (const btn of btns) {
        
        if(btn == btnStart){
            btn.className = 'On'
        } else {
            btn.className = 'Off'
        }

    }
}