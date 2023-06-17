// -> read the file names from mockData directory ✅
// -> present it to the user the names to choose from ✅
// -> user make a selection from the names
// -> read the particular rocket files
// -> print out the rocket's descroption

const { readdir, readFile } = require("fs/promises");
const readlinePromises = require("./utils/readline-promise");

const rlp = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readdir("./mockData")
  .then((listOfFiles) => {
    console.log("Welcome to Labbers file retrieval systems!\n");

    const options = listOfFiles
      .map((file, index) => {
        const rocketName = file.split(".")[0];

        return `${index + 1}. ${rocketName}`;
      })
      .join("\n");

    console.log(options);

    return rlp.question("Please type the name of the rocket:");
  })
  .then((chosenRocket) => {
    console.log(`You have chosen ${chosenRocket}`);

    const fileToRead = `./mockData/${chosenRocket}.json`;

    return readFile(fileToRead, { encoding: "utf-8" });
  })
  .then((fileContent) => {
    const fileContentObj = JSON.parse(fileContent);

    console.log("========== description of a rocket =========");

    console.log(fileContentObj.description);
  })
  .catch(() => {
    console.log("an error has occured");
  })
  .finally(() => {
    rlp.close();
  });
