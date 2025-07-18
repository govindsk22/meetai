import { AudioAnalyserOptions } from 'livekit-client';
import { AudioCaptureOptions } from 'livekit-client';
import { CaptureOptionsBySource } from '../../../packages/core/dist/index.d.ts';
import { CaptureOptionsBySource as CaptureOptionsBySource_2 } from '../../packages/core/dist/index.d.ts';
import { ChatMessage } from '../packages/core/dist/index.d.ts';
import { ChatOptions } from '../../packages/core/dist/index.d.ts';
import { ConnectionQuality } from 'livekit-client';
import { ConnectionState as ConnectionState_2 } from 'livekit-client';
import { CreateLocalTracksOptions } from 'livekit-client';
import { DataPublishOptions } from 'livekit-client';
import { DisconnectReason } from 'livekit-client';
import { GridLayoutDefinition } from '../packages/core/dist/index.d.ts';
import { GridLayoutDefinition as GridLayoutDefinition_2 } from '../../packages/core/dist/index.d.ts';
import { GridLayoutInfo } from '../../packages/core/dist/index.d.ts';
import { HTMLAttributes } from 'react';
import { isTrackReference } from '../packages/core/dist/index.d.ts';
import { KrispNoiseFilterProcessor } from '@livekit/krisp-noise-filter';
import { LocalAudioTrack } from 'livekit-client';
import { LocalParticipant } from 'livekit-client';
import { LocalTrack } from 'livekit-client';
import { LocalTrackPublication } from 'livekit-client';
import { LocalUserChoices } from '../packages/core/dist/index.d.ts';
import { LocalUserChoices as LocalUserChoices_2 } from '../../packages/core/dist/index.d.ts';
import { LocalVideoTrack } from 'livekit-client';
import { MediaDeviceFailure } from 'livekit-client';
import { MessageDecoder } from '../packages/core/dist/index.d.ts';
import { MessageDecoder as MessageDecoder_2 } from '../../packages/core/dist/index.d.ts';
import { MessageEncoder } from '../packages/core/dist/index.d.ts';
import { MessageEncoder as MessageEncoder_2 } from '../../packages/core/dist/index.d.ts';
import { NoiseFilterOptions } from '@livekit/krisp-noise-filter';
import { Participant } from 'livekit-client';
import { ParticipantClickEvent } from '../packages/core/dist/index.d.ts';
import { ParticipantClickEvent as ParticipantClickEvent_2 } from '../../../packages/core/dist/index.d.ts';
import { ParticipantClickEvent as ParticipantClickEvent_3 } from '../../packages/core/dist/index.d.ts';
import { ParticipantEvent } from 'livekit-client';
import { ParticipantIdentifier } from '../packages/core/dist/index.d.ts';
import { ParticipantIdentifier as ParticipantIdentifier_2 } from '../../packages/core/dist/index.d.ts';
import { ParticipantPermission } from '@livekit/protocol';
import { PinState } from '../packages/core/dist/index.d.ts';
import { PinState as PinState_2 } from '../../packages/core/dist/index.d.ts';
import { PinState as PinState_3 } from '../../../packages/core/dist/index.d.ts';
import * as React_2 from 'react';
import { ReceivedChatMessage } from '../packages/core/dist/index.d.ts';
import { ReceivedChatMessage as ReceivedChatMessage_2 } from '../../packages/core/dist/index.d.ts';
import { ReceivedDataMessage } from '../../packages/core/dist/index.d.ts';
import { ReceivedTranscriptionSegment } from '../../packages/core/dist/index.d.ts';
import { RemoteAudioTrack } from 'livekit-client';
import { RemoteParticipant } from 'livekit-client';
import { Room } from 'livekit-client';
import { RoomConnectOptions } from 'livekit-client';
import { RoomEvent } from 'livekit-client';
import { RoomOptions } from 'livekit-client';
import { ScreenShareCaptureOptions } from 'livekit-client';
import { SendTextOptions } from 'livekit-client';
import { setLogExtension } from '../packages/core/dist/index.d.ts';
import { setLogLevel } from '../packages/core/dist/index.d.ts';
import { SetMediaDeviceOptions } from '../../packages/core/dist/index.d.ts';
import { SourcesArray } from '../../packages/core/dist/index.d.ts';
import { SVGProps } from 'react';
import { TextStreamData } from '../packages/core/dist/index.d.ts';
import { TextStreamData as TextStreamData_2 } from '../../packages/core/dist/index.d.ts';
import { ToggleSource } from '../../../packages/core/dist/index.d.ts';
import { ToggleSource as ToggleSource_2 } from '../../packages/core/dist/index.d.ts';
import { Track } from 'livekit-client';
import { TrackProcessor } from 'livekit-client';
import { TrackPublication } from 'livekit-client';
import { TrackPublishOptions } from 'livekit-client';
import { TrackReference } from '../packages/core/dist/index.d.ts';
import { TrackReference as TrackReference_2 } from '../../../packages/core/dist/index.d.ts';
import { TrackReference as TrackReference_3 } from '../../packages/core/dist/index.d.ts';
import { TrackReferenceOrPlaceholder } from '../packages/core/dist/index.d.ts';
import { TrackReferenceOrPlaceholder as TrackReferenceOrPlaceholder_2 } from '../../../../packages/core/dist/index.d.ts';
import { TrackReferenceOrPlaceholder as TrackReferenceOrPlaceholder_3 } from '../../../packages/core/dist/index.d.ts';
import { TrackReferenceOrPlaceholder as TrackReferenceOrPlaceholder_4 } from '../../packages/core/dist/index.d.ts';
import { TrackSourceWithOptions } from '../../packages/core/dist/index.d.ts';
import { TranscriptionSegment } from 'livekit-client';
import { VideoCaptureOptions } from 'livekit-client';
import { WidgetState } from '../packages/core/dist/index.d.ts';
import { WidgetState as WidgetState_2 } from '../../packages/core/dist/index.d.ts';
import { WidgetState as WidgetState_3 } from '../../../packages/core/dist/index.d.ts';

/**
 * @beta
 */
export declare type AgentState = 'disconnected' | 'connecting' | 'initializing' | 'listening' | 'thinking' | 'speaking';

/** @public */
export declare interface AllowAudioPlaybackProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

/** @public */
export declare interface AllowMediaPlaybackProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

/**
 * This component is the default setup of a classic LiveKit audio conferencing app.
 * It provides functionality like switching between participant grid view and focus view.
 *
 * @remarks
 * The component is implemented with other LiveKit components like `FocusContextProvider`,
 * `GridLayout`, `ControlBar`, `FocusLayoutContainer` and `FocusLayout`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <AudioConference />
 * <LiveKitRoom>
 * ```
 * @public
 */
export declare function AudioConference({ ...props }: AudioConferenceProps): React_2.JSX.Element;

/** @public */
export declare interface AudioConferenceProps extends React_2.HTMLAttributes<HTMLDivElement> {
}

/**
 * The AudioTrack component is responsible for rendering participant audio tracks.
 * This component must have access to the participant's context, or alternatively pass it a `Participant` as a property.
 *
 * @example
 * ```tsx
 *   <ParticipantTile>
 *     <AudioTrack trackRef={trackRef} />
 *   </ParticipantTile>
 * ```
 *
 * @see `ParticipantTile` component
 * @public
 */
export declare const AudioTrack: (props: AudioTrackProps & React_2.RefAttributes<HTMLAudioElement>) => React_2.ReactNode;

/** @public */
export declare interface AudioTrackProps extends React_2.AudioHTMLAttributes<HTMLAudioElement> {
    /** The track reference of the track from which the audio is to be rendered. */
    trackRef?: TrackReference_2;
    onSubscriptionStatusChanged?: (subscribed: boolean) => void;
    /** Sets the volume of the audio track. By default, the range is between `0.0` and `1.0`. */
    volume?: number;
    /**
     * Mutes the audio track if set to `true`.
     * @remarks
     * If set to `true`, the server will stop sending audio track data to the client.
     * @alpha
     */
    muted?: boolean;
}

/**
 * The AudioVisualizer component is used to visualize the audio volume of a given audio track.
 * @remarks
 * Requires a `TrackReferenceOrPlaceholder` to be provided either as a property or via the `TrackRefContext`.
 * @example
 * ```tsx
 * <AudioVisualizer />
 * ```
 * @public
 * @deprecated Use BarVisualizer instead
 */
export declare const AudioVisualizer: (props: AudioVisualizerProps & React_2.RefAttributes<SVGSVGElement>) => React_2.ReactNode;

/**
 * @public
 * @deprecated Use BarVisualizer instead
 */
export declare interface AudioVisualizerProps extends React_2.HTMLAttributes<SVGElement> {
    trackRef?: TrackReference_2;
}

/**
 * @alpha
 */
export declare interface AudioWaveformOptions {
    barCount?: number;
    volMultiplier?: number;
    updateInterval?: number;
}

/**
 * Visualizes audio signals from a TrackReference as bars.
 * If the `state` prop is set, it automatically transitions between VoiceAssistant states.
 * @beta
 *
 * @remarks For VoiceAssistant state transitions this component requires a voice assistant agent running with livekit-agents \>= 0.9.0
 *
 * @example
 * ```tsx
 * function SimpleVoiceAssistant() {
 *   const { state, audioTrack } = useVoiceAssistant();
 *   return (
 *    <BarVisualizer
 *      state={state}
 *      trackRef={audioTrack}
 *    />
 *   );
 * }
 * ```
 *
 * @example
 *  Styling the BarVisualizer using CSS classes
 * ```css
 * .lk-audio-bar {
 *  // Styles for "idle" bars
 *  }
 * .lk-audio-bar.lk-highlighted {
 *  // Styles for "active" bars
 * }
 * ```
 *
 * @example
 * Styling the BarVisualizer using CSS custom properties
 * ```css
 * --lk-fg // for the "active" colour, note that this defines the main foreground colour for the whole "theme"
 * --lk-va-bg // for "idle" colour
 * ```
 *
 * @example
 * Using a custom bar template for the BarVisualizer
 * ```tsx
 * <BarVisualizer>
 *   <div className="all the classes" />
 * </BarVisualizer>
 * ```
 * the highlighted children will get a data prop of data-lk-highlighted for them to switch between active and idle bars in their own template bar
 */
