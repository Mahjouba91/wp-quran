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
			attributes.currentAyahNumberInSurah,
			attributes.currentSurahText
		);

		return (
			<div className={ className }>
				{ attributes.currentAyahText.length > 0 &&
					attributes.currentSurahText && (
						<Fragment>
							<p className="translated-ayah">
								{ attributes.currentAyahText }
							</p>

							{ attributes.showVerseInArabic && (
								<Fragment>
									<p className="arabic-ayah">
										{ attributes.currentAyahTextInArabic }
									</p>
									<audio
										controls
										src={ `http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/${ attributes.currentAyahNumberInQuran }/high` }>
									</audio>
								</Fragment>
							) }

							<p className="translated-surah">{ verseInfo }</p>
						</Fragment>
					) }
			</div>
		);
	}
}
