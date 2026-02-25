<?php

function autoweld_scripts() {
    wp_enqueue_style( 'autoweld-style', get_stylesheet_uri() );
    wp_enqueue_script( 'autoweld-script', get_template_directory_uri() . '/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'autoweld_scripts' );

?>