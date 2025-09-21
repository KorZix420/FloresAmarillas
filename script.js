document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.querySelector('.flower-container');
    const numberOfFlowers = 50;

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        const stem = document.createElement('div');
        stem.classList.add('stem');
        flower.appendChild(stem);

        const leaf1 = document.createElement('div');
        leaf1.classList.add('leaf', 'leaf1');
        stem.appendChild(leaf1);

        const leaf2 = document.createElement('div');
        leaf2.classList.add('leaf', 'leaf2');
        stem.appendChild(leaf2);

        const center = document.createElement('div');
        center.classList.add('center');
        flower.appendChild(center);

        for (let i = 1; i <= 10; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal', `p${i}`);
            petal.style.setProperty('--petal-index', i);
            petal.style.setProperty('--petal-rotation', `${(i - 1) * 36}deg`);
            flower.appendChild(petal);
        }

        const randomX = Math.random() * (window.innerWidth - 200);
        const randomY = Math.random() * (window.innerHeight - 200);

        flower.style.left = `${randomX}px`;
        flower.style.top = `${randomY}px`;

        const randomDelay = Math.random() * 2;
        flower.style.setProperty('--flower-delay', `${randomDelay}s`);

        return flower;
    }

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = createFlower();
        flowerContainer.appendChild(flower);
    }
});