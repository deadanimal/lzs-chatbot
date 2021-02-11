(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-forms-forms-module"],{

/***/ "./node_modules/dropzone/dist/dropzone.js":
/*!************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",

    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {};
      // Create namespace for this event
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var _iterator = callbacks, _isArray = true, _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var callback = _ref;

          callback.apply(this, args);
        }
      }

      return this;
    }

    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }

      // specific event
      var callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }

      // remove all handlers
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }

      // remove specific handler
      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {

      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;

      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */
      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads* documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},


        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },


        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },


        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement = void 0;
          this.element.className = this.element.className + " dz-browser-not-supported";

          for (var _iterator2 = this.element.getElementsByTagName("div"), _isArray2 = true, _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var child = _ref2;

            if (/(^| )dz-message($| )/.test(child.className)) {
              messageElement = child;
              child.className = "dz-message"; // Removes the 'dz-default' class
              break;
            }
          }
          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];
          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },


        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };

          var srcRatio = file.width / file.height;

          // Automatically calculate dimensions if not specified
          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          }

          // Make sure images aren't upscaled
          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);

          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;

          info.trgWidth = width;
          info.trgHeight = height;

          return info;
        },


        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },


        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

        // END OPTIONS
        // (Required by the dropzone documentation parser)


        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */

        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},


        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },


        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);
            for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]"), _isArray3 = true, _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref3;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
              }

              var node = _ref3;

              node.textContent = file.name;
            }
            for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]"), _isArray4 = true, _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                node = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                node = _i4.value;
              }

              node.innerHTML = this.filesize(file.size);
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]"), _isArray5 = true, _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref4 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref4 = _i5.value;
              }

              var removeLink = _ref4;

              removeLink.addEventListener("click", removeFileEvent);
            }
          }
        },


        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }
          return this._updateMaxFilesReachedClass();
        },


        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _isArray6 = true, _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref5;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref5 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref5 = _i6.value;
              }

              var thumbnailElement = _ref5;

              thumbnailElement.alt = file.name;
              thumbnailElement.src = dataUrl;
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },


        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "String" && message.error) {
              message = message.error;
            }
            for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _isArray7 = true, _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref6 = _iterator7[_i7++];
              } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref6 = _i7.value;
              }

              var node = _ref6;

              node.textContent = message;
            }
          }
        },
        errormultiple: function errormultiple() {},


        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},


        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _isArray8 = true, _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
              var _ref7;

              if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref7 = _iterator8[_i8++];
              } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref7 = _i8.value;
              }

              var node = _ref7;

              node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = progress + "%";
            }
          }
        },


        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},


        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},


        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},


        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},


        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };

      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    }

    // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _iterator9 = objects, _isArray9 = true, _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref8 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var object = _ref8;

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }
      return target;
    }
  }]);

  function Dropzone(el, options) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this));

    var fallback = void 0,
        left = void 0;
    _this.element = el;
    // For backwards compatibility since the version was in the prototype previously
    _this.version = Dropzone.version;

    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");

    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    }

    // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    }

    // Now add this dropzone to the instances.
    Dropzone.instances.push(_this);

    // Put the dropzone inside the element itself.
    _this.element.dropzone = _this;

    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};

    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {});

    // If the browser failed, just call the fallback and leave
    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      var _ret;

      return _ret = _this.options.fallback.call(_this), _possibleConstructorReturn(_this, _ret);
    }

    // @options.url = @element.getAttribute "action" unless @options.url?
    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    }

    // Backwards compatibility
    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    }

    // Backwards compatibility
    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_this, file.name, file);
      };
    }

    _this.options.method = _this.options.method.toUpperCase();

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    }

    // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();
    return _this;
  }

  // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    }

    // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    }

    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }
          _this3.hiddenFileInput = document.createElement("input");
          _this3.hiddenFileInput.setAttribute("type", "file");
          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }
          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }
          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          }

          // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.
          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              for (var _iterator10 = files, _isArray10 = true, _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray10) {
                  if (_i10 >= _iterator10.length) break;
                  _ref9 = _iterator10[_i10++];
                } else {
                  _i10 = _iterator10.next();
                  if (_i10.done) break;
                  _ref9 = _i10.value;
                }

                var file = _ref9;

                _this3.addFile(file);
              }
            }
            _this3.emit("addedfiles", files);
            return setupHiddenFileInput();
          });
        };
        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL;

      // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.
      for (var _iterator11 = this.events, _isArray11 = true, _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref10 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref10 = _i11.value;
        }

        var eventName = _ref10;

        this.on(eventName, this.options[eventName]);
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      });

      // Emit a `queuecomplete` event if all files finished uploading.
      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var noPropagation = function noPropagation(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };

      // Create the listeners
      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct = void 0;
            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}
            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';

            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }

          // This is disabled right now, because the browsers don't implement it properly.
          // "paste": (e) =>
          //   noPropagation e
          //   @paste e
        } }];

      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click
              }
              return true;
            }
          }
        });
      });

      this.enable();

      return this.options.init.call(this);
    }

    // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);
      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress = void 0;
      var totalBytesSent = 0;
      var totalBytes = 0;

      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        for (var _iterator12 = this.getActiveFiles(), _isArray12 = true, _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
          var _ref11;

          if (_isArray12) {
            if (_i12 >= _iterator12.length) break;
            _ref11 = _iterator12[_i12++];
          } else {
            _i12 = _iterator12.next();
            if (_i12.done) break;
            _ref11 = _i12.value;
          }

          var file = _ref11;

          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }

    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    }

    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    }

    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback = void 0,
          form = void 0;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + this._getParamName(0) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : undefined) + " /><input type=\"submit\" value=\"Upload!\"></div>";

      var fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    }

    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        for (var _iterator13 = elements, _isArray13 = true, _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
          var _ref12;

          if (_isArray13) {
            if (_i13 >= _iterator13.length) break;
            _ref12 = _iterator13[_i13++];
          } else {
            _i13 = _iterator13.next();
            if (_i13.done) break;
            _ref12 = _i13.value;
          }

          var el = _ref12;

          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };

      var _arr = ["div", "form"];
      for (var _i14 = 0; _i14 < _arr.length; _i14++) {
        var tagName = _arr[_i14];
        var fallback;
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    }

    // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;

      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    }

    // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    }

    // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);

      // Convert the FileList to an Array
      // This is necessary for IE11
      var files = [];
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      }

      this.emit("addedfiles", files);

      // Even if it's a folder, files.length will contain the folders.
      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;


      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      for (var _iterator14 = files, _isArray14 = true, _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray14) {
          if (_i15 >= _iterator14.length) break;
          _ref13 = _iterator14[_i15++];
        } else {
          _i15 = _iterator14.next();
          if (_i15.done) break;
          _ref13 = _i15.value;
        }

        var file = _ref13;

        this.addFile(file);
      }
    }

    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];
        for (var _iterator15 = items, _isArray15 = true, _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
          var _ref14;

          if (_isArray15) {
            if (_i16 >= _iterator15.length) break;
            _ref14 = _iterator15[_i16++];
          } else {
            _i16 = _iterator15.next();
            if (_i16.done) break;
            _ref14 = _i16.value;
          }

          var item = _ref14;

          var entry;
          if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
            if (entry.isFile) {
              result.push(_this5.addFile(item.getAsFile()));
            } else if (entry.isDirectory) {
              // Append all files from that directory to files
              result.push(_this5._addFilesFromDirectory(entry, entry.name));
            } else {
              result.push(undefined);
            }
          } else if (item.getAsFile != null) {
            if (item.kind == null || item.kind === "file") {
              result.push(_this5.addFile(item.getAsFile()));
            } else {
              result.push(undefined);
            }
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    }

    // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            for (var _iterator16 = entries, _isArray16 = true, _i17 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
              var _ref15;

              if (_isArray16) {
                if (_i17 >= _iterator16.length) break;
                _ref15 = _iterator16[_i17++];
              } else {
                _i17 = _iterator16.next();
                if (_i17.done) break;
                _ref15 = _i17.value;
              }

              var entry = _ref15;

              if (entry.isFile) {
                entry.file(function (file) {
                  if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                    return;
                  }
                  file.fullPath = path + "/" + file.name;
                  return _this6.addFile(file);
                });
              } else if (entry.isDirectory) {
                _this6._addFilesFromDirectory(entry, path + "/" + entry.name);
              }
            }

            // Recursively call readEntries() again, since browser only handle
            // the first 100 entries.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
            readEntries();
          }
          return null;
        }, errorHandler);
      };

      return readEntries();
    }

    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file),
        chunked: this.options.chunking && (this.options.forceChunking || file.size > this.options.chunkSize),
        totalChunkCount: Math.ceil(file.size / this.options.chunkSize)
      };
      this.files.push(file);

      file.status = Dropzone.ADDED;

      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      return this.accept(file, function (error) {
        if (error) {
          file.accepted = false;
          _this7._errorProcessing([file], error); // Will set the file.status
        } else {
          file.accepted = true;
          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true
        }
        return _this7._updateMaxFilesReachedClass();
      });
    }

    // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      for (var _iterator17 = files, _isArray17 = true, _i18 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray17) {
          if (_i18 >= _iterator17.length) break;
          _ref16 = _iterator17[_i18++];
        } else {
          _i18 = _iterator17.next();
          if (_i18.done) break;
          _ref16 = _i18.value;
        }

        var file = _ref16;

        this.enqueueFile(file);
      }
      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;
      var file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);
        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    }

    // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);

      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    }

    // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      for (var _iterator18 = this.files.slice(), _isArray18 = true, _i19 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
        var _ref17;

        if (_isArray18) {
          if (_i19 >= _iterator18.length) break;
          _ref17 = _iterator18[_i19++];
        } else {
          _i19 = _iterator18.next();
          if (_i19.done) break;
          _ref17 = _i19.value;
        }

        var file = _ref17;

        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    }

    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }
          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);
          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }
          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {

        file.dataURL = fileReader.result;

        // Don't bother creating a thumbnail for SVG images since they're vector
        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }
          return;
        }

        return _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      return fileReader.readAsDataURL(file);
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this13 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };
        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");

          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;
            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;
            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;
            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;
            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;
            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;
            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          }

          // This is a bugfix for iOS' scaling bug.
          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);

          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    }

    // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;

      var processingLength = this.getUploadingFiles().length;
      var i = processingLength;

      // There are already at least as many files uploading than should be
      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    }

    // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    }

    // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      for (var _iterator19 = files, _isArray19 = true, _i20 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
        var _ref18;

        if (_isArray19) {
          if (_i20 >= _iterator19.length) break;
          _ref18 = _iterator19[_i20++];
        } else {
          _i20 = _iterator19.next();
          if (_i20.done) break;
          _ref18 = _i20.value;
        }

        var file = _ref18;

        file.processing = true; // Backwards compatibility
        file.status = Dropzone.UPLOADING;

        this.emit("processing", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files = void 0;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    }

    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);
        for (var _iterator20 = groupedFiles, _isArray20 = true, _i21 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
          var _ref19;

          if (_isArray20) {
            if (_i21 >= _iterator20.length) break;
            _ref19 = _iterator20[_i21++];
          } else {
            _i21 = _iterator20.next();
            if (_i21.done) break;
            _ref19 = _i21.value;
          }

          var groupedFile = _ref19;

          groupedFile.status = Dropzone.CANCELED;
        }
        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }
        for (var _iterator21 = groupedFiles, _isArray21 = true, _i22 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
          var _ref20;

          if (_isArray21) {
            if (_i22 >= _iterator21.length) break;
            _ref20 = _iterator21[_i22++];
          } else {
            _i22 = _iterator21.next();
            if (_i22.done) break;
            _ref20 = _i22.value;
          }

          var _groupedFile = _ref20;

          this.emit("canceled", _groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }
      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this14 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (files[0].upload.chunked) {
          // This file should be sent in chunks!

          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var transformedFile = transformedFiles[0];
          var startedChunkCount = 0;

          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0;

            // Find the next item in file.upload.chunks that is not defined yet.
            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            }

            // This means, that all chunks have already been started.
            if (chunkIndex >= file.upload.totalChunkCount) return;

            startedChunkCount++;

            var start = chunkIndex * _this14.options.chunkSize;
            var end = Math.min(start + _this14.options.chunkSize, file.size);

            var dataBlock = {
              name: _this14._getParamName(0),
              data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };

            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock, // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.
            };

            _this14._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS;

            // Clear the data from the chunk
            chunk.dataBlock = null;
            // Leaving this reference to xhr intact here will cause memory leaks in some browsers
            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }
              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this14.options.chunksUploaded(file, function () {
                _this14._finished(files, '', null);
              });
            }
          };

          if (_this14.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];
          for (var _i23 = 0; _i23 < files.length; _i23++) {
            dataBlocks[_i23] = {
              name: _this14._getParamName(_i23),
              data: transformedFiles[_i23],
              filename: files[_i23].upload.filename
            };
          }
          _this14._uploadData(files, dataBlocks);
        }
      });
    }

    /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    }

    // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this15 = this;

      var xhr = new XMLHttpRequest();

      // Put the xhr object in the file objects to be able to reference it later.
      for (var _iterator22 = files, _isArray22 = true, _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
        var _ref21;

        if (_isArray22) {
          if (_i24 >= _iterator22.length) break;
          _ref21 = _iterator22[_i24++];
        } else {
          _i24 = _iterator22.next();
          if (_i24.done) break;
          _ref21 = _i24.value;
        }

        var file = _ref21;

        file.xhr = xhr;
      }
      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true);

      // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
      xhr.timeout = this.resolveOption(this.options.timeout, files);

      // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this15._finishedUploading(files, xhr, e);
      };

      xhr.onerror = function () {
        _this15._handleUploadError(files, xhr);
      };

      // Some browsers do not have the .upload property
      var progressObj = xhr.upload != null ? xhr.upload : xhr;
      progressObj.onprogress = function (e) {
        return _this15._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData();

      // Adding all @options parameters
      if (this.options.params) {
        var additionalParams = this.options.params;
        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];
          formData.append(key, value);
        }
      }

      // Let the user add additional data if necessary
      for (var _iterator23 = files, _isArray23 = true, _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
        var _ref22;

        if (_isArray23) {
          if (_i25 >= _iterator23.length) break;
          _ref22 = _iterator23[_i25++];
        } else {
          _i25 = _iterator23.next();
          if (_i25.done) break;
          _ref22 = _i25.value;
        }

        var _file = _ref22;

        this.emit("sending", _file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData);

      // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter
      for (var i = 0; i < dataBlocks.length; i++) {
        var dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    }

    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this16 = this;

      var transformedFiles = [];
      // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;
          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    }

    // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        for (var _iterator24 = this.element.querySelectorAll("input, textarea, select, button"), _isArray24 = true, _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
          var _ref23;

          if (_isArray24) {
            if (_i26 >= _iterator24.length) break;
            _ref23 = _iterator24[_i26++];
          } else {
            _i26 = _iterator24.next();
            if (_i26.done) break;
            _ref23 = _i26.value;
          }

          var input = _ref23;

          var inputName = input.getAttribute("name");
          var inputType = input.getAttribute("type");
          if (inputType) inputType = inputType.toLowerCase();

          // If the input doesn't have a name, we can't use it.
          if (typeof inputName === 'undefined' || inputName === null) continue;

          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            // Possibly multiple values
            for (var _iterator25 = input.options, _isArray25 = true, _i27 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
              var _ref24;

              if (_isArray25) {
                if (_i27 >= _iterator25.length) break;
                _ref24 = _iterator25[_i27++];
              } else {
                _i27 = _iterator25.next();
                if (_i27.done) break;
                _ref24 = _i27.value;
              }

              var option = _ref24;

              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
    }

    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress = void 0;
      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0];
          // Since this is a chunked upload, we need to update the appropriate chunk progress.
          var chunk = this._getChunk(file, xhr);
          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal = void 0,
              fileBytesSent = void 0;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;
          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }
          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          for (var _iterator26 = files, _isArray26 = true, _i28 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
            var _ref25;

            if (_isArray26) {
              if (_i28 >= _iterator26.length) break;
              _ref25 = _iterator26[_i28++];
            } else {
              _i28 = _iterator26.next();
              if (_i28.done) break;
              _ref25 = _i28.value;
            }

            var _file2 = _ref25;

            _file2.upload.progress = progress;
            _file2.upload.total = e.total;
            _file2.upload.bytesSent = e.loaded;
          }
        }
        for (var _iterator27 = files, _isArray27 = true, _i29 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();;) {
          var _ref26;

          if (_isArray27) {
            if (_i29 >= _iterator27.length) break;
            _ref26 = _iterator27[_i29++];
          } else {
            _i29 = _iterator27.next();
            if (_i29.done) break;
            _ref26 = _i29.value;
          }

          var _file3 = _ref26;

          this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
        }
      } else {
        // Called when the file finished uploading

        var allFilesFinished = true;

        progress = 100;

        for (var _iterator28 = files, _isArray28 = true, _i30 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();;) {
          var _ref27;

          if (_isArray28) {
            if (_i30 >= _iterator28.length) break;
            _ref27 = _iterator28[_i30++];
          } else {
            _i30 = _iterator28.next();
            if (_i30.done) break;
            _ref27 = _i30.value;
          }

          var _file4 = _ref27;

          if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
            allFilesFinished = false;
          }
          _file4.upload.progress = progress;
          _file4.upload.bytesSent = _file4.upload.total;
        }

        // Nothing to do, all files already at 100%
        if (allFilesFinished) {
          return;
        }

        for (var _iterator29 = files, _isArray29 = true, _i31 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();;) {
          var _ref28;

          if (_isArray29) {
            if (_i31 >= _iterator29.length) break;
            _ref28 = _iterator29[_i31++];
          } else {
            _i31 = _iterator29.next();
            if (_i31.done) break;
            _ref28 = _i31.value;
          }

          var _file5 = _ref28;

          this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response = void 0;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);
        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);
          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      for (var _iterator30 = files, _isArray30 = true, _i32 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();;) {
        var _ref29;

        if (_isArray30) {
          if (_i32 >= _iterator30.length) break;
          _ref29 = _iterator30[_i32++];
        } else {
          _i32 = _iterator30.next();
          if (_i32.done) break;
          _ref29 = _i32.value;
        }

        var file = _ref29;

        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
      }
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      for (var _iterator31 = files, _isArray31 = true, _i33 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();;) {
        var _ref30;

        if (_isArray31) {
          if (_i33 >= _iterator31.length) break;
          _ref30 = _iterator31[_i33++];
        } else {
          _i33 = _iterator31.next();
          if (_i33.done) break;
          _ref30 = _i33.value;
        }

        var file = _ref30;

        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      for (var _iterator32 = files, _isArray32 = true, _i34 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();;) {
        var _ref31;

        if (_isArray32) {
          if (_i34 >= _iterator32.length) break;
          _ref31 = _iterator32[_i34++];
        } else {
          _i34 = _iterator32.next();
          if (_i34.done) break;
          _ref31 = _i34.value;
        }

        var file = _ref31;

        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();

Dropzone.version = "5.5.1";

// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
Dropzone.options = {};

// Returns the options for an element or undefined if none available.
Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
};

// Holds a list of all dropzone instances
Dropzone.instances = [];

// Returns the dropzone for given element if any
Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }
  return element.dropzone;
};

// Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.
Dropzone.autoDiscover = true;

// Looks for all .dropzone elements and creates a dropzone for them
Dropzone.discover = function () {
  var dropzones = void 0;
  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = [];
    // IE :(
    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];
        for (var _iterator33 = elements, _isArray33 = true, _i35 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();;) {
          var _ref32;

          if (_isArray33) {
            if (_i35 >= _iterator33.length) break;
            _ref32 = _iterator33[_i35++];
          } else {
            _i35 = _iterator33.next();
            if (_i35.done) break;
            _ref32 = _i35.value;
          }

          var el = _ref32;

          if (/(^| )dropzone($| )/.test(el.className)) {
            result.push(dropzones.push(el));
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    };
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];
    for (var _iterator34 = dropzones, _isArray34 = true, _i36 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();;) {
      var _ref33;

      if (_isArray34) {
        if (_i36 >= _iterator34.length) break;
        _ref33 = _iterator34[_i36++];
      } else {
        _i36 = _iterator34.next();
        if (_i36.done) break;
        _ref33 = _i36.value;
      }

      var dropzone = _ref33;

      // Create a dropzone unless auto discover has been disabled for specific element
      if (Dropzone.optionsForElement(dropzone) !== false) {
        result.push(new Dropzone(dropzone));
      } else {
        result.push(undefined);
      }
    }
    return result;
  }();
};

// Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//
Dropzone.blacklistedBrowsers = [
// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i];

// Checks if the browser is supported
Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      for (var _iterator35 = Dropzone.blacklistedBrowsers, _isArray35 = true, _i37 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();;) {
        var _ref34;

        if (_isArray35) {
          if (_i37 >= _iterator35.length) break;
          _ref34 = _iterator35[_i37++];
        } else {
          _i37 = _iterator35.next();
          if (_i37.done) break;
          _ref34 = _i37.value;
        }

        var regex = _ref34;

        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob
  return new Blob([ab], { type: mimeString });
};

// Returns an array without the rejected item
var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
};

// abc-def_ghi -> abcDefGhi
var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
};

// Creates an element from string
Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};

// Tests if given element is inside (or simply is) the container
Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops
  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }
  return false;
};

Dropzone.getElement = function (el, name) {
  var element = void 0;
  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }
  if (element == null) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
  }
  return element;
};

Dropzone.getElements = function (els, name) {
  var el = void 0,
      elements = void 0;
  if (els instanceof Array) {
    elements = [];
    try {
      for (var _iterator36 = els, _isArray36 = true, _i38 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();;) {
        if (_isArray36) {
          if (_i38 >= _iterator36.length) break;
          el = _iterator36[_i38++];
        } else {
          _i38 = _iterator36.next();
          if (_i38.done) break;
          el = _i38.value;
        }

        elements.push(this.getElement(el, name));
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    for (var _iterator37 = document.querySelectorAll(els), _isArray37 = true, _i39 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();;) {
      if (_isArray37) {
        if (_i39 >= _iterator37.length) break;
        el = _iterator37[_i39++];
      } else {
        _i39 = _iterator37.next();
        if (_i39.done) break;
        el = _i39.value;
      }

      elements.push(el);
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
  }

  return elements;
};

// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
};

// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK
  acceptedFiles = acceptedFiles.split(",");

  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  for (var _iterator38 = acceptedFiles, _isArray38 = true, _i40 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
    var _ref35;

    if (_isArray38) {
      if (_i40 >= _iterator38.length) break;
      _ref35 = _iterator38[_i40++];
    } else {
      _i40 = _iterator38.next();
      if (_i40.done) break;
      _ref35 = _i40.value;
    }

    var validType = _ref35;

    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(validType)) {
      // This is something like a image/* mime type
      if (baseMimeType === validType.replace(/\/.*$/, "")) {
        return true;
      }
    } else {
      if (mimeType === validType) {
        return true;
      }
    }
  }

  return false;
};

// Augment jQuery
if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if ( true && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
}

// Dropzone file status codes
Dropzone.ADDED = "added";

Dropzone.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
Dropzone.ACCEPTED = Dropzone.QUEUED;

Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";

/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */

// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data;

  // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }
  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
};

// A replacement for context.drawImage
// (args are for source and destination).
var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};

// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html

var ExifRestore = function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64," + this.encode64(image);
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];
      while (true) {
        var length;
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = [];
      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();

/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */

// @win window reference
// @fn function reference
var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";
  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }
    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }
    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}
      if (top) {
        poll();
      }
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
};

// As a single function to be able to write tests.
Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};
contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}
function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mobius1-selectr/dist/selectr.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobius1-selectr/dist/selectr.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Selectr 2.4.13
 http://mobius.ovh/docs/selectr

 Released under the MIT license
