/**
 * Block dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { SelectControl, Placeholder } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

import Inspector from './Inspector';

export default class QuranVerseEdit extends Component {
	//standard constructor for a component
	constructor() {
		super( ...arguments );

		this.onAyahChange = this.onAyahChange.bind( this );

		this.getSurahOptions();
		this.getQuranEditions();
	}

	async getSurahOptions() {
		const { setAttributes } = this.props;

		const surahOptions = [];

		const response = await fetch( `https://api.alquran.cloud/v1/surah` );
		const data = await response.json();
		if ( data.code === 200 && data.status === 'OK' ) {
			data.data.forEach( function ( surate ) {
				surahOptions.push( {
					value: '' + surate.number + '',
					label:
						surate.number +
						' - ' +
						surate.englishName +
						' - ' +
						surate.name,
				} );
			} );
			setAttributes( { surahOptions } );
		}
	}

	async getQuranEditions() {
		const { setAttributes } = this.props;

		const editionOptions = [];

		const response = await fetch( `https://api.alquran.cloud/v1/edition` );
		const data = await response.json();
		if ( data.code === 200 && data.status === 'OK' ) {
			data.data.forEach( function ( edition, index ) {
				editionOptions.push( edition );
				editionOptions[ index ].value = edition.identifier;
				editionOptions[ index ].label =
					edition.format +
					' - ' +
					edition.language +
					' - ' +
					edition.englishName;
			} );
			setAttributes( { quranEditions: editionOptions } );
		}
	}

	async onSurahChange( surah, _props ) {
		const { setAttributes } = _props;

		setAttributes( { currentSurah: surah } );
		setAttributes( {
			currentSurahText: _props.attributes.surahOptions[ surah - 1 ].label,
		} );

		const currentSurahAyahs = [];
		const response = await fetch(
			`https://api.alquran.cloud/v1/surah/` +
				surah +
				'/' +
				_props.attributes.currentEdition
		);
		const data = await response.json();
		if ( data.code === 200 && data.status === 'OK' ) {
			data.data.ayahs.forEach( function ( ayah, index ) {
				currentSurahAyahs.push( {
					value: index,
					verseId: ayah.number,
					label: ayah.text,
				} );
			} );
			setAttributes( { currentSurahAyahs } );
		}
	}

	async onEditionChange( edition, _props ) {
		const { setAttributes } = _props;

		setAttributes( { currentEdition: edition } );
	}

	async onAyahChange( ayah ) {
		const { setAttributes, attributes } = this.props;

		setAttributes( { currentAyahNum: ayah } );
		setAttributes( {
			currentAyahText: attributes.currentSurahAyahs[ ayah ].label,
		} );

		// Save verse in arabic just in case showVerseInArabic is set to true
		const response = await fetch(
			`https://api.alquran.cloud/v1/ayah/` +
				attributes.currentSurah +
				':' +
				++ayah +
				'/ar'
		);
		const json = await response.json();
		if ( json.code === 200 && json.status === 'OK' ) {
			setAttributes( { currentAyahTextInArabic: json.data.text } );
		}
	}

	render() {
		const {
			attributes: {
				surahOptions,
				quranEditions,
				currentSurah,
				currentEdition,
				currentSurahText,
				currentSurahAyahs,
				currentAyahNum,
				currentAyahText,
				showVerseInArabic,
				currentAyahTextInArabic,
			},
			className,
		} = this.props;

		const editionSelect = (
			<SelectControl
				label={ __( 'Edition', 'wpquran' ) }
				value={ currentEdition }
				options={ quranEditions }
				onChange={ ( newValue ) => {
					this.onEditionChange( newValue, this.props );
				} }
			/>
		);

		const surahSelect = (
			<SelectControl
				label={ __( 'Surah', 'wpquran' ) }
				value={ currentSurah }
				options={ surahOptions }
				onChange={ ( newValue ) => {
					this.onSurahChange( newValue, this.props );
				} }
			/>
		);

		const ayahSelect = (
			<SelectControl
				label={ __( 'Verse', 'wpquran' ) }
				value={ currentAyahNum }
				options={ currentSurahAyahs }
				onChange={ this.onAyahChange }
			/>
		);

		// translators: %s: number of verse and surah e.g: "Verse 13, Surah 18 – Al-Kahf – سورة الكهف".
		const verseInfo = sprintf(
			__( 'Verse %s, Surah %s', 'wp-quran' ),
			currentAyahNum,
			currentSurahText
		);

		return (
			<Fragment>
				<Inspector
					{ ...{
						...this.props,
						surahSelect,
						ayahSelect,
						editionSelect,
					} }
				/>

				<div className={ className }>
					{ currentAyahText.length < 1 && (
						<Placeholder
							icon="book"
							label={ __( "Qu'ran verses.", 'wpquran' ) }
							instructions={ __(
								'Please select one of the 114 surah.',
								'wpquran'
							) }
						>
							{ editionSelect }

							{ surahSelect }

							{ currentSurahAyahs.length > 0 && (
								<Fragment>{ ayahSelect }</Fragment>
							) }
						</Placeholder>
					) }

					{ currentAyahText.length > 0 && (
						<div>
							<p className="translated-ayah">
								{ currentAyahText }
							</p>

							{ showVerseInArabic && (
								<p className="arabic-ayah">
									{ currentAyahTextInArabic }
								</p>
							) }

							<p className="translated-surah">{ verseInfo }</p>
						</div>
					) }
				</div>
			</Fragment>
		);
	}
}
