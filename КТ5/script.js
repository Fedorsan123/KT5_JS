const form = document.forms.cardForm;
  const bankInput = document.getElementById('bank');
  const typeInput = document.getElementById('type');
  const numberInput = document.getElementById('number');
  const holderInput = document.getElementById('holder');
  const expirationInput = document.getElementById('expiration');
  const image_logo_type = document.getElementById('img_type');
  const image_logo_bank = document.getElementById('img_bank');

  const previewBank = document.getElementById('previewBank');
  const previewType = document.getElementById('previewType');
  const previewNumber = document.getElementById('previewNumber');
  const previewHolder = document.getElementById('previewHolder');
  const previewExpiration = document.getElementById('previewExpiration');

  const tableBody = document.querySelector('#cardsTable tbody');

  function updatePreview() {
    previewBank.textContent = bankInput.value || "Банк";
    if(bankInput.value === "Сбербанк" || 
       bankInput.value === "Сбер" || 
       bankInput.value === "сбербанк" ||
       bankInput.value === "сбер")
    {
        image_logo_bank.src = 'img/Sber_logo.png'

    }else if(bankInput.value == "ТБанк"||
        bankInput.value === "тбанк" || 
        bankInput.value === "Тинькофф" ||
        bankInput.value === "тинькофф")
    {
        image_logo_bank.src = 'img/tbank.png'

    }else if(bankInput.value == "АльфаБанк"||
        bankInput.value === "альфабанк" || 
        bankInput.value === "альфа" ||
        bankInput.value === "Альфа")
    {
        image_logo_bank.src = 'img/Alfabank_logo.png'
    }
    previewType.textContent = typeInput.value || "Тип";
    if(previewType.textContent == "VISA"){
        image_logo_type.src = 'img/visa_logo.png'
    }else if(previewType.textContent == "MasterCard"){
        image_logo_type.src = 'img/MasterCard_Logo.svg.png'
    }else if(previewType.textContent == "МИР"){
        image_logo_type.src = 'img//MIR_logo.png'
    }
    previewNumber.textContent = numberInput.value.replace(/(\d{4})(?=\d)/g, '$1 ') || "0000 0000 0000 0000";
    previewHolder.textContent = holderInput.value || "Имя держателя";
    previewExpiration.textContent = (expirationInput.value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d{1,2})/, '$1/$2') || "ММ/ГГ");

  }

  form.addEventListener('input', updatePreview);

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${previewBank.textContent}</td>
      <td>${previewType.textContent}</td>
      <td>${previewNumber.textContent.replace(/(\d{4})(?=\d)/g, '$1 ')}</td>
      <td>${previewHolder.textContent}</td>
      <td>${previewExpiration.textContent}</td>
    `;
    tableBody.appendChild(newRow);

    form.reset();
    updatePreview();
  });

  updatePreview(); // инициализация миниатюры









  