*/
(function(g,k){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (k),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(this,function(g){function k(a,c){return a.hasOwnProperty(c)&&(!0===a[c]||a[c].length)}function n(a,c,e){a.parentNode?a.parentNode.parentNode||c.appendChild(a.parentNode):c.appendChild(a);b.removeClass(a,"excluded");e||(a.innerHTML=a.textContent)}var l=function(){};l.prototype={on:function(a,c){this._events=this._events||{};this._events[a]=this._events[a]||
[];this._events[a].push(c)},off:function(a,c){this._events=this._events||{};!1!==a in this._events&&this._events[a].splice(this._events[a].indexOf(c),1)},emit:function(a){this._events=this._events||{};if(!1!==a in this._events)for(var c=0;c<this._events[a].length;c++)this._events[a][c].apply(this,Array.prototype.slice.call(arguments,1))}};l.mixin=function(a){for(var c=["on","off","emit"],b=0;b<c.length;b++)"function"===typeof a?a.prototype[c[b]]=l.prototype[c[b]]:a[c[b]]=l.prototype[c[b]];return a};
var b={extend:function(a,c){for(var e in c)if(c.hasOwnProperty(e)){var d=c[e];d&&"[object Object]"===Object.prototype.toString.call(d)?(a[e]=a[e]||{},b.extend(a[e],d)):a[e]=d}return a},each:function(a,c,b){if("[object Object]"===Object.prototype.toString.call(a))for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&c.call(b,d,a[d],a);else{d=0;for(var e=a.length;d<e;d++)c.call(b,d,a[d],a)}},createElement:function(a,c){var b=document,d=b.createElement(a);if(c&&"[object Object]"===Object.prototype.toString.call(c))for(var f in c)if(f in
d)d[f]=c[f];else if("html"===f)d.innerHTML=c[f];else if("text"===f){var h=b.createTextNode(c[f]);d.appendChild(h)}else d.setAttribute(f,c[f]);return d},hasClass:function(a,b){if(a)return a.classList?a.classList.contains(b):!!a.className&&!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))},addClass:function(a,c){b.hasClass(a,c)||(a.classList?a.classList.add(c):a.className=a.className.trim()+" "+c)},removeClass:function(a,c){b.hasClass(a,c)&&(a.classList?a.classList.remove(c):a.className=a.className.replace(new RegExp("(^|\\s)"+
c.split(" ").join("|")+"(\\s|$)","gi")," "))},closest:function(a,c){return a&&a!==document.body&&(c(a)?a:b.closest(a.parentNode,c))},isInt:function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a},debounce:function(a,b,e){var d;return function(){var c=this,h=arguments,g=e&&!d;clearTimeout(d);d=setTimeout(function(){d=null;e||a.apply(c,h)},b);g&&a.apply(c,h)}},rect:function(a,b){var c=window,d=a.getBoundingClientRect(),f=b?c.pageXOffset:0;c=b?c.pageYOffset:0;return{bottom:d.bottom+c,height:d.height,
left:d.left+f,right:d.right+f,top:d.top+c,width:d.width}},includes:function(a,b){return-1<a.indexOf(b)},startsWith:function(a,b){return a.substr(0,b.length)===b},truncate:function(a){for(;a.firstChild;)a.removeChild(a.firstChild)}},p=function(){if(this.items.length){var a=document.createDocumentFragment();if(this.config.pagination){var c=this.pages.slice(0,this.pageIndex);b.each(c,function(c,d){b.each(d,function(d,b){n(b,a,this.customOption)},this)},this)}else b.each(this.items,function(b,d){n(d,
a,this.customOption)},this);a.childElementCount&&(b.removeClass(this.items[this.navIndex],"active"),this.navIndex=(a.querySelector(".selectr-option.selected")||a.querySelector(".selectr-option")).idx,b.addClass(this.items[this.navIndex],"active"));this.tree.appendChild(a)}},t=function(a){this.container.contains(a.target)||!this.opened&&!b.hasClass(this.container,"notice")||this.close()},m=function(a,c){var e=this.customOption?this.config.renderOption(c||a):a.textContent;e=b.createElement("li",{"class":"selectr-option",
html:e,role:"treeitem","aria-selected":!1});e.idx=a.idx;this.items.push(e);a.defaultSelected&&this.defaultSelected.push(a.idx);a.disabled&&(e.disabled=!0,b.addClass(e,"disabled"));return e},u=function(){this.requiresPagination=this.config.pagination&&0<this.config.pagination;k(this.config,"width")&&(b.isInt(this.config.width)?this.width=this.config.width+"px":"auto"===this.config.width?this.width="100%":b.includes(this.config.width,"%")&&(this.width=this.config.width));this.container=b.createElement("div",
{"class":"selectr-container"});this.config.customClass&&b.addClass(this.container,this.config.customClass);this.mobileDevice?b.addClass(this.container,"selectr-mobile"):b.addClass(this.container,"selectr-desktop");this.el.tabIndex=-1;this.config.nativeDropdown||this.mobileDevice?b.addClass(this.el,"selectr-visible"):b.addClass(this.el,"selectr-hidden");this.selected=b.createElement("div",{"class":"selectr-selected",disabled:this.disabled,tabIndex:0,"aria-expanded":!1});this.label=b.createElement(this.el.multiple?
"ul":"span",{"class":"selectr-label"});var a=b.createElement("div",{"class":"selectr-options-container"});this.tree=b.createElement("ul",{"class":"selectr-options",role:"tree","aria-hidden":!0,"aria-expanded":!1});this.notice=b.createElement("div",{"class":"selectr-notice"});this.el.setAttribute("aria-hidden",!0);this.disabled&&(this.el.disabled=!0);this.el.multiple&&(b.addClass(this.label,"selectr-tags"),b.addClass(this.container,"multiple"),this.tags=[],this.selectedValues=this.getSelectedProperties("value"),
this.selectedIndexes=this.getSelectedProperties("idx"));this.selected.appendChild(this.label);this.config.clearable&&(this.selectClear=b.createElement("button",{"class":"selectr-clear",type:"button"}),this.container.appendChild(this.selectClear),b.addClass(this.container,"clearable"));if(this.config.taggable){var c=b.createElement("li",{"class":"input-tag"});this.input=b.createElement("input",{"class":"selectr-tag-input",placeholder:this.config.tagPlaceholder,tagIndex:0,autocomplete:"off",autocorrect:"off",
autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"});c.appendChild(this.input);this.label.appendChild(c);b.addClass(this.container,"taggable");this.tagSeperators=[","];this.config.tagSeperators&&(this.tagSeperators=this.tagSeperators.concat(this.config.tagSeperators))}this.config.searchable&&(this.input=b.createElement("input",{"class":"selectr-input",tagIndex:-1,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"}),this.inputClear=
b.createElement("button",{"class":"selectr-input-clear",type:"button"}),this.inputContainer=b.createElement("div",{"class":"selectr-input-container"}),this.inputContainer.appendChild(this.input),this.inputContainer.appendChild(this.inputClear),a.appendChild(this.inputContainer));a.appendChild(this.notice);a.appendChild(this.tree);this.items=[];this.options=[];this.el.options.length&&(this.options=[].slice.call(this.el.options));var e=!1,d=0;this.el.children.length&&b.each(this.el.children,function(a,
c){"OPTGROUP"===c.nodeName?(e=b.createElement("ul",{"class":"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+c.label+"</li>"}),b.each(c.children,function(a,b){b.idx=d;e.appendChild(m.call(this,b,e));d++},this)):(c.idx=d,m.call(this,c),d++)},this);if(this.config.data&&Array.isArray(this.config.data)){this.data=[];var f=!1,h;e=!1;d=0;b.each(this.config.data,function(a,c){k(c,"children")?(f=b.createElement("optgroup",{label:c.text}),e=b.createElement("ul",{"class":"selectr-optgroup",
role:"group",html:"<li class='selectr-optgroup--label'>"+c.text+"</li>"}),b.each(c.children,function(a,b){h=new Option(b.text,b.value,!1,b.hasOwnProperty("selected")&&!0===b.selected);h.disabled=k(b,"disabled");this.options.push(h);f.appendChild(h);h.idx=d;e.appendChild(m.call(this,h,b));this.data[d]=b;d++},this),this.el.appendChild(f)):(h=new Option(c.text,c.value,!1,c.hasOwnProperty("selected")&&!0===c.selected),h.disabled=k(c,"disabled"),this.options.push(h),h.idx=d,m.call(this,h,c),this.data[d]=
c,d++)},this)}this.setSelected(!0);for(var g=this.navIndex=0;g<this.items.length;g++)if(c=this.items[g],!b.hasClass(c,"disabled")){b.addClass(c,"active");this.navIndex=g;break}this.requiresPagination&&(this.pageIndex=1,this.paginate());this.container.appendChild(this.selected);this.container.appendChild(a);this.placeEl=b.createElement("div",{"class":"selectr-placeholder"});this.setPlaceholder();this.selected.appendChild(this.placeEl);this.disabled&&this.disable();this.el.parentNode.insertBefore(this.container,
this.el);this.container.appendChild(this.el)},v=function(a){a=a||window.event;if(this.items.length&&this.opened&&b.includes([13,38,40],a.which)){a.preventDefault();if(13===a.which)return this.noResults||this.config.taggable&&0<this.input.value.length?!1:this.change(this.navIndex);var c=this.items[this.navIndex],e=this.navIndex;switch(a.which){case 38:var d=0;0<this.navIndex&&this.navIndex--;break;case 40:d=1,this.navIndex<this.items.length-1&&this.navIndex++}for(this.navigating=!0;b.hasClass(this.items[this.navIndex],
"disabled")||b.hasClass(this.items[this.navIndex],"excluded");){if(0<this.navIndex&&this.navIndex<this.items.length-1)d?this.navIndex++:this.navIndex--;else{this.navIndex=e;break}if(this.searching)if(this.navIndex>this.tree.lastElementChild.idx){this.navIndex=this.tree.lastElementChild.idx;break}else if(this.navIndex<this.tree.firstElementChild.idx){this.navIndex=this.tree.firstElementChild.idx;break}}a=b.rect(this.items[this.navIndex]);d?(0===this.navIndex?this.tree.scrollTop=0:a.top+a.height>this.optsRect.top+
this.optsRect.height&&(this.tree.scrollTop+=a.top+a.height-(this.optsRect.top+this.optsRect.height)),this.navIndex===this.tree.childElementCount-1&&this.requiresPagination&&r.call(this)):0===this.navIndex?this.tree.scrollTop=0:0>a.top-this.optsRect.top&&(this.tree.scrollTop+=a.top-this.optsRect.top);c&&b.removeClass(c,"active");b.addClass(this.items[this.navIndex],"active")}else this.navigating=!1},w=function(a){var c=this,e=document.createDocumentFragment(),d=this.options[a.idx],f=this.data?this.data[a.idx]:
d;f=this.customSelected?this.config.renderSelection(f):d.textContent;f=b.createElement("li",{"class":"selectr-tag",html:f});var h=b.createElement("button",{"class":"selectr-tag-remove",type:"button"});f.appendChild(h);f.idx=a.idx;f.tag=d.value;this.tags.push(f);if(this.config.sortSelected){a=this.tags.slice();var g=function(a,b){a.replace(/(\d+)|(\D+)/g,function(a,d,c){b.push([d||Infinity,c||""])})};a.sort(function(a,b){var d=[],e=[];if(!0===c.config.sortSelected){var f=a.tag;var h=b.tag}else"text"===
c.config.sortSelected&&(f=a.textContent,h=b.textContent);g(f,d);for(g(h,e);d.length&&e.length;)if(f=d.shift(),h=e.shift(),f=f[0]-h[0]||f[1].localeCompare(h[1]))return f;return d.length-e.length});b.each(a,function(a,b){e.appendChild(b)});this.label.innerHTML=""}else e.appendChild(f);this.config.taggable?this.label.insertBefore(e,this.input.parentNode):this.label.appendChild(e)},x=function(a){var c=!1;b.each(this.tags,function(b,d){d.idx===a.idx&&(c=d)},this);c&&(this.label.removeChild(c),this.tags.splice(this.tags.indexOf(c),
1))},r=function(){var a=this.tree;if(a.scrollTop>=a.scrollHeight-a.offsetHeight&&this.pageIndex<this.pages.length){var c=document.createDocumentFragment();b.each(this.pages[this.pageIndex],function(a,b){n(b,c,this.customOption)},this);a.appendChild(c);this.pageIndex++;this.emit("selectr.paginate",{items:this.items.length,total:this.data.length,page:this.pageIndex,pages:this.pages.length})}},q=function(){if(this.config.searchable||this.config.taggable)this.input.value=null,this.searching=!1,this.config.searchable&&
b.removeClass(this.inputContainer,"active"),b.hasClass(this.container,"notice")&&(b.removeClass(this.container,"notice"),b.addClass(this.container,"open"),this.input.focus()),b.each(this.items,function(a,c){b.removeClass(c,"excluded");this.customOption||(c.innerHTML=c.textContent)},this)};g=function(a,b){this.defaultConfig={defaultSelected:!0,width:"auto",disabled:!1,searchable:!0,clearable:!1,sortSelected:!1,allowDeselect:!1,closeOnScroll:!1,nativeDropdown:!1,nativeKeyboard:!1,placeholder:"Select an option...",
taggable:!1,tagPlaceholder:"Enter a tag...",messages:{noResults:"No results.",noOptions:"No options available.",maxSelections:"A maximum of {max} items can be selected.",tagDuplicate:"That tag is already in use."}};if(!a)throw Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");this.el=a;"string"===typeof a&&(this.el=document.querySelector(a));if(null===this.el)throw Error("The element you passed to Selectr can not be found.");if("select"!==this.el.nodeName.toLowerCase())throw Error("The element you passed to Selectr is not a HTMLSelectElement.");
this.render(b)};g.prototype.render=function(a){if(!this.rendered){this.el.selectr=this;this.config=b.extend(this.defaultConfig,a);this.originalType=this.el.type;this.originalIndex=this.el.tabIndex;this.defaultSelected=[];this.originalOptionCount=this.el.options.length;if(this.config.multiple||this.config.taggable)this.el.multiple=!0;this.disabled=k(this.config,"disabled");this.opened=!1;this.config.taggable&&(this.config.searchable=!1);this.mobileDevice=this.navigating=!1;/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)&&
(this.mobileDevice=!0);this.customOption=this.config.hasOwnProperty("renderOption")&&"function"===typeof this.config.renderOption;this.customSelected=this.config.hasOwnProperty("renderSelection")&&"function"===typeof this.config.renderSelection;this.supportsEventPassiveOption=this.detectEventPassiveOption();l.mixin(this);u.call(this);this.bindEvents();this.update();this.optsRect=b.rect(this.tree);this.rendered=!0;this.el.multiple||(this.el.selectedIndex=this.selectedIndex);var c=this;setTimeout(function(){c.emit("selectr.init")},
20)}};g.prototype.getSelected=function(){return this.el.querySelectorAll("option:checked")};g.prototype.getSelectedProperties=function(a){var b=this.getSelected();return[].slice.call(b).map(function(b){return b[a]}).filter(function(a){return null!==a&&void 0!==a})};g.prototype.detectEventPassiveOption=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,b)}catch(e){}return a};g.prototype.bindEvents=function(){var a=this;this.events=
{};this.events.dismiss=t.bind(this);this.events.navigate=v.bind(this);this.events.reset=this.reset.bind(this);if(this.config.nativeDropdown||this.mobileDevice){this.container.addEventListener("touchstart",function(b){b.changedTouches[0].target===a.el&&a.toggle()},this.supportsEventPassiveOption?{passive:!0}:!1);this.container.addEventListener("click",function(b){b.target===a.el&&a.toggle()});var c=function(a,b){for(var d=[],c=a.slice(0),e,f=0;f<b.length;f++)e=c.indexOf(b[f]),-1<e?c.splice(e,1):d.push(b[f]);
return[d,c]};this.el.addEventListener("change",function(d){a.el.multiple?(d=a.getSelectedProperties("idx"),d=c(a.selectedIndexes,d),b.each(d[0],function(b,d){a.select(d)},a),b.each(d[1],function(b,d){a.deselect(d)},a)):-1<a.el.selectedIndex&&a.select(a.el.selectedIndex)})}this.container.addEventListener("keydown",function(b){"Escape"===b.key&&a.close();"Enter"===b.key&&a.selected===document.activeElement&&"undefined"!==typeof a.el.form.submit&&a.el.form.submit();" "!==b.key&&"ArrowUp"!==b.key&&"ArrowDown"!==
b.key||a.selected!==document.activeElement||(setTimeout(function(){a.toggle()},200),a.config.nativeDropdown&&setTimeout(function(){a.el.focus()},200))});this.selected.addEventListener("click",function(b){a.disabled||a.toggle();b.preventDefault()});if(this.config.nativeKeyboard){var e="";this.selected.addEventListener("keydown",function(b){if(!(a.disabled||a.selected!==document.activeElement||b.altKey||b.ctrlKey||b.metaKey))if(" "===b.key||!a.opened&&-1<["Enter","ArrowUp","ArrowDown"].indexOf(b.key))a.toggle(),
b.preventDefault(),b.stopPropagation();else if(2>=b.key.length&&String[String.fromCodePoint?"fromCodePoint":"fromCharCode"](b.key[String.codePointAt?"codePointAt":"charCodeAt"](0))===b.key){if(a.config.multiple)a.open(),a.config.searchable&&(a.input.value=b.key,a.input.focus(),a.search(null,!0));else{e+=b.key;var c=a.search(e,!0);c&&c.length&&(a.clear(),a.setValue(c[0].value));setTimeout(function(){e=""},1E3)}b.preventDefault();b.stopPropagation()}});this.container.addEventListener("keyup",function(b){a.opened&&
"Escape"===b.key&&(a.close(),b.stopPropagation(),a.selected.focus())})}this.label.addEventListener("click",function(c){b.hasClass(c.target,"selectr-tag-remove")&&a.deselect(c.target.parentNode.idx)});this.selectClear&&this.selectClear.addEventListener("click",this.clear.bind(this));this.tree.addEventListener("mousedown",function(a){a.preventDefault()});this.tree.addEventListener("click",function(c){var d=b.closest(c.target,function(a){return a&&b.hasClass(a,"selectr-option")});d&&!b.hasClass(d,"disabled")&&
(b.hasClass(d,"selected")?(a.el.multiple||!a.el.multiple&&a.config.allowDeselect)&&a.deselect(d.idx):a.select(d.idx),a.opened&&!a.el.multiple&&a.close());c.preventDefault();c.stopPropagation()});this.tree.addEventListener("mouseover",function(c){b.hasClass(c.target,"selectr-option")&&!b.hasClass(c.target,"disabled")&&(b.removeClass(a.items[a.navIndex],"active"),b.addClass(c.target,"active"),a.navIndex=[].slice.call(a.items).indexOf(c.target))});this.config.searchable&&(this.input.addEventListener("focus",
function(b){a.searching=!0}),this.input.addEventListener("blur",function(b){a.searching=!1}),this.input.addEventListener("keyup",function(c){a.search();a.config.taggable||(this.value.length?b.addClass(this.parentNode,"active"):b.removeClass(this.parentNode,"active"))}),this.inputClear.addEventListener("click",function(b){a.input.value=null;q.call(a);a.tree.childElementCount||p.call(a)}));this.config.taggable&&this.input.addEventListener("keyup",function(c){a.search();if(a.config.taggable&&this.value.length){var d=
this.value.trim();if(13===c.which||b.includes(a.tagSeperators,c.key))b.each(a.tagSeperators,function(a,b){d=d.replace(b,"")}),a.add({value:d,text:d,selected:!0},!0)?(a.close(),q.call(a)):(this.value="",a.setMessage(a.config.messages.tagDuplicate))}});this.update=b.debounce(function(){a.opened&&a.config.closeOnScroll&&a.close();a.width&&(a.container.style.width=a.width);a.invert()},50);this.requiresPagination&&(this.paginateItems=b.debounce(function(){r.call(this)},50),this.tree.addEventListener("scroll",
this.paginateItems.bind(this)));document.addEventListener("click",this.events.dismiss);window.addEventListener("keydown",this.events.navigate);window.addEventListener("resize",this.update);window.addEventListener("scroll",this.update);this.on("selectr.destroy",function(){document.removeEventListener("click",this.events.dismiss);window.removeEventListener("keydown",this.events.navigate);window.removeEventListener("resize",this.update);window.removeEventListener("scroll",this.update)});this.el.form&&
(this.el.form.addEventListener("reset",this.events.reset),this.on("selectr.destroy",function(){this.el.form.removeEventListener("reset",this.events.reset)}))};g.prototype.setSelected=function(a){this.config.data||this.el.multiple||!this.el.options.length||(0!==this.el.selectedIndex||this.el.options[0].defaultSelected||this.config.defaultSelected||(this.el.selectedIndex=-1),this.selectedIndex=this.el.selectedIndex,-1<this.selectedIndex&&this.select(this.selectedIndex));this.config.multiple&&"select-one"===
this.originalType&&!this.config.data&&this.el.options[0].selected&&!this.el.options[0].defaultSelected&&(this.el.options[0].selected=!1);b.each(this.options,function(a,b){b.selected&&b.defaultSelected&&this.select(b.idx)},this);this.config.selectedValue&&this.setValue(this.config.selectedValue);if(this.config.data){!this.el.multiple&&this.config.defaultSelected&&0>this.el.selectedIndex&&this.select(0);var c=0;b.each(this.config.data,function(a,d){k(d,"children")?b.each(d.children,function(a,b){b.hasOwnProperty("selected")&&
!0===b.selected&&this.select(c);c++},this):(d.hasOwnProperty("selected")&&!0===d.selected&&this.select(c),c++)},this)}};g.prototype.destroy=function(){this.rendered&&(this.emit("selectr.destroy"),"select-one"===this.originalType&&(this.el.multiple=!1),this.config.data&&(this.el.innerHTML=""),b.removeClass(this.el,"selectr-hidden"),this.container.parentNode.replaceChild(this.el,this.container),this.rendered=!1,delete this.el.selectr)};g.prototype.change=function(a){var c=this.items[a],e=this.options[a];
e.disabled||(e.selected&&b.hasClass(c,"selected")?this.deselect(a):this.select(a),this.opened&&!this.el.multiple&&this.close())};g.prototype.select=function(a){var c=this.items[a],e=[].slice.call(this.el.options),d=this.options[a];if(this.el.multiple){if(b.includes(this.selectedIndexes,a))return!1;if(this.config.maxSelections&&this.tags.length===this.config.maxSelections)return this.setMessage(this.config.messages.maxSelections.replace("{max}",this.config.maxSelections),!0),!1;this.selectedValues.push(d.value);
this.selectedIndexes.push(a);w.call(this,c)}else{var f=this.data?this.data[a]:d;this.label.innerHTML=this.customSelected?this.config.renderSelection(f):d.textContent;this.selectedValue=d.value;this.selectedIndex=a;b.each(this.options,function(c,d){var e=this.items[c];c!==a&&(e&&b.removeClass(e,"selected"),d.selected=!1,d.removeAttribute("selected"))},this)}b.includes(e,d)||this.el.add(d);c.setAttribute("aria-selected",!0);b.addClass(c,"selected");b.addClass(this.container,"has-selected");d.selected=
!0;d.setAttribute("selected","");this.emit("selectr.change",d);this.emit("selectr.select",d);"createEvent"in document?(c=document.createEvent("HTMLEvents"),c.initEvent("change",!0,!0),this.el.dispatchEvent(c)):this.el.fireEvent("onchange")};g.prototype.deselect=function(a,c){var e=this.items[a],d=this.options[a];if(this.el.multiple){var f=this.selectedIndexes.indexOf(a);this.selectedIndexes.splice(f,1);f=this.selectedValues.indexOf(d.value);this.selectedValues.splice(f,1);x.call(this,e);this.tags.length||
b.removeClass(this.container,"has-selected")}else{if(!c&&!this.config.clearable&&!this.config.allowDeselect)return!1;this.label.innerHTML="";this.selectedValue=null;this.el.selectedIndex=this.selectedIndex=-1;b.removeClass(this.container,"has-selected")}this.items[a].setAttribute("aria-selected",!1);b.removeClass(this.items[a],"selected");d.selected=!1;d.removeAttribute("selected");this.emit("selectr.change",null);this.emit("selectr.deselect",d);"createEvent"in document?(e=document.createEvent("HTMLEvents"),
e.initEvent("change",!0,!0),this.el.dispatchEvent(e)):this.el.fireEvent("onchange")};g.prototype.setValue=function(a){var c=Array.isArray(a);c||(a=a.toString().trim());if(!this.el.multiple&&c)return!1;b.each(this.options,function(b,d){(c&&-1<a.indexOf(d.value)||d.value===a)&&this.change(d.idx)},this)};g.prototype.getValue=function(a,c){if(this.el.multiple)if(a){if(this.selectedIndexes.length){var e={values:[]};b.each(this.selectedIndexes,function(a,b){var c=this.options[b];e.values[a]={value:c.value,
text:c.textContent}},this)}}else e=this.selectedValues.slice();else if(a){var d=this.options[this.selectedIndex];e={value:d.value,text:d.textContent}}else e=this.selectedValue;a&&c&&(e=JSON.stringify(e));return e};g.prototype.add=function(a,c){if(a){this.data=this.data||[];this.items=this.items||[];this.options=this.options||[];if(Array.isArray(a))b.each(a,function(a,b){this.add(b,c)},this);else if("[object Object]"===Object.prototype.toString.call(a)){if(c){var e=!1;b.each(this.options,function(b,
c){c.value.toLowerCase()===a.value.toLowerCase()&&(e=!0)});if(e)return!1}var d=b.createElement("option",a);this.data.push(a);this.options.push(d);d.idx=0<this.options.length?this.options.length-1:0;m.call(this,d);a.selected&&this.select(d.idx);this.setPlaceholder();return d}this.config.pagination&&this.paginate();return!0}};g.prototype.remove=function(a){var c=[];Array.isArray(a)?b.each(a,function(a,e){b.isInt(e)?c.push(this.getOptionByIndex(e)):"string"===typeof e&&c.push(this.getOptionByValue(e))},
this):b.isInt(a)?c.push(this.getOptionByIndex(a)):"string"===typeof a&&c.push(this.getOptionByValue(a));if(c.length){var e;b.each(c,function(a,c){e=c.idx;this.el.remove(c);this.options.splice(e,1);var d=this.items[e].parentNode;d&&d.removeChild(this.items[e]);this.items.splice(e,1);b.each(this.options,function(a,b){b.idx=a;this.items[a].idx=a},this)},this);this.setPlaceholder();this.config.pagination&&this.paginate()}};g.prototype.removeAll=function(){this.clear(!0);b.each(this.el.options,function(a,
b){this.el.remove(b)},this);b.truncate(this.tree);this.items=[];this.options=[];this.data=[];this.navIndex=0;this.requiresPagination&&(this.requiresPagination=!1,this.pageIndex=1,this.pages=[]);this.setPlaceholder()};g.prototype.search=function(a,c){if(!this.navigating){var e=!1;a||(a=this.input.value,e=!0,this.removeMessage(),b.truncate(this.tree));var d=[],f=document.createDocumentFragment();a=a.trim().toLowerCase();if(0<a.length){var g=c?b.startsWith:b.includes;b.each(this.options,function(c,h){var k=
this.items[h.idx];if(g(h.textContent.trim().toLowerCase(),a)&&!h.disabled){if(d.push({text:h.textContent,value:h.value}),e&&(n(k,f,this.customOption),b.removeClass(k,"excluded"),!this.customOption)){var l=(l=(new RegExp(a,"i")).exec(h.textContent))?h.textContent.replace(l[0],"<span class='selectr-match'>"+l[0]+"</span>"):!1;k.innerHTML=l}}else e&&b.addClass(k,"excluded")},this);if(e){if(f.childElementCount){var k=this.items[this.navIndex],l=f.querySelector(".selectr-option:not(.excluded)");this.noResults=
!1;b.removeClass(k,"active");this.navIndex=l.idx;b.addClass(l,"active")}else this.config.taggable||(this.noResults=!0,this.setMessage(this.config.messages.noResults));this.tree.appendChild(f)}}else p.call(this);return d}};g.prototype.toggle=function(){this.disabled||(this.opened?this.close():this.open())};g.prototype.open=function(){var a=this;if(!this.options.length)return!1;this.opened||this.emit("selectr.open");this.opened=!0;this.mobileDevice||this.config.nativeDropdown?(b.addClass(this.container,
"native-open"),this.config.data&&b.each(this.options,function(a,b){this.el.add(b)},this)):(b.addClass(this.container,"open"),p.call(this),this.invert(),this.tree.scrollTop=0,b.removeClass(this.container,"notice"),this.selected.setAttribute("aria-expanded",!0),this.tree.setAttribute("aria-hidden",!1),this.tree.setAttribute("aria-expanded",!0),this.config.searchable&&!this.config.taggable&&setTimeout(function(){a.input.focus();a.input.tabIndex=0},10))};g.prototype.close=function(){this.opened&&this.emit("selectr.close");
this.navigating=this.opened=!1;if(this.mobileDevice||this.config.nativeDropdown)b.removeClass(this.container,"native-open");else{var a=b.hasClass(this.container,"notice");this.config.searchable&&!a&&(this.input.blur(),this.input.tabIndex=-1,this.searching=!1);a&&(b.removeClass(this.container,"notice"),this.notice.textContent="");b.removeClass(this.container,"open");b.removeClass(this.container,"native-open");this.selected.setAttribute("aria-expanded",!1);this.tree.setAttribute("aria-hidden",!0);this.tree.setAttribute("aria-expanded",
!1);b.truncate(this.tree);q.call(this);this.selected.focus()}};g.prototype.enable=function(){this.disabled=!1;this.el.disabled=!1;this.selected.tabIndex=this.originalIndex;this.el.multiple&&b.each(this.tags,function(a,b){b.lastElementChild.tabIndex=0});b.removeClass(this.container,"selectr-disabled")};g.prototype.disable=function(a){a||(this.el.disabled=!0);this.selected.tabIndex=-1;this.el.multiple&&b.each(this.tags,function(a,b){b.lastElementChild.tabIndex=-1});this.disabled=!0;b.addClass(this.container,
"selectr-disabled")};g.prototype.reset=function(){this.disabled||(this.clear(),this.setSelected(!0),b.each(this.defaultSelected,function(a,b){this.select(b)},this),this.emit("selectr.reset"))};g.prototype.clear=function(a){this.el.multiple?this.selectedIndexes.length&&(a=this.selectedIndexes.slice(),b.each(a,function(a,b){this.deselect(b)},this)):-1<this.selectedIndex&&this.deselect(this.selectedIndex,a);this.emit("selectr.clear")};g.prototype.serialise=function(a){var c=[];b.each(this.options,function(a,
b){var d={value:b.value,text:b.textContent};b.selected&&(d.selected=!0);b.disabled&&(d.disabled=!0);c[a]=d});return a?JSON.stringify(c):c};g.prototype.serialize=function(a){return this.serialise(a)};g.prototype.setPlaceholder=function(a){a=a||this.config.placeholder||this.el.getAttribute("placeholder");this.options.length||(a=this.config.messages.noOptions);this.placeEl.innerHTML=a};g.prototype.paginate=function(){if(this.items.length){var a=this;return this.pages=this.items.map(function(b,e){return 0===
e%a.config.pagination?a.items.slice(e,e+a.config.pagination):null}).filter(function(a){return a})}};g.prototype.setMessage=function(a,c){c&&this.close();b.addClass(this.container,"notice");this.notice.textContent=a};g.prototype.removeMessage=function(){b.removeClass(this.container,"notice");this.notice.innerHTML=""};g.prototype.invert=function(){var a=b.rect(this.selected);a.top+a.height+this.tree.parentNode.offsetHeight>window.innerHeight?(b.addClass(this.container,"inverted"),this.isInverted=!0):
(b.removeClass(this.container,"inverted"),this.isInverted=!1);this.optsRect=b.rect(this.tree)};g.prototype.getOptionByIndex=function(a){return this.options[a]};g.prototype.getOptionByValue=function(a){for(var b=!1,e=0,d=this.options.length;e<d;e++)if(this.options[e].value.trim()===a.toString().trim()){b=this.options[e];break}return b};return g});

