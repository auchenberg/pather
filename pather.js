/*!!
 * Hasher <https://github.com/auchenberg/pather>
 * @author Kenneth Auchenberg
 * @version 1.0.0
 * Released under the MIT License
 */

/*jshint white:false*/
/*global signals:false, window:false*/

/**
 * Pather
 * @namespace Bringing window.pushHistory to crossroads.js.
 * @name pather
 */

var pather = (function(window) {
  rootPath : '/',
  changed : new signals.Signal(),
  initialized : new signals.Signal(),
  getPath : function() {
    var path = window.location.pathname;
    if (path.indexOf(this.rootPath) == 0) {
      path = path.substr(this.rootPath.length);
    }
    return path;
  },

  init : function() {
    if(!!(window.history && window.history.pushState)) {
      window.onpopstate = pather.changed.dispatch(this.getPath());
    }
    
    pather.initialized.dispatch(this.getPath());
  }
}(window));