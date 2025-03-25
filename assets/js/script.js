document.addEventListener('DOMContentLoaded', () => {
    const combos = document.querySelectorAll('.combo-medialuna, .combo-folhado, .combo-waffle');
    const modal = document.getElementById('confirmModal');
    const modalMessage = document.getElementById('modalMessage');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');
    let currentCombo = '';

    combos.forEach(combo => {
      combo.style.cursor = 'pointer'; // Indica que o combo é clicável
      combo.addEventListener('click', () => {
        currentCombo = combo.getAttribute('data-combo');
        modalMessage.textContent = `Deseja adicionar o combo "${currentCombo}" ao seu pedido?`;
        modal.style.display = 'flex';
      });
    });

    confirmButton.addEventListener('click', () => {
      // Aqui você pode adicionar a lógica para adicionar o combo ao pedido
      alert(`Combo "${currentCombo}" adicionado com sucesso!`);
      modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
      modal.style.display = 'none';
      currentCombo = '';
    });

    // Fechar modal ao clicar fora
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        currentCombo = '';
    
      }
    });
  });