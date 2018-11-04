//Wait for content to load
document.addEventListener('DOMContentLoaded', () => {
  //Element references
  //1. Text input: participant's full name
  const addNewParticipantNameElement = document.querySelector('[data-js="new-participant"]');
  //2. Submit participant to the List
  const submitParticipantNameElement = document.querySelector('[data-js="submit-participant"]');
  //3. Full list of participants
  const participantListElement = document.querySelector('[data-js="all-participants"]');
  const participantMatcherButtonElement = document.querySelector('[]');


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
    console.log(listOfParticipants);

    const submittedParticipantName = `
      <li
        data-js="participant"
      >
        ${currentParticipantNameValue}
      </li>
    `;
    participantListElement.insertAdjacentHTML('beforeend', submittedParticipantName);
  });

});
