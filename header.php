<?php
function is_page_active($page_name) {
    $current_page = basename($_SERVER['PHP_SELF']);
    if ($current_page == $page_name) {
        return 'active';
    }
    return '';
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concessionnaire Automobile Premium</title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <?php wp_head(); ?>
</head>
<body>
    <header>
        <div class="container">
            <a href="index.php" class="logo">Voitures Premium</a>
            <nav>
                <ul>
                    <li><a href="index.php" class="<?php echo is_page_active('index.php'); ?>">Accueil</a></li>
                    <li><a href="catalog.php" class="<?php echo is_page_active('catalog.php'); ?>">Catalogue</a></li>
                    <li><a href="equipe.php" class="<?php echo is_page_active('equipe.php'); ?>">Équipe</a></li>
                    <li><a href="contact.php" class="<?php echo is_page_active('contact.php'); ?>">Contact</a></li>
                    <li><a href="sell-your-car.php" class="<?php echo is_page_active('sell-your-car.php'); ?>">Vendez Votre Voiture</a></li>
                </ul>
            </nav>
        </div>
    </header>
