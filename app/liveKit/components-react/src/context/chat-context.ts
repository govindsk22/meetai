import type { WidgetState } from '@livekit/components-core';
import type * as React from 'react';

/** @internal */
export type ChatContextAction =
  | { msg: 'show_chat' }
  | { msg: 'hide_chat' }
  | { msg: 'toggle_chat' }
  | { msg: 'unread_msg'; count: number }
  | { msg: 'toggle_settings' }
  | { msg: 'show_participants' }
  | { msg: 'hide_participants' }
  | { msg: 'toggle_participants' };

/** @internal */
export type WidgetContextType = {
  dispatch?: React.Dispatch<ChatContextAction>;
  state?: WidgetState;
};

/** @internal */
export function chatReducer(state: WidgetState, action: ChatContextAction): WidgetState {
  if (action.msg === 'show_chat') {
    return { ...state, showChat: true, unreadMessages: 0 };
  } else if (action.msg === 'hide_chat') {
    return { ...state, showChat: false };
  } else if (action.msg === 'toggle_chat') {
    const newState = { ...state, showChat: !state.showChat };
    if (newState.showChat === true) {
      newState.unreadMessages = 0;
    }
    return newState;
  } else if (action.msg === 'unread_msg') {
    return { ...state, unreadMessages: action.count };
  } else if (action.msg === 'toggle_settings') {
    return { ...state, showSettings: !state.showSettings };
  } else if (action.msg === 'show_participants') {
    return { ...state, showParticipants: true };
  } else if (action.msg === 'hide_participants') {
    return { ...state, showParticipants: false };
  } else if (action.msg === 'toggle_participants') {
    return { ...state, showParticipants: !state.showParticipants };
  } else {
    return { ...state };
  }
}
