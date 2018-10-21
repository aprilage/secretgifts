//Wait for content to load
document.addEventListener('DOMContentLoaded', () => {
  //Element references
  //1. Text input: participant's full name
  const addNewParticipantNameElement = document.querySelector('[data-js="new-participant"]');
  //2. Submit participant to the List
  const submitParticipantNameElement = document.querySelector('[data-js="submit-participant"]');
  //3. Full list of participants
  const participantListElement = document.querySelector('[data-js="all-participants"]');

  //Grab new participants full name when "submit" it clicked
  //Submit the name to the full list of participants
  submitParticipantNameElement.addEventListener('click', (e) => {
    const currentParticipantNameValue = addNewParticipantNameElement.value;
    const submittedParticipantName = `
      <li data-js="participant">
        ${currentParticipantNameValue}
      </li>
    `;
    participantListElement.insertAdjacentHTML('beforeend', submittedParticipantName);
  });

});
