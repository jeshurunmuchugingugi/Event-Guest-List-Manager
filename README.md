# Event-Guest-List-Manager


# Guest List Manager

A simple and interactive web application for managing a guest list. Users can add guests by name, mark their attendance status, and remove them from the list. The app also timestamps when guests are added.

---

## Features

- Add guest names through an input form.
- Display a list of guests with options to:
  - Mark attendance status (`Attend` / `Not Attend`).
  - Remove guests from the list.
- Show the time each guest was added.
- Guest names longer than 20 characters are truncated with an ellipsis (`....`).
- Alerts the user if the guest count exceeds 10.

---

## Technology Stack

- **HTML**: Structure and layout of the guest list manager.
- **CSS** (via `style.css`): Styling and UI design (linked externally).
- **JavaScript** (via `index.js`): Handles user interactions, DOM manipulation, and dynamic guest management.

---

## File Structure

```

/guest-list-manager
│
├── index.html       # Main HTML page
├── style.css        # CSS styles
└── index.js         # JavaScript logic for guest management

```

---

## Usage Instructions

1. Open `index.html` in a modern web browser.
2. Type a guest’s name into the input field.
3. Click **Add** or press Enter to add the guest to the list.
4. Use the **Attend** button to toggle attendance status.
5. Use the **Remove** button to delete a guest from the list.
6. Be mindful that adding more than 10 guests triggers an alert.

---

## How It Works (Summary)

- The form submission is handled via JavaScript to prevent page reload.
- New guests are added dynamically to the guest list (`<ul>`).
- Each guest entry shows their name (truncated if needed) and the time they were added.
- Buttons for marking attendance and removal are created dynamically for each guest.

---

## Future Enhancements

- Persist guest list data between page reloads using `localStorage`.
- Add validation to prevent duplicate guest names.
- Improve UI responsiveness for mobile devices.
- Include sorting or filtering options for guests.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Created by Jeshurn Muchugi*
``

---
# Guest List Manager - JavaScript Functionality

This JavaScript file powers a **Guest List Manager** application that allows users to add, track, and manage guest names with timestamp, attendance toggling, and removal functionality.

---

## Features

- ✅ Add a guest with a name input.
- ⏰ Display the time the guest was added.
- ✂️ Truncate names longer than 20 characters and append ellipsis (`....`).
- 🔄 Toggle attendance status (between `Attend` and `Not Attend`).
- ❌ Remove a guest from the list.
- ⚠️ Alert the user if more than 10 guests are added.

---

## How It Works

### DOM Elements Accessed

- `#guest-form`: The form where users type and submit guest names.
- `#guest-input`: Text input where users type a guest name.
- `#add-guest`: The button to submit the guest.
- `#guest-list`: The container (`<ul>`) where all guest entries appear.

### Main Logic Flow

1. **Form Submission:**
   - Prevents the default form behavior.
   - Trims the entered guest name.

2. **Guest Name Handling:**
   - If the name is longer than 20 characters, it is truncated and appended with `'....'`.
   - A new `<li>` element is created and appended to the guest list.

3. **Timestamp Generation:**
   - Captures the current time using `toLocaleTimeString()` and displays it next to the guest's name.

4. **Buttons Created Per Guest:**
   - **Attend Button**:
     - Toggles between `Attend` and `Not Attend`.
   - **Remove Button**:
     - Deletes the respective `<li>` from the guest list.

5. **Guest Limit Check:**
   - If the guest count exceeds 10, the user is alerted.

6. **Cleanup:**
   - Resets the input field after adding a guest.

---

## Code Snippet Example

```js
const guestName = guestInput.value.trim();
if (guestName.length > 20) {
    li.textContent = guestName.slice(0, 20) + '....';
} else {
    li.textContent = guestName;
}

Requirements
Browser: Any modern browser supporting vanilla JavaScript

No external libraries required

Potential Improvements
Store guest data using localStorage or sessionStorage.

Add a confirmation dialog before deleting a guest.

Highlight attending guests visually.

Prevent duplicate guest entries.



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






``markdown
# Guest List Manager - CSS Styling

This CSS file styles the **Guest List Manager** web application, providing a clean, modern, and user-friendly interface.

---

## Styling Overview

### Global Styles

- Resets margin, padding, and list styles for all elements (`*` selector).
- Removes default text alignment to maintain consistent layout control.

### Body

- Background color set to a warm yellow shade (`#ffda74`) for a cheerful and inviting feel.

### Guest List Container (`#guest-list-manager`)

- White background with rounded corners (`border-radius: 20px`).
- Fixed width using viewport height (`100vh`) for vertical consistency.
- Padding applied generously (`60px 120px`) to give content breathing room.
- Centered horizontally with margin and uses flexbox alignment (`align-items: start`, `justify-content: center`).
- Base font size set to `25px` for readability.

### Headings (`h1`)

- Larger font size (`30px`) and dark gray color (`#333333`).
- Left-aligned with spacing below for separation.

### Forms and List Items (`li`, `form`)

- Use flex display for horizontal layout.
- Left-aligned text with vertical margin spacing.

### Guest Form (`#guest-form`)

- Flex display with no top margin and small bottom margin for spacing.
- Input field styled with padding, no border, light gray background (`#e7e5e5`), black text, and rounded left corners (`border-radius: 40px 0 0 40px`).
- Submit button styled with rounded corners (`border-radius: 40px`), bright yellow background (`#ffbc05`), black bold text, no border, padding for clickable area, slight negative left margin for overlap effect, and smaller font size (`14px`).

### Guest List Items (`#guest-list li`)

- Medium font size (`20px`), flexbox layout for aligning content.
- Spaced horizontally with gaps and margin/padding for clarity.
- Buttons container inside list items (`.buttons`) uses flex layout, spacing, centered alignment, and right margin.

### Buttons inside Guest List

- Default buttons have red background (`#DC3545`), white text, rounded corners (`15px`), no border, padding for comfortable clicking.
- Attend buttons have distinct blue background (`#5C6BC0`).
- Buttons are flex containers themselves for centering content.

### Timestamp Span (`.makeSmallTime`)

- Smaller font size (`15px`), flexbox centered text horizontally and vertically.

### Miscellaneous

- Additional flexbox alignment and text centering applied to list items and spans to ensure consistent and neat appearance.

---

## Summary

This CSS provides a bright, clean, and user-friendly UI for managing guest lists with clear visual cues for different interactive elements, using flexbox layouts and consistent spacing.

---

## Suggested Improvements

- Adjust fixed width (`100vh`) for better responsiveness on smaller screens.
- Add hover/focus styles for buttons and inputs to enhance UX.
- Include media queries for mobile and tablet viewports.

---

*Created for the Guest List Manager project*
```
