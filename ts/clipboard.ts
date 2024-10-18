const pasteButton = document.getElementById('pasteButton') as HTMLDivElement
const output = document.getElementById('output') as HTMLDivElement

pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        output.textContent = `Твой буфер: ${text}`
    } catch (err) {
        console.error('Ошибка чтения из буфера:', err);
        output.textContent = 'Не получилось прочитатть буфер'
    }
})