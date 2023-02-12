/**
 * The MIT License (MIT)

 * Copyright (c) 2017 Rafael Pedicini

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * ITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * UTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * IABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * UT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * OFTWARE.
*/

/**
 * Toggle fullscreen mode.
 * If statement condition was adapted from:
 * source: https://youtu.be/3FjYcMKZ3SU?t=322
 */
function fullScreenMode() {
    // checks if the current browser window is in fullscreen mode for most browsers.
    if (document.fullscreenElement === null ||
        document.webkitFullscreenEnabled === null ||
        document.mozFullScreenEnabled === null ||
        document.msFullscreenEnabled === null) {
        // In fullscreen mode.
        document.documentElement.requestFullscreen().catch( (e) => {
            console.log(e);
        });
    } else {
        // Not in fullscreen.
        document.exitFullscreen();
    }
}


