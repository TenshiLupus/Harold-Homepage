
const elongateMarquee = () => {

    const services = 'Portrait - Weddings - Events';

    const marqueeText = new Array(50).fill(services).join(' — ');
    console.log

    const marquee = document.querySelector('.marquee span');
    console.log(marquee);
    marquee.textContent = marqueeText;
    console.log("all working");

}

elongateMarquee();