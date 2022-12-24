import type { DragEventHandler } from 'react';

export type DragEventHandlers = {
  onDragStart?: DragEventHandler;
  onDragEnd?: DragEventHandler;
  onDragOver?: DragEventHandler;
  onDrop?: DragEventHandler;
};
