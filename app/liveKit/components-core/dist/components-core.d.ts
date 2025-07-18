import type { AudioCaptureOptions } from 'livekit-client';
import { BehaviorSubject } from 'rxjs';
import { ChatMessage } from 'livekit-client';
import { ConnectionQuality } from 'livekit-client';
import { ConnectionState } from 'livekit-client';
import { DataPacket_Kind } from 'livekit-client';
import { DataPublishOptions } from 'livekit-client';
import { LocalAudioTrack } from 'livekit-client';
import { LocalParticipant } from 'livekit-client';
import { LocalVideoTrack } from 'livekit-client';
import loglevel from 'loglevel';
import { Observable } from 'rxjs';
import { Participant } from 'livekit-client';
import { ParticipantEvent } from 'livekit-client';
import type { ParticipantEventCallbacks } from 'livekit-client/dist/src/room/participant/Participant';
import type { ParticipantKind } from 'livekit-client';
import type { ParticipantPermission } from '@livekit/protocol';
import type { PublicationEventCallbacks } from 'livekit-client/dist/src/room/track/TrackPublication';
import { RemoteParticipant } from 'livekit-client';
import { Room } from 'livekit-client';
import { RoomEvent } from 'livekit-client';
import type { RoomEventCallbacks } from 'livekit-client/dist/src/room/Room';
import type { ScreenShareCaptureOptions } from 'livekit-client';
import { SendTextOptions } from 'livekit-client';
import { setLogLevel as setLogLevel_2 } from 'livekit-client';
import type { TextStreamInfo } from 'livekit-client/dist/src/room/types';
import { Track } from 'livekit-client';
import { TrackEvent as TrackEvent_2 } from 'livekit-client';
import { TrackPublication } from 'livekit-client';
import type { TrackPublishOptions } from 'livekit-client';
import { TranscriptionSegment } from 'livekit-client';
import type { VideoCaptureOptions } from 'livekit-client';

export declare function activeSpeakerObserver(room: Room): Observable<Participant[]>;

export declare function addMediaTimestampToTranscription(segment: TranscriptionSegment, timestamps: {
    timestamp: number;
    rtpTimestamp?: number;
}): ReceivedTranscriptionSegment;

export declare const allParticipantEvents: ParticipantEvent[];

export declare const allParticipantRoomEvents: RoomEvent[];

export declare const allRemoteParticipantEvents: ParticipantEvent[];

export declare const allRemoteParticipantRoomEvents: RoomEvent[];

export declare const attachIfSubscribed: (publication: TrackPublication | undefined, element: HTMLMediaElement | null | undefined) => void;

export declare type AudioSource = Track.Source.Microphone | Track.Source.ScreenShareAudio;

export declare interface BaseDataMessage<T extends string | undefined> {
    topic?: T;
    payload: Uint8Array;
}

export declare type CaptureOptionsBySource<T extends ToggleSource> = T extends Track.Source.Camera ? VideoCaptureOptions : T extends Track.Source.Microphone ? AudioCaptureOptions : T extends Track.Source.ScreenShare ? ScreenShareCaptureOptions : never;

export { ChatMessage }

/** @public */
export declare type ChatOptions = {
    /** @deprecated the new chat API doesn't rely on encoders and decoders anymore and uses a dedicated chat API instead */
    messageEncoder?: (message: LegacyChatMessage) => Uint8Array;
    /** @deprecated the new chat API doesn't rely on encoders and decoders anymore and uses a dedicated chat API instead */
    messageDecoder?: (message: Uint8Array) => LegacyReceivedChatMessage;
    channelTopic?: string;
    /** @deprecated the new chat API doesn't rely on update topics anymore and uses a dedicated chat API instead */
    updateChannelTopic?: string;
};

export declare function computeMenuPosition(button: HTMLElement, menu: HTMLElement, onUpdate?: (x: number, y: number) => void): () => void;

export declare function connectedParticipantObserver(room: Room, identity: string, options?: ConnectedParticipantObserverOptions): Observable<RemoteParticipant | undefined>;

