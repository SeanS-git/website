// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my personal website!');
    
    const projectTitles = document.querySelectorAll('.project h3');

    projectTitles.forEach((title) => {
        title.addEventListener('click', () => {
            alert(`You clicked on ${title.textContent}`);
        });
    });
});
