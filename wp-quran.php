<?php
/**
 * Plugin Name:     Wp Qu'ran
 * Description:     Display a verse of the Qu'ran easily in your WordPress website.
 * Version:         0.1.0
 * Author:          Florian TIAR
 * License:         GPL-2.0-or-later
 * Text Domain:     wpquran
 *
 * @package         wpquran
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function wp_quran_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wpmuslim/wp-quran" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'wp-quran-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'wp-quran-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'wp-quran-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'wpmuslim/wp-quran', array(
		'editor_script' => 'wp-quran-block-editor',
		'editor_style'  => 'wp-quran-block-editor',
		'style'         => 'wp-quran-block',
	) );
}
add_action( 'init', 'wp_quran_block_init' );