export declare type ConnectedParticipantObserverOptions = {
    additionalEvents?: ParticipantEvent[];
};

export declare function connectedParticipantsObserver(room: Room, options?: ConnectedParticipantsObserverOptions): Observable<RemoteParticipant[]>;

declare type ConnectedParticipantsObserverOptions = {
    additionalRoomEvents?: RoomEvent[];
};

export declare function connectionStateObserver(room: Room): Observable<ConnectionState>;

export declare function createActiveDeviceObservable(room: Room, kind: MediaDeviceKind): Observable<string>;

export declare function createChatObserver(room: Room): Observable<[message: ChatMessage, participant?: LocalParticipant | RemoteParticipant | undefined]>;

export declare function createConnectionQualityObserver(participant: Participant): Observable<ConnectionQuality>;

export declare function createDataObserver(room: Room): Observable<[payload: Uint8Array<ArrayBufferLike>, participant?: RemoteParticipant | undefined, kind?: DataPacket_Kind | undefined, topic?: string | undefined]>;

export declare const createDefaultGrammar: () => {
    email: RegExp;
    url: RegExp;
};

export declare function createEmailRegExp({ exact }?: {
    exact?: boolean;
}): RegExp;

/**
 * Returns true if the user is interacting with the HTML element,
 * and returns false if there is no interaction for a specified period of time.
 *
 * @internal
 */
export declare function createInteractingObservable(htmlElement: HTMLElement | null, inactiveAfter?: number): Observable<boolean>;

export declare function createIsSpeakingObserver(participant: Participant): Observable<boolean>;

export declare function createMediaDeviceObserver(kind?: MediaDeviceKind, onError?: (e: Error) => void, requestPermissions?: boolean): Observable<MediaDeviceInfo[]>;

export declare function createTrackObserver(participant: Participant, options: TrackIdentifier): Observable<{
    publication: TrackPublication | undefined;
}>;

export declare function createUrlRegExp(options: RegExOptions): RegExp;

export declare const cssPrefix = "lk";

export declare const DataTopic: {
    readonly CHAT: "lk.chat";
};

/**
 * @returns An array of unique (by id) `TranscriptionSegment`s. Latest wins. If the resulting array would be longer than `windowSize`, the array will be reduced to `windowSize` length
 */
export declare function dedupeSegments<T extends TranscriptionSegment>(prevSegments: T[], newSegments: T[], windowSize: number): T[];

export declare const defaultUserChoices: LocalUserChoices;

export declare function didActiveSegmentsChange<T extends TranscriptionSegment>(prevActive: T[], newActive: T[]): boolean;

export declare function encryptionStatusObservable(room: Room, participant: Participant | undefined): Observable<boolean>;

export declare function getActiveTranscriptionSegments(segments: ReceivedTranscriptionSegment[], syncTimes: {
    timestamp: number;
    rtpTimestamp?: number;
}, maxAge?: number): ReceivedTranscriptionSegment[];

/**
 * Calculates the scrollbar width by creating two HTML elements
 * and messaging the difference.
 * @internal
 */
export declare function getScrollBarWidth(): number;

export declare function getTrackByIdentifier(options: TrackIdentifier): TrackPublication | undefined;

/**
 * Returns a id to identify the `TrackReference` or `TrackReferencePlaceholder` based on
 * participant, track source and trackSid.
 * @remarks
 * The id pattern is: `${participantIdentity}_${trackSource}_${trackSid}` for `TrackReference`
 * and `${participantIdentity}_${trackSource}_placeholder` for `TrackReferencePlaceholder`.
 */
export declare function getTrackReferenceId(trackReference: TrackReferenceOrPlaceholder | number): string;

/** Returns the Source of the TrackReference. */
export declare function getTrackReferenceSource(trackReference: TrackReferenceOrPlaceholder): Track.Source;

export declare const GRID_LAYOUTS: GridLayoutDefinition[];

