import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';

import attributes from './attributes';
import edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'wpmuslim/wp-quran', {
	title: __(
		'Wp Quran',
		'wpmuslim'
	),

	description: __(
		'Display Quran verses with ease.',
		'wpmuslim'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'common',

	icon: {
		background: 'rgba(157,254,128,0.52)',
		src: <Icon icon="book" size={'24'}/>,
	},

	keywords: [
		__( 'quran' ),
		__( 'coran' ),
		__( 'verse' ),
		__( 'ayah' ),
		__( 'islam' ),
		__( 'muslim' ),
		__( 'holy' ),
	],

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes,

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
	 *
	 * @param {Object} [props] Properties passed from the editor.
	 *
	 * @return {WPElement} Element to render.
	 */
	edit,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by the block editor into `post_content`.
	 *
	 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
	 *
	 * @return {WPElement} Element to render.
	 */
	save,
} );
