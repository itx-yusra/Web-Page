document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    
    // Create and append heading
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to My Web Page';
    contentDiv.appendChild(heading);
    
    // Create and append paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This web page showcases a simple example of using HTML, CSS, and JavaScript together. Feel free to explore';
    contentDiv.appendChild(paragraph);
    
    // Create and append button
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    contentDiv.appendChild(button);
    
    // Create and append image
    const img = document.createElement('img');
    img.src = 'https://t3.ftcdn.net/jpg/04/57/93/78/360_F_457937822_6guyVRMr4cCdCr36zPg7Er7WRaf0FbSn.jpg';
    img.alt = 'A beautiful landscape';
    contentDiv.appendChild(img);
    
    // Add event listener to button
    button.addEventListener('click', () => {
        alert('Button was clicked! Thanks for interacting with the page');
    });
});