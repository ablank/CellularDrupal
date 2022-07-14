
/**
 * Implements hook_preprocess().
 */
function cellular_preprocess(&$variables)
{
    $config = \Drupal::config('system.site');
    // Theme variables
    $variables['cellular'] = [];
    $cellular_settings = [
        'display_sample_content',
        'loremipsum',
        'header_style',
        'header_position',
        'header_sticky',
        'header_color',
        'social_follow',
        'social_share',
        'social_icon_style',
        'copyright_text',
        'theme_credits',
    ];

    $social_follow = [
        'facebook',
        'instagram',
        'googleplus',
        'linkedin',
        'twitter',
        'youtube',
        'github',
    ];
    
    $social_share = [
        'facebook',
        'instagram',
        'googleplus',
        'linkedin',
        'twitter',
        'youtube',
        'github',
    ];

    $textarea_settings = [
        'loremipsum',
    ];

    // Get General theme options.
    foreach ($cellular_settings as $cellular_setting) {
        $value = trim(theme_get_setting($cellular_setting));
        if (!empty($value)) {
            $variables['cellular'][$cellular_setting] = Xss::filter($value);
        }
    }

    // Generate "follow on" social links.
    foreach ($social_follow as $social_profile) {
        $value = trim(theme_get_setting($social_profile));
        if (!empty($value)) {
            $variables['cellular']['social_follow'][$social_profile] = Xss::filter($value);
        }
    }

    // Generate "share with" social links.
    foreach ($social_share as $social_profile) {
        $value = trim(theme_get_setting($social_profile, 'cellular'));
        if (!empty($value)) {
            $variables['cellular']['social_share'][$social_profile] = Xss::filter($value);
        }
    }
/*
    // Get textarea and text format settings.
    foreach ($textarea_settings as $textarea_setting) {
        $value = check_markup(theme_get_setting($textarea_setting, 'cellular'), 'full_html');
        if (!empty($value)) {
            $variables['cellular'][$textarea_setting] = Xss::filter($value);
        }
    }
*/

    // Get Copyright text.
    if (!empty(theme_get_setting('copyright_text'))) {
        $copyright_text = str_replace('@year', date('Y'), theme_get_setting('copyright_text'));
        $variables['cellular']['copyright_text'] = $copyright_text;
    }
    // Get theme credits.
    if (!empty(theme_get_setting('theme_credits'))) {
        $variables['cellular']['theme_credits'] = t(
            'Built with loving kindness by <a href="@url" target="_blank">ablank</a>',
            ['@url' => 'https://github.com/ablank']
        );
    }
}