// ==UserScript==
// @name         Roll20 Macro Button Styles
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Roll20 styling for better Macro Button styles
// @author       Andrew
// @match        https://app.roll20.net/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
#secondary-toolbar {
    background-color: transparent;
    border: none;
    box-shadow: none;
    opacity: 1;
}

#secondary-toolbar li {
    border-right: none;
}

.tokenactions button.btn {
    height: 48px;
    border-radius: 4px;
    display: flex;
    border: none;
    border: 3px solid #000;
    text-shadow: none;
    background: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    visibility: hidden;
}

#secondary-toolbar .tokenactions li {
    display: flex;
    flex-direction: column;
}

.tokenactions button.btn[data-macroid] {
    position: relative;
}

.tokenactions button.btn[data-macroid]:after {
    box-sizing: border-box;
    display: flex;
    position: absolute;
    visibility: visible;
    top: 0;
    left: 0;
    height: 48px;
    border-radius: 4px;
    border: none;
    border: 3px solid #000;
    text-shadow: none;
    background: none;
    background-color: #fff;
    padding: 8px;
    margin: 0;
    align-items: center;
    justify-content: center;
    white-space: pre;
    font-size: 16px;
    transition: color 150ms ease-out, transform 150ms ease-out;
    transform-origin: center;
    transform: scale(1);
}

.tokenactions button.btn[data-macroid]:hover:after {
    background-color: #ddd;
    transform: scale(0.97);
}

.tokenactions button.btn[data-macroid]:active:after {
    background-color: #ccc;
    transform: scale(0.93);
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOz9aL-asIfBZsrYd_']:after {
    content: 'Decrease Initiative';
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOssZpV2kNzRrvtRo0']:after {
    content: 'Use DM interrupt';
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOz4OsCKTQoTnS_JmF']:after {
    content: 'Start turn';
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOlMCac5Wz5XQRCxAj']:after {
    content: 'Interrupt!';
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOz9aL-asIfBZsrYd_'] {
    order: 3;
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOssZpV2kNzRrvtRo0'] {
    order: 4;
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOz4OsCKTQoTnS_JmF'] {
    order: 1;
}

.tokenactions button.btn[data-macroid='-Lwo9Vu6HPjNAIAKm63W|-LxOlMCac5Wz5XQRCxAj'] {
    order: 2;
}

    `)

    // Your code here...
})();