/**
 * @public
 */
export declare type GridLayoutDefinition = {
    /** Column count of the grid layout. */
    columns: number;
    /** Row count of the grid layout. */
    rows: number;
    /**
     * Minimum grid container width required to use this layout.
     * @remarks
     * If this constraint is not met, we try to select a layout with fewer tiles
     * (`tiles=columns*rows`) that is within the constraint.
     */
    minWidth?: number;
    /**
     * Minimum grid container height required to use this layout.
     * @remarks
     * If this constraint is not met, we try to select a layout with fewer tiles
     * (`tiles=columns*rows`) that is within the constraint.
     */
    minHeight?: number;
    /**
     * For which orientation the layout definition should be applied.
     * Will be used for both landscape and portrait if no value is specified.
     */
    orientation?: 'landscape' | 'portrait';
};

export declare type GridLayoutInfo = {
    /** Layout name (convention `<column_count>x<row_count>`). */
    name: string;
    /** Column count of the layout. */
    columns: number;
    /** Row count of the layout. */
    rows: number;
    /** Maximum tiles that fit into this layout. */
    maxTiles: number;
    /** Minimum width required to use this layout. */
    minWidth: number;
    /** Minimum height required to use this layout. */
    minHeight: number;
    orientation?: 'landscape' | 'portrait';
};

export declare function isEqualTrackRef(a?: TrackReferenceOrPlaceholder, b?: TrackReferenceOrPlaceholder): boolean;

export declare function isLocal(p: Participant): boolean;

/**
 * Mobile browser detection based on `navigator.userAgent` string.
 * Defaults to returning `false` if not in a browser.
 *
 * @remarks
 * This should only be used if feature detection or other methods do not work!
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_device_detection
 */
export declare function isMobileBrowser(): boolean;

/**
 * Check if the participant track reference is pinned.
 */
export declare function isParticipantTrackReferencePinned(trackRef: TrackReference, pinState: PinState | undefined): boolean;

/**
 * Check if the current `currentTrackRef` is the placeholder for next `nextTrackRef`.
 * Based on the participant identity and the source.
 * @internal
 */
export declare function isPlaceholderReplacement(currentTrackRef: TrackReferenceOrPlaceholder, nextTrackRef: TrackReferenceOrPlaceholder): boolean;

export declare function isRemote(p: Participant): boolean;

export declare function isSourcesWithOptions(sources: SourcesArray): sources is TrackSourceWithOptions[];

export declare function isSourceWitOptions(source: SourcesArray[number]): source is TrackSourceWithOptions;

/** @internal */
export declare function isTrackReference(trackReference: unknown): trackReference is TrackReference;

/**
 * Check if the `TrackReference` is pinned.
 */
export declare function isTrackReferencePinned(trackReference: TrackReferenceOrPlaceholder, pinState: PinState | undefined): boolean;

export declare function isTrackReferencePlaceholder(trackReference?: TrackReferenceOrPlaceholder): trackReference is TrackReferencePlaceholder;

/**
 * @internal
 */
export declare function isWeb(): boolean;

export declare interface LegacyChatMessage extends ChatMessage {
    ignoreLegacy?: boolean;
}

/** @deprecated */
export declare const LegacyDataTopic: {
    readonly CHAT: "lk-chat-topic";
};

export declare interface LegacyReceivedChatMessage extends ReceivedChatMessage {
    ignoreLegacy?: boolean;
}

/**
 * Reads the user choices from local storage, or returns the default settings if none are found.
 * @remarks
 * The deprecated parameters `e2ee` and `sharedPassphrase` are not read from local storage
 * and always return the value from the passed `defaults` or internal defaults.
 * @alpha
 */
export declare function loadUserChoices(defaults?: Partial<LocalUserChoices>, 
/**
 * Whether to prevent loading from local storage and return default values instead.
 * @defaultValue false
 */
preventLoad?: boolean): LocalUserChoices;

