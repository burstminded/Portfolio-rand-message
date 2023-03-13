const randNum = num => Math.floor(Math.random() * num);

const adviceBox = {
    langToLearn: ['Ruby', 'Python', 'Rust', 'C++', 'Go', 'Java', 'Javascript', 'Elixir'],
    levelOfKnowledge: ['Beginner', 'Intermediate', 'Advanced'],
    exampleProject: ['Tic Tac Toe', 'Simple Minecraft', 'Calculator']
};

let messageBox = [];

for(let prop in adviceBox) {
    let messageIndex = randNum(adviceBox[prop].length);

    switch (prop) {
        case 'langToLearn':
            messageBox.push(adviceBox[prop][messageIndex]);
            console.log(messageBox);
            break;
        case 'levelOfKnowledge':
            messageBox.push(adviceBox[prop][messageIndex]);
            messageBox.push(messageIndex + 2);
            console.log(messageBox);
            break;
        case 'exampleProject':
            messageBox.push(adviceBox[prop][messageIndex]);
            console.log(messageBox);
            break;
        default: 
            break;
    }
}

const finalMeesage = freeWeeks => {
    let finMessage = [];
    finMessage.push(`You have ${freeWeeks} free weeks`);
    for (let i = 0; i < messageBox.length; i++) {
        switch(i) {
            case 0:
                finMessage.push(`You can learn ${messageBox[i]}`);
                break;
            case 1:
                finMessage.push(`We suggest you to learn it on ${messageBox[i]} level`);
                break;
            case 2:
                finMessage.push(`You will need to spend at least ${messageBox[i]} hours learning a day`);
                break;
            case 3:
                finMessage.push(`At the end of your learning course, you can make pet-project, ${messageBox[i]} for example`);
                break;
            default:
                break;
        }
    }
    let outputMessage = finMessage.join('.\n');
    return outputMessage;
}

console.log(finalMeesage(5));