/**
 * Implements hook_preprocess_html().
 */
function cellular_preprocess_html(&$variables)
{/*
    // Apply frontpage class.
    if(\Drupal::service('path.matcher')->isFrontPage()){
        $variables['attributes']['class'][] ='frontpage';
    }
    else {
        $variables['attributes']['class'][] = 'path-'.$variables['root_path'];
    }
    */
    /*
    not root_path ? 'path-frontpage' : 'path-' ~ root_path|clean_class,
    node_type ? 'page-node-type-' ~ node_type|clean_class,
    db_offline ? 'db-offline',
    */
// Apply frontpage or node-type class.
 //   $variables['attributes']['class'][] = \Drupal::service('path.matcher')->isFrontPage() ? 'frontpage' : !empty($variables['node_type']) ?: 'node-' . $variables['node_type'];
    // User is logged in?
    $variables['attributes']['class'][] = $variables['logged_in'] ? 'logged-in' : 'anonymous';
    /**
     * Inject critical css inline
     */
    $criticalCss = file_get_contents(drupal_get_path('theme', 'cellular') . '/dist/css/critical.min.css');
    $variables['page']['#attached']['html_head'][] = [
        [
            '#tag' => 'style',
            '#value' => Markup::create($criticalCss),
        ],
        'critical-css',
    ];
}