export declare const BarVisualizer: React_2.ForwardRefExoticComponent<Omit<BarVisualizerProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

/**
 * @beta
 */
export declare type BarVisualizerOptions = {
    /** in percentage */
    maxHeight?: number;
    /** in percentage */
    minHeight?: number;
};

/**
 * @beta
 */
export declare interface BarVisualizerProps extends React_2.HTMLProps<HTMLDivElement> {
    /** If set, the visualizer will transition between different voice assistant states */
    state?: AgentState;
    /** Number of bars that show up in the visualizer */
    barCount?: number;
    trackRef?: TrackReferenceOrPlaceholder_3;
    options?: BarVisualizerOptions;
    /** The template component to be used in the visualizer. */
    children?: React_2.ReactNode;
}

/**
 * @internal
 */
export declare const CameraDisabledIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const CameraIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `CarouselLayout` component displays a list of tracks in a scroll container.
 * It will display as many tiles as possible and overflow the rest.
 * @remarks
 * To ensure visual stability when tiles are reordered due to track updates,
 * the component uses the `useVisualStableUpdate` hook.
 * @example
 * ```tsx
 * const tracks = useTracks([Track.Source.Camera]);
 * <CarouselLayout tracks={tracks}>
 *   <ParticipantTile />
 * </CarouselLayout>
 * ```
 * @public
 */
export declare function CarouselLayout({ tracks, orientation, ...props }: CarouselLayoutProps): React_2.JSX.Element;

/** @public */
export declare interface CarouselLayoutProps extends React_2.HTMLAttributes<HTMLMediaElement> {
    tracks: TrackReferenceOrPlaceholder_3[];
    children: React_2.ReactNode;
    /** Place the tiles vertically or horizontally next to each other.
     * If undefined orientation is guessed by the dimensions of the container. */
    orientation?: 'vertical' | 'horizontal';
}

/**
 * The Chat component provides ready-to-use chat functionality in a LiveKit room.
 * Messages are distributed to all participants in the room in real-time.
 *
 * @remarks
 * - Only users who are in the room at the time of dispatch will receive messages
 * - Message history is not persisted between sessions
 * - Requires `@livekit/components-styles` to be imported for styling
 *
 * @example
 * ```tsx
 * import '@livekit/components-styles';
 *
 * function Room() {
 *   return (
 *     <LiveKitRoom data-lk-theme="default">
 *       <Chat />
 *     </LiveKitRoom>
 *   );
 * }
 * ```
 *
 * For custom styling, refer to: https://docs.livekit.io/reference/components/react/concepts/style-components/
 *
 * @public
 */
export declare function Chat({ messageFormatter, messageDecoder, messageEncoder, channelTopic, ...props }: ChatProps): React_2.JSX.Element;

/**
 * @internal
 */
export declare const ChatCloseIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/** @internal */
declare type ChatContextAction = {
    msg: 'show_chat';
} | {
    msg: 'hide_chat';
} | {
    msg: 'toggle_chat';
} | {
    msg: 'unread_msg';
    count: number;
} | {
    msg: 'toggle_settings';
};

/**
 * The `ChatEntry` component holds and displays one chat message.
 *
 * @example
 * ```tsx
 * <Chat>
 *   <ChatEntry />
 * </Chat>
 * ```
 * @see `Chat`
 * @public
 */
export declare const ChatEntry: (props: ChatEntryProps & React_2.RefAttributes<HTMLLIElement>) => React_2.ReactNode;

/**
 * ChatEntry composes the HTML div element under the hood, so you can pass all its props.
 * These are the props specific to the ChatEntry component:
 * @public
 */
export declare interface ChatEntryProps extends React_2.HTMLAttributes<HTMLLIElement> {
    /** The chat massage object to display. */
    entry: ReceivedChatMessage_2;
    /** Hide sender name. Useful when displaying multiple consecutive chat messages from the same person. */
    hideName?: boolean;
    /** Hide message timestamp. */
    hideTimestamp?: boolean;
    /** An optional formatter for the message body. */
    messageFormatter?: MessageFormatter;
}

/**
 * @internal
 */
export declare const ChatIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

export { ChatMessage }

/** @public */
export declare interface ChatProps extends React_2.HTMLAttributes<HTMLDivElement>, ChatOptions {
    messageFormatter?: MessageFormatter;
}

/**
 * The `ChatToggle` component is a button that toggles the visibility of the `Chat` component.
 * @remarks
 * For the component to have any effect it has to live inside a `LayoutContext` context.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ToggleChat />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const ChatToggle: (props: ChatToggleProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/** @public */
export declare interface ChatToggleProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
}

/**
 * @internal
 */
export declare const Chevron: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `ClearPinButton` is a basic html button with the added ability to signal
 * the `LayoutContext` that it should display the grid view again.
 * @remarks
 * This component works only inside a `LayoutContext`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ClearPinButton>Back to grid view</ClearPinButton>
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const ClearPinButton: (props: ClearPinButtonProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/** @public */
export declare interface ClearPinButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
}

/**
 * The `ConnectionQualityIndicator` shows the individual connection quality of a participant.
 *
 * @example
 * ```tsx
 * <ConnectionQualityIndicator />
 * ```
 * @public
 */
export declare const ConnectionQualityIndicator: (props: ConnectionQualityIndicatorProps & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

/** @public */
export declare interface ConnectionQualityIndicatorOptions {
    participant?: Participant;
}

/** @public */
export declare interface ConnectionQualityIndicatorProps extends React_2.HTMLAttributes<HTMLDivElement>, ConnectionQualityIndicatorOptions {
}

/**
 * The `ConnectionState` component displays the connection status of the room as strings
 * (`"connected" | "connecting" | "disconnected" | "reconnecting"`).
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ConnectionState />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const ConnectionState: (props: ConnectionStatusProps & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

/**
 * The `ConnectionStateToast` component displays a toast
 * notification indicating the current connection state of the room.
 * @public
 */
export declare function ConnectionStateToast(props: ConnectionStateToastProps): React_2.JSX.Element;

/** @public */
export declare interface ConnectionStateToastProps extends React_2.HTMLAttributes<HTMLDivElement> {
    room?: Room;
}

/** @public */
export declare interface ConnectionStatusProps extends React_2.HTMLAttributes<HTMLDivElement> {
    /**
     * The room from which the connection status should be displayed.
     */
    room?: Room;
}

/**
 * The `ControlBar` prefab gives the user the basic user interface to control their
 * media devices (camera, microphone and screen share), open the `Chat` and leave the room.
 *
 * @remarks
 * This component is build with other LiveKit components like `TrackToggle`,
 * `DeviceSelectorButton`, `DisconnectButton` and `StartAudio`.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <ControlBar />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function ControlBar({ variation, controls, saveUserChoices, onDeviceError, ...props }: ControlBarProps): React_2.JSX.Element;

/** @public */
export declare type ControlBarControls = {
    microphone?: boolean;
    camera?: boolean;
    chat?: boolean;
    screenShare?: boolean;
    leave?: boolean;
    settings?: boolean;
};

/** @public */
export declare interface ControlBarProps extends React_2.HTMLAttributes<HTMLDivElement> {
    onDeviceError?: (error: {
        source: Track.Source;
        error: Error;
    }) => void;
    variation?: 'minimal' | 'verbose' | 'textOnly';
    controls?: ControlBarControls;
    /**
     * If `true`, the user's device choices will be persisted.
     * This will enable the user to have the same device choices when they rejoin the room.
     * @defaultValue true
     * @alpha
     */
    saveUserChoices?: boolean;
}

/**
 * The `DisconnectButton` is a basic html button with the added ability to disconnect from a LiveKit room.
 * Normally this is the big red button that allows end users to leave the video or audio call.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <DisconnectButton>Leave room</DisconnectButton>
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const DisconnectButton: (props: DisconnectButtonProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/** @public */
export declare interface DisconnectButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    stopTracks?: boolean;
}

declare type FeatureContext<T extends boolean = false> = T extends true ? FeatureFlags : FeatureFlags | undefined;

/** @internal */
export declare interface FeatureFlags {
    autoSubscription?: boolean;
}

/**
 * The `FocusLayout` component is just a light wrapper around the `ParticipantTile` to display a single participant.
 * @public
 */
export declare function FocusLayout({ trackRef, ...htmlProps }: FocusLayoutProps): React_2.JSX.Element;

/**
 * The `FocusLayoutContainer` is a layout component that expects two children:
 * A small side component: In a video conference, this is usually a carousel of participants
 * who are not in focus. And a larger main component to display the focused participant.
 * For example, with the `FocusLayout` component.
 *  @public
 */
export declare function FocusLayoutContainer(props: FocusLayoutContainerProps): React_2.JSX.Element;

/** @public */
export declare interface FocusLayoutContainerProps extends React_2.HTMLAttributes<HTMLDivElement> {
}

/** @public */
export declare interface FocusLayoutProps extends React_2.HTMLAttributes<HTMLElement> {
    /** The track to display in the focus layout. */
    trackRef?: TrackReferenceOrPlaceholder_3;
    onParticipantClick?: (evt: ParticipantClickEvent_2) => void;
}

/**
 * The `FocusToggle` puts the `ParticipantTile` in focus or removes it from focus.
 * @remarks
 * This component needs to live inside `LayoutContext` to work properly.
 *
 * @example
 * ```tsx
 * <ParticipantTile>
 *   <FocusToggle />
 * </ParticipantTile>
 * ```
 * @public
 */
export declare const FocusToggle: (props: FocusToggleProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/**
 * @internal
 */
export declare const FocusToggleIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/** @public */
export declare interface FocusToggleProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    trackRef?: TrackReferenceOrPlaceholder_3;
}

/** @public */
export declare function formatChatMessageLinks(message: string): React_2.ReactNode;

/**
 * @internal
 */
