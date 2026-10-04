// Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
document.querySelector('#check-button').addEventListener('click', function () {
    const result = document.querySelector('#result');
    const userInput = document.querySelector('#user-input').value.trim();


    result.textContent = 'Loading...';
    let timeout = setTimeout(() => {
        // How much time it takes to check if the string is a palindrome
        // Make a fetch request to the server to check if the string is a palindrome
        const input = document.querySelector('#user-input').value;

        if (input === input.split('').reverse().join('')) {
            result.textContent = 'Palindrome';
        } else {
            result.textContent = 'Not a palindrome';
        }
    }, 5000);
});

//     fetch(`/api?string=${userInput}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.isPalindrome) {
//  }
// });