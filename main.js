
document.addEventListener('DOMContentLoaded', () => {

    // Car Data (Translated to French)
    const carData = [
        {
            id: 0,
            name: 'Mercedes-Benz G-Class',
            price: 1580000,
            images: [
                'https://images.unsplash.com/photo-1605559424843-9e4424d35c5c?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517524206127-48bbd363f357?q=80&w=2070&auto=format&fit=crop'
            ],
            category: 'SUV',
            mileage: 4000,
            fuel: 'Essence',
            transmission: 'Automatique',
            firstHand: 'Oui',
            model: '2023',
            import_status: 'Importé neuf'
        },
        {
            id: 1,
            name: 'Rolls-Royce Phantom',
            price: 4500000,
            images: [
                'https://images.unsplash.com/photo-1541443131876-44b7a3556a36?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1627042599222-3a56ea288b73?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1619881881919-6338b70420ed?q=80&w=2070&auto=format&fit=crop'
            ],
            category: 'Berline',
            mileage: 1500,
            fuel: 'Diesel',
            transmission: 'Automatique',
            firstHand: 'Oui',
            model: '2024',
            import_status: 'WWW Maroc'
        },
        {
            id: 2,
            name: 'Tesla Model S',
            price: 1200000,
            images: [
                'https://images.unsplash.com/photo-1583997849942-fea38c1a2a89?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1617704548623-0f4893e316a4?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1617704548083-6e3a73843a8a?q=80&w=2070&auto=format&fit=crop'
            ],
            category: 'Berline',
            mileage: 120000,
            fuel: 'Électrique',
            transmission: 'Automatique',
            firstHand: 'Non',
            model: '2023',
            import_status: 'Importé neuf'
        }
    ];

    const teamData = [
        { name: 'John Doe', title: 'PDG & Fondateur', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop', phone: '+212 123 456 789' },
        { name: 'Jane Smith', title: 'Directrice des Ventes', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1974&auto=format&fit=crop', phone: '+212 987 654 321' },
        { name: 'Mike Johnson', title: 'Mécanicien en Chef', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', phone: '+212 456 123 789' },
        { name: 'Emily Williams', title: 'Responsable Marketing', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop', phone: '+212 789 123 456' },
    ];

    function createCarCard(car) {
        return `
            <div class="latest-car-card">
                <img src="${car.images[0]}" alt="${car.name}">
                <div class="card-content">
                    <h3>${car.name}</h3>
                    <p class="price">${car.price.toLocaleString()} DH</p>
                    <div class="car-specs">
                        <span><i class="fa-solid fa-calendar-days"></i> ${car.model}</span>
                        <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</span>
                        <span><i class="fa-solid fa-road"></i> ${car.mileage.toLocaleString()} KM</span>
                    </div>
                </div>
                <div class="card-actions">
                    <a href="car-details.php?carId=${car.id}" class="visit-voiture-btn">Visiter la Voiture</a>
                </div>
            </div>
        `;
    }

    function createTeamCard(member) {
        return `
            <div class="team-member-card">
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.title}</p>
                <p class="phone-number">${member.phone}</p>
                <div class="team-member-buttons">
                    <a href="tel:${member.phone}" class="btn">Appeler</a>
                    <a href="https://wa.me/${member.phone.replace(/\s/g, '')}" class="btn" target="_blank">WhatsApp</a>
                </div>
            </div>
        `;
    }

    // Populate Grids
    const topDealsGrid = document.querySelector('.top-deals .car-grid-horizontal');
    const latestCarsGrid = document.querySelector('.latest-cars .car-grid');
    const teamGrid = document.querySelector('.equipe-page .team-grid');

    if (topDealsGrid) {
        carData.forEach(car => topDealsGrid.innerHTML += createCarCard(car));
    }
    if (latestCarsGrid) {
        carData.slice().reverse().forEach(car => latestCarsGrid.innerHTML += createCarCard(car));
    }
    if (teamGrid) {
        teamData.forEach(member => teamGrid.innerHTML += createTeamCard(member));
    }

    // Car Detail Page
    if (window.location.pathname.endsWith('car-details.php')) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = parseInt(urlParams.get('carId'));
        const car = carData.find(c => c.id === carId);

        if (car) {
            document.querySelector('.main-image').src = car.images[0];
            const thumbnails = document.querySelector('.thumbnail-images');
            thumbnails.innerHTML = car.images.map((img, index) => `<img src="${img}" alt="Miniature de la voiture ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">`).join('');

            document.querySelector('.car-specs-pro h2').textContent = car.name;
            document.querySelector('.car-specs-pro .price').textContent = `${car.price.toLocaleString()} DH`;

            const specsGrid = document.querySelector('.specs-grid');
            specsGrid.innerHTML = `
                <div class="spec-item"><p class="spec-label">Catégorie</p><p class="spec-value">${car.category}</p></div>
                <div class="spec-item"><p class="spec-label">Transmission</p><p class="spec-value">${car.transmission}</p></div>
                <div class="spec-item"><p class="spec-label">Carburant</p><p class="spec-value">${car.fuel}</p></div>
                <div class="spec-item"><p class="spec-label">Kilométrage</p><p class="spec-value">${car.mileage.toLocaleString()} km</p></div>
                <div class="spec-item"><p class="spec-label">Modèle</p><p class="spec-value">${car.model}</p></div>
                <div class="spec-item"><p class="spec-label">1ère Main</p><p class="spec-value">${car.firstHand}</p></div>
                <div class="spec-item"><p class="spec-label">Statut d'importation</p><p class="spec-value">${car.import_status}</p></div>
            `;

            const thumbnailElements = document.querySelectorAll('.thumbnail');
            thumbnailElements.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    document.querySelector('.main-image').src = car.images[thumb.dataset.index];
                    thumbnailElements.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });
        }

        const reserveBtn = document.querySelector('.btn-reserve');
        if (reserveBtn) {
            reserveBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'equipe.php';
            });
        }
    }

    // Catalog Page Filtering
    if (window.location.pathname.endsWith('catalog.php')) {
        const carGrid = document.querySelector('.catalog .car-grid');
        const minPriceFilter = document.getElementById('min-price-filter');
        const maxPriceFilter = document.getElementById('max-price-filter');
        const categoryFilter = document.getElementById('category-filter');
        const mileageFilter = document.getElementById('mileage-filter');
        const handFilter = document.getElementById('hand-filter');
        const modelFilter = document.getElementById('model-filter');
        const importStatusFilter = document.getElementById('import-status-filter');
        const fuelFilter = document.getElementById('fuel-filter');

        function populateFilters() {
            const categories = [...new Set(carData.map(car => car.category))];
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });

            const fuels = [...new Set(carData.map(car => car.fuel))];
            fuels.forEach(fuel => {
                const option = document.createElement('option');
                option.value = fuel;
                option.textContent = fuel;
                fuelFilter.appendChild(option);
            });
        }

        function filterCars() {
            let filteredCars = [...carData];
            const urlParams = new URLSearchParams(window.location.search);
            const brand = urlParams.get('brand');
            const model = urlParams.get('model');

            if (brand) {
                filteredCars = filteredCars.filter(car => car.name.toLowerCase().includes(brand.toLowerCase()));
            }
            if (model) {
                filteredCars = filteredCars.filter(car => car.name.toLowerCase().includes(model.toLowerCase()));
            }

            if (minPriceFilter.value) filteredCars = filteredCars.filter(car => car.price >= minPriceFilter.value);
            if (maxPriceFilter.value) filteredCars = filteredCars.filter(car => car.price <= maxPriceFilter.value);
            if (categoryFilter.value) filteredCars = filteredCars.filter(car => car.category === categoryFilter.value);
            if (mileageFilter.value) {
                if (mileageFilter.value === 'moin_100k') filteredCars = filteredCars.filter(car => car.mileage < 100000);
                else if (mileageFilter.value === 'plus_100k') filteredCars = filteredCars.filter(car => car.mileage >= 100000);
            }
            if (handFilter.value) filteredCars = filteredCars.filter(car => car.firstHand === handFilter.value);
            if (modelFilter.value) filteredCars = filteredCars.filter(car => car.model.toLowerCase().includes(modelFilter.value.toLowerCase()));
            if (importStatusFilter.value) filteredCars = filteredCars.filter(car => car.import_status === importStatusFilter.value);
            if (fuelFilter.value) filteredCars = filteredCars.filter(car => car.fuel === fuelFilter.value);

            carGrid.innerHTML = filteredCars.length ? filteredCars.map(createCarCard).join('') : '<p>Aucune voiture ne correspond à vos critères.</p>';
        }

        [minPriceFilter, maxPriceFilter, categoryFilter, mileageFilter, handFilter, modelFilter, importStatusFilter, fuelFilter].forEach(filter => {
            filter.addEventListener('change', filterCars);
        });

        populateFilters();
        filterCars(); 
    }

    // Home Page Filter
    const homeFilterForm = document.getElementById('home-filter-form');
    if (homeFilterForm) {
        homeFilterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const brand = document.getElementById('home-brand-filter').value;
            const model = document.getElementById('home-model-filter').value;
            window.location.href = `catalog.php?brand=${encodeURIComponent(brand)}&model=${encodeURIComponent(model)}`;
        });
    }

    // Sell Your Car Form
    const sellCarForm = document.getElementById('sell-car-form');
    if (sellCarForm) {
        sellCarForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const model = document.getElementById('sell-car-model').value;
            const mileage = document.getElementById('sell-car-mileage').value;
            const price = document.getElementById('sell-car-price').value;
            const photo = document.getElementById('sell-car-photo').files[0];

            if (photo) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64Photo = reader.result;
                    const message = `Nouvelle voiture à vendre :\nModèle : ${model}\nKilométrage : ${mileage} km\nPrix : ${price} DH\nPhoto : (voir ci-joint)`;
                    const whatsappUrl = `https://wa.me/212774468689?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                };
                reader.readAsDataURL(photo);
            } else {
                 const message = `Nouvelle voiture à vendre :\nModèle : ${model}\nKilométrage : ${mileage} km\nPrix : ${price} DH`;
                 const whatsappUrl = `https://wa.me/212774468689?text=${encodeURIComponent(message)}`;
                 window.open(whatsappUrl, '_blank');
            }
        });
    }
});