export declare const GearIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `GridLayout` component displays the nested participants in a grid where every participants has the same size.
 * It also supports pagination if there are more participants than the grid can display.
 * @remarks
 * To ensure visual stability when tiles are reordered due to track updates,
 * the component uses the `useVisualStableUpdate` hook.
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <GridLayout tracks={tracks}>
 *     <ParticipantTile />
 *   </GridLayout>
 * <LiveKitRoom>
 * ```
 * @public
 */
export declare function GridLayout({ tracks, ...props }: GridLayoutProps): React_2.JSX.Element;

export { GridLayoutDefinition }

/** @public */
export declare interface GridLayoutProps extends React_2.HTMLAttributes<HTMLDivElement>, Pick<UseParticipantsOptions, 'updateOnlyOn'> {
    children: React_2.ReactNode;
    tracks: TrackReferenceOrPlaceholder_3[];
}

export { isTrackReference }

/** @public */
export declare const LayoutContext: React_2.Context<LayoutContextType | undefined>;

/** @alpha */
export declare function LayoutContextProvider({ value, onPinChange, onWidgetChange, children, }: React_2.PropsWithChildren<LayoutContextProviderProps>): React_2.JSX.Element;

/** @alpha */
export declare interface LayoutContextProviderProps {
    value?: LayoutContextType;
    onPinChange?: (state: PinState_3) => void;
    onWidgetChange?: (state: WidgetState_3) => void;
}

/** @public */
export declare type LayoutContextType = {
    pin: PinContextType;
    widget: WidgetContextType;
};

/**
 * @internal
 */
export declare const LeaveIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `LiveKitRoom` component provides the room context to all its child components.
 * It is generally the starting point of your LiveKit app and the root of the LiveKit component tree.
 * It provides the room state as a React context to all child components, so you don't have to pass it yourself.
 *
 * @example
 * ```tsx
 * <LiveKitRoom
 *  token='<livekit-token>'
 *  serverUrl='<url-to-livekit-server>'
 *  connect={true}
 * >
 *     ...
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const LiveKitRoom: (props: React_2.PropsWithChildren<LiveKitRoomProps> & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

/** @public */
export declare interface LiveKitRoomProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'onError'> {
    /**
     * URL to the LiveKit server.
     * For example: `wss://<domain>.livekit.cloud`
     * To simplify the implementation, `undefined` is also accepted as an intermediate value, but only with a valid string url can the connection be established.
     */
    serverUrl: string | undefined;
    /**
     * A user specific access token for a client to authenticate to the room.
     * This token is necessary to establish a connection to the room.
     * To simplify the implementation, `undefined` is also accepted as an intermediate value, but only with a valid string token can the connection be established.
     *
     * @see https://docs.livekit.io/cloud/project-management/keys-and-tokens/#generating-access-tokens
     */
    token: string | undefined;
    /**
     * Publish audio immediately after connecting to your LiveKit room.
     * @defaultValue `false`
     * @see https://docs.livekit.io/client-sdk-js/interfaces/AudioCaptureOptions.html
     */
    audio?: AudioCaptureOptions | boolean;
    /**
     * Publish video immediately after connecting to your LiveKit room.
     * @defaultValue `false`
     * @see https://docs.livekit.io/client-sdk-js/interfaces/VideoCaptureOptions.html
     */
    video?: VideoCaptureOptions | boolean;
    /**
     * Publish screen share immediately after connecting to your LiveKit room.
     * @defaultValue `false`
     * @see https://docs.livekit.io/client-sdk-js/interfaces/ScreenShareCaptureOptions.html
     */
    screen?: ScreenShareCaptureOptions | boolean;
    /**
     * If set to true a connection to LiveKit room is initiated.
     * @defaultValue `true`
     */
    connect?: boolean;
    /**
     * Options for when creating a new room.
     * When you pass your own room instance to this component, these options have no effect.
     * Instead, set the options directly in the room instance.
     *
     * @see https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html
     */
    options?: RoomOptions;
    /**
     * Define options how to connect to the LiveKit server.
     *
     * @see https://docs.livekit.io/client-sdk-js/interfaces/RoomConnectOptions.html
     */
    connectOptions?: RoomConnectOptions;
    onConnected?: () => void;
    onDisconnected?: (reason?: DisconnectReason) => void;
    onError?: (error: Error) => void;
    onMediaDeviceFailure?: (failure?: MediaDeviceFailure) => void;
    onEncryptionError?: (error: Error) => void;
    /**
     * Optional room instance.
     * By passing your own room instance you overwrite the `options` parameter,
     * make sure to set the options directly on the room instance itself.
     */
    room?: Room;
    simulateParticipants?: number | undefined;
    /**
     * @internal
     */
    featureFlags?: FeatureFlags;
}

/** @internal */
export declare const LKFeatureContext: React_2.Context<FeatureFlags | undefined>;

export { LocalUserChoices }

/**
 * @internal
 */
export declare const LockLockedIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `MediaDeviceMenu` component is a button that opens a menu that lists
 * all media devices and allows the user to select them.
 *
 * @remarks
 * This component is implemented with the `MediaDeviceSelect` LiveKit components.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <MediaDeviceMenu />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function MediaDeviceMenu({ kind, initialSelection, onActiveDeviceChange, tracks, requestPermissions, ...props }: MediaDeviceMenuProps): React_2.JSX.Element;

/** @public */
export declare interface MediaDeviceMenuProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: MediaDeviceKind;
    initialSelection?: string;
    onActiveDeviceChange?: (kind: MediaDeviceKind, deviceId: string) => void;
    tracks?: Partial<Record<MediaDeviceKind, LocalAudioTrack | LocalVideoTrack | undefined>>;
    /**
     * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
     * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
     * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
     * appropriate permissions.
     *
     * @see {@link PreJoin}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
     */
    requestPermissions?: boolean;
}

/**
 * The `MediaDeviceSelect` list all media devices of one kind.
 * Clicking on one of the listed devices make it the active media device.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <MediaDeviceSelect kind='audioinput' />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const MediaDeviceSelect: (props: MediaDeviceSelectProps & React_2.RefAttributes<HTMLUListElement>) => React_2.ReactNode;

/** @public */
export declare interface MediaDeviceSelectProps extends Omit<React_2.HTMLAttributes<HTMLUListElement>, 'onError'> {
    kind: MediaDeviceKind;
    onActiveDeviceChange?: (deviceId: string) => void;
    onDeviceListChange?: (devices: MediaDeviceInfo[]) => void;
    onDeviceSelectError?: (e: Error) => void;
    initialSelection?: string;
    /** will force the browser to only return the specified device
     * will call `onDeviceSelectError` with the error in case this fails
     */
    exactMatch?: boolean;
    track?: LocalAudioTrack | LocalVideoTrack;
    /**
     * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
     * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
     * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
     * appropriate permissions.
     *
     * @see {@link MediaDeviceMenu}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
     */
    requestPermissions?: boolean;
    onError?: (e: Error) => void;
}

export { MessageDecoder }

export { MessageEncoder }

/** @public */
export declare type MessageFormatter = (message: string) => React_2.ReactNode;

/**
 * @internal
 */
export declare const MicDisabledIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const MicIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * Interface for configuring options for the useMultibandTrackVolume hook.
 * @alpha
 */
export declare interface MultiBandTrackVolumeOptions {
    bands?: number;
    /**
     * cut off of frequency bins on the lower end
     * Note: this is not a frequency measure, but in relation to analyserOptions.fftSize,
     */
    loPass?: number;
    /**
     * cut off of frequency bins on the higher end
     * Note: this is not a frequency measure, but in relation to analyserOptions.fftSize,
     */
    hiPass?: number;
    /**
     * update should run every x ms
     */
    updateInterval?: number;
    analyserOptions?: AnalyserOptions;
}

/**
 * The `ParticipantAudioTile` component is the base utility wrapper for displaying a visual representation of a participant.
 * This component can be used as a child of the `TileLoop` or independently if a participant is passed as a property.
 *
 * @example
 * ```tsx
 * <ParticipantAudioTile />
 * ```
 * @public
 */