/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '11.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	function isSet ( value ) {
		return value !== null && value !== undefined;
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct );
		var a = xPct[j-1];
		var b = xPct[j];

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( !Array.isArray(value) ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i+1]], n) / subRangeRatio(that.xPct[i], that.xPct[i+1]);

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index;
		var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) && !Array.isArray(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1])) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( entry === 0 ) {
			return;
		}

		if ( !Array.isArray(entry) ) {
			entry = [entry, entry];
		}

		// 'getMargin' returns false for invalid values.
		parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

		if ( parsed.padding[0] === false || parsed.padding[1] === false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding[0] < 0 || parsed.padding[1] < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
		}

		if ( parsed.padding[0] + parsed.padding[1] >= 100 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: true, t: testCssPrefix },
			'cssClasses': { r: true, t: testCssClasses }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				connects: 'connects',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			}
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( !isSet(options[name]) && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, !isSet(options[name]) ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		// All recent browsers accept unprefixed transform.
		// We need -ms- for IE9 and -webkit- for older Android;
		// Assume use of -webkit- if unprefixed and -ms- are not supported.
		// https://caniuse.com/#feat=transforms2d
		var d = document.createElement("div");
		var msPrefix = d.style.msTransform !== undefined;
		var noPrefix = d.style.transform !== undefined;

		parsed.transformRule = noPrefix ? 'transform' : (msPrefix ? 'msTransform' : 'webkitTransform');

		// Pips don't move, so we can place them using left/top.
		var styles = [['left', 'top'], ['right', 'bottom']];

		parsed.style = styles[parsed.dir][parsed.ort];

		return parsed;
	}


