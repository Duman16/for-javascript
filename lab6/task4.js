document.getElementById('convertBtn').addEventListener('click', function() {
    const text = document.getElementById('textArea').value; // Получаем текст из текстового поля
    const rows = text.split('\n'); // Разделяем текст на строки
    rows.forEach((row, i) => {
        const [first, second] = row.toLowerCase().trim().split('_'); // Разделяем каждую строку на части
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`; // Преобразуем в camelCase
        console.log(output.padEnd(20) + '✔'.repeat(i + 1)); // Выводим результат с количеством галочек
    });
});
