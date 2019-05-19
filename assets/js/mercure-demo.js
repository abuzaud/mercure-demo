// Global npm dependencies
const $ = require('jquery');

// Local dependencies
require('../scss/mercure-demo.scss');

$(document).ready(() => {
    console.log('mercure loaded');
    const url = new URL('https://mercure-demo.buzaud.com/subscribe');
    // url.searchParams.append('topic', 'https://example.com/books/{id}');
    // url.searchParams.append('topic', 'https://example.com/users/dunglas');
});
