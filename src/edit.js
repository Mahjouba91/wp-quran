/**
 * Block dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { SelectControl, Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default class QuranVerseEdit extends Component {
	//standard constructor for a component
	constructor() {
		super(...arguments);

		this.onAyahChange = this.onAyahChange.bind( this );

		this.getSurahOptions();
	}

	async getSurahOptions() {

		const {
			setAttributes
		} = this.props;

		let surahOptions = [];

		let response = await fetch(`https://api.alquran.cloud/v1/surah`);
		let data = await response.json();
		if (data.code === 200 && data.status === 'OK') {
			data.data.forEach(function (surate, index) {
				surahOptions.push({
					value: '' + surate.number + '',
					label: surate.number + ' - ' + surate.englishName,
				});
			});
			setAttributes( { surahOptions } );
		}
	}

	async onSurahChange(surah, _props) {
		const {
			setAttributes
		} = _props;

		setAttributes({currentSurah: surah});
		setAttributes({currentSurahText: _props.attributes.surahOptions[surah-1].label});

		let currentSurahAyahs = [];
		let response = await fetch(`https://api.alquran.cloud/v1/surah/` + surah + '/fr.hamidullah');
		let data = await response.json();
		if (data.code === 200 && data.status === 'OK') {
			data.data.ayahs.forEach(function (ayah, index) {
				currentSurahAyahs.push({
					value: '' + index + '',
					label: (index + 1) + ' - ' + ayah.text,
				});
			});
			setAttributes( { currentSurahAyahs } );
		}

		console.log( currentSurahAyahs )
	}

	onAyahChange(ayah) {
		const {
			setAttributes
		} = this.props;

		setAttributes({currentAyahNum: ayah});
		setAttributes({currentAyahText: this.props.attributes.currentSurahAyahs[ayah].label});
	}

	render() {

		const {
			attributes: {surahOptions, currentSurah, currentSurahText, currentSurahAyahs, currentAyahNum, currentAyahText},
			className
		} = this.props;

		const surahSelect = (
			<SelectControl
				label={ __("Surah", 'wpmuslim') }
				value={currentSurah}
				options={surahOptions}
				onChange={(newValue) => {
					this.onSurahChange(newValue, this.props);
				}}
			/>
		);

		const ayahSelect = (
			<SelectControl
				label={__("Ayah", 'wpmuslim')}
				value={currentAyahNum}
				options={currentSurahAyahs}
				onChange={this.onAyahChange}
			/>
		);

		return (
			<div className={className}>

				{ ( currentAyahText.length < 1 || this.props.isSelected ) &&

					<Placeholder
						icon="book"
						label={__("Qu'ran verses.", 'wpmuslim')}
						instructions={__("Please select one of the 114 surah.", 'wpmuslim')}
					>
						{surahSelect}

						{currentSurahAyahs.length > 0 &&
							<Fragment>
								{ayahSelect}
							</Fragment>
						}
					</Placeholder>
				}

				{ ! this.props.isSelected && currentAyahText.length > 0 &&
					<div>
						<p>{currentAyahText}</p>
						<p>{ __("Surah", 'wpmuslim' ) } - { currentSurahText }</p>
					</div>
				}

			</div>
		);
	}

}
