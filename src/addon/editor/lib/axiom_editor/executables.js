// Copyright 2014 Google Inc. All rights reserved.
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
import Path from 'axiom/fs/path';

import environment from 'shell/environment';
import EditorView from 'axiom_editor/editor';

// @note ExecuteContext from 'axiom/bindings/fs/execute_context'

var EDIT_CMD_USAGE_STRING = 'usage: edit file';

export var executables = {
  /**
   * Ace.js based editor for editing source files.
   */
  'edit(*)': function(cx) {
    cx.ready();
    var arg = cx.arg;

    if ((!arg || typeof arg != 'string') || arg.h || arg.help) {
      cx.stdout(EDIT_CMD_USAGE_STRING + '\n');
      return Promise.resolve(null);
    }

    var filePath = Path.abs(cx.getEnv('$PWD', '/'), arg);

    var editorView = new EditorView(filePath);
    return editorView.whenReady;
  },
};

export default executables;
