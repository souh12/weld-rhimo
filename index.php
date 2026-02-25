<?php get_header(); ?>

    <main>
        <section class="hero">
            <div class="container">
                <img src="https://storage.googleapis.com/generative-ai-goog-prod-us-east1-common/user/4603c9a22f3b794f/files/5465666b-4e63-48fb-9781-a75d799059c3.png" alt="Logo de l'entreprise" class="hero-logo">
                <p class="hero-slogan">Vente et achat de voitures propres et honorables<br>Le commerce en cinq minutes</p>
            </div>
        </section>

        <section class="filter-section">
            <div class="container">
                <div class="filter-tabs">
                    <button class="active"><i class="fa-solid fa-car"></i></button>
                </div>
                <form class="filter-form" id="home-filter-form">
                    <input type="text" id="home-brand-filter" placeholder="Marque">
                    <input type="text" id="home-model-filter" placeholder="Modèle">
                    <button type="submit" class="btn">Rechercher</button>
                </form>
            </div>
        </section>

        <section class="top-deals">
            <div class="container">
                <div class="section-title">
                    <h2>Top <span class="deal-badge">OFFRES</span> pour vous</h2>
                    <a href="catalog.php" class="show-all">Voir tout</a>
                </div>
                <div class="car-grid-horizontal">
                     </div>
            </div>
        </section>

        <section class="latest-cars">
            <div class="container">
                <div class="section-title">
                    <h2>Dernières voitures</h2>
                    <a href="catalog.php" class="show-all">Voir tout</a>
                </div>
                <div class="car-grid">
                   </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>TROUVEZ LA VOITURE DE VOS RÊVES</h2>
                <a href="catalog.php" class="btn">VOIR LE CATALOGUE</a>
            </div>
        </section>
    </main>

<?php get_footer(); ?>