export declare const ParticipantAudioTile: (props: ParticipantTileProps & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

export { ParticipantClickEvent }

/** @public */
export declare const ParticipantContext: React_2.Context<Participant | undefined>;

/**
 * The `ParticipantContextIfNeeded` component only creates a `ParticipantContext`
 * if there is no `ParticipantContext` already.
 * @example
 * ```tsx
 * <ParticipantContextIfNeeded participant={trackReference.participant}>
 *  ...
 * </ParticipantContextIfNeeded>
 * ```
 * @public
 */
export declare function ParticipantContextIfNeeded(props: React_2.PropsWithChildren<{
    participant?: Participant;
}>): React_2.JSX.Element;

export { ParticipantIdentifier }

/**
 * The `ParticipantLoop` component loops over an array of participants to create a context for every participant.
 * This component takes exactly one child component as a template.
 * By providing your own template as a child you have full control over the look and feel of your participant representations.
 *
 * @remarks
 * If you want to loop over individual tracks instead of participants, you can use the `TrackLoop` component.
 *
 * @example
 * ```tsx
 * const participants = useParticipants();
 * <ParticipantLoop participants={participants}>
 *   <ParticipantName />
 * </ParticipantLoop>
 * ```
 * @public
 */
export declare function ParticipantLoop({ participants, ...props }: ParticipantLoopProps): React_2.JSX.Element;

/** @public */
export declare interface ParticipantLoopProps {
    /** The participants to loop over. Use `useParticipants()` hook to get participants. */
    participants: Participant[];
    /** The template component to be used in the loop. */
    children: React_2.ReactNode;
}

/**
 * The `ParticipantName` component displays the name of the participant as a string within an HTML span element.
 * If no participant name is undefined the participant identity string is displayed.
 *
 * @example
 * ```tsx
 * <ParticipantName />
 * ```
 * @public
 */
export declare const ParticipantName: (props: ParticipantNameProps & React_2.RefAttributes<HTMLSpanElement>) => React_2.ReactNode;

/** @public */
export declare interface ParticipantNameProps extends React_2.HTMLAttributes<HTMLSpanElement>, UseParticipantInfoOptions {
}

/**
 * @internal
 */
export declare const ParticipantPlaceholder: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `ParticipantTile` component is the base utility wrapper for displaying a visual representation of a participant.
 * This component can be used as a child of the `TrackLoop` component or by passing a track reference as property.
 *
 * @example Using the `ParticipantTile` component with a track reference:
 * ```tsx
 * <ParticipantTile trackRef={trackRef} />
 * ```
 * @example Using the `ParticipantTile` component as a child of the `TrackLoop` component:
 * ```tsx
 * <TrackLoop>
 *  <ParticipantTile />
 * </TrackLoop>
 * ```
 * @public
 */
export declare const ParticipantTile: (props: ParticipantTileProps & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

/** @public */
export declare interface ParticipantTileProps extends React_2.HTMLAttributes<HTMLDivElement> {
    /** The track reference to display. */
    trackRef?: TrackReferenceOrPlaceholder_3;
    disableSpeakingIndicator?: boolean;
    onParticipantClick?: (event: ParticipantClickEvent_2) => void;
}

/** @internal */
declare type PinAction = {
    msg: 'set_pin';
    trackReference: TrackReferenceOrPlaceholder_4;
} | {
    msg: 'clear_pin';
};

/** @internal */
declare type PinContextType = {
    dispatch?: React_2.Dispatch<PinAction>;
    state?: PinState_2;
};

export { PinState }

/**
 * The `PreJoin` prefab component is normally presented to the user before he enters a room.
 * This component allows the user to check and select the preferred media device (camera und microphone).
 * On submit the user decisions are returned, which can then be passed on to the `LiveKitRoom` so that the user enters the room with the correct media devices.
 *
 * @remarks
 * This component is independent of the `LiveKitRoom` component and should not be nested within it.
 * Because it only accesses the local media tracks this component is self-contained and works without connection to the LiveKit server.
 *
 * @example
 * ```tsx
 * <PreJoin />
 * ```
 * @public
 */
export declare function PreJoin({ defaults, onValidate, onSubmit, onError, debug, joinLabel, micLabel, camLabel, userLabel, persistUserChoices, videoProcessor, ...htmlProps }: PreJoinProps): React_2.JSX.Element;

/**
 * Props for the PreJoin component.
 * @public
 */
export declare interface PreJoinProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'onSubmit' | 'onError'> {
    /** This function is called with the `LocalUserChoices` if validation is passed. */
    onSubmit?: (values: LocalUserChoices_2) => void;
    /**
     * Provide your custom validation function. Only if validation is successful the user choices are past to the onSubmit callback.
     */
    onValidate?: (values: LocalUserChoices_2) => boolean;
    onError?: (error: Error) => void;
    /** Prefill the input form with initial values. */
    defaults?: Partial<LocalUserChoices_2>;
    /** Display a debug window for your convenience. */
    debug?: boolean;
    joinLabel?: string;
    micLabel?: string;
    camLabel?: string;
    userLabel?: string;
    /**
     * If true, user choices are persisted across sessions.
     * @defaultValue true
     * @alpha
     */
    persistUserChoices?: boolean;
    videoProcessor?: TrackProcessor<Track.Kind.Video>;
}

/**
 * @internal
 */
export declare const QualityExcellentIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const QualityGoodIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const QualityPoorIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const QualityUnknownIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

export { ReceivedChatMessage }

/**
 * The `RoomAudioRenderer` component is a drop-in solution for adding audio to your LiveKit app.
 * It takes care of handling remote participants’ audio tracks and makes sure that microphones and screen share are audible.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <RoomAudioRenderer />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare function RoomAudioRenderer({ volume, muted }: RoomAudioRendererProps): React_2.JSX.Element;

/** @public */
export declare interface RoomAudioRendererProps {
    /** Sets the volume for all audio tracks rendered by this component. By default, the range is between `0.0` and `1.0`. */
    volume?: number;
    /**
     * If set to `true`, mutes all audio tracks rendered by the component.
     * @remarks
     * If set to `true`, the server will stop sending audio track data to the client.
     * @alpha
     */
    muted?: boolean;
}

/** @public */
export declare const RoomContext: React_2.Context<Room | undefined>;

/**
 * The `RoomName` component renders the name of the connected LiveKit room inside a span tag.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <RoomName />
 * </LiveKitRoom>
 * ```
 * @public
 *
 * @param props - RoomNameProps
 */
export declare const RoomName: React_2.FC<RoomNameProps & React_2.RefAttributes<HTMLSpanElement>>;

/** @public */
export declare interface RoomNameProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    childrenPosition?: 'before' | 'after';
}

/**
 * @internal
 */
export declare const ScreenShareIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * @internal
 */
export declare const ScreenShareStopIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

export { setLogExtension }

export { setLogLevel }

/**
 * @internal
 */
export declare const SpinnerIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * The `StartAudio` component is only visible when the browser blocks audio playback. This is due to some browser implemented autoplay policies.
 * To start audio playback, the user must perform a user-initiated event such as clicking this button.
 * As soon as audio playback starts, the button hides itself again.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <StartAudio label="Click to allow audio playback" />
 * </LiveKitRoom>
 * ```
 *
 * @see Autoplay policy on MDN web docs: {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy}
 * @public
 */
export declare const StartAudio: (props: AllowAudioPlaybackProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/**
 * The `StartMediaButton` component is only visible when the browser blocks media playback. This is due to some browser implemented autoplay policies.
 * To start media playback, the user must perform a user-initiated event such as clicking this button.
 * As soon as media playback starts, the button hides itself again.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <StartMediaButton label="Click to allow media playback" />
 * </LiveKitRoom>
 * ```
 *
 * @see Autoplay policy on MDN web docs: {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy}
 * @public
 */
export declare const StartMediaButton: (props: AllowMediaPlaybackProps & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

export { TextStreamData }

/**
 * The `Toast` component is a rudimentary way to display a message to the user.
 * This message should be short lived and not require user interaction.
 * For example, displaying the current connection state like `ConnectionStateToast` does.
 *
 * @example
 * ```tsx
 * <Toast>Connecting...</Toast>
 * ```
 * @public
 */
export declare function Toast(props: React_2.HTMLAttributes<HTMLDivElement>): React_2.JSX.Element;

/**
 * The `TrackLoop` component loops over tracks. It is for example a easy way to loop over all participant camera and screen share tracks.
 * `TrackLoop` creates a `TrackRefContext` for each track that you can use to e.g. render the track.
 *
 * @example
 * ```tsx
 * const trackRefs = useTracks([Track.Source.Camera]);
 * <TrackLoop tracks={trackRefs} >
 *  <TrackRefContext.Consumer>
 *    {(trackRef) => trackRef && <VideoTrack trackRef={trackRef}/>}
 *  </TrackRefContext.Consumer>
 * </TrackLoop>
 * ```
 * @public
 */
export declare function TrackLoop({ tracks, ...props }: TrackLoopProps): React_2.JSX.Element;

/** @public */
export declare interface TrackLoopProps {
    /** Track references to loop over. You can the use `useTracks()` hook to get TrackReferences. */
    tracks: TrackReference_3[] | TrackReferenceOrPlaceholder_4[];
    /** The template component to be used in the loop. */
    children: React_2.ReactNode;
}

/**
 * The `TrackMutedIndicator` shows whether the participant's camera or microphone is muted or not.
 * By default, a muted/unmuted icon is displayed for a camera, microphone, and screen sharing track.
 *
 * @example
 * ```tsx
 * <TrackMutedIndicator trackRef={trackRef} />
 * ```
 * @public
 */
export declare const TrackMutedIndicator: (props: TrackMutedIndicatorProps & React_2.RefAttributes<HTMLDivElement>) => React_2.ReactNode;

/** @public */
export declare interface TrackMutedIndicatorProps extends React_2.HTMLAttributes<HTMLDivElement> {
    trackRef: TrackReferenceOrPlaceholder_3;
    show?: 'always' | 'muted' | 'unmuted';
}

declare interface TrackMutedIndicatorReturnType {
    isMuted: boolean;
    className: string;
}

/**
 * This context provides a `TrackReferenceOrPlaceholder` to all child components.
 * @public
 */
export declare const TrackRefContext: React_2.Context<TrackReferenceOrPlaceholder_4 | undefined>;

/**
 * Only create a `TrackRefContext` if there is no `TrackRefContext` already.
 * @internal
 */
export declare function TrackRefContextIfNeeded(props: React_2.PropsWithChildren<{
    trackRef?: TrackReferenceOrPlaceholder_3;
}>): React_2.JSX.Element;

export { TrackReference }

export { TrackReferenceOrPlaceholder }

/**
 * With the `TrackToggle` component it is possible to mute and unmute your camera and microphone.
 * The component uses an html button element under the hood so you can treat it like a button.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <TrackToggle source={Track.Source.Microphone} />
 *   <TrackToggle source={Track.Source.Camera} />
 * </LiveKitRoom>
 * ```
 * @public
 */
export declare const TrackToggle: <T extends ToggleSource>(props: TrackToggleProps<T> & React_2.RefAttributes<HTMLButtonElement>) => React_2.ReactNode;

/** @public */
export declare interface TrackToggleProps<T extends ToggleSource> extends Omit<React_2.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    source: T;
    showIcon?: boolean;
    initialState?: boolean;
    /**
     * Function that is called when the enabled state of the toggle changes.
     * The second function argument `isUserInitiated` is `true` if the change was initiated by a user interaction, such as a click.
     */
    onChange?: (enabled: boolean, isUserInitiated: boolean) => void;
    captureOptions?: CaptureOptionsBySource<T>;
    publishOptions?: TrackPublishOptions;
    onDeviceError?: (error: Error) => void;
}

/**
 * @alpha
 */
export declare interface TrackTranscriptionOptions {
    /**
     * how many transcription segments should be buffered in state
     * @defaultValue 100
     */
    bufferSize?: number;
    /**
     * optional callback for retrieving newly incoming transcriptions only
     */
    onTranscription?: (newSegments: TranscriptionSegment[]) => void;
}

/**
 * @internal
 */
export declare const UnfocusToggleIcon: (props: SVGProps<SVGSVGElement>) => React_2.JSX.Element;

/**
 * In many browsers to start audio playback, the user must perform a user-initiated event such as clicking a button.
 * The `useAudioPlayback` hook returns an object with a boolean `canPlayAudio` flag that indicates whether audio
 * playback is allowed in the current context, as well as a `startAudio` function that can be called in a button
 * `onClick` callback to start audio playback in the current context.
 *
 * @see Autoplay policy on MDN web docs for more info: {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy}
 * @alpha
 */
export declare function useAudioPlayback(room?: Room): {
    canPlayAudio: boolean;
    startAudio: () => Promise<void>;
};

/**
 * @alpha
 */
export declare function useAudioWaveform(trackOrTrackReference?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder_4, options?: AudioWaveformOptions): {
    bars: number[];
};

/**
 * The `useChat` hook provides chat functionality for a LiveKit room.
 *
 * @remarks
 * Message history is not persisted and will be lost if the component is refreshed.
 * You may want to persist message history in the browser, a cache or a database.
 *
 * @returns An object containing:
 * - `chatMessages` - Array of received chat messages
 * - `send` - Function to send a new message
 * - `isSending` - Boolean indicating if a message is currently being sent
 *
 * @example
 * ```tsx
 * function ChatComponent() {
 *   const { chatMessages, send, isSending } = useChat();
 *
 *   return (
 *     <div>
 *       {chatMessages.map((msg) => (
 *         <div key={msg.timestamp}>
 *           {msg.from?.identity}: {msg.message}
 *         </div>
 *       ))}
 *       <button disabled={isSending} onClick={() => send("Hello!")}>
 *         Send Message
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 * @public
 */
export declare function useChat(options?: ChatOptions): {
    send: (message: string, options?: SendTextOptions) => Promise<ReceivedChatMessage_2>;
    chatMessages: ReceivedChatMessage_2[];
    isSending: boolean;
};

/**
 * The `useChatToggle` hook provides state and functions for toggling the chat window.
 * @remarks
 * Depends on the `LayoutContext` to work properly.
 * @see {@link ChatToggle}, {@link Chat}
 * @public
 */
export declare function useChatToggle({ props }: UseChatToggleProps): {
    mergedProps: React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: () => void;
        'aria-pressed': string;
        'data-lk-unread-msgs': string;
    };
};

