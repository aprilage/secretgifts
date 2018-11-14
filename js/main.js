
//Check to make sure number of participants is an even number
function handlePartipantMatcherButtonClick(e, listOfParticipants) {
  let matches = [];
  const numberOfParticipants = listOfParticipants.length;
  if (numberOfParticipants % 2 === 0) {
  // shuffle the list IF the number of participants is even
    const shuffledParticipants = _.shuffle(listOfParticipants);
    console.log(shuffledParticipants);
    shuffledParticipants.map((participant, i) => {
      let indexToMatchWith = i + 1;
      if (indexToMatchWith >= listOfParticipants.length) {
        indexToMatchWith = 0;
      }
      const nextParticipant = shuffledParticipants[indexToMatchWith];
      const matchText = `${participant} buys for ${nextParticipant}`;
      matches.push(matchText);
    });

    const matchedParticipantList = document.querySelector('[data-js="matched-participants"]');

    matchedParticipantList.innerHTML = "";
      matches.forEach((match) => {
        const htmlToAdd = `
          <li class="participantNames" id="matchedParticipants">
           ${match}
          </li>
        `;
      matchedParticipantList.insertAdjacentHTML('beforeend', htmlToAdd);
      })
  } else {
    alert('Sorry! You need an even number of participants.');
  }
}




//Wait for content to load
document.addEventListener('DOMContentLoaded', () => {
  //Element references
  //1. Text input: participant's full name
  const addNewParticipantNameElement = document.querySelector('[data-js="new-participant"]');
  //2. Submit participant to the List
  const submitParticipantNameElement = document.querySelector('[data-js="submit-participant"]');
  //3. Full list of participants
  const participantListElement = document.querySelector('[data-js="all-participants"]');
  const participantMatcherButtonElement = document.querySelector('[data-js ="participant-matcher-button"]');




  // Placeholder array to store all the participant's names in memory.
  let listOfParticipants = [];

  //Grab new participants full name when "submit" it clicked
  //Submit the name to the full list of participants
  submitParticipantNameElement.addEventListener('click', (e) => {
    e.preventDefault();
    const currentParticipantNameValue = addNewParticipantNameElement.value;

    // Along with building the HTML to be added to the page...
    // I want to store this in an array, so that I can access it fast later.
    listOfParticipants.push(currentParticipantNameValue);

    const submittedParticipantName = `
      <li class="participantNames" id="allParticipants"
        data-js="participant"
      >
        ${currentParticipantNameValue}
      </li>
    `;
    participantListElement.insertAdjacentHTML('beforeend', submittedParticipantName);
  });
  participantMatcherButtonElement.addEventListener('click', (e) => {
    handlePartipantMatcherButtonClick(e, listOfParticipants)
    

  });
});
