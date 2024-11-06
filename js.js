
        function ligarEletro(tipo,nomeidL,eletrodomestico,quantidade,usodiario,kwh,custo ){
            
            if(tipo == 1){
                document.getElementById(nomeidL).style = ' filter:border-color: rgb(2, 255, 255); filter:sepia(0%);';
                const eletro= document.getElementById("tabelacorpo");
                eletro.innerHTML += "<tr class='linhas'><td>" + eletrodomestico + "</td><td>" + quantidade + "</td><td>" + usodiario + "</td><td>"+kwh +"</td><td>"+custo+"</td><td><input type='button' value='remover' onclick='RemoverConteudo(1)'></td></tr>";
                document.getElementById("tabela").style='visibility: visible;';    
            }
            
            


            if(tipo == 2){
                document.getElementById(nomeidL).style = ' filter:sepia(90%)!important;';
                 const eletro= document.getElementById("tabelacorpo");
                eletro.innerHTML -= "<tr class=linhas> <td>" + eletrodomestico + "</td><td>" + quantidade + "</td><td>" + usodiario + "</td><td>"+kwh +"</td><td>"+custo+"</td><td><input type='button' value='remover' onclick='RemoverConteudo(1)'></td></tr>";
                document.getElementById(linhas).style= 'display:none';
            }           
        }
        //
          /*  if(tipo == 3){
                document.getElementById(tooltiptext).style = 'bottom: none; left: none;';
            }
            
            if(tipo == 4){
                document.getElementById(nomeid).style = ;
            }       
            */

        let ilumidada = false
            function mudaLampada(tipoL, nomeidL,imag01, eletrodomestico,quantidade,usodiario, kwh, custo ){
                
                    /*console.log(lampada01);*/
               if(tipoL == 1){
                
                    arquivo ="_img/lampada-acesaok.png";
                    document.getElementById(nomeidL).src =arquivo;
                    document.getElementById(imag01).style = ' filter:sepia(0%)!important;  z-index: 1;';  
                    const lampada01 = document.getElementById("tabelacorpo");
                lampada01.innerHTML += "<tr> <td>" + eletrodomestico + "</td><td>" + quantidade + "</td><td>" + usodiario + "</td><td>"+kwh +"</td><td>"+custo+"</td><td><input type='button' value='remover' onclick='RemoverConteudo(1)'></td></tr>";
                document.getElementById("tabela").style='visibility: visible;';  
               }    
              
                if(tipoL == 2){
                    arquivo ="_img/lampada-apagadaok.jpg";
                    document.getElementById(nomeidL).src =arquivo;
                    document.getElementById(imag01).style = ' filter:sepia(90%)!important;';
                    const lampada01 = document.getElementById("tabelacorpo");
                    lampada01.innerHTML -= "<tr> <td>Lampada 01</td><td>01</td><td> 8h</td><td>60kw</td><td>R$ 35,00</td><td><input type='button' value='remover' onclick='RemoverConteudo(1)'></td></tr>";  
                } 
            }

        /*function ligarEletro(tipo, nomeid){

            if(tipo == 1){
                    document.getElementById(nomeid).style = ' filter:border-color: rgb(2, 255, 255); filter:sepia(0%);';
                }
    
                if(tipo == 2){
                    document.getElementById(nomeid).style = ' filter:sepia(90%)!important;';
                }       
            }
            */

      //  function SelecItem ()     

        //function RemoverConteudo(tipo)
       //     documen.getElementById()    

       // ;
