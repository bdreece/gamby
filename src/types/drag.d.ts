import type { DragEventHandler } from 'react';

export type DragEvent = 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onDrop';

export type DragEventHandlers = {
  [TEvent in DragEvent]?: DragEventHandler;
};
