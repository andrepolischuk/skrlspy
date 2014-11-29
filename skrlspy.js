// Skrlspy © 2014 Andrey Polischuk
// https://github.com/andrepolischuk/skrlspy

!function() {

  'use strict';

  /**
   * Sections
   */

  var sections;

  /**
   * Navigation
   */

  var nav;

  /**
   * Object classes
   */

  var sectionClass   = document.body.getAttribute('data-skrlspy');
  var navClass       = document.body.getAttribute('data-skrlspy-nav');
  var navActiveClass = 'active';
  var navActiveClassExp;

  /**
   * Current section
   */

  var current;

  /**
   * Callback
   */

  var callback;

  /**
   * Scroll handler
   * @api private
   */

  function scroll() {

    var cur = 0;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var offsetTop;
    var height;

    for (var i = 0; i < sections.length; i++) {

      height = sections[i].offsetHeight;
      offsetTop = sections[i].offsetTop - 25;

      if (scrollTop >= offsetTop && scrollTop <= offsetTop + height) {
        cur = i;
        break;
      }

    }

    if (cur === current) {
      return;
    }

    current = cur;

    var active = nav.querySelector('.' + navActiveClass);

    if (active) {
      active.className = active.className.replace(navActiveClassExp, "");
    }

    nav.children[current].className += ' ' + navActiveClass;

    if (typeof callback === 'function') {
      callback(current);
    }

  }

  /**
   * Module
   * @param {Object} options
   * @api public
   */

  function skrlspy(options) {

    options = options || {};

    if (sections || nav) {
      return;
    }

    if (!options.section || !options.nav) {
      return;
    }

    sections = document.querySelectorAll(options.section);
    nav = document.querySelector(options.nav);

    navActiveClass = options.navActiveClass || navActiveClass;
    navActiveClassExp = new RegExp('(' + navActiveClass + ')', 'gi');

    callback = typeof options.change === 'function' ? options.change : callback;

    if (window.addEventListener) {
      window.addEventListener('scroll', scroll, false);
    } else {
      window.attachEvent('onscroll', function() {
        scroll(window.event);
      });
    }

    scroll();

  }

  /**
   * Initialization via <body>
   */

  if (sectionClass && navClass) {

    skrlspy({
      section : sectionClass,
      nav : navClass
    });

  }

  /**
   * Module exports
   */

  if (typeof define === 'function' && define.amd) {

    define([], function() {
      return skrlspy;
    });

  } else if (typeof module !== 'undefined' && module.exports) {

    module.exports = skrlspy;

  } else {

    this.skrlspy = skrlspy;

  }

}.call(this);