/**
 * @public
 * Represents the user's choices for video and audio input devices,
 * as well as their username.
 */
export declare type LocalUserChoices = {
    /**
     * Whether video input is enabled.
     * @defaultValue `true`
     */
    videoEnabled: boolean;
    /**
     * Whether audio input is enabled.
     * @defaultValue `true`
     */
    audioEnabled: boolean;
    /**
     * The device ID of the video input device to use.
     * @defaultValue `''`
     */
    videoDeviceId: string;
    /**
     * The device ID of the audio input device to use.
     * @defaultValue `''`
     */
    audioDeviceId: string;
    /**
     * The username to use.
     * @defaultValue `''`
     */
    username: string;
};

export declare const log: loglevel.Logger;

declare type LogExtension = (level: LogLevel, msg: string, context?: object) => void;

declare type LogLevel = Parameters<typeof setLogLevel_2>[0];

export declare type MediaToggleType<T extends ToggleSource> = {
    pendingObserver: Observable<boolean>;
    toggle: (forceState?: boolean, captureOptions?: CaptureOptionsBySource<T>) => Promise<boolean | undefined>;
    className: string;
    enabledObserver: Observable<boolean>;
};

/**
 * @public
 * @deprecated the new chat API doesn't rely on encoders and decoders anymore and uses a dedicated chat API instead
 */
export declare type MessageDecoder = (message: Uint8Array) => LegacyReceivedChatMessage;

/**
 * @public
 * @deprecated the new chat API doesn't rely on encoders and decoders anymore and uses a dedicated chat API instead
 */
export declare type MessageEncoder = (message: LegacyChatMessage) => Uint8Array;

export declare function mutedObserver(trackRef: TrackReferenceOrPlaceholder): Observable<boolean>;

export declare function observeParticipantEvents<T extends Participant>(participant: T, ...events: ParticipantEvent[]): Observable<T>;

export declare function observeParticipantMedia<T extends Participant>(participant: T): Observable<ParticipantMedia<T>>;

export declare function observeRoomEvents(room: Room, ...events: RoomEvent[]): Observable<Room>;

export declare function observeTrackEvents(track: TrackPublication, ...events: TrackEvent_2[]): Observable<TrackPublication>;

export declare function participantAttributesObserver(participant: Participant): Observable<{
    changed: Readonly<Record<string, string>>;
    attributes: Readonly<Record<string, string>>;
}>;

export declare function participantAttributesObserver(participant: undefined): Observable<{
    changed: undefined;
    attributes: undefined;
}>;

export declare function participantByIdentifierObserver(room: Room, { kind, identity }: ParticipantIdentifier, options?: ConnectedParticipantObserverOptions): Observable<RemoteParticipant | undefined>;

/** @internal */
export declare interface ParticipantClickEvent {
    participant: Participant;
    track?: TrackPublication;
}

export declare function participantEventSelector<T extends ParticipantEvent>(participant: Participant, event: T): Observable<Parameters<ParticipantEventCallbacks[Extract<T, keyof ParticipantEventCallbacks>]>>;

export declare type ParticipantFilter = Parameters<Participant[]['filter']>['0'];

/**
 * @beta
 */
export declare type ParticipantIdentifier = RequireAtLeastOne<{
    kind: ParticipantKind;
    identity: string;
}, 'identity' | 'kind'>;

export declare function participantInfoObserver(participant?: Participant): Observable<{
    name: string | undefined;
    identity: string;
    metadata: string | undefined;
} | {
    name: string | undefined;
    identity: string;
    metadata: string | undefined;
}> | undefined;

export declare interface ParticipantMedia<T extends Participant = Participant> {
    isCameraEnabled: boolean;
    isMicrophoneEnabled: boolean;
    isScreenShareEnabled: boolean;
    microphoneTrack?: TrackPublication;
    cameraTrack?: TrackPublication;
    participant: T;
}

export declare function participantPermissionObserver(participant: Participant): Observable<ParticipantPermission | undefined>;

