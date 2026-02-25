<?php get_header(); ?>

    <main>
        <div class="container catalog-page">
            <aside class="filter-sidebar">
                <h3>Filtres</h3>
                <div class="filter-group">
                    <label for="min-price-filter">Prix Minimum</label>
                    <input type="number" id="min-price-filter" placeholder="ex: 1000000">
                </div>
                <div class="filter-group">
                    <label for="max-price-filter">Prix Maximum</label>
                    <input type="number" id="max-price-filter" placeholder="ex: 5000000">
                </div>
                <div class="filter-group">
                    <label for="category-filter">Catégorie</label>
                    <select id="category-filter">
                        <option value="">Toutes</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="mileage-filter">Kilométrage</label>
                    <select id="mileage-filter">
                        <option value="">Tous</option>
                        <option value="moin_100k">Moins de 100k</option>
                        <option value="plus_100k">Plus de 100k</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="hand-filter">1ère main</label>
                    <select id="hand-filter">
                        <option value="">Toutes</option>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="model-filter">Modèle</label>
                    <input type="text" id="model-filter" placeholder="Entrez le modèle">
                </div>
                <div class="filter-group">
                    <label for="import-status-filter">Statut d'importation</label>
                    <select id="import-status-filter">
                        <option value="">Tous</option>
                        <option value="Importé neuf">Importé neuf</option>
                        <option value="WWW Maroc">WWW Maroc</option>
                    </select>
                </div>
                 <div class="filter-group">
                    <label for="fuel-filter">Carburant</label>
                    <select id="fuel-filter">
                        <option value="">Tous</option>
                    </select>
                </div>
            </aside>
            <section class="catalog">
                <div class="car-grid">
                    </div>
            </section>
        </div>
    </main>

<?php get_footer(); ?>
