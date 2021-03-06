// Copyright 2015 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import AxiomError from 'axiom/core/error';
import AxiomEvent from 'axiom/core/event';
import AxiomStream from 'axiom/fs/stream/axiom_stream';

/** @typedef ReadableStream$$module$axiom$fs$stream$readable_stream */
var ReadableStream;

/** @typedef MemoryStreamBuffer$$module$axiom$fs$stream$memory_stream_buffer */
var MemoryStreamBuffer;

/**
 * @constructor @extends {AxiomStream} @implements {ReadableStream}
 * @param {MemoryStreamBuffer} buffer
 */
export var ReadableMemoryStream = function(buffer) {
  AxiomStream.call(this);
  /** @const @private @type {MemoryStreamBuffer} */
  this.buffer_ = buffer;
  /** @const @type {!AxiomEvent} */
  this.onData = buffer.onData;
  /** @const @type {!AxiomEvent} */
  this.onReadable = buffer.onReadable;
};

export default ReadableMemoryStream;

ReadableMemoryStream.prototype = Object.create(AxiomStream.prototype);

/**
 * @override
 * @return {void}
 */
ReadableMemoryStream.prototype.pause = function() {
  return this.buffer_.pause();
};

/**
 * @override
 * @return {void}
 */
ReadableMemoryStream.prototype.resume = function() {
  return this.buffer_.resume();
};

/**
 * @override
 * @return {*}
 */
ReadableMemoryStream.prototype.read = function() {
  return this.buffer_.read();
};
