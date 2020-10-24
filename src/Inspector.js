/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default class Inspector extends Component {
	render() {
		const {
			setAttributes,
			attributes: { showVerseInArabic, currentSurahAyahs },
			editionSelect,
			surahSelect,
			ayahSelect,
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Block options">
					{ editionSelect }

					{ surahSelect }

					{ currentSurahAyahs.length > 0 && (
						<Fragment>{ ayahSelect }</Fragment>
					) }

					<ToggleControl
						label={ __( 'Display the verse in arabic', 'wpquran' ) }
						help={
							showVerseInArabic
								? __( 'Verse displayed in arabic.', 'wpquran' )
								: __(
										'Verse not displayed in arabic.',
										'wpquran'
								  )
						}
						checked={ showVerseInArabic }
						onChange={ ( value ) => {
							setAttributes( { showVerseInArabic: value } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
