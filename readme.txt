=== WP Qu'ran ===
Contributors: mista-flo
Requires at least: 5.0
Tested up to: 5.6
Requires PHP: 5.6
Stable tag: 0.1.1
Donate link: https://www.paypal.me/FlorianTIAR/5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: block, blocks, quran, coran, verse, verset, ayah, surah, sourate

Display verses of the Qu'ran easily in your WordPress website

== Description ==

WP Qu'ran plugin allow you to embed any verse of the Qu'ran. No more hassle with bad copy pasting of verses, no mistake with the number of the verse or the name of the surah, no more issue with the translation, you can display the verse in many languages and have the arabic version next to it.

You have the same output in the frontend, you can display the verse in a translated language like French and then in arabic, then you have the verse number and surah name and number for reference.

The surah, editions, and verses data are all available under the public API of https://alquran.cloud/api

The plugin is just using this data to allow you to embed any of this data inside your WordPress website.
There is no API call done in the frontend of your website, the plugin call the different API endpoints only in the backend when you're writing your article inside the block editor.
The output of the block you see in the editor will be exactly the same in the frontend (and this content is saved in your post_content column in wp_posts table like a normal WordPress website) except if you have some custom CSS rules.

You can see [the terms of use of the API](https://islamic.network/terms-and-conditions.html). Thanks to the Islamic Network to allow us to use this amazing API to give you the ability to display any verse of the Qu'ran on your website.

You are highly encouraged to give any feedback to improve the plugin.

You can contribute to the plugin in [the github repository](https://github.com/Mahjouba91/wp-quran).

== Installation ==

= Automatic Install =

1. Log into your WordPress dashboard and go to Plugins &rarr; Add New
2. Search for "Wp Qu'ran"
3. Click "Install Now" under the Wp Qu'ran plugin
4. Click "Activate Now"
5. Write a new post and search for 'wpmuslim/wp-quran' block.

= Manual Install =

1. Download the plugin from the download button on this page
2. Unzip the file, and upload the resulting `wp-quran` folder to your `/wp-content/plugins` directory
3. Log into your WordPress dashboard and go to Plugins
4. Click "Activate" under the Wp Qu'ran plugin

== Screenshots ==

1. How to configure a verse of the Qu'ran in the block editor
2. The output of the block in the block editor
3. The output of the block in the frontend

== Changelog ==

= 0.1.0 =
* 25th October 2020
* Initial version of the plugin. Please test it and provide valuable feedback to improve it.

