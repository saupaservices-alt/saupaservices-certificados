// Página dinâmica de certificado
// Saupa Services

let parametros = new URLSearchParams(window.location.search);

let codigo = parametros.get("codigo");

let areaCertificado = document.getElementById("certificado");


fetch("certificados/certificados.json")
.then(resposta => resposta.json())
.then(certificados => {

    let certificado = certificados.find(
        item => item.codigo === codigo
    );


    if(certificado){

        areaCertificado.innerHTML = `

        <div class="certificado">

            <h3>✅ Certificado Válido</h3>

            <p><strong>Nome:</strong> ${certificado.nome}</p>

            <p><strong>Curso:</strong> ${certificado.curso}</p>

            <p><strong>Carga Horária:</strong> ${certificado.carga}</p>

            <p><strong>Data de Emissão:</strong> ${certificado.data}</p>

            <p><strong>Código:</strong> ${certificado.codigo}</p>


            <div class="selo">
                Saupa Services<br>
                Documento Autêntico
            </div>

        </div>

        `;

    }

    else{

        areaCertificado.innerHTML = `
        ❌ Certificado não encontrado.
        `;

    }

})
.catch(erro => {

    areaCertificado.innerHTML = `
    ⚠️ Erro ao carregar certificado.
    `;

    console.log(erro);

});
