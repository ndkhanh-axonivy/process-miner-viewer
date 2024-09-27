import { OpenDataClassAction } from '@axonivy/process-editor-protocol';
import { Action, KeyListener, GModelElement } from '@eclipse-glsp/client';
import { matchesKeystroke } from 'sprotty/lib/utils/keyboard';

export class OpenDataClassKeyListener extends KeyListener {
  keyDown(element: GModelElement, event: KeyboardEvent): Action[] {
    if (matchesKeystroke(event, 'KeyC')) {
      return [OpenDataClassAction.create()];
    }
    return [];
  }
}
