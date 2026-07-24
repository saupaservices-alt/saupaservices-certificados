// Sistema de Verificação de Certificados - Saupa Services

function verificarCertificado(){

    let codigo = document.getElementById("codigoCertificado").value;
    let resultado = document.getElementById("resultado");

    // Certificados cadastrados (exemplo inicial)
    let certificados = [
        "SAUPA-2026-001",
        "SAUPA-2026-002",
        "SAUPA-2026-003"
    ];

    if(codigo === ""){
        resultado.innerHTML = "⚠️ Digite o código do certificado.";
        resultado.style.color = "orange";
    }
    else if(certificados.includes(codigo)){
        resultado.innerHTML = "✅ Certificado válido! Emitido pela Saupa Services.";
        resultado.style.color = "green";
    }
    else{
        resultado.innerHTML = "❌ Certificado não encontrado.";
        resultado.style.color = "red";
    }

}
