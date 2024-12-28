# Disney Characters App

This project is a web application that displays a list of Disney characters, allows users to mark characters as favorites, and saves them in the browser's local storage. Users can also search for specific characters by name.

## Description

The application is based on the Disney API and allows the following features:

- View a list of Disney characters.
- Mark and unmark characters as favorites.
- Save favorite characters in localStorage so they persist between page reloads.
- Search for characters by name and update the list of results in real-time.

### Requirements:

Before you start, make sure you have the following installed:

a. A modern browser (Chrome, Firefox, etc.).  
b. A code editor like Visual Studio Code.  
c. An internet connection to use the Disney API.

### Installation
Clone the repository from GitHub Classroom.

```bash
git clone https://github.com/Adalab/modulo-2-evaluacion-final-biancadragan
```

### Project Structure
The project follows a basic structure for a web application:

- index.html: Contains the HTML structure of the application.
- styles.scss: The styles of the application written in SCSS.
- app.js: The JavaScript file that handles the application logic, including interaction with the API, DOM manipulation, and localStorage handling.
- 
### Features
1. Display character list: A request is made to the Disney API to get a list of characters, which is then displayed on the page.
2. Mark as favorite: Clicking on a character marks it as a favorite and highlights it visually.
3. LocalStorage: Favorite characters are saved in localStorage to persist between page reloads.
4. Search characters: Users can search for specific characters by name. Favorites remain visible even after performing new searches.
5. Remove favorites: You can remove an individual favorite or clear all favorites at once.
6. Remove individual favorites: Clicking the 'x' next to a favorite removes it from the list and from localStorage.
7. Clear all favorites: A button to clear all favorite characters from the list.


### Usage
- View the character list: The application automatically loads a list of Disney characters when it starts.
- Add to favorites: Click on a character to mark it as a favorite. The background and text color will change to reflect that it is a favorite.
- Search characters: Use the search field and click the "Search" button to find characters by name.
- View favorites: On the right side of the screen, the characters you have marked as favorites will be displayed. Favorites are stored in localStorage and persist between page reloads.
- Remove favorites: Click the 'x' next to a favorite to remove it from the list. You can also clear all favorites using the "Clear all favorites" button.

### Folder Structure
The folder structure looks like this:

src
 ├─ api // files from this folder are copied to public/api/
 |  └─ data.json
 ├─ images
 |  └─ disney-castle.jpg
 ├─ js // files from this folder are concatenated into the main.js file and saved in public/main.js
 |  ├─ main.js
 ├─ scss
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials

### Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that your code adheres to the project's style guide and that you write tests for new features or bug fixes.

### Steps to contribute:
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to your branch (git push origin feature-branch).
- Create a new pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contact
For questions or feedback, feel free to reach out to:

Name: Bianca Dragan
Email: andreeabiancadragan@gmail.com
GitHub: biancadragan

Thank you for checking out the Disney Characters App!
