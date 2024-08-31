document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <img src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=blur-close-up-depth-of-field-786003.jpg&fm=jpg" alt="Shoe 1">
        <img src="https://tse2.mm.bing.net/th?id=OIP.tVh7g7ei1kKwhfX7LqRSlwHaE8&pid=Api&P=0&h=180" alt="Shoe 2">
        <img src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?cs=srgb&dl=fashion-fashionable-footwear-267301.jpg&fm=jpg" alt="Shoe 3">
        <p class="quote">"Step into your next adventure with confidence."</p>
    `;
});

document.getElementById('shopNow').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Shop Now</h2>
        <p>Explore our latest collection of shoes.</p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.VK5hhIHJeNjK88YvFhBZeAHaEK&pid=Api&P=0&h=180" alt="Shop Now Image">
    `;
});

document.getElementById('newFeatures').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>New Features</h2>
        <p>Discover the innovative features of our newest models.</p>
        <img src="https://rukminim1.flixcart.com/image/704/704/shoe/d/h/g/grey-8332294-power-9-original-imadr3rsbmaw7y2j.jpeg?q=70" alt="New Features Image">
    `;
});

document.getElementById('contactUs').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Contact Us</h2>
        <p>Have any questions? Get in touch with us!</p>
        <img src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762__340.png" alt="Contact Us Image">
    `;
});
