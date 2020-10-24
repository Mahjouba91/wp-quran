/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

export default class WpQuranSave extends Component {
	render() {
		const { attributes, className } = this.props;

		// translators: %s: number of verse and surah e.g: "Verse 13, Surah 18 – Al-Kahf – سورة الكهف".
		const verseInfo = sprintf(
			__( 'Verse %s, Surah %s', 'wp-quran' ),
			attributes.currentAyahNum,
			attributes.currentSurahText
		);

		return (
			<div className={ className }>
				{ attributes.currentAyahText.length > 0 &&
					attributes.currentSurahText && (
						<Fragment>
							<p>{ attributes.currentAyahText }</p>

							{ attributes.showVerseInArabic && (
								<p>{ attributes.currentAyahTextInArabic }</p>
							) }

							<p>{ verseInfo }</p>
						</Fragment>
					) }
			</div>
		);
	}
}
