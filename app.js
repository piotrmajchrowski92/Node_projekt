const parseArgs = require('minimist');
const colors = require('colors');
const fs = require('fs');

const start = parseArgs(process.argv)
delete start._
console.log(start)

const handleStart = ({ add, remove, list}) => {
    if (add) {
        if (typeof add !== 'string') {
            return console.log("Wpisz nazwę zadania, która jest stringiem.".red);
        }
        // ->
    } else if (remove) {
        // ->
    } else if (list || list === "") {
        handleTasks();
    } else {
        console.log("Nie rozumiem komendy".red);
    }
}

const handleTasks = (option, title) => {
    const data = fs.readFileSync('tasks.json');
    // console.log(data);
    let tasks = JSON.parse(data);
    console.log(tasks);

    let dataJSON = ""

    switch(option) {
        case "add":
            tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}));
            const id = tasks.length + 1;
            tasks.push({id, title});
            //console.log(tasks);
            dataJSON = JSON.stringify(tasks);
            fs.writeFileSync('tasks.json', dataJSON);
            console.log(`Zadanie "${title}" zostało dodane do listy zadań.`);
            break
        case "remove":
            break
        case "list":
            if (tasks.length > 0) {
                console.log(`Ilość zadań na liście: ${tasks.length}.`.white.bgBlue);
                tasks.forEach(element => {
                    return console.log(` - ${element.title.toLowerCase()}`);
                    });
            } else {
                console.log("Brak zadań na liście.".black.bgYellow);
            }
            break
    }
}

handleStart(start)