/** @public */
export declare interface UseChatToggleProps {
    props: React_2.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * The `useClearPinButton` hook provides props for the {@link ClearPinButton}
 * or your custom implementation of it component. It adds the `onClick` handler
 * to signal the `LayoutContext` that the tile in focus should be cleared.
 * @public
 */
export declare function useClearPinButton(props: ClearPinButtonProps): {
    buttonProps: ClearPinButtonProps & {
        className: string;
        disabled: boolean;
        onClick: () => void;
    };
};

/**
 * The `useConnectionQualityIndicator` hook provides props for the `ConnectionQualityIndicator` or your custom implementation of it component.
 * @example
 * ```tsx
 * const { quality } = useConnectionQualityIndicator();
 * // or
 * const { quality } = useConnectionQualityIndicator({ participant });
 * ```
 * @public
 */
export declare function useConnectionQualityIndicator(options?: ConnectionQualityIndicatorOptions): {
    className: "lk-connection-quality";
    quality: ConnectionQuality;
};

/**
 * The `useConnectionState` hook allows you to simply implement your own `ConnectionState` component.
 *
 * @example
 * ```tsx
 * const connectionState = useConnectionState(room);
 * ```
 * @public
 */
export declare function useConnectionState(room?: Room): ConnectionState_2;

/** @public */
export declare function useCreateLayoutContext(): LayoutContextType;

/**
 * The `useDataChannel` hook returns the ability to send and receive messages.
 * By optionally passing a `topic`, you can narrow down which messages are returned in the messages array.
 * @remarks
 * There is only one data channel. Passing a `topic` does not open a new data channel.
 * It is only used to filter out messages with no or a different `topic`.
 *
 * @example
 * ```tsx
 * // Send messages to all participants via the 'chat' topic.
 * const { message: latestMessage, send } = useDataChannel('chat', (msg) => console.log("message received", msg));
 * ```
 * @public
 */
export declare function useDataChannel<T extends string>(topic: T, onMessage?: (msg: ReceivedDataMessage<T>) => void): UseDataChannelReturnType<T>;

/**
 * The `useDataChannel` hook returns the ability to send and receive messages.
 * @remarks
 * There is only one data channel. Passing a `topic` does not open a new data channel.
 * It is only used to filter out messages with no or a different `topic`.
 *
 * @example
 * ```tsx
 * // Send messages to all participants
 * const { message: latestMessage, send } = useDataChannel('chat', (msg) => console.log("message received", msg));
 * ```
 * @public
 */
export declare function useDataChannel(onMessage?: (msg: ReceivedDataMessage) => void): UseDataChannelReturnType;

declare type UseDataChannelReturnType<T extends string | undefined = undefined> = {
    isSending: boolean;
    send: (payload: Uint8Array, options: DataPublishOptions) => Promise<void>;
    message: ReceivedDataMessage<T> | undefined;
};

/**
 * The `useDisconnectButton` hook is used to implement the `DisconnectButton` or your
 * custom implementation of it. It adds onClick handler to the button to disconnect
 * from the room.
 *
 * @example
 * ```tsx
 * const { buttonProps } = useDisconnectButton(buttonProps);
 * return <button {...buttonProps}>Disconnect</button>;
 * ```
 * @public
 */
export declare function useDisconnectButton(props: DisconnectButtonProps): {
    buttonProps: DisconnectButtonProps & {
        className: string;
        onClick: () => void;
        disabled: boolean;
    };
};

/** @public */
export declare function useEnsureCreateLayoutContext(layoutContext?: LayoutContextType): LayoutContextType;

/**
 * Ensures that a layout context is provided, either via context or explicitly as a parameter.
 * If not inside a `LayoutContext` and no layout context is provided, an error is thrown.
 * @public
 */
export declare function useEnsureLayoutContext(layoutContext?: LayoutContextType): LayoutContextType;

/**
 * Ensures that a participant is provided, either via context or explicitly as a parameter.
 * If not inside a `ParticipantContext` and no participant is provided, an error is thrown.
 * @public
 */
export declare function useEnsureParticipant(participant?: Participant): Participant;

/**
 * Ensures that a room is provided, either via context or explicitly as a parameter.
 * If no room is provided, an error is thrown.
 * @public
 */
export declare function useEnsureRoom(room?: Room): Room;

/**
 * Ensures that a track reference is provided, either via context or explicitly as a parameter.
 * If not inside a `TrackRefContext` and no track reference is provided, an error is thrown.
 * @public
 */
export declare function useEnsureTrackRef(trackRef?: TrackReferenceOrPlaceholder_4): TrackReferenceOrPlaceholder_4;

/**
 * Try to determine the `facingMode` of a local participant video track.
 * @remarks
 * Works only on local video tracks.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode | MDN docs on facingMode}
 * @alpha
 */
export declare function useFacingMode(trackReference: TrackReferenceOrPlaceholder_4): 'user' | 'environment' | 'left' | 'right' | 'undefined';

/**
 * @internal
 */
export declare function useFeatureContext<T extends boolean>(require?: T): FeatureContext<T>;

/**
 * The `useFocusToggle` hook is used to implement the `FocusToggle` or your custom implementation of it.
 * The `TrackReferenceOrPlaceholder` is used to register a onClick handler and to identify the track to focus on.
 *
 * @example
 * ```tsx
 * const { mergedProps, inFocus } = useFocusToggle({ trackRef, props: yourButtonProps });
 * return <button {...mergedProps}>{inFocus ? 'Unfocus' : 'Focus'}</button>;
 * ```
 * @public
 */
export declare function useFocusToggle({ trackRef, props }: UseFocusToggleProps): {
    mergedProps: React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: (event: React_2.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
    inFocus: boolean;
};

/** @public */
export declare interface UseFocusToggleProps {
    trackRef?: TrackReferenceOrPlaceholder_4;
    props: React_2.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * The `useGridLayout` hook tries to select the best layout to fit all tiles.
 * If the available screen space is not enough, it will reduce the number of maximum visible
 * tiles and select a layout that still works visually within the given limitations.
 * As the order of tiles changes over time, the hook tries to keep visual updates to a minimum
 * while trying to display important tiles such as speaking participants or screen shares.
 *
 * @example
 * ```tsx
 * const { layout } = useGridLayout(gridElement, trackCount);
 * ```
 * @public
 */
export declare function useGridLayout(
/** HTML element that contains the grid. */
gridElement: React_2.RefObject<HTMLDivElement>, 
/** Count of tracks that should get layed out */
trackCount: number, options?: {
    gridLayouts?: GridLayoutDefinition_2[];
}): {
    layout: GridLayoutInfo;
    containerWidth: number;
    containerHeight: number;
};

/**
 * @alpha
 */
export declare function useIsEncrypted(participant?: Participant, options?: UseIsEncryptedOptions): boolean;

/**
 * @alpha
 */
export declare interface UseIsEncryptedOptions {
    room?: Room;
}

/**
 * The `useIsMuted` hook is used to implement the `TrackMutedIndicator` or your custom implementation of it.
 * It returns a `boolean` that indicates if the track is muted or not.
 *
 * @example With a track reference
 * ```tsx
 * const isMuted = useIsMuted(track);
 * ```
 *
 * @example With a track source / participant
 * ```tsx
 * const isMuted = useIsMuted('camera', { participant });
 * ```
 *
 * @param sourceOrTrackRef - Either a `TrackReference` or a `Track.Source` (see usage examples)
 * @param options - Additional options when using a `Track.Source`
 * @returns boolean indicating if the track is muted
 *
 * @public
 */
export declare function useIsMuted(trackRef: TrackReferenceOrPlaceholder_4): boolean;

/** @public */
export declare interface UseIsMutedOptions {
    participant?: Participant;
}

/**
 * The `useIsRecording` hook returns a `boolean` that indicates if the room is currently being recorded.
 * @example
 * ```tsx
 * const isRecording = useIsRecording();
 * ```
 * @public
 */
export declare function useIsRecording(room?: Room): boolean;

/**
 * The `useIsSpeaking` hook returns a `boolean` that indicates if the participant is speaking or not.
 * @example
 * ```tsx
 * const isSpeaking = useIsSpeaking(participant);
 * ```
 * @public
 */
export declare function useIsSpeaking(participant?: Participant): boolean;

/**
 * Enable the Krisp enhanced noise cancellation feature for local audio tracks.
 *
 * Defaults to the localParticipant's microphone track publication, but you can override this behavior by passing in a different track reference.
 *
 * @package \@livekit/components-react/krisp
 * @remarks This filter requires that you install the `@livekit/krisp-noise-filter` package and is supported only on {@link https://cloud.livekit.io | LiveKit Cloud}.
 * @beta
 * @example
 * ```tsx
 * const krisp = useKrispNoiseFilter();
 * return <input
 *   type="checkbox"
 *   onChange={(ev) => krisp.setNoiseFilterEnabled(ev.target.checked)}
 *   checked={krisp.isNoiseFilterEnabled}
 *   disabled={krisp.isNoiseFilterPending}
 * />
 * ```
 * @returns Use `setIsNoiseFilterEnabled` to enable/disable the noise filter.
 */
export declare function useKrispNoiseFilter(options?: useKrispNoiseFilterOptions): {
    setNoiseFilterEnabled: (enable: boolean) => Promise<void>;
    isNoiseFilterEnabled: boolean;
    isNoiseFilterPending: boolean;
    processor: KrispNoiseFilterProcessor | undefined;
};

/**
 * @beta
 */
export declare interface useKrispNoiseFilterOptions {
    /**
     * The track reference to use for the noise filter (defaults: local microphone track)
     */
    trackRef?: TrackReferenceOrPlaceholder_2;
    /**
     * @internal
     */
    filterOptions?: NoiseFilterOptions;
}

/**
 * Ensures that a layout context is provided via context.
 * If no layout context is provided, an error is thrown.
 * @public
 */
export declare function useLayoutContext(): LayoutContextType;

/**
 * The `useLiveKitRoom` hook is used to implement the `LiveKitRoom` or your custom implementation of it.
 * It returns a `Room` instance and HTML props that should be applied to the root element of the component.
 *
 * @example
 * ```tsx
 * const { room, htmlProps } = useLiveKitRoom();
 * return <div {...htmlProps}>...</div>;
 * ```
 * @public
 */
export declare function useLiveKitRoom<T extends HTMLElement>(props: LiveKitRoomProps): {
    room: Room | undefined;
    htmlProps: HTMLAttributes<T>;
};

/**
 * The `useLocalParticipant` hook returns the local participant and the associated state
 * around the participant.
 *
 * @example
 * ```tsx
 * const { localParticipant } = useLocalParticipant();
 * ```
 * @public
 */
export declare function useLocalParticipant(options?: UseLocalParticipantOptions): {
    isMicrophoneEnabled: boolean;
    isScreenShareEnabled: boolean;
    isCameraEnabled: boolean;
    microphoneTrack: TrackPublication | undefined;
    cameraTrack: TrackPublication | undefined;
    lastMicrophoneError: Error | undefined;
    lastCameraError: Error | undefined;
    localParticipant: LocalParticipant;
};

/** @public */
export declare interface UseLocalParticipantOptions {
    /**
     * The room to use. If not provided, the hook will use the room from the context.
     */
    room?: Room;
}

/**
 * The `useLocalParticipantPermissions` hook returns the local participant's permissions.
 *
 * @example
 * ```tsx
 * const { canPublish, canPublishData } = useLocalParticipantPermissions();
 * ```
 * @public
 */
export declare function useLocalParticipantPermissions(): ParticipantPermission | undefined;

/**
 * Returns a layout context from the `LayoutContext` if it exists, otherwise `undefined`.
 * @public
 */
export declare function useMaybeLayoutContext(): LayoutContextType | undefined;

/**
 * Returns a participant from the `ParticipantContext` if it exists, otherwise `undefined`.
 * @public
 */
export declare function useMaybeParticipantContext(): Participant | undefined;

/**
 * Returns the room context if it exists, otherwise undefined.
 * @public
 */
export declare function useMaybeRoomContext(): Room | undefined;

/**
 * Returns a track reference from the `TrackRefContext` if it exists, otherwise `undefined`.
 * @public
 */
export declare function useMaybeTrackRefContext(): TrackReferenceOrPlaceholder_4 | undefined;

/**
 * The `useMediaDevices` hook returns the list of media devices of a given kind.
 *
 * @example
 * ```tsx
 * const videoDevices = useMediaDevices({ kind: 'videoinput' });
 * const audioDevices = useMediaDevices({ kind: 'audioinput' });
 * ```
 * @public
 */
export declare function useMediaDevices({ kind, onError, }: {
    kind: MediaDeviceKind;
    onError?: (e: Error) => void;
}): MediaDeviceInfo[];

/**
 * The `useMediaDeviceSelect` hook is used to implement the `MediaDeviceSelect` component and
 * returns o.a. the list of devices of a given kind (audioinput or videoinput), the currently active device
 * and a function to set the the active device.
 *
 * @example
 * ```tsx
 * const { devices, activeDeviceId, setActiveMediaDevice } = useMediaDeviceSelect({kind: 'audioinput'});
 * ```
 * @public
 */
export declare function useMediaDeviceSelect({ kind, room, track, requestPermissions, onError, }: UseMediaDeviceSelectProps): {
    devices: MediaDeviceInfo[];
    className: string;
    activeDeviceId: string;
    setActiveMediaDevice: (id: string, options?: SetMediaDeviceOptions) => Promise<void>;
};

/** @public */
export declare interface UseMediaDeviceSelectProps {
    kind: MediaDeviceKind;
    room?: Room;
    track?: LocalAudioTrack | LocalVideoTrack;
    /**
     * this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels.
     * in some browsers multiple calls to getUserMedia result in multiple permission prompts.
     * It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the
     * appropriate permissions.
     *
     * @see {@link MediaDeviceMenu}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices | MDN enumerateDevices}
     */
    requestPermissions?: boolean;
    /**
     * this callback gets called if an error is thrown when failing to select a device and also if a user
     * denied permissions, eventhough the `requestPermissions` option is set to `true`.
     * Most commonly this will emit a MediaDeviceError
     */
    onError?: (e: Error) => void;
}

/**
 * Hook for tracking the volume of an audio track across multiple frequency bands using the Web Audio API.
 * @alpha
 */
export declare function useMultibandTrackVolume(trackOrTrackReference?: LocalAudioTrack | RemoteAudioTrack | TrackReferenceOrPlaceholder_4, options?: MultiBandTrackVolumeOptions): number[];

/**
 * The `usePagination` hook implements simple pagination logic for use with arrays.
 * @example
 * ```tsx
 * const tracks = useTracks();
 * const pagination = usePagination(4, tracks);
 *
 * <TrackLoop tracks={pagination.tracks} />
 * ```
 * @alpha
 */
export declare function usePagination(itemPerPage: number, trackReferences: TrackReferenceOrPlaceholder_4[]): {
    totalPageCount: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (num: number) => void;
    firstItemIndex: number;
    lastItemIndex: number;
    tracks: TrackReferenceOrPlaceholder_4[];
    currentPage: number;
};

/**
 * The `useParticipantAttribute` hook returns the latest value of a given attribute key of a participant.
 * It requires a `Participant` object passed as property in the `UseParticipantAttributesOptions` or via the `ParticipantContext`.
 *
 * @example
 * ```tsx
 * const myAttributeValue = useParticipantAttribute('targetAttributeName');
 * ```
 * @public
 */
export declare function useParticipantAttribute(attributeKey: string, options?: UseParticipantAttributesOptions): string;

/** @public */
export declare function useParticipantAttributes(props?: UseParticipantAttributesOptions): {
    attributes: Readonly<Record<string, string>> | undefined;
};

/**
 * The `useParticipantAttributes` hook returns the attributes of a given participant and allows to set them.
 * It requires a `Participant` object passed as property or via the `ParticipantContext`.
 *
 * @example
 * ```tsx
 * const { attributes } = useParticipantAttributes({ participant });
 * ```
 * @public
 */
export declare interface UseParticipantAttributesOptions {
    participant?: Participant;
}

/**
 * Ensures that a participant is provided via context.
 * If not inside a `ParticipantContext`, an error is thrown.
 * @public
 */
export declare function useParticipantContext(): Participant;

/** @public */
export declare function useParticipantInfo(props?: UseParticipantInfoOptions): {
    identity: string | undefined;
    name: string | undefined;
    metadata: string | undefined;
};

/**
 * The `useParticipantInfo` hook returns the identity, name, and metadata of a given participant.
 * It requires a `Participant` object passed as property or via the `ParticipantContext`.
 *
 * @example
 * ```tsx
 * const { identity, name, metadata } = useParticipantInfo({ participant });
 * ```
 * @public
 */
export declare interface UseParticipantInfoOptions {
    participant?: Participant;
}

/** @public */
export declare function useParticipantPermissions(options?: UseParticipantPermissionsOptions): ParticipantPermission | undefined;

/**
 * The `useParticipantPermissions` hook returns the permissions of a given participant.
 *
 * @example
 * ```tsx
 * const permissions = useParticipantPermissions({ participant });
 * ```
 * @public
 */
export declare interface UseParticipantPermissionsOptions {
    participant?: Participant;
}

/**
 * The `useParticipants` hook returns all participants (local and remote) of the current room.
 * @remarks
 * To optimize performance, you can use the `updateOnlyOn` property to decide on what `RoomEvents` the hook updates.
 *
 * @example
 * ```tsx
 * const participants = useParticipants();
 * <ParticipantLoop participants={participants}>
 *  <ParticipantName />
 * </ParticipantLoop>
 * ```
 * @public
 */
export declare function useParticipants(options?: UseParticipantsOptions): (RemoteParticipant | LocalParticipant)[];

/** @public */
export declare interface UseParticipantsOptions {
    /**
     * To optimize performance, you can use the `updateOnlyOn` property to decide on what RoomEvents the hook updates.
     * By default it updates on all relevant RoomEvents to keep the returned participants array up to date.
     * The minimal set of non-overwriteable `RoomEvents` is: `[RoomEvent.ParticipantConnected, RoomEvent.ParticipantDisconnected, RoomEvent.ConnectionStateChanged]`
     */
    updateOnlyOn?: RoomEvent[];
    /**
     * The room to use. If not provided, the hook will use the room from the context.
     */
    room?: Room;
}

/**
 * The `useParticipantTile` hook is used to implement the `ParticipantTile` and returns the props needed to render the tile.
 * @remarks
 * The returned props include many data attributes that are useful for CSS styling purposes because they
 * indicate the state of the participant and the track.
 * For example: `data-lk-audio-muted`, `data-lk-video-muted`, `data-lk-speaking`, `data-lk-local-participant`, `data-lk-source`, `data-lk-facing-mode`.
 * @public
 */
export declare function useParticipantTile<T extends HTMLElement>({ trackRef, onParticipantClick, disableSpeakingIndicator, htmlProps, }: UseParticipantTileProps<T>): {
    elementProps: React_2.HTMLAttributes<T>;
};

/** @public */
export declare interface UseParticipantTileProps<T extends HTMLElement> extends React_2.HTMLAttributes<T> {
    /** The track reference to display. */
    trackRef?: TrackReferenceOrPlaceholder_4;
    disableSpeakingIndicator?: boolean;
    onParticipantClick?: (event: ParticipantClickEvent_3) => void;
    htmlProps: React_2.HTMLAttributes<T>;
}

/**
 * `useParticipantTracks` is a custom React that allows you to get tracks of a specific participant only, by specifiying the participant's identity.
 * If the participant identity is not passed the hook will try to get the participant from a participant context.
 * @public
 */
export declare function useParticipantTracks(sources: Track.Source[], participantIdentity?: string): TrackReference_3[];

/**
 * A hook that provides access to user choices stored in local storage, such as
 * selected media devices and their current state (on or off), as well as the user name.
 * @alpha
 */
export declare function usePersistentUserChoices(options?: UsePersistentUserChoicesOptions): {
    userChoices: LocalUserChoices_2;
    saveAudioInputEnabled: (isEnabled: boolean) => void;
    saveVideoInputEnabled: (isEnabled: boolean) => void;
    saveAudioInputDeviceId: (deviceId: string) => void;
    saveVideoInputDeviceId: (deviceId: string) => void;
    saveUsername: (username: string) => void;
};

/**
 * Options for the `usePersistentDeviceSettings` hook.
 * @alpha
 */
export declare interface UsePersistentUserChoicesOptions {
    /**
     * The default value to use if reading from local storage returns no results or fails.
     */
    defaults?: Partial<LocalUserChoices_2>;
    /**
     * Whether to prevent saving to persistent storage.
     * @defaultValue false
     */
    preventSave?: boolean;
    /**
     * Whether to prevent loading user choices from persistent storage and use `defaults` instead.
     * @defaultValue false
     */
    preventLoad?: boolean;
}

/**
 * The `usePinnedTracks` hook returns a array of the pinned tracks of the current room.
 * @remarks
 * To function properly, this hook must be called within a `LayoutContext`.
 * @example
 * ```tsx
 * const pinnedTracks = usePinnedTracks();
 * ```
 * @public
 */
export declare function usePinnedTracks(layoutContext?: LayoutContextType): TrackReferenceOrPlaceholder_4[];

/**
 * @public
 * @deprecated use `usePreviewTracks` instead
 */
export declare function usePreviewDevice<T extends LocalVideoTrack | LocalAudioTrack>(enabled: boolean, deviceId: string, kind: 'videoinput' | 'audioinput'): {
    selectedDevice: MediaDeviceInfo | undefined;
    localTrack: T | undefined;
    deviceError: Error | null;
};

/** @public */
export declare function usePreviewTracks(options: CreateLocalTracksOptions, onError?: (err: Error) => void): LocalTrack<Track.Kind>[] | undefined;

/**
 * The `useRemoteParticipant` hook returns the first RemoteParticipant by either identity and/or based on the participant kind.
 * @remarks
 * To optimize performance, you can use the `updateOnlyOn` property to decide on what `ParticipantEvents` the hook updates.
 *
 * @example
 * ```tsx
 * const participant = useRemoteParticipant({kind: ParticipantKind.Agent, identity: 'myAgent'});
 * ```
 * @public
 */
export declare function useRemoteParticipant(identifier: ParticipantIdentifier_2, options?: UseRemoteParticipantOptions): RemoteParticipant | undefined;

/**
 * The `useRemoteParticipant` hook returns the first RemoteParticipant by either identity or based on the participant kind.
 * @remarks
 * To optimize performance, you can use the `updateOnlyOn` property to decide on what `ParticipantEvents` the hook updates.
 *
 * @example
 * ```tsx
 * const participant = useRemoteParticipant('Russ');
 * ```
 * @public
 */
export declare function useRemoteParticipant(identity: string, options?: UseRemoteParticipantOptions): RemoteParticipant | undefined;

/** @public */
export declare interface UseRemoteParticipantOptions {
    /**
     * To optimize performance, you can use the `updateOnlyOn` property to decide on what `ParticipantEvents` the hook updates.
     * By default it updates on all relevant ParticipantEvents to keep the returned participant up to date.
     */
    updateOnlyOn?: ParticipantEvent[];
}

/**
 * The `useRemoteParticipants` hook returns all remote participants (without the local) of the current room.
 * @remarks
 * To optimize performance, you can use the `updateOnlyOn` property to decide on what `RoomEvents` the hook updates.
 *
 * @example
 * ```tsx
 * const participants = useRemoteParticipants();
 * <ParticipantLoop participants={participants}>
 *  <ParticipantName />
 * </ParticipantLoop>
 * ```
 * @public
 */
export declare function useRemoteParticipants(options?: UseRemoteParticipantsOptions): RemoteParticipant[];

/** @public */
export declare interface UseRemoteParticipantsOptions {
    /**
     * To optimize performance, you can use the `updateOnlyOn` property to decide on what RoomEvents the hook updates.
     * By default it updates on all relevant RoomEvents to keep the returned participants array up to date.
     * The minimal set of non-overwriteable `RoomEvents` is: `[RoomEvent.ParticipantConnected, RoomEvent.ParticipantDisconnected, RoomEvent.ConnectionStateChanged]`
     */
    updateOnlyOn?: RoomEvent[];
    /**
     * The room to use. If not provided, the hook will use the room from the context.
     */
    room?: Room;
}

/** @public */
export declare interface UserInfo {
    identity?: string;
    name?: string;
    metadata?: string;
}

/**
 * Ensures that a room is provided via context.
 * If no room is provided, an error is thrown.
 * @public
 */
export declare function useRoomContext(): Room;

/** @public */
export declare function useRoomInfo(options?: UseRoomInfoOptions): {
    name: string;
    metadata: string | undefined;
};

/**
 * The `useRoomInfo` hook returns the name and metadata of the given `Room`.
 * @remarks
 * Needs to be called inside a `RoomContext` or by passing a `Room` instance.
 *
 * @example
 * ```tsx
 * const { name, metadata } = useRoomInfo();
 * ```
 * @public
 */
export declare interface UseRoomInfoOptions {
    room?: Room;
}

/**
 * The `useSortedParticipants` hook returns the participants sorted by importance.
 * @public
 */
export declare function useSortedParticipants(participants: Array<Participant>): Participant[];

/**
 * The `useSpeakingParticipants` hook returns only the active speakers of all participants.
 *
 * @example
 * ```tsx
 * const activeSpeakers = useSpeakingParticipants();
 * ```
 * @public
 */
export declare function useSpeakingParticipants(): Participant[];

/**
 * In many browsers to start audio playback, the user must perform a user-initiated event such as clicking a button.
 * The `useStatAudio` hook returns an object with a boolean `canPlayAudio` flag
 * that indicates whether audio playback is allowed in the current context,
 * as well as a `startAudio` function that can be called in a button `onClick` callback to start audio playback in the current context.
 *
 * @see Autoplay policy on MDN web docs for more info: {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy}
 * @alpha
 */
export declare function useStartAudio({ room, props }: UseStartAudioProps): {
    mergedProps: React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: () => void;
        style: {
            display: string;
        };
    };
    canPlayAudio: boolean;
};

/** @alpha */
export declare interface UseStartAudioProps {
    room?: Room;
    props: React_2.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * In some browsers to start video playback in low power mode, the user must perform a user-initiated event such as clicking a button.
 * The `useStartVideo` hook returns an object with a boolean `canPlayVideo` flag
 * that indicates whether video playback is allowed in the current context,
 * as well as a `startVideo` function that can be called in a button `onClick` callback to start video playback in the current context.
 *
 * @alpha
 */
export declare function useStartVideo({ room, props }: UseStartVideoProps): {
    mergedProps: React_2.ButtonHTMLAttributes<HTMLButtonElement> & {
        className: string;
        onClick: () => void;
        style: {
            display: string;
        };
    };
    canPlayVideo: boolean;
};

/** @alpha */
export declare interface UseStartVideoProps {
    room?: Room;
    props: React_2.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * Simple implementation to detect horizontal swipe actions.
 * Accepts callbacks for on right and left swipes.
 * @example
 * ```tsx
 *  <div
 onTouchStart={onTouchStart}
 onTouchMove={onTouchMove}
 onTouchEnd={onTouchEnd}
 >
 * ```
 * @alpha
 */
export declare function useSwipe(element: React_2.RefObject<HTMLElement>, options?: UseSwipeOptions): void;

/**
 * @alpha
 */
export declare type UseSwipeOptions = {
    minSwipeDistance?: number;
    onLeftSwipe?: () => void;
    onRightSwipe?: () => void;
};

/**
 * @beta
 * @param topic - the topic to listen to
 * @returns an array of TextStreamData that holds the text, participantInfo, and streamInfo
 * @example
 * ```tsx
 * const { textStreams } = useTextStream('my-topic');
 * return <div>{textStreams.map((textStream) => textStream.text)}</div>;
 * ```
 */
export declare function useTextStream(topic: string): {
    textStreams: TextStreamData_2[];
};

/**
 * The `useToken` hook fetches a token from the given token endpoint with the given user info.
 *
 * @example
 * ```tsx
 * const token = useToken(<token-endpoint>, roomName, { userInfo: { identity, name }});
 * ```
 * @public */
export declare function useToken(tokenEndpoint: string | undefined, roomName: string, options?: UseTokenOptions): string | undefined;

/** @public */
export declare interface UseTokenOptions {
    userInfo?: UserInfo;
}

/**
 * This function `useTrackByName` allows you to access a track by referencing its track name.
 * Inside the function, it ensures that the a valid `participant` reference is available by checking
 * for both a passed participant argument and, if not available, a valid participant context.
 *
 * @public
 */
export declare function useTrackByName(name: string, participant?: Participant): TrackReferenceOrPlaceholder_4;

/**
 * The `useTrackMutedIndicator` hook is used to implement the `TrackMutedIndicator` component
 * and returns the muted state of the given track.
 *
 * @example
 * ```tsx
 * const { isMuted } = useTrackMutedIndicator(trackRef);
 * ```
 * @public
 */
export declare function useTrackMutedIndicator(trackRef?: TrackReferenceOrPlaceholder_4): TrackMutedIndicatorReturnType;

/**
 * Ensures that a track reference is provided via context.
 * If not inside a `TrackRefContext`, an error is thrown.
 * @public
 */
export declare function useTrackRefContext(): TrackReferenceOrPlaceholder_4;

/**
 * The `useTracks` hook returns an array of `TrackReference` or `TrackReferenceOrPlaceholder` depending on the provided `sources` property.
 * If only subscribed tracks are desired, set the `onlySubscribed` property to `true`.
 * @example
 * ```ts
 * // Return all camera track publications.
 * const trackReferences: TrackReference[] = useTracks([Track.Source.Camera])
 * ```
 * @example
 * ```ts
 * // Return all subscribed camera tracks as well as placeholders for
 * // participants without a camera subscription.
 * const trackReferencesWithPlaceholders: TrackReferenceOrPlaceholder[] = useTracks([{source: Track.Source.Camera, withPlaceholder: true}])
 * ```
 * @public
 */
export declare function useTracks<T extends SourcesArray = Track.Source[]>(sources?: T, options?: UseTracksOptions): UseTracksHookReturnType<T>;

/** @public */
export declare type UseTracksHookReturnType<T> = T extends Track.Source[] ? TrackReference_3[] : T extends TrackSourceWithOptions[] ? TrackReferenceOrPlaceholder_4[] : never;

/** @public */
export declare type UseTracksOptions = {
    updateOnlyOn?: RoomEvent[];
    onlySubscribed?: boolean;
    room?: Room;
};

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
export declare function useTrackToggle<T extends ToggleSource_2>({ source, onChange, initialState, captureOptions, publishOptions, onDeviceError, ...rest }: UseTrackToggleProps<T>): {
    toggle: ((forceState?: boolean) => Promise<void>) | ((forceState?: boolean, captureOptions?: CaptureOptionsBySource_2<T> | undefined) => Promise<boolean | undefined>);
    enabled: boolean;
    pending: boolean;
    track: LocalTrackPublication | undefined;
    buttonProps: React_2.ButtonHTMLAttributes<HTMLButtonElement>;
};

/** @public */
export declare interface UseTrackToggleProps<T extends ToggleSource_2> extends Omit<TrackToggleProps<T>, 'showIcon'> {
}

/**
 * @returns An object consisting of `segments` with maximum length of opts.windowLength and `activeSegments` that are valid for the current track timestamp
 * @alpha
 */
export declare function useTrackTranscription(trackRef: TrackReferenceOrPlaceholder_4 | undefined, options?: TrackTranscriptionOptions): {
    segments: ReceivedTranscriptionSegment[];
};

/**
 * @alpha
 * Hook for tracking the volume of an audio track using the Web Audio API.
 */
export declare function useTrackVolume(trackOrTrackReference?: LocalAudioTrack | RemoteAudioTrack | TrackReference_3, options?: AudioAnalyserOptions): number;

/**
 * The `useVisualStableUpdate` hook is used to prevent visually jarring jumps and shifts of elements
 * in an array. The algorithm only starts to update when there are more items than visually fit
 * on a page. If this is the case, it will make sure that speaking participants move to the first
 * page and are always visible.
 * @remarks
 * Updating the array can occur because attendees leave or join a room, or because they mute/unmute
 * or start speaking.
 * The hook is used for the `GridLayout` and `CarouselLayout` components.
 *
 * @example
 * ```tsx
 * const trackRefs = useTracks();
 * const updatedTrackRefs = useVisualStableUpdate(trackRefs, itemPerPage);
 * ```
 * @public
 */
export declare function useVisualStableUpdate(
/** `TrackReference`s to display in the grid.  */
trackReferences: TrackReferenceOrPlaceholder_4[], maxItemsOnPage: number, options?: UseVisualStableUpdateOptions): TrackReferenceOrPlaceholder_4[];

/** @public */
export declare interface UseVisualStableUpdateOptions {
    /** Overwrites the default sort function. */
    customSortFunction?: (trackReferences: TrackReferenceOrPlaceholder_4[]) => TrackReferenceOrPlaceholder_4[];
}

/**
 * This hook looks for the first agent-participant in the room.
 * @remarks This hook requires an agent running with livekit-agents \>= 0.9.0
 * @example
 * ```tsx
 * const { state, audioTrack, agentTranscriptions, agentAttributes } = useVoiceAssistant();
 * ```
 * @beta
 */
export declare function useVoiceAssistant(): VoiceAssistant;

/**
 * The `VideoConference` ready-made component is your drop-in solution for a classic video conferencing application.
 * It provides functionality such as focusing on one participant, grid view with pagination to handle large numbers
 * of participants, basic non-persistent chat, screen sharing, and more.
 *
 * @remarks
 * The component is implemented with other LiveKit components like `FocusContextProvider`,
 * `GridLayout`, `ControlBar`, `FocusLayoutContainer` and `FocusLayout`.
 * You can use these components as a starting point for your own custom video conferencing application.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <VideoConference />
 * <LiveKitRoom>
 * ```
 * @public
 */
export declare function VideoConference({ chatMessageFormatter, chatMessageDecoder, chatMessageEncoder, SettingsComponent, ...props }: VideoConferenceProps): React_2.JSX.Element;

/**
 * @public
 */
export declare interface VideoConferenceProps extends React_2.HTMLAttributes<HTMLDivElement> {
    chatMessageFormatter?: MessageFormatter;
    chatMessageEncoder?: MessageEncoder_2;
    chatMessageDecoder?: MessageDecoder_2;
    /** @alpha */
    SettingsComponent?: React_2.ComponentType;
}

/**
 * The `VideoTrack` component is responsible for rendering participant video tracks like `camera` and `screen_share`.
 * This component must have access to the participant's context, or alternatively pass it a `Participant` as a property.
 *
 * @example
 * ```tsx
 * <VideoTrack trackRef={trackRef} />
 * ```
 * @see {@link @livekit/components-react#ParticipantTile | ParticipantTile}
 * @public
 */
export declare const VideoTrack: (props: VideoTrackProps & React_2.RefAttributes<HTMLVideoElement>) => React_2.ReactNode;

/** @public */
export declare interface VideoTrackProps extends React_2.VideoHTMLAttributes<HTMLVideoElement> {
    /** The track reference of the track to render. */
    trackRef?: TrackReference_2;
    onTrackClick?: (evt: ParticipantClickEvent_2) => void;
    onSubscriptionStatusChanged?: (subscribed: boolean) => void;
    manageSubscription?: boolean;
}

/**
 * @beta
 */
export declare interface VoiceAssistant {
    /**
     * The agent participant.
     */
    agent: RemoteParticipant | undefined;
    /**
     * The current state of the agent.
     */
    state: AgentState;
    /**
     * The microphone track published by the agent or associated avatar worker (if any).
     */
    audioTrack: TrackReference_3 | undefined;
    /**
     * The camera track published by the agent or associated avatar worker (if any).
     */
    videoTrack: TrackReference_3 | undefined;
    /**
     * The transcriptions of the agent's microphone track (if any).
     */
    agentTranscriptions: ReceivedTranscriptionSegment[];
    /**
     * The agent's participant attributes.
     */
    agentAttributes: RemoteParticipant['attributes'] | undefined;
}

/**
 * @example
 * ```tsx
 * <LiveKitRoom ... >
 *   <VoiceAssistantControlBar />
 * </LiveKitRoom>
 * ```
 * @beta
 */
export declare function VoiceAssistantControlBar({ controls, saveUserChoices, onDeviceError, ...props }: VoiceAssistantControlBarProps): React_2.JSX.Element;

/** @beta */
export declare type VoiceAssistantControlBarControls = {
    microphone?: boolean;
    leave?: boolean;
};

/** @beta */
export declare interface VoiceAssistantControlBarProps extends React_2.HTMLAttributes<HTMLDivElement> {
    onDeviceError?: (error: {
        source: Track.Source;
        error: Error;
    }) => void;
    controls?: VoiceAssistantControlBarControls;
    /**
     * If `true`, the user's device choices will be persisted.
     * This will enables the user to have the same device choices when they rejoin the room.
     * @defaultValue true
     */
    saveUserChoices?: boolean;
}

/** @internal */
declare type WidgetContextType = {
    dispatch?: React_2.Dispatch<ChatContextAction>;
    state?: WidgetState_2;
};

export { WidgetState }

export { }
