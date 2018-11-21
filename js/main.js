
//Check to make sure number of participants is an even number
function handlePartipantMatcherButtonClick(e, listOfParticipants) {
  let matches = [];
  const numberOfParticipants = listOfParticipants.length;
  if (numberOfParticipants % 2 === 0) {
  // if participant number is even, shuffle the list.
    const shuffledParticipants = _.shuffle(listOfParticipants);
    shuffledParticipants.map((participant, i) => {
      let indexToMatchWith = i + 1;
      //matches the last person in the list with the first person
      if (indexToMatchWith >= listOfParticipants.length) {
        indexToMatchWith = 0;
      }
      // once the list is shuffled, couple the names and create message that will notify user of mat
      const nextParticipant = shuffledParticipants[indexToMatchWith];
      const matchText = `${participant} buys for ${nextParticipant}`;
      matches.push(matchText);
    });

    const matchedParticipantList = document.querySelector('[data-js="matched-participants"]');

    matchedParticipantList.innerHTML = "";
      matches.forEach((match) => {
        // creates HTML so matched message is visible to user
        const htmlToAdd = `
          <li class="participantNamesMatched">
           ${match}
          </li>
        `;
      matchedParticipantList.insertAdjacentHTML('beforeend', htmlToAdd);
      })
      // clear input
  } else {
    alert('Sorry! You need an even number of participants.');
  }
}




//Wait for content to load
document.addEventListener('DOMContentLoaded', () => {
  // Element references
  // 1. Text input: participant's full name
  const addNewParticipantNameElement = document.querySelector('[data-js="new-participant"]');
  // 2. Submit participant to the List
  const submitParticipantNameElement = document.querySelector('[data-js="submit-participant"]');
  // 3. Full list of participants
  const participantListElement = document.querySelector('[data-js="all-participants"]');
  // 4. Button to make matches
  const participantMatcherButtonElement = document.querySelector('[data-js ="participant-matcher-button"]');




  // Placeholder array to store all the participant's names in memory.
  let listOfParticipants = [];

  //Grab new participants full name from text input when "submit" is clicked
  //Submit the name to the full list of participants
  submitParticipantNameElement.addEventListener('click', (e) => {
    e.preventDefault();
    const currentParticipantNameValue = addNewParticipantNameElement.value;

    // Along with building the HTML to be added to the page...
    // I want to store this in an array, so that I can access it quickly later.
    listOfParticipants.push(currentParticipantNameValue);

//creates HTML to make the un-matched list of participants visible in the UI
    const submittedParticipantName = `
      <li class="participantNames"
        data-js="participant"
      >
        ${currentParticipantNameValue}
      </li>
    `;
    addNewParticipantNameElement.value = "";
    participantListElement.insertAdjacentHTML('beforeend', submittedParticipantName);
  });
  participantMatcherButtonElement.addEventListener('click', (e) => {
    handlePartipantMatcherButtonClick(e, listOfParticipants)
  });
});
