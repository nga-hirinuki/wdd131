    // declare variables from Html elements
    const input = document.querySelector('input');
    const button = document.querySelector('button')
    const list = document.querySelector('ul');
    // Declare an variable attached to an array getChapterList with nothing in it
    let chaptersArray =getChapterList() || [];
    // Loop through chaptersArray and call displayList with each chapter
    chaptersArray.forEach(chapter => {
        displayList(chapter);
      });

   // Add a click event listener using an arrow function
    // If input has a value, display it, save it to chaptersArray, and reset the input
    button.addEventListener('click',() => {
        if (input.value != '') {  
            displayList(input.value); 
            chaptersArray.push(input.value);  
            setChapterList(); 
            input.value = ''; 
            input.focus(); 
          }
        });
    // How the displayList function works
    // declare 2 variables
    // add content to li and delete button
    // create a class for css
    // append button to li
    //append list(argument) to li   
    // from the delete button eventlistener remove input 
    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item; 
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(item); 
            input.focus(); 
          });
          console.log('I like to copy code instead of typing it out myself and trying to understand it.');
        }
    
        function setChapterList() {
            localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
          }

        function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
        }

        function deleteChapter(chapter) {
            chapter = chapter.slice(0, chapter.length -1);
            chaptersArray = chaptersArray.filter(item => item !== chapter);
            setChapterList();
          }

