/**
 * This angular js directive wraps a Booststrap panel.
 *
 * @class dirPanelWindow
 * @module webapp.javascript.directives.windows
 */
(function (directives) {
    'use strict';

    directives.directive('dirPanelWindow', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: { panelTitle: '@' },
            templateUrl: 'dir-panel-window.html'
        };
    });

})(appModules.directives);