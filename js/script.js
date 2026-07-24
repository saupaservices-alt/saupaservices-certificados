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

            resultado.innerHTML = `

            <div class="certificado">

            <h3>✅ Certificado Válido</h3>

            <p><strong>Nome:</strong> ${certificado.nome}</p>

            <p><strong>Curso:</strong> ${certificado.curso}</p>

            <p><strong>Carga Horária:</strong> ${certificado.carga}</p>

            <p><strong>Data de Emissão:</strong> ${certificado.data}</p>

            <p><strong>Código:</strong> ${certificado.codigo}</p>

            <div class="selo">
            Saupa Services<br>
            Certificado Autêntico
            </div>

            </div>

            `;

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
