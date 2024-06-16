import fs from 'fs'

fs.appendFile('my_file.txt', 'Файл создан Node.js', (err) => {
    if (err) throw errconsole.log('Файл успешно созранен')
})

setTimeout(() => console.log('Задержка'), 20000)
