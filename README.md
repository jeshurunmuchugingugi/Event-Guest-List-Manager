# Event-Guest-List-Manager
| Element                        | Color Code | Description                                              |
| ------------------------------ | ---------- | -------------------------------------------------------- |
| **App Background**             | `#FAF3E0`  | Warm, soft cream – the overall page background           |
| **Card Background**            | `#FFFFFF`  | Clean white cards (to-do items container)                |
| **Progress Circle**            | `#2E4057`  | Deep slate blue – strong visual focus                    |
| **Progress Fill Bar**          | `#3F88C5`  | Cool blue – shows progress visually                      |
| **Text (Primary)**             | `#1B1B1E`  | Almost black, for high readability                       |
| **Text (Secondary or Subtle)** | `#4F4F4F`  | Dark gray – for lighter descriptions or placeholder text |
| **Edit Icon**                  | `#3F88C5`  | Sky blue – indicates non-destructive action              |
| **Delete Icon**                | `#F76C6C`  | Warm coral red – signals danger or deletion              |
| **Task Completed Dot**         | `#2E4057`  | Deep slate blue – for checked tasks                      |
| **Input Field Background**     | `#FFFFFF`  | Clean and visible input area                             |
| **Input Placeholder Text**     | `#A8A8A8`  | Light gray – subtle, non-distracting                     |
| **Add Task Button**            | `#3F88C5`  | Sky blue with white “+” icon                             |
| **Add Task Button Hover**      | `#2C6FA7`  | Darker blue for hover effect                             |






<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guest List App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 20px;
      max-width: 600px;
      margin: auto;
    }

    h1 {
      text-align: center;
    }

    form {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    input[type="text"] {
      padding: 10px;
      font-size: 16px;
      flex: 1;
      margin-right: 10px;
    }

    button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #fff;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
    }

    .actions button {
      margin-left: 5px;
    }
  </style>
</head>
<body>

  <h1>Guest List</h1>

  <form id="guestForm">
    <input type="text" id="guestName" placeholder="Enter guest name" required />
    <button type="submit">Add Guest</button>
  </form>

  <ul id="guestList"></ul>

  <script>
    const form = document.getElementById('guestForm');
    const guestNameInput = document.getElementById('guestName');
    const guestList = document.getElementById('guestList');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const guestName = guestNameInput.value.trim();

      if (!guestName) return;

      if (guestList.children.length >= 10) {
        alert('Guest list is full! Limit is 10.');
        return;
      }

      const li = document.createElement('li');
      li.textContent = guestName;

      const actionsDiv = document.createElement('div');
      actionsDiv.classList.add('actions');

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        guestList.removeChild(li);
      });

      const rsvpButton = document.createElement('button');
      rsvpButton.textContent = 'Attending';
      rsvpButton.addEventListener('click', () => {
        rsvpButton.textContent =
          rsvpButton.textContent === 'Attending'
            ? 'Not Attending'
            : 'Attending';
      });

      actionsDiv.appendChild(rsvpButton);
      actionsDiv.appendChild(removeButton);
      li.appendChild(actionsDiv);

      guestList.appendChild(li);
      guestNameInput.value = '';
    });
  </script>

</body>
</html>
