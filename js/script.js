// Sistema de Verificação de Certificados
// Saupa Services

function verificarCertificado(){

    let codigo = document.getElementById("codigoCertificado").value;
    let resultado = document.getElementById("resultado");

    // Base de dados inicial de certificados
    let certificados = {

        "SAUPA-2026-001": {
            nome: "João Paulo Saupa ",
            curso: "Informática Profissional",
            carga: "40 Horas",
            data: "24/07/2026"
        },

        "SAUPA-2026-002": {
            nome: "Maria José Francisco",
            curso: "Microsoft Excel Avançado",
            carga: "30 horas",
            data: "24/07/2026"
        },

        "SAUPA-2026-003": {
            nome: "Pedro António Manuel",
            curso: "Programação Arduino",
            carga: "50 horas",
            data: "24/07/2026"
        }

    };


    if(codigo === ""){

        resultado.innerHTML = `
        ⚠️ Digite o código do certificado.
        `;

    }

    else if(certificados[codigo]){

        let certificado = certificados[codigo];

        resultado.innerHTML = `

        <h3>✅ Certificado Válido</h3>

        <p><strong>Nome:</strong> ${certificado.nome}</p>

        <p><strong>Curso:</strong> ${certificado.curso}</p>

        <p><strong>Carga Horária:</strong> ${certificado.carga}</p>

        <p><strong>Data de Emissão:</strong> ${certificado.data}</p>

        <p><strong>Código:</strong> ${codigo}</p>

        <br>

        <p><strong>Emitido por:</strong><br>
        Saupa Services</p>

        `;

    }

    else{

        resultado.innerHTML = `
        ❌ Certificado não encontrado.
        `;

    }

}
