const inquirer = ("inquirer");

const intern = (remainingInfo) => {
    inquirer.prompt({message: "school?", "name": "first"})
    .then(({first, ...rest}))
}
