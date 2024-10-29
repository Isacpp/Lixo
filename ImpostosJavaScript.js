function calcularImpostos(salario) {
    var air = 0
    if(salario < 2559.20){
        air = 0;
    }else if(salario > 2559.20 && salario <= 2826.65){
        air = 0.075
    }else if(salario > 2826.65 && salario <= 3751.05){
        air = 0.15
    }else if(salario > 3751.05 && salario <= 4664.68){
        air = 0.225
    }else if(salario > 4664.86){
        air = 0.275
    }
    
    var ir = salario*air

    var ainss = 0
if(salario <+ 1412){
        ainss = 0.075
    }else if(salario > 1412.01 && salario <= 2666.68){
        ainss = 0.09
    }else if(salario > 2666.69 && salario <= 4000.03){
        ainss = 0.12
    }else if(salario > 4000.04 && salario <= 7786.02){
        ainss = 0.14
    }
    
    var inss = salario*ainss

    var salaLiquido = salario - inss - ir

    return salaLiquido
    
}
