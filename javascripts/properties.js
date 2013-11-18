/*
 * Copyright 2012-2013 eBay Software Foundation, ios-driver and selendroid committers.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

$(document).ready(function ($) {

    var version = "0.5.1";
    var downloadFile = "https://github.com/selendroid/selendroid/releases/download/0.5.1/selendroid-standalone-0.5.1-with-dependencies.jar";
    var github = "https://github.com/selendroid/selendroid/";

    $("#download_me").attr('href', downloadFile);
    $("#download_me").html("Download " + version);
    $("#forkme_banner").attr('href', github);

    buildFooter();

});

buildFooter = function () {
    $("#footer_wrap").html('<a href="https://github.com/selendroid/selendroid"></a>' +
        '<a href="http://groups.google.com/group/selendroid" class="button">Selendroid Mailing list</a>'+
        'is maintained by <a href="https://github.com/selendroid/selendroid/blob/master/AUTHORS">Selendroid authors</a>.' +
        '<p>Published with <a href="http://pages.github.com">GitHub Pages</a></p>');
};

buildMenu = function (page) {
    $("#menu").html('<ul>' +
        '<li><a href="index.html" id="home">Home</a></li>' +
        '<li><a href="setup.html" id="setup">Setup</a></li>' +
        '<li><a href="native.html" id="native">Native</a></li>' +
        '<li><a href="hybrid.html" id="hybrid">Hybrid</a></li>' +
        '<li><a href="gestures.html" id="gestures">Gestures</a></li>' +
        '<li><a href="inspector.html" id="inspector">Inspector</a></li>' +
        '<li><a href="scale.html" id="scale">Scale</a></li>' +
        '<li><a href="faq.html" id="faq">FAQ</a></li>' +
        '<li><a href="architecture.html" id="architecture">Architecture</a></li>' +
        '</ul>');
    $("#" + page).parent().addClass("active");
};
