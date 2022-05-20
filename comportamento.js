function app(){
    console.log('App iniciado')

    // me conectar com botão lá do HTML
    const btn_calcular_imc = document.getElementById('btn_calcular')
    const input_peso = document.getElementById('peso')
    const input_altura = document.getElementById('altura')
    const show_imc = document.getElementById('show_imc')

    // associar um comportamento ao evento clicar
    // btn_calcular_imc.onclick = clicou_no_botao
    btn_calcular_imc.onclick = () => { 
        const peso = Number(input_peso.value) 
        const altura = Number(input_altura.value) 

        const imc = peso / (altura * altura)

        show_imc.innerText = 'IMC ' + imc.toFixed(1)

        alert(imc)
       

    }
}


function clicou_no_botao() {
    alert('Clicou!')
    
}

app()