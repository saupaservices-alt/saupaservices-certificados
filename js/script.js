// Sistema de Verificação de Certificados
// Saupa Services

function verificarCertificado(){

    let codigo = document.getElementById("codigoCertificado").value;
    let resultado = document.getElementById("resultado");

    fetch("certificados/certificados.json")
    .then(resposta => resposta.json())
    .then(certificados => {

        let certificado = certificados.find(
            item => item.codigo === codigo
        );


        if(codigo === ""){

            resultado.innerHTML = `
            ⚠️ Digite o código do certificado.
            `;

        }

        else if(certificado){
            
    window.location.href = "certificado.html?codigo=" + certificado.codigo;


        }

        else{

            resultado.innerHTML = `
            ❌ Certificado não encontrado.
            `;

        }

    })

    .catch(erro => {

        resultado.innerHTML = `
        ⚠️ Erro ao carregar a base de certificados.
        `;

        console.log(erro);

    });

}
