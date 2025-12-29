document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("btnDemo");
if (btn) {
  btn.addEventListener("click", () => {
    alert(
      "Exemplo de veredito grátis:\n\n⚠️ Atenção\nMotivos típicos:\n• Multas altas\n• Prazos rígidos\n• Cláusulas confusas\n\nNa versão completa: trechos críticos + checklist antes de assinar."
    );
  });
}