function scope ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'scope' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// For horizontal sliders in standard ltr documents,
	// make .noUi-origin overflow to the left so the document doesn't scroll.
	var scope_DirOffset = (scope_Document.dir === 'rtl') || (options.ort === 1) ? 0 : 100;

/*! In this file: Construction of DOM elements; */

	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( addTarget, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		addTarget.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		var connectBase = addNodeTo(base, options.cssClasses.connects);

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(connectBase, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( addTarget ) {

		// Apply classes and data to the target.
		addClass(addTarget, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(addTarget, options.cssClasses.ltr);
		} else {
			addClass(addTarget, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(addTarget, options.cssClasses.horizontal);
		} else {
			addClass(addTarget, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(addTarget, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( index ){

				var handle = scope_Handles[index];

				var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

				var now = positions[index];
				var text = options.ariaFormat.to(unencoded[index]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( values < 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var interval = values - 1;
			var spread = ( 100 / interval );

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( interval-- ) {
				values[ interval ] = ( interval * spread );
			}

			values.push(100);

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the amount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.setAttribute('data-value', values[0]);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}

/*! In this file: Browser events (not slider events like slide, change); */

	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect();
		var alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			e = fixEvent(e, data.pageOffset, data.target || element);

			// fixEvent returns false if this event has a different target
			// when handling (multi-) touch events;
			if ( !e ) {
				return false;
			}

			// doNotReject is passed by all end events to make sure released touches
			// are not rejected, leaving the slider "stuck" to the cursor;
			if ( scope_Target.hasAttribute('disabled') && !data.doNotReject ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, eventTarget ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch ) {

			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (checkTouch) {
				return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
			};

			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {

				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}

				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;

			} else {

				// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}

				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();

		// Clamp proposal between 0% and 100%
		// Out-of-bound coordinates may occur when .noUi-base pseudo-elements
		// are used (e.g. contained handles feature)
		proposal = limit(proposal);

		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest || (pos === 100 && closest === 100) ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}

/*! In this file: Slider events (not browser events); */

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0];
			var tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}

/*! In this file: Mechanics for slider operation */

	function toPct ( pct ) {
		return pct + '%';
	}

	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding[0]);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding[1]);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	// Uses slider orientation to create CSS rules. a = base value;
	function inRuleOrder ( v, a ) {
		var o = options.ort;
		return (o?a:v) + ', ' + (o?v:a);
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// Takes a base value and an offset. This offset is used for the connect bar size.
	// In the initial design for this feature, the origin element was 1% wide.
	// Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
	// in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
	function transformDirection ( a, b ) {
		return options.dir ? 100 - a - b : a;
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		var rule = 'translate(' + inRuleOrder(toPct(transformDirection(to, 0) - scope_DirOffset), '0') + ')';
		scope_Handles[handleNumber].style[options.transformRule] = rule;

		updateConnect(handleNumber);
		updateConnect(handleNumber + 1);
	}

	// Handles before the slider middle are stacked later = higher,
	// Handles after the middle later is lower
	// [[7] [8] .......... | .......... [5] [4]
	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		// We use two rules:
		// 'translate' to change the left/top offset;
		// 'scale' to change the width of the element;
		// As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
		var connectWidth = h - l;
		var translateRule = 'translate(' + inRuleOrder(toPct(transformDirection(l, connectWidth)), '0') + ')';
		var scaleRule = 'scale(' + inRuleOrder(connectWidth / 100, '1') + ')';

		scope_Connects[index].style[options.transformRule] = translateRule + ' ' + scaleRule;
	}

/*! In this file: All methods eventually exposed in slider.noUiSlider... */

	// Parses value passed to .set method. Returns current value if not parse-able.
	function resolveToValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false || to === undefined ) {
			return scope_Locations[handleNumber];
		}

		// If a formatted number was passed, attempt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);
		to = scope_Spectrum.toStepping(to);

		// If parsing the number failed, use the current value.
		if ( to === false || isNaN(to) ) {
			return scope_Locations[handleNumber];
		}

		return to;
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// First pass, without lookAhead but with lookBackward. Values are set from left to right.
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
		});

		// Second pass. Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, true);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

/*! In this file: Calls to functions. All other scope_ files define functions only; */

	// Create the base element, initialize HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Throw an error if the slider was already initialized.
		if ( target.noUiSlider ) {
			throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = scope( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expandability;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/components/components.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/components/components.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Form elements</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Forms </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Form elements\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col-lg-6\">\n      <div class=\" card-wrapper\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Input groups</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" row\">\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <div class=\" input-group-prepend\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-user\"> </i>\n                        </span>\n                      </div>\n\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Your name\"\n                        type=\"text\"\n                        (focus)=\"focus = true\"\n                        (blur)=\"focus = false\"\n                      />\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus1 === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <div class=\" input-group-prepend\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-envelope\"> </i>\n                        </span>\n                      </div>\n\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Email address\"\n                        type=\"email\"\n                        (focus)=\"focus1 = true\"\n                        (blur)=\"focus1 = false\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" row\">\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus2 === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Location\"\n                        type=\"text\"\n                        (focus)=\"focus2 = true\"\n                        (blur)=\"focus2 = false\"\n                      />\n\n                      <div class=\" input-group-append\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-map-marker\"> </i>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus3 === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Password\"\n                        type=\"password\"\n                        (focus)=\"focus3 = true\"\n                        (blur)=\"focus3 = false\"\n                      />\n\n                      <div class=\" input-group-append\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-eye\"> </i>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" row\">\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus4 === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <div class=\" input-group-prepend\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-credit-card\"> </i>\n                        </span>\n                      </div>\n\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Payment method\"\n                        type=\"text\"\n                        (focus)=\"focus4 = true\"\n                        (blur)=\"focus4 = false\"\n                      />\n\n                      <div class=\" input-group-append\">\n                        <span class=\" input-group-text\">\n                          <small class=\" font-weight-bold\"> USD </small>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-6\">\n                  <div\n                    class=\" form-group\"\n                    [ngClass]=\"{ focused: focus5 === true }\"\n                  >\n                    <div class=\" input-group input-group-merge\">\n                      <div class=\" input-group-prepend\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-globe-americas\"> </i>\n                        </span>\n                      </div>\n\n                      <input\n                        class=\" form-control\"\n                        placeholder=\"Phone number\"\n                        type=\"text\"\n                        (focus)=\"focus5 = true\"\n                        (blur)=\"focus5 = false\"\n                      />\n\n                      <div class=\" input-group-append\">\n                        <span class=\" input-group-text\">\n                          <i class=\" fas fa-phone\"> </i>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Dropdowns</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <select class=\" form-control\" data-toggle=\"select\" id=\"selectr\">\n                <option value=\"alerts\"> Alerts </option>\n\n                <option value=\"badges\"> Badges </option>\n\n                <option value=\"buttons\"> Buttons </option>\n\n                <option value=\"cards\"> Cards </option>\n\n                <option value=\"forms\"> Forms </option>\n\n                <option value=\"modals\"> Modals </option>\n                <option value=\"alerts\"> Alerts </option>\n\n                <option value=\"badges\"> Badges </option>\n\n                <option value=\"buttons\"> Buttons </option>\n\n                <option value=\"cards\"> Cards </option>\n\n                <option value=\"forms\"> Forms </option>\n\n                <option value=\"modals\"> Modals </option>\n                <option value=\"alerts\"> Alerts </option>\n\n                <option value=\"badges\"> Badges </option>\n\n                <option value=\"buttons\"> Buttons </option>\n\n                <option value=\"cards\"> Cards </option>\n\n                <option value=\"forms\"> Forms </option>\n\n                <option value=\"modals\"> Modals </option> </select\n              ><br />\n              <select\n                class=\" form-control\"\n                data-toggle=\"select\"\n                id=\"selectr-multiple\"\n              >\n                <option value=\"alerts\"> Alerts </option>\n\n                <option value=\"badges\"> Badges </option>\n\n                <option value=\"buttons\"> Buttons </option>\n\n                <option value=\"cards\"> Cards </option>\n\n                <option value=\"forms\"> Forms </option>\n\n                <option value=\"modals\"> Modals </option>\n              </select>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Datepicker</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" row\">\n                <div class=\" col-md-6\">\n                  <div class=\" form-group\">\n                    <label class=\" form-control-label\" for=\"exampleDatepicker\">\n                      Datepicker\n                    </label>\n                    <input\n                      type=\"text\"\n                      placeholder=\"Datepicker\"\n                      class=\"form-control\"\n                      bsDatepicker\n                      [bsValue]=\"bsValue\"\n                      [bsConfig]=\"{\n                        isAnimated: true,\n                        containerClass: 'theme-red'\n                      }\"\n                    />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col\">\n                  <div class=\" form-group\">\n                    <label class=\" form-control-label\">\n                      Date Range Picker\n                    </label>\n\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      bsDaterangepicker\n                      [(ngModel)]=\"bsRangeValue\"\n                      [bsConfig]=\"{\n                        isAnimated: true,\n                        containerClass: 'theme-red'\n                      }\"\n                      name=\"bsDaterangepicker\"\n                    />\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Text editor</h3></div>\n\n          <div class=\" card-body\">\n            <form><div id=\"quill\" data-toggle=\"quill\"></div></form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" col-lg-6\">\n      <div class=\" card-wrapper\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Tags</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <tag-input\n                [(ngModel)]=\"tagItems\"\n                theme=\"regular-theme\"\n                name=\"tags\"\n              ></tag-input>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Toggle buttons</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <label class=\" custom-toggle mr-1\">\n                <input type=\"checkbox\" />\n\n                <span class=\" custom-toggle-slider rounded-circle\"> </span>\n              </label>\n\n              <label class=\" custom-toggle mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n\n              <label class=\" custom-toggle custom-toggle-default mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n\n              <label class=\" custom-toggle custom-toggle-danger mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n\n              <label class=\" custom-toggle custom-toggle-warning mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n\n              <label class=\" custom-toggle custom-toggle-success mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n\n              <label class=\" custom-toggle custom-toggle-info mr-1\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Sliders</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" input-slider-container\">\n                <div\n                  class=\" input-slider\"\n                  data-range-value-max=\"500\"\n                  data-range-value-min=\"100\"\n                  id=\"input-slider\"\n                ></div>\n\n                <div class=\" row mt-3\">\n                  <div class=\" col-6\">\n                    <span\n                      class=\" range-slider-value\"\n                      data-range-value-low=\"100\"\n                      id=\"input-slider-value\"\n                    >\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" mt-5\">\n                <div\n                  data-range-value-max=\"500\"\n                  data-range-value-min=\"100\"\n                  id=\"input-slider-range\"\n                ></div>\n\n                <div class=\" row\">\n                  <div class=\" col-6\">\n                    <span\n                      class=\" range-slider-value value-low\"\n                      data-range-value-low=\"200\"\n                      id=\"input-slider-range-value-low\"\n                    >\n                    </span>\n                  </div>\n\n                  <div class=\" col-6 text-right\">\n                    <span\n                      class=\" range-slider-value value-high\"\n                      data-range-value-high=\"400\"\n                      id=\"input-slider-range-value-high\"\n                    >\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Dropzone</h3></div>\n\n          <div class=\" card-body\">\n            <div class=\" dropzone dropzone-single mb-3\" id=\"dropzone-single\">\n              <div class=\" fallback\">\n                <div class=\" custom-file\">\n                  <input\n                    class=\" custom-file-input\"\n                    id=\"projectCoverUploads\"\n                    type=\"file\"\n                  />\n\n                  <label class=\" custom-file-label\" for=\"projectCoverUploads\">\n                    Choose file\n                  </label>\n                </div>\n              </div>\n\n              <div class=\" dz-preview dz-preview-single\">\n                <div class=\" dz-preview-cover\">\n                  <img\n                    alt=\"...\"\n                    class=\" dz-preview-img\"\n                    data-dz-thumbnail=\"\"\n                    src=\"...\"\n                  />\n                </div>\n              </div>\n            </div>\n\n            <div class=\" dropzone dropzone-multiple\" id=\"dropzone-multiple\">\n              <div class=\" fallback\">\n                <div class=\" custom-file\">\n                  <input\n                    class=\" custom-file-input\"\n                    id=\"customFileUploadMultiple\"\n                    multiple=\"multiple\"\n                    type=\"file\"\n                  />\n\n                  <label\n                    class=\" custom-file-label\"\n                    for=\"customFileUploadMultiple\"\n                  >\n                    Choose file\n                  </label>\n                </div>\n              </div>\n\n              <ul\n                class=\" dz-preview dz-preview-multiple list-group list-group-lg list-group-flush\"\n              >\n                <li class=\" list-group-item px-0\">\n                  <div class=\" row align-items-center\">\n                    <div class=\" col-auto\">\n                      <div class=\" avatar\">\n                        <img\n                          alt=\"...\"\n                          class=\" avatar-img rounded\"\n                          data-dz-thumbnail=\"\"\n                          src=\"...\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\" col ml--3\">\n                      <h4 class=\" mb-1\" data-dz-name=\"\">...</h4>\n\n                      <p class=\" small text-muted mb-0\" data-dz-size=\"\">...</p>\n                    </div>\n\n                    <div class=\" col-auto\">\n                      <button\n                        data-dz-remove=\"true\"\n                        class=\"btn btn-danger btn-sm\"\n                      >\n                        <i class=\"fas fa-trash\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/elements/elements.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/elements/elements.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Form elements</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Forms </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Form elements\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" card mb-4\">\n    <div class=\" card-header\"><h3 class=\" mb-0\">Form group in grid</h3></div>\n\n    <div class=\" card-body\">\n      <div class=\" row\">\n        <div class=\" col-md-4\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example3cols1Input\">\n              One of three cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example3cols1Input\"\n              placeholder=\"One of three cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-md-4\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example3cols2Input\">\n              One of three cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example3cols2Input\"\n              placeholder=\"One of three cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-md-4\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example3cols3Input\">\n              One of three cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example3cols3Input\"\n              placeholder=\"One of three cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\" row\">\n        <div class=\" col-sm-6 col-md-3\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example4cols1Input\">\n              One of four cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example4cols1Input\"\n              placeholder=\"One of four cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-sm-6 col-md-3\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example4cols2Input\">\n              One of four cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example4cols2Input\"\n              placeholder=\"One of four cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-sm-6 col-md-3\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example4cols3Input\">\n              One of four cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example4cols3Input\"\n              placeholder=\"One of four cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-sm-6 col-md-3\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example4cols3Input\">\n              One of four cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example4cols4Input\"\n              placeholder=\"One of four cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\" row\">\n        <div class=\" col-md-6\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example2cols1Input\">\n              One of two cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example2cols1Input\"\n              placeholder=\"One of two cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n\n        <div class=\" col-md-6\">\n          <div class=\" form-group\">\n            <label class=\" form-control-label\" for=\"example2cols2Input\">\n              One of two cols\n            </label>\n\n            <input\n              class=\" form-control\"\n              id=\"example2cols2Input\"\n              placeholder=\"One of two cols\"\n              type=\"text\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\" row\">\n    <div class=\" col-lg-6\">\n      <div class=\" card-wrapper\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Form controls</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlInput1\"\n                >\n                  Email address\n                </label>\n\n                <input\n                  class=\" form-control\"\n                  id=\"exampleFormControlInput1\"\n                  placeholder=\"name@example.com\"\n                  type=\"email\"\n                />\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect1\"\n                >\n                  Example select\n                </label>\n\n                <select class=\" form-control\" id=\"exampleFormControlSelect1\">\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect2\"\n                >\n                  Example multiple select\n                </label>\n\n                <select\n                  class=\" form-control\"\n                  id=\"exampleFormControlSelect2\"\n                  multiple=\"multiple\"\n                >\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlTextarea1\"\n                >\n                  Example textarea\n                </label>\n\n                <textarea\n                  class=\" form-control\"\n                  id=\"exampleFormControlTextarea1\"\n                  rows=\"3\"\n                ></textarea>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">HTML5 inputs</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-text-input\"\n                >\n                  Text\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-text-input\"\n                    type=\"text\"\n                    value=\"John Snow\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-search-input\"\n                >\n                  Search\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-search-input\"\n                    type=\"search\"\n                    value=\"Tell me your secret ...\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-email-input\"\n                >\n                  Email\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-email-input\"\n                    type=\"email\"\n                    value=\"argon@example.com\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-url-input\"\n                >\n                  URL\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-url-input\"\n                    type=\"url\"\n                    value=\"https://www.creative-tim.com\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-tel-input\"\n                >\n                  Phone\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-tel-input\"\n                    type=\"tel\"\n                    value=\"40-(770)-888-444\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-password-input\"\n                >\n                  Password\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-password-input\"\n                    type=\"password\"\n                    value=\"password\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-number-input\"\n                >\n                  Number\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-number-input\"\n                    type=\"number\"\n                    value=\"23\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-datetime-local-input\"\n                >\n                  Datetime\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-datetime-local-input\"\n                    type=\"datetime-local\"\n                    value=\"2018-11-23T10:30:00\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-date-input\"\n                >\n                  Date\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-date-input\"\n                    type=\"date\"\n                    value=\"2018-11-23\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-month-input\"\n                >\n                  Month\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-month-input\"\n                    type=\"month\"\n                    value=\"2018-11\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-week-input\"\n                >\n                  Week\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-week-input\"\n                    type=\"week\"\n                    value=\"2018-W23\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-time-input\"\n                >\n                  Time\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-time-input\"\n                    type=\"time\"\n                    value=\"10:30:00\"\n                  />\n                </div>\n              </div>\n\n              <div class=\" form-group row\">\n                <label\n                  class=\" col-md-2 col-form-label form-control-label\"\n                  for=\"example-color-input\"\n                >\n                  Color\n                </label>\n\n                <div class=\" col-md-10\">\n                  <input\n                    class=\" form-control\"\n                    id=\"example-color-input\"\n                    type=\"color\"\n                    value=\"#5e72e4\"\n                  />\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" col-lg-6\">\n      <div class=\" card-wrapper\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Sizes</h3></div>\n\n          <div class=\" card-body\">\n            <div class=\" form-group\">\n              <label class=\" form-control-label\"> Large input </label>\n\n              <input\n                class=\" form-control form-control-lg\"\n                placeholder=\".form-control-lg\"\n                type=\"text\"\n              />\n            </div>\n\n            <div class=\" form-group\">\n              <label class=\" form-control-label\"> Default input </label>\n\n              <input\n                class=\" form-control\"\n                placeholder=\"Default input\"\n                type=\"text\"\n              />\n            </div>\n\n            <div class=\" form-group\">\n              <label class=\" form-control-label\"> Small input </label>\n\n              <input\n                class=\" form-control form-control-sm\"\n                placeholder=\".form-control-sm\"\n                type=\"text\"\n              />\n            </div>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Text inputs</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlTextarea1\"\n                >\n                  Basic textarea\n                </label>\n\n                <textarea\n                  class=\" form-control\"\n                  id=\"exampleFormControlTextarea3\"\n                  rows=\"3\"\n                ></textarea>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlTextarea2\"\n                >\n                  Unresizable textarea\n                </label>\n\n                <textarea\n                  class=\" form-control\"\n                  id=\"exampleFormControlTextarea4\"\n                  resize=\"none\"\n                  rows=\"3\"\n                ></textarea>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Select</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect3\"\n                >\n                  Basic select\n                </label>\n\n                <select class=\" form-control\" id=\"exampleFormControlSelect3\">\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect4\"\n                >\n                  Basic select\n                </label>\n\n                <select\n                  class=\" form-control\"\n                  disabled=\"disabled\"\n                  id=\"exampleFormControlSelect4\"\n                >\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect5\"\n                >\n                  Multiple select\n                </label>\n\n                <select\n                  class=\" form-control\"\n                  id=\"exampleFormControlSelect5\"\n                  multiple=\"multiple\"\n                >\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n\n              <div class=\" form-group\">\n                <label\n                  class=\" form-control-label\"\n                  for=\"exampleFormControlSelect6\"\n                >\n                  Disabled multiple select\n                </label>\n\n                <select\n                  class=\" form-control\"\n                  disabled=\"disabled\"\n                  id=\"exampleFormControlSelect6\"\n                  multiple=\"multiple\"\n                >\n                  <option> 1 </option>\n\n                  <option> 2 </option>\n\n                  <option> 3 </option>\n\n                  <option> 4 </option>\n\n                  <option> 5 </option>\n                </select>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">File browser</h3></div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" custom-file\">\n                <input\n                  class=\" custom-file-input\"\n                  id=\"customFileLang\"\n                  lang=\"en\"\n                  type=\"file\"\n                />\n\n                <label class=\" custom-file-label\" for=\"customFileLang\">\n                  Select file\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\">\n            <h3 class=\" mb-0\">Checkboxes and radios</h3>\n          </div>\n\n          <div class=\" card-body\">\n            <form>\n              <div class=\" row\">\n                <div class=\" col-md-6\">\n                  <div class=\" custom-control custom-checkbox mb-3\">\n                    <input\n                      class=\" custom-control-input\"\n                      id=\"customCheck1\"\n                      type=\"checkbox\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customCheck1\">\n                      Unchecked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-checkbox mb-3\">\n                    <input\n                      checked=\"checked\"\n                      class=\" custom-control-input\"\n                      id=\"customCheck2\"\n                      type=\"checkbox\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customCheck2\">\n                      Checked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-checkbox mb-3\">\n                    <input\n                      class=\" custom-control-input\"\n                      disabled=\"disabled\"\n                      id=\"customCheck3\"\n                      type=\"checkbox\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customCheck3\">\n                      Disabled Unchecked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-checkbox mb-3\">\n                    <input\n                      checked=\"checked\"\n                      class=\" custom-control-input\"\n                      disabled=\"disabled\"\n                      id=\"customCheck4\"\n                      type=\"checkbox\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customCheck4\">\n                      Disabled Checked\n                    </label>\n                  </div>\n                </div>\n\n                <div class=\" col-md-6\">\n                  <div class=\" custom-control custom-radio mb-3\">\n                    <input\n                      class=\" custom-control-input\"\n                      id=\"customRadio5\"\n                      name=\"custom-radio-1\"\n                      type=\"radio\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customRadio5\">\n                      Unchecked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-radio mb-3\">\n                    <input\n                      checked=\"\"\n                      class=\" custom-control-input\"\n                      id=\"customRadio6\"\n                      name=\"custom-radio-1\"\n                      type=\"radio\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customRadio6\">\n                      Checked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-radio mb-3\">\n                    <input\n                      class=\" custom-control-input\"\n                      disabled=\"\"\n                      id=\"customRadio7\"\n                      name=\"custom-radio-3\"\n                      type=\"radio\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customRadio7\">\n                      Disabled unchecked\n                    </label>\n                  </div>\n\n                  <div class=\" custom-control custom-radio mb-3\">\n                    <input\n                      checked=\"\"\n                      class=\" custom-control-input\"\n                      disabled=\"\"\n                      id=\"customRadio8\"\n                      name=\"custom-radio-4\"\n                      type=\"radio\"\n                    />\n\n                    <label class=\" custom-control-label\" for=\"customRadio8\">\n                      Disabled checkbox\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/validation/validation.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/validation/validation.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Form elements</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Forms </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Form elements\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card-wrapper\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Custom styles</h3></div>\n\n          <div class=\" card-body\">\n            <div class=\" row\">\n              <div class=\" col-lg-8\">\n                <p class=\" mb-0\">\n                  For custom form validation messages, you’ll need to add the\n                  novalidate boolean attribute to your\n                  <code>&#60;form&#62;</code> . This disables the browser\n                  default feedback tooltips, but still provides access to the\n                  form validation APIs in JavaScript. <br />\n                  <br />\n\n                  When attempting to submit, you’ll see the<code>\n                    :invalid\n                  </code>\n                  and <code> :valid </code> styles applied to your form\n                  controls.\n                </p>\n              </div>\n            </div>\n\n            <hr />\n\n            <form class=\" needs-validation\" novalidate=\"\">\n              <div class=\" form-row\">\n                <div class=\" col-md-4 mb-3\">\n                  <label class=\" form-control-label\" for=\"validationCustom01\">\n                    First name\n                  </label>\n\n                  <input\n                    class=\" form-control\"\n                    id=\"validationCustom01\"\n                    placeholder=\"First name\"\n                    required=\"\"\n                    type=\"text\"\n                    value=\"Mark\"\n                  />\n\n                  <div class=\" valid-feedback\">Looks good!</div>\n                </div>\n\n                <div class=\" col-md-4 mb-3\">\n                  <label class=\" form-control-label\" for=\"validationCustom02\">\n                    Last name\n                  </label>\n\n                  <input\n                    class=\" form-control\"\n                    id=\"validationCustom02\"\n                    placeholder=\"Last name\"\n                    required=\"\"\n                    type=\"text\"\n                    value=\"Otto\"\n                  />\n\n                  <div class=\" valid-feedback\">Looks good!</div>\n                </div>\n\n                <div class=\" col-md-4 mb-3\">\n                  <label\n                    class=\" form-control-label\"\n                    for=\"validationCustomUsername\"\n                  >\n                    Username\n                  </label>\n\n                  <input\n                    aria-describedby=\"inputGroupPrepend\"\n                    class=\" form-control\"\n                    id=\"validationCustomUsername\"\n                    placeholder=\"Username\"\n                    required=\"\"\n                    type=\"text\"\n                  />\n\n                  <div class=\" invalid-feedback\">Please choose a username.</div>\n                </div>\n              </div>\n\n              <div class=\" form-row\">\n                <div class=\" col-md-6 mb-3\">\n                  <label class=\" form-control-label\" for=\"validationCustom03\">\n                    City\n                  </label>\n\n                  <input\n                    class=\" form-control\"\n                    id=\"validationCustom03\"\n                    placeholder=\"City\"\n                    required=\"\"\n                    type=\"text\"\n                  />\n\n                  <div class=\" invalid-feedback\">\n                    Please provide a valid city.\n                  </div>\n                </div>\n\n                <div class=\" col-md-3 mb-3\">\n                  <label class=\" form-control-label\" for=\"validationCustom04\">\n                    State\n                  </label>\n\n                  <input\n                    class=\" form-control\"\n                    id=\"validationCustom04\"\n                    placeholder=\"State\"\n                    required=\"\"\n                    type=\"text\"\n                  />\n\n                  <div class=\" invalid-feedback\">\n                    Please provide a valid state.\n                  </div>\n                </div>\n\n                <div class=\" col-md-3 mb-3\">\n                  <label class=\" form-control-label\" for=\"validationCustom05\">\n                    Zip\n                  </label>\n\n                  <input\n                    class=\" form-control\"\n                    id=\"validationCustom05\"\n                    placeholder=\"Zip\"\n                    required=\"\"\n                    type=\"text\"\n                  />\n\n                  <div class=\" invalid-feedback\">\n                    Please provide a valid zip.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" form-group\">\n                <div class=\" custom-control custom-checkbox mb-3\">\n                  <input\n                    class=\" custom-control-input\"\n                    id=\"invalidCheck\"\n                    required=\"\"\n                    type=\"checkbox\"\n                    value=\"\"\n                  />\n\n                  <label class=\" custom-control-label\" for=\"invalidCheck\">\n                    Agree to terms and conditions\n                  </label>\n\n                  <div class=\" invalid-feedback\">\n                    You must agree before submitting.\n                  </div>\n                </div>\n              </div>\n\n              <button class=\" btn btn-primary\" type=\"submit\">\n                Submit form\n              </button>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"card\">\n          <!-- Card header -->\n          <div class=\"card-header\"><h3 class=\"mb-0\">Browser defaults</h3></div>\n          <!-- Card body -->\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-lg-8\">\n                <p class=\"mb-0\">\n                  Not interested in custom validation feedback messages or\n                  writing JavaScript to change form behaviors? All good, you can\n                  use the browser defaults. Try submitting the form below.\n                  Depending on your browser and OS, you’ll see a slightly\n                  different style of feedback. <br /><br />\n                  While these feedback styles cannot be styled with CSS, you can\n                  still customize the feedback text through JavaScript.\n                </p>\n              </div>\n            </div>\n            <hr />\n            <form ngNativeValidate>\n              <div class=\"form-row\">\n                <div class=\"col-md-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"validationDefault01\"\n                      >First name</label\n                    >\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationDefault01\"\n                      placeholder=\"First name\"\n                      value=\"Mark\"\n                      required\n                    />\n                  </div>\n                </div>\n                <div class=\"col-md-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"validationDefault02\"\n                      >Last name</label\n                    >\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationDefault02\"\n                      placeholder=\"Last name\"\n                      value=\"Otto\"\n                      required\n                    />\n                  </div>\n                </div>\n                <div class=\"col-md-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label\n                      class=\"form-control-label\"\n                      for=\"validationDefaultUsername\"\n                      >Username</label\n                    >\n                    <div class=\"input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\n                          >@</span\n                        >\n                      </div>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"validationDefaultUsername\"\n                        placeholder=\"Username\"\n                        aria-describedby=\"inputGroupPrepend2\"\n                        required\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"col-md-6 mb-3\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"validationDefault03\"\n                      >City</label\n                    >\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationDefault03\"\n                      placeholder=\"City\"\n                      required\n                    />\n                  </div>\n                </div>\n                <div class=\"col-md-3 mb-3\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"validationDefault04\"\n                      >State</label\n                    >\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationDefault04\"\n                      placeholder=\"State\"\n                      required\n                    />\n                  </div>\n                </div>\n                <div class=\"col-md-3 mb-3\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"validationDefault05\"\n                      >Zip</label\n                    >\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"validationDefault05\"\n                      placeholder=\"Zip\"\n                      required\n                    />\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"custom-control custom-checkbox mb-3\">\n                  <input\n                    class=\"custom-control-input\"\n                    id=\"invalidCheck2\"\n                    type=\"checkbox\"\n                    value=\"\"\n                    required\n                  />\n                  <label class=\"custom-control-label\" for=\"invalidCheck2\"\n                    >Agree to terms and conditions</label\n                  >\n                  <div class=\"invalid-feedback\">\n                    You must agree before submitting.\n                  </div>\n                </div>\n              </div>\n              <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" card\">\n          <div class=\" card-header\"><h3 class=\" mb-0\">Server side</h3></div>\n\n          <div class=\" card-body\">\n            <div class=\" row\">\n              <div class=\" col-lg-8\">\n                <p class=\" mb-0\">\n                  We recommend using client side validation, but in case you\n                  require server side, you can indicate invalid and valid form\n                  fields with <code> .is-invalid </code> and\n                  <code> .is-valid </code> . Note that\n                  <code> .invalid-feedback </code>\n\n                  is also supported with these classes.\n                </p>\n              </div>\n            </div>\n\n            <hr />\n\n            <form>\n              <div class=\" form-row\">\n                <div class=\" col-md-4 mb-3\">\n                  <div class=\" form-group has-success\">\n                    <label class=\" form-control-label\" for=\"validationServer01\">\n                      First name\n                    </label>\n\n                    <input\n                      class=\" form-control is-valid\"\n                      id=\"validationServer01\"\n                      placeholder=\"First name\"\n                      required=\"\"\n                      type=\"text\"\n                      value=\"Mark\"\n                    />\n\n                    <div class=\" valid-feedback\">Looks good!</div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-4 mb-3\">\n                  <div class=\" form-group has-success\">\n                    <label class=\" form-control-label\" for=\"validationServer02\">\n                      Last name\n                    </label>\n\n                    <input\n                      class=\" form-control is-valid\"\n                      id=\"validationServer02\"\n                      placeholder=\"Last name\"\n                      required=\"\"\n                      type=\"text\"\n                      value=\"Otto\"\n                    />\n\n                    <div class=\" valid-feedback\">Looks good!</div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-4 mb-3\">\n                  <div class=\" form-group has-danger\">\n                    <label\n                      class=\" form-control-label\"\n                      for=\"validationServerUsername\"\n                    >\n                      Username\n                    </label>\n\n                    <input\n                      aria-describedby=\"inputGroupPrepend3\"\n                      class=\" form-control is-invalid\"\n                      id=\"validationServerUsername\"\n                      placeholder=\"Username\"\n                      required=\"\"\n                      type=\"text\"\n                    />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" form-row\">\n                <div class=\" col-md-6 mb-3\">\n                  <div class=\" form-group has-danger\">\n                    <label class=\" form-control-label\" for=\"validationServer03\">\n                      City\n                    </label>\n\n                    <input\n                      class=\" form-control is-invalid\"\n                      id=\"validationServer03\"\n                      placeholder=\"City\"\n                      required=\"\"\n                      type=\"text\"\n                    />\n\n                    <div class=\" invalid-feedback\">\n                      Please provide a valid city.\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-3 mb-3\">\n                  <div class=\" form-group has-danger\">\n                    <label class=\" form-control-label\" for=\"validationServer04\">\n                      State\n                    </label>\n\n                    <input\n                      class=\" form-control is-invalid\"\n                      id=\"validationServer04\"\n                      placeholder=\"State\"\n                      required=\"\"\n                      type=\"text\"\n                    />\n\n                    <div class=\" invalid-feedback\">\n                      Please provide a valid state.\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\" col-md-3 mb-3\">\n                  <div class=\" form-group has-danger\">\n                    <label class=\" form-control-label\" for=\"validationServer05\">\n                      Zip\n                    </label>\n\n                    <input\n                      class=\" form-control is-invalid\"\n                      id=\"validationServer05\"\n                      placeholder=\"Zip\"\n                      required=\"\"\n                      type=\"text\"\n                    />\n\n                    <div class=\" invalid-feedback\">\n                      Please provide a valid zip.\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" form-group has-danger\">\n                <div class=\" custom-control custom-checkbox mb-3\">\n                  <input\n                    class=\" custom-control-input is-invalid\"\n                    id=\"invalidCheck3\"\n                    required=\"\"\n                    type=\"checkbox\"\n                    value=\"\"\n                  />\n\n                  <label class=\" custom-control-label\" for=\"invalidCheck3\">\n                    Agree to terms and conditions\n                  </label>\n\n                  <div class=\" invalid-feedback\">\n                    You must agree before submitting.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\" form-group has-danger\">\n                <div class=\" input-group input-group-merge\">\n                  <div class=\" input-group-prepend\">\n                    <span class=\" input-group-text\">\n                      <i class=\" fal fa-key\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    asp-for=\"Password\"\n                    class=\" form-control is-invalid\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                  />\n                </div>\n              </div>\n\n              <button class=\" btn btn-primary\" type=\"submit\">\n                Submit form\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/examples/forms/components/components.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/examples/forms/components/components.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormsComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponentsComponent", function() { return FormsComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobius1_selectr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobius1-selectr */ "./node_modules/mobius1-selectr/dist/selectr.min.js");
/* harmony import */ var mobius1_selectr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobius1_selectr__WEBPACK_IMPORTED_MODULE_5__);




dropzone__WEBPACK_IMPORTED_MODULE_3___default.a.autoDiscover = false;


var FormsComponentsComponent = /** @class */ (function () {
    function FormsComponentsComponent() {
        this.tagItems = ["Bucharest", "Cluj", "Iasi", "Timisoara", "Piatra Neamt"];
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }
    FormsComponentsComponent.prototype.ngOnInit = function () {
        var selectr = document.getElementById("selectr");
        var options = {};
        var optionsMultiple = { multiple: true };
        var selectorDefault = new mobius1_selectr__WEBPACK_IMPORTED_MODULE_5___default.a(selectr, options);
        var selectrmultiple = document.getElementById("selectr-multiple");
        var selectorMultiple = new mobius1_selectr__WEBPACK_IMPORTED_MODULE_5___default.a(selectrmultiple, optionsMultiple);
        var c = document.getElementById("input-slider"), d = document.getElementById("input-slider-value");
        nouislider__WEBPACK_IMPORTED_MODULE_2___default.a.create(c, {
            start: 100,
            connect: [true, false],
            //step: 1000,
            range: {
                min: 100,
                max: 500
            }
        }),
            c.noUiSlider.on("update", function (a, b) {
                d.textContent = a[b];
            });
        var c1 = document.getElementById("input-slider-range"), d1 = document.getElementById("input-slider-range-value-low"), e = document.getElementById("input-slider-range-value-high"), f = [d1, e];
        nouislider__WEBPACK_IMPORTED_MODULE_2___default.a.create(c1, {
            start: [
                parseInt(d1.getAttribute("data-range-value-low")),
                parseInt(e.getAttribute("data-range-value-high"))
            ],
            connect: !0,
            range: {
                min: parseInt(c1.getAttribute("data-range-value-min")),
                max: parseInt(c1.getAttribute("data-range-value-max"))
            }
        }),
            c1.noUiSlider.on("update", function (a, b) {
                f[b].textContent = a[b];
            });
        // this variable is to delete the previous image from the dropzone state
        // it is just to make the HTML DOM a bit better, and keep it light
        var currentSingleFile = undefined;
        // single dropzone file - accepts only images
        new dropzone__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById("dropzone-single"), {
            url: "/",
            thumbnailWidth: null,
            thumbnailHeight: null,
            previewsContainer: document.getElementsByClassName("dz-preview-single")[0],
            previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
                .innerHTML,
            maxFiles: 1,
            acceptedFiles: "image/*",
            init: function () {
                this.on("addedfile", function (file) {
                    if (currentSingleFile) {
                        this.removeFile(currentSingleFile);
                    }
                    currentSingleFile = file;
                });
            }
        });
        document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
        // this variable is to delete the previous image from the dropzone state
        // it is just to make the HTML DOM a bit better, and keep it light
        var currentMultipleFile = undefined;
        // multiple dropzone file - accepts any type of file
        new dropzone__WEBPACK_IMPORTED_MODULE_3___default.a(document.getElementById("dropzone-multiple"), {
            url: "https://",
            thumbnailWidth: null,
            thumbnailHeight: null,
            previewsContainer: document.getElementsByClassName("dz-preview-multiple")[0],
            previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
                .innerHTML,
            maxFiles: null,
            acceptedFiles: null,
            init: function () {
                this.on("addedfile", function (file) {
                    if (currentMultipleFile) {
                    }
                    currentMultipleFile = file;
                });
            }
        });
        document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
        var quill = new quill__WEBPACK_IMPORTED_MODULE_4___default.a("#quill", {
            modules: {
                toolbar: [
                    ["bold", "italic"],
                    ["link", "blockquote", "code", "image"],
                    [
                        {
                            list: "ordered"
                        },
                        {
                            list: "bullet"
                        }
                    ]
                ]
            },
            placeholder: "Quill WYSIWYG",
            theme: "snow"
        });
    };
    FormsComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-components",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/components/components.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormsComponentsComponent);
    return FormsComponentsComponent;
}());



/***/ }),

