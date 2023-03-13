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
        case langToLearn:
            messageBox.push(adviceBox[prop][messageIndex]);
            console.log(messageBox);
            break;
        case levelOfKnowledge:
            messageBox.push(messageIndex[prop][messageIndex]);
            messageBox.push(messageIndex + 2);
            console.log(messageBox);
            break;
        case exampleProject:
            messageBox.push(adviceBox[prop][messageIndex]);
            console.log(messageBox);
            break;
        default: 
            break;
    }
}