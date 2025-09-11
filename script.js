const avanca = document.querySelectorA11('.btn-proximo');

avanca.forEach(button =>{
    button.addEdventListener('clik', function(){
        const atual = ducument.querySelector('.ativo');
        const proximoPasso = 'passo-' = this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})