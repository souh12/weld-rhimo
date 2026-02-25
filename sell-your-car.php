<?php get_header(); ?>

    <main>
        <section class="contact-hero">
            <div class="container">
                <h2>Vendez Votre Voiture</h2>
                <p>Obtenez une excellente offre pour votre voiture en quelques étapes seulement.</p>
            </div>
        </section>

        <section class="contact-form centered-form">
            <div class="container">
                <form id="sell-car-form">
                    <input type="text" id="sell-car-model" placeholder="Modèle de voiture (ex: Mercedes G-Class 2023)" required>
                    <input type="number" id="sell-car-mileage" placeholder="Kilométrage (km)" required>
                    <input type="number" id="sell-car-price" placeholder="Prix souhaité (DH)" required>
                    <label for="sell-car-photo">Télécharger une photo :</label>
                    <input type="file" id="sell-car-photo" accept="image/*">
                    <button type="submit" class="btn">Soumettre via WhatsApp</button>
                </form>
            </div>
        </section>
    </main>

<?php get_footer(); ?>