/***/ "./src/app/examples/forms/elements/elements.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/forms/elements/elements.component.ts ***!
  \***************************************************************/
/*! exports provided: ElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsComponent", function() { return ElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ElementsComponent = /** @class */ (function () {
    function ElementsComponent() {
    }
    ElementsComponent.prototype.ngOnInit = function () { };
    ElementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-elements",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/elements/elements.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ElementsComponent);
    return ElementsComponent;
}());



/***/ }),

/***/ "./src/app/examples/forms/forms.module.ts":
/*!************************************************!*\
  !*** ./src/app/examples/forms/forms.module.ts ***!
  \************************************************/
/*! exports provided: FormsModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModules", function() { return FormsModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.component */ "./src/app/examples/forms/components/components.component.ts");
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/elements.component */ "./src/app/examples/forms/elements/elements.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/examples/forms/validation/validation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms.routing */ "./src/app/examples/forms/forms.routing.ts");












var FormsModules = /** @class */ (function () {
    function FormsModules() {
    }
    FormsModules = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_components_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponentsComponent"],
                _elements_elements_component__WEBPACK_IMPORTED_MODULE_8__["ElementsComponent"],
                _validation_validation_component__WEBPACK_IMPORTED_MODULE_9__["ValidationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_11__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()
            ]
        })
    ], FormsModules);
    return FormsModules;
}());



/***/ }),

/***/ "./src/app/examples/forms/forms.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/examples/forms/forms.routing.ts ***!
  \*************************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.component */ "./src/app/examples/forms/components/components.component.ts");
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/elements.component */ "./src/app/examples/forms/elements/elements.component.ts");
/* harmony import */ var _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/validation.component */ "./src/app/examples/forms/validation/validation.component.ts");




var FormsRoutes = [
    {
        path: "",
        children: [
            {
                path: "components",
                component: _components_components_component__WEBPACK_IMPORTED_MODULE_1__["FormsComponentsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "elements",
                component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_2__["ElementsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "validation",
                component: _validation_validation_component__WEBPACK_IMPORTED_MODULE_3__["ValidationComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/examples/forms/validation/validation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/examples/forms/validation/validation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
    }
    ValidationComponent.prototype.ngOnInit = function () {
        window.addEventListener("load", function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener("submit", function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                }, false);
            });
        }, false);
    };
    ValidationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-validation",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/forms/validation/validation.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=examples-forms-forms-module.js.map