export declare const participantTrackEvents: ParticipantEvent[];

export declare type ParticipantTrackIdentifier = RequireAtLeastOne<{
    sources: Track.Source[];
    name: string;
    kind: Track.Kind;
}, 'sources' | 'name' | 'kind'>;

export declare function participantTracksObservable(participant: Participant, trackIdentifier: ParticipantTrackIdentifier): Observable<TrackReference[]>;

export declare const PIN_DEFAULT_STATE: PinState;

/** @public */
export declare type PinState = TrackReferenceOrPlaceholder[];

/** @public */
export declare interface ReceivedChatMessage extends ChatMessage {
    from?: Participant;
}

export declare interface ReceivedDataMessage<T extends string | undefined = string> extends BaseDataMessage<T> {
    from?: Participant;
}

export declare type ReceivedTranscriptionSegment = TranscriptionSegment & {
    receivedAtMediaTimestamp: number;
    receivedAt: number;
};

export declare function recordingStatusObservable(room: Room): Observable<boolean>;

declare interface RegExOptions {
    /**
     Only match an exact string. Useful with `RegExp#test` to check if a string is a URL.
     @defaultValue false
     */
    readonly exact?: boolean;
}

declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];

export declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];

export declare function roomAudioPlaybackAllowedObservable(room: Room): Observable<{
    canPlayAudio: boolean;
}>;

export declare function roomEventSelector<T extends RoomEvent>(room: Room, event: T): Observable<Parameters<RoomEventCallbacks[T]>>;

export declare function roomInfoObserver(room: Room): Observable<{
    name: string;
    metadata: string | undefined;
}>;

export declare function roomObserver(room: Room): Observable<Room>;

export declare function roomVideoPlaybackAllowedObservable(room: Room): Observable<{
    canPlayVideo: boolean;
}>;

/**
 * Saves user choices to local storage.
 * @alpha
 */
export declare function saveUserChoices(userChoices: LocalUserChoices, 
/**
 * Whether to prevent saving user choices to local storage.
 */
preventSave?: boolean): void;

export declare function screenShareObserver(room: Room): Observable<ScreenShareTrackMap>;

export declare type ScreenShareTrackMap = Array<{
    participant: Participant;
    tracks: Array<TrackPublication>;
}>;

export declare function selectGridLayout(layoutDefinitions: GridLayoutDefinition[], participantCount: number, width: number, height: number): GridLayoutInfo;

/** Publish data from the LocalParticipant. */
export declare function sendMessage(localParticipant: LocalParticipant, payload: Uint8Array, options?: DataPublishOptions): Promise<void>;

export declare function setDifference<T>(setA: Set<T>, setB: Set<T>): Set<T>;

/**
 * Set the log extension for both the `@livekit/components-react` package and the `@livekit-client` package.
 * To set the `@livekit-client` log extension, use the `liveKitClientLogExtension` prop on the `options` object.
 * @public
 */
export declare function setLogExtension(extension: LogExtension, options?: SetLogExtensionOptions): void;

declare type SetLogExtensionOptions = {
    liveKitClientLogExtension?: LogExtension;
};

/**
 * Set the log level for both the `@livekit/components-react` package and the `@livekit-client` package.
 * To set the `@livekit-client` log independently, use the `liveKitClientLogLevel` prop on the `options` object.
 * @public
 */
export declare function setLogLevel(level: LogLevel, options?: SetLogLevelOptions): void;

declare type SetLogLevelOptions = {
    liveKitClientLogLevel?: LogLevel;
};

export declare type SetMediaDeviceOptions = {
    /**
     *  If true, adds an `exact` constraint to the getUserMedia request.
     *  The request will fail if this option is true and the device specified is not actually available
     */
    exact?: boolean;
};

export declare function setupChat(room: Room, options?: ChatOptions): {
    messageObservable: Observable<ReceivedChatMessage[]>;
    isSendingObservable: BehaviorSubject<boolean>;
    send: (message: string, options?: SendTextOptions) => Promise<ReceivedChatMessage>;
};

