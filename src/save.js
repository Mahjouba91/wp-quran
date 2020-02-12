/**
 * Internal dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default class WpQuranSave extends Component {
	render() {
		const { attributes, className } = this.props;

		return (
			<div className={ className }>
				{attributes.currentAyahText.length > 0 && attributes.currentSurahText &&
					<Fragment>
						<p>{attributes.currentAyahText}</p>
						<p>{__("Surah", 'wpmuslim')} - {attributes.currentSurahText}</p>
					</Fragment>
				}
			</div>
		);
	}
}
