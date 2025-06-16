const form = document.getElementById('guest-form')
const guestInput = document.getElementById('guest-input');
const addGuest = document.getElementById('add-guest');
const guestList = document.getElementById('guest-list');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const guestName = guestInput.value.trim();

    if(guestName !== ""){
        const li = document.createElement('li');
        let maxLetterLength = 20;
        if(guestName.length > maxLetterLength){
            li.textContent = guestName.slice(0,maxLetterLength)+ '....';
        } else {
            li.textContent = guestName
        }
        const div = document.createElement('div');
        div.classList.add('buttons')

        const spanTime = document.createElement('span');
        spanTime.classList.add("makeSmallTime")
        const now = new Date();
        const timeOnly = now.toLocaleTimeString(); 
        spanTime.textContent = ` Added by: ${now.toLocaleString()}`;
        li.appendChild(spanTime)

        const attendButton = document.createElement('button');
        attendButton.classList.add('attend');
        attendButton.textContent = 'Attend';
        attendButton.addEventListener('click',()=>{
            if(attendButton.textContent === 'Attend'){
                attendButton.textContent = 'Not Attend';
            } else {
                attendButton.textContent = 'Attend'
            }
        })

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            guestList.removeChild(li);
          });

          if(guestList.getElementsByTagName('li').length > 10 ){
            alert("alert the user if they exceed the limit");
          }

       

        div.append(attendButton,removeButton)
       li.appendChild(div)
       guestList.appendChild(li)

       guestInput.value = "";

    } else {
        alert("Please insert an input to submit")
    }
})