export declare function setupChatMessageHandler(room: Room): {
    chatObservable: Observable<[message: ChatMessage, participant?: LocalParticipant | RemoteParticipant | undefined]>;
    send: (text: string, options: SendTextOptions) => Promise<ReceivedChatMessage>;
    edit: (text: string, originalMsg: ChatMessage) => Promise<{
        readonly message: string;
        readonly editTimestamp: number;
        readonly id: string;
        readonly timestamp: number;
        readonly attachedFiles?: Array<File>;
    }>;
};

export declare function setupChatToggle(): {
    className: string;
};

export declare function setupClearPinButton(): {
    className: string;
};

export declare function setupConnectionQualityIndicator(participant: Participant): {
    className: "lk-connection-quality";
    connectionQualityObserver: Observable<ConnectionQuality>;
};

export declare function setupDataMessageHandler<T extends string>(room: Room, topic?: T | [T, ...T[]], onMessage?: (msg: ReceivedDataMessage<T>) => void): {
    messageObservable: Observable<{
        payload: Uint8Array<ArrayBufferLike>;
        topic: T;
        from: RemoteParticipant | undefined;
    }>;
    isSendingObservable: Observable<boolean>;
    send: (payload: Uint8Array, options?: DataPublishOptions) => Promise<void>;
};

export declare function setupDeviceSelector(kind: MediaDeviceKind, room: Room, localTrack?: LocalAudioTrack | LocalVideoTrack): {
    className: string;
    activeDeviceObservable: Observable<string>;
    setActiveMediaDevice: (id: string, options?: SetMediaDeviceOptions) => Promise<void>;
};

export declare function setupDisconnectButton(room: Room): {
    className: string;
    disconnect: (stopTracks?: boolean) => void;
};

export declare function setupFocusToggle(): {
    className: string;
};

export declare function setupLiveKitRoom(): {
    className: string;
};

export declare function setupManualToggle(): {
    className: string;
    toggle: (forceState?: boolean) => Promise<void>;
    enabledObserver: Observable<boolean>;
    pendingObserver: Observable<boolean>;
};

export declare function setupMediaToggle<T extends ToggleSource>(source: T, room: Room, options?: CaptureOptionsBySource<T>, publishOptions?: TrackPublishOptions, onError?: (error: Error) => void): MediaToggleType<T>;

export declare function setupMediaTrack(trackIdentifier: TrackIdentifier): {
    className: string;
    trackObserver: Observable<TrackPublication | undefined>;
};

export declare function setupParticipantName(participant: Participant): {
    className: string;
    infoObserver: Observable<    {
    name: string | undefined;
    identity: string;
    metadata: string | undefined;
    } | {
    name: string | undefined;
    identity: string;
    metadata: string | undefined;
    }> | undefined;
};

export declare function setupParticipantTile(): {
    className: string;
};

export declare function setupStartAudio(): {
    className: string;
    roomAudioPlaybackAllowedObservable: typeof roomAudioPlaybackAllowedObservable;
    handleStartAudioPlayback: (room: Room) => Promise<void>;
};

export declare function setupStartVideo(): {
    className: string;
    roomVideoPlaybackAllowedObservable: typeof roomVideoPlaybackAllowedObservable;
    handleStartVideoPlayback: (room: Room) => Promise<void>;
};

export declare function setupTextStream(room: Room, topic: string): Observable<TextStreamData[]>;

export declare function setupTrackMutedIndicator(trackRef: TrackReferenceOrPlaceholder): {
    className: string;
    mediaMutedObserver: Observable<boolean>;
};

/**
 * Default sort for participants, it'll order participants by:
 * 1. local participant
 * 2. dominant speaker (speaker with the loudest audio level)
 * 3. other speakers that are recently active
 * 4. participants with video on
 * 5. by joinedAt
 */
export declare function sortParticipants(participants: Participant[]): Participant[];

/**
 * Default sort for `TrackReferenceOrPlaceholder`, it'll order participants by:
 * 1. local camera track (publication.isLocal)
 * 2. remote screen_share track
 * 3. local screen_share track
 * 4. remote dominant speaker camera track (sorted by speaker with the loudest audio level)
 * 5. other remote speakers that are recently active
 * 6. remote unmuted camera tracks
 * 7. remote tracks sorted by joinedAt
 */
export declare function sortTrackReferences(tracks: TrackReferenceOrPlaceholder[]): TrackReferenceOrPlaceholder[];

export declare type SourcesArray = Track.Source[] | TrackSourceWithOptions[];

/**
 * Returns `true` if the browser supports screen sharing.
 */
export declare function supportsScreenSharing(): boolean;

export declare interface TextStreamData {
    text: string;
    participantInfo: {
        identity: string;
    };
    streamInfo: TextStreamInfo;
}

export declare type ToggleSource = Exclude<Track.Source, Track.Source.ScreenShareAudio | Track.Source.Unknown>;

export declare function tokenize<T extends TokenizeGrammar>(input: string, grammar: T): (string | {
    type: keyof T;
    content: string;
})[];

export declare type TokenizeGrammar = {
    [type: string]: RegExp;
};

export declare function trackEventSelector<T extends TrackEvent_2>(publication: TrackPublication | Track, event: T): Observable<Parameters<PublicationEventCallbacks[Extract<T, keyof PublicationEventCallbacks>]>>;

/**
 * The TrackIdentifier type is used to select Tracks either based on
 * - Track.Source and/or name of the track, e.g. `{source: Track.Source.Camera}` or `{name: "my-track"}`
 * - TrackReference (participant and publication)
 * @internal
 */
export declare type TrackIdentifier<T extends Track.Source = Track.Source> = TrackSource<T> | TrackReference;

export declare function trackObservable(track: TrackPublication): Observable<TrackPublication>;

/** @public */
export declare type TrackReference = {
    participant: Participant;
    publication: TrackPublication;
    source: Track.Source;
};

export declare type TrackReferenceFilter = Parameters<TrackReferenceOrPlaceholder[]['filter']>['0'];

export declare type TrackReferenceId = ReturnType<typeof getTrackReferenceId>;

/** @public */
export declare type TrackReferenceOrPlaceholder = TrackReference | TrackReferencePlaceholder;

/** @public */
export declare type TrackReferencePlaceholder = {
    participant: Participant;
    publication?: never;
    source: Track.Source;
};

export declare function trackReferencesObservable(room: Room, sources: Track.Source[], options: TrackReferencesObservableOptions): Observable<{
    trackReferences: TrackReference[];
    participants: Participant[];
}>;

declare type TrackReferencesObservableOptions = {
    additionalRoomEvents?: RoomEvent[];
    onlySubscribed?: boolean;
};

export declare type TrackSource<T extends Track.Source> = RequireAtLeastOne<{
    source: T;
    name: string;
    participant: Participant;
}, 'name' | 'source'>;

export declare type TrackSourceWithOptions = {
    source: Track.Source;
    withPlaceholder: boolean;
};

export declare function trackSyncTimeObserver(track: Track): Observable<number>;

export declare function trackTranscriptionObserver(publication: TrackPublication): Observable<[transcription: TranscriptionSegment[]]>;

declare type UpdatableItem = TrackReferenceOrPlaceholder | number;

/** Divide the list of elements into pages and and check if pages need updating. */
export declare function updatePages<T extends UpdatableItem>(currentList: T[], nextList: T[], maxItemsOnPage: number): T[];

export declare type VideoSource = Track.Source.Camera | Track.Source.ScreenShare;

export declare function wasClickOutside(insideElement: HTMLElement, event: MouseEvent): boolean;

export declare const WIDGET_DEFAULT_STATE: WidgetState;

/** @public */
export declare type WidgetState = {
    showChat: boolean;
    unreadMessages: number;
    showSettings?: boolean;
};

export { }
