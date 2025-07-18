import { ToggleSource } from '../../packages/core/dist/index.d.ts';
import { TrackToggleProps } from '../components';
import * as React from 'react';
/** @public */
export interface UseTrackToggleProps<T extends ToggleSource> extends Omit<TrackToggleProps<T>, 'showIcon'> {
}
/**
 * The `useTrackToggle` hook is used to implement the `TrackToggle` component and returns state
 * and functionality of the given track.
 *
 * @example
 * ```tsx
 * const { buttonProps, enabled } = useTrackToggle(trackRef);
 * return <button {...buttonProps}>{enabled ? 'disable' : 'enable'}</button>;
 * ```
 * @public
 */
export declare function useTrackToggle<T extends ToggleSource>({ source, onChange, initialState, captureOptions, publishOptions, onDeviceError, ...rest }: UseTrackToggleProps<T>): {
    toggle: ((forceState?: boolean) => Promise<void>) | ((forceState?: boolean, captureOptions?: import('../../packages/core/dist/index.d.ts').CaptureOptionsBySource<T> | undefined) => Promise<boolean | undefined>);
    enabled: boolean;
    pending: boolean;
    track: import('livekit-client').LocalTrackPublication | undefined;
    buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
//# sourceMappingURL=useTrackToggle.d.ts.map