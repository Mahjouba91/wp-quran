/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

export default class Inspector extends Component {
	render() {
		const {
			setAttributes,
			attributes: { showVerseInArabic, currentSurahAyahs },
			surahSelect,
			ayahSelect
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody title="Block options">

					{surahSelect}

					{currentSurahAyahs.length > 0 &&
						<Fragment>
							{ayahSelect}
						</Fragment>
					}

					<ToggleControl
						label="Display the verse in arabic"
						help={ showVerseInArabic ? 'Verse displayed in arabic.' : 'No verse displayed in arabic.' }
						checked={ showVerseInArabic }
						onChange={(value) => {
							setAttributes({showVerseInArabic: value});
						}}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
