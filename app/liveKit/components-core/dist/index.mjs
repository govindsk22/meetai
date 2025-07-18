var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/constants.ts
var cssPrefix = "lk";

// src/track-reference/track-reference.types.ts
function isTrackReference(trackReference) {
  if (typeof trackReference === "undefined") {
    return false;
  }
  return isTrackReferenceSubscribed(trackReference) || isTrackReferencePublished(trackReference);
}
function isTrackReferenceSubscribed(trackReference) {
  var _a;
  if (!trackReference) {
    return false;
  }
  return trackReference.hasOwnProperty("participant") && trackReference.hasOwnProperty("source") && trackReference.hasOwnProperty("track") && typeof ((_a = trackReference.publication) == null ? void 0 : _a.track) !== "undefined";
}
function isTrackReferencePublished(trackReference) {
  if (!trackReference) {
    return false;
  }
  return trackReference.hasOwnProperty("participant") && trackReference.hasOwnProperty("source") && trackReference.hasOwnProperty("publication") && typeof trackReference.publication !== "undefined";
}
function isTrackReferencePlaceholder(trackReference) {
  if (!trackReference) {
    return false;
  }
  return trackReference.hasOwnProperty("participant") && trackReference.hasOwnProperty("source") && typeof trackReference.publication === "undefined";
}

// src/track-reference/track-reference.utils.ts
function getTrackReferenceId(trackReference) {
  if (typeof trackReference === "string" || typeof trackReference === "number") {
    return `${trackReference}`;
  } else if (isTrackReferencePlaceholder(trackReference)) {
    return `${trackReference.participant.identity}_${trackReference.source}_placeholder`;
  } else if (isTrackReference(trackReference)) {
    return `${trackReference.participant.identity}_${trackReference.publication.source}_${trackReference.publication.trackSid}`;
  } else {
    throw new Error(`Can't generate a id for the given track reference: ${trackReference}`);
  }
}
function getTrackReferenceSource(trackReference) {
  if (isTrackReference(trackReference)) {
    return trackReference.publication.source;
  } else {
    return trackReference.source;
  }
}
function isEqualTrackRef(a, b) {
  if (a === void 0 || b === void 0) {
    return false;
  }
  if (isTrackReference(a) && isTrackReference(b)) {
    return a.publication.trackSid === b.publication.trackSid;
  } else {
    return getTrackReferenceId(a) === getTrackReferenceId(b);
  }
}
function isTrackReferencePinned(trackReference, pinState) {
  if (typeof pinState === "undefined") {
    return false;
  }
  if (isTrackReference(trackReference)) {
    return pinState.some(
      (pinnedTrackReference) => pinnedTrackReference.participant.identity === trackReference.participant.identity && isTrackReference(pinnedTrackReference) && pinnedTrackReference.publication.trackSid === trackReference.publication.trackSid
    );
  } else if (isTrackReferencePlaceholder(trackReference)) {
    return pinState.some(
      (pinnedTrackReference) => pinnedTrackReference.participant.identity === trackReference.participant.identity && isTrackReferencePlaceholder(pinnedTrackReference) && pinnedTrackReference.source === trackReference.source
    );
  } else {
    return false;
  }
}
function isPlaceholderReplacement(currentTrackRef, nextTrackRef) {
  return isTrackReferencePlaceholder(currentTrackRef) && isTrackReference(nextTrackRef) && nextTrackRef.participant.identity === currentTrackRef.participant.identity && nextTrackRef.source === currentTrackRef.source;
}

// src/utils.ts
function isLocal(p) {
  return p.isLocal;
}
function isRemote(p) {
  return !p.isLocal;
}
var attachIfSubscribed = (publication, element) => {
  if (!publication) return;
  const { isSubscribed, track } = publication;
  if (element && track) {
    if (isSubscribed) {
      track.attach(element);
    } else {
      track.detach(element);
    }
  }
};
function isParticipantTrackReferencePinned(trackRef, pinState) {
  if (pinState === void 0) {
    return false;
  }
  return pinState.some((pinnedTrackRef) => isEqualTrackRef(pinnedTrackRef, trackRef));
}
function getScrollBarWidth() {
  const inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div");
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  document.body.removeChild(outer);
  const scrollBarWidth = w1 - w2;
  return scrollBarWidth;
}

// src/helper/detectMobileBrowser.ts
function isWeb() {
  return typeof document !== "undefined";
}
function isMobileBrowser() {
  return isWeb() ? /Mobi/i.test(window.navigator.userAgent) : false;
}

// src/helper/url-regex.ts
function createUrlRegExp(options) {
  options = __spreadValues({}, options);
  const protocol = `(?:(?:[a-z]+:)?//)?`;
  const auth = "(?:\\S+(?::\\S*)?@)?";
  const ip = new RegExp(
    "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
    "g"
  ).source;
  const host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  const domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  const tld = `(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?`;
  const port = "(?::\\d{2,5})?";
  const path = '(?:[/?#][^\\s"]*)?';
  const regex2 = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;
  return options.exact ? new RegExp(`(?:^${regex2}$)`, "i") : new RegExp(regex2, "ig");
}

// src/helper/emailRegex.ts
var regex = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";
function createEmailRegExp({ exact } = {}) {
  return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, "g");
}

// src/helper/floating-menu.ts
import { autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
function computeMenuPosition(button, menu, onUpdate) {
  const cleanup = autoUpdate(button, menu, () => __async(this, null, function* () {
    const { x, y } = yield computePosition(button, menu, {
      placement: "top",
      middleware: [offset(6), flip(), shift({ padding: 5 })]
    });
    onUpdate == null ? void 0 : onUpdate(x, y);
  }));
  return cleanup;
}
function wasClickOutside(insideElement, event) {
  const isOutside = !insideElement.contains(event.target);
  return isOutside;
}

// src/helper/tokenizer.ts
var createDefaultGrammar = () => {
  return {
    email: createEmailRegExp(),
    url: createUrlRegExp({})
  };
};
function tokenize(input, grammar) {
  const matches = Object.entries(grammar).map(
    ([type, rx], weight) => Array.from(input.matchAll(rx)).map(({ index, 0: content }) => ({
      type,
      weight,
      content,
      index: index != null ? index : 0
    }))
  ).flat().sort((a, b) => {
    const d = a.index - b.index;
    return d !== 0 ? d : a.weight - b.weight;
  }).filter(({ index }, i, arr) => {
    if (i === 0) return true;
    const prev = arr[i - 1];
    return prev.index + prev.content.length <= index;
  });
  const tokens = [];
  let pos = 0;
  for (const { type, content, index } of matches) {
    if (index > pos) tokens.push(input.substring(pos, index));
    tokens.push({ type, content });
    pos = index + content.length;
  }
  if (input.length > pos) tokens.push(input.substring(pos));
  return tokens;
}

// src/helper/eventGroups.ts
import { ParticipantEvent, RoomEvent } from "livekit-client";
var allRemoteParticipantRoomEvents = [
  RoomEvent.ConnectionStateChanged,
  RoomEvent.RoomMetadataChanged,
  RoomEvent.ActiveSpeakersChanged,
  RoomEvent.ConnectionQualityChanged,
  RoomEvent.ParticipantConnected,
  RoomEvent.ParticipantDisconnected,
  RoomEvent.ParticipantPermissionsChanged,
  RoomEvent.ParticipantMetadataChanged,
  RoomEvent.ParticipantNameChanged,
  RoomEvent.ParticipantAttributesChanged,
  RoomEvent.TrackMuted,
  RoomEvent.TrackUnmuted,
  RoomEvent.TrackPublished,
  RoomEvent.TrackUnpublished,
  RoomEvent.TrackStreamStateChanged,
  RoomEvent.TrackSubscriptionFailed,
  RoomEvent.TrackSubscriptionPermissionChanged,
  RoomEvent.TrackSubscriptionStatusChanged
];
var allParticipantRoomEvents = [
  ...allRemoteParticipantRoomEvents,
  RoomEvent.LocalTrackPublished,
  RoomEvent.LocalTrackUnpublished
];
var participantTrackEvents = [
  ParticipantEvent.TrackPublished,
  ParticipantEvent.TrackUnpublished,
  ParticipantEvent.TrackMuted,
  ParticipantEvent.TrackUnmuted,
  ParticipantEvent.TrackStreamStateChanged,
  ParticipantEvent.TrackSubscribed,
  ParticipantEvent.TrackUnsubscribed,
  ParticipantEvent.TrackSubscriptionPermissionChanged,
  ParticipantEvent.TrackSubscriptionFailed,
  ParticipantEvent.LocalTrackPublished,
  ParticipantEvent.LocalTrackUnpublished
];
var allRemoteParticipantEvents = [
  ParticipantEvent.ConnectionQualityChanged,
  ParticipantEvent.IsSpeakingChanged,
  ParticipantEvent.ParticipantMetadataChanged,
  ParticipantEvent.ParticipantPermissionsChanged,
  ParticipantEvent.TrackMuted,
  ParticipantEvent.TrackUnmuted,
  ParticipantEvent.TrackPublished,
  ParticipantEvent.TrackUnpublished,
  ParticipantEvent.TrackStreamStateChanged,
  ParticipantEvent.TrackSubscriptionFailed,
  ParticipantEvent.TrackSubscriptionPermissionChanged,
  ParticipantEvent.TrackSubscriptionStatusChanged
];
var allParticipantEvents = [
  ...allRemoteParticipantEvents,
  ParticipantEvent.LocalTrackPublished,
  ParticipantEvent.LocalTrackUnpublished
];

// src/logger.ts
import {
  setLogLevel as setClientSdkLogLevel,
  setLogExtension as setClientSdkLogExtension,
  LogLevel as LogLevelEnum
} from "livekit-client";
import loglevel from "loglevel";
var log = loglevel.getLogger("lk-components-js");
log.setDefaultLevel("WARN");
function setLogLevel(level, options = {}) {
  var _a;
  log.setLevel(level);
  setClientSdkLogLevel((_a = options.liveKitClientLogLevel) != null ? _a : level);
}
function setLogExtension(extension, options = {}) {
  var _a;
  const originalFactory = log.methodFactory;
  log.methodFactory = (methodName, configLevel, loggerName) => {
    const rawMethod = originalFactory(methodName, configLevel, loggerName);
    const logLevel = LogLevelEnum[methodName];
    const needLog = logLevel >= configLevel && logLevel < LogLevelEnum.silent;
    return (msg, context) => {
      if (context) rawMethod(msg, context);
      else rawMethod(msg);
      if (needLog) {
        extension(logLevel, msg, context);
      }
    };
  };
  log.setLevel(log.getLevel());
  setClientSdkLogExtension((_a = options.liveKitClientLogExtension) != null ? _a : extension);
}

// src/helper/grid-layouts.ts
var GRID_LAYOUTS = [
  {
    columns: 1,
    rows: 1
  },
  {
    columns: 1,
    rows: 2,
    orientation: "portrait"
  },
  {
    columns: 2,
    rows: 1,
    orientation: "landscape"
  },
  {
    columns: 2,
    rows: 2,
    minWidth: 560
  },
  {
    columns: 3,
    rows: 3,
    minWidth: 700
  },
  {
    columns: 4,
    rows: 4,
    minWidth: 960
  },
  {
    columns: 5,
    rows: 5,
    minWidth: 1100
  }
];
function selectGridLayout(layoutDefinitions, participantCount, width, height) {
  if (layoutDefinitions.length < 1) {
    throw new Error("At least one grid layout definition must be provided.");
  }
  const layouts = expandAndSortLayoutDefinitions(layoutDefinitions);
  if (width <= 0 || height <= 0) {
    return layouts[0];
  }
  let currentLayoutIndex = 0;
  const containerOrientation = width / height > 1 ? "landscape" : "portrait";
  let layout = layouts.find((layout_, index, allLayouts) => {
    currentLayoutIndex = index;
    const isBiggerLayoutAvailable = allLayouts.findIndex((l, i) => {
      const fitsOrientation = !l.orientation || l.orientation === containerOrientation;
      const layoutIsBiggerThanCurrent = i > index;
      const layoutFitsSameAmountOfParticipants = l.maxTiles === layout_.maxTiles;
      return layoutIsBiggerThanCurrent && layoutFitsSameAmountOfParticipants && fitsOrientation;
    }) !== -1;
    return layout_.maxTiles >= participantCount && !isBiggerLayoutAvailable;
  });
  if (layout === void 0) {
    layout = layouts[layouts.length - 1];
    if (layout) {
      log.warn(
        `No layout found for: participantCount: ${participantCount}, width/height: ${width}/${height} fallback to biggest available layout (${layout}).`
      );
    } else {
      throw new Error(`No layout or fallback layout found.`);
    }
  }
  if (width < layout.minWidth || height < layout.minHeight) {
    if (currentLayoutIndex > 0) {
      const smallerLayout = layouts[currentLayoutIndex - 1];
      layout = selectGridLayout(
        layouts.slice(0, currentLayoutIndex),
        smallerLayout.maxTiles,
        width,
        height
      );
    }
  }
  return layout;
}
function expandAndSortLayoutDefinitions(layouts) {
  return [...layouts].map((layout) => {
    var _a, _b;
    return {
      name: `${layout.columns}x${layout.rows}`,
      columns: layout.columns,
      rows: layout.rows,
      maxTiles: layout.columns * layout.rows,
      minWidth: (_a = layout.minWidth) != null ? _a : 0,
      minHeight: (_b = layout.minHeight) != null ? _b : 0,
      orientation: layout.orientation
    };
  }).sort((a, b) => {
    if (a.maxTiles !== b.maxTiles) {
      return a.maxTiles - b.maxTiles;
    } else if (a.minWidth !== 0 || b.minWidth !== 0) {
      return a.minWidth - b.minWidth;
    } else if (a.minHeight !== 0 || b.minHeight !== 0) {
      return a.minHeight - b.minHeight;
    } else {
      return 0;
    }
  });
}

// src/helper/set-helper.ts
function setDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// src/helper/featureDetection.ts
function supportsScreenSharing() {
  return typeof navigator !== "undefined" && navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia;
}

// src/helper/transcriptions.ts
function getActiveTranscriptionSegments(segments, syncTimes, maxAge = 0) {
  return segments.filter((segment) => {
    var _a;
    const hasTrackSync = !!syncTimes.rtpTimestamp;
    const currentTrackTime = (_a = syncTimes.rtpTimestamp) != null ? _a : performance.timeOrigin + performance.now();
    const displayStartTime = hasTrackSync ? Math.max(segment.receivedAtMediaTimestamp, segment.startTime) : segment.receivedAt;
    const segmentDuration = maxAge + segment.endTime - segment.startTime;
    return currentTrackTime >= displayStartTime && currentTrackTime <= displayStartTime + segmentDuration;
  });
}
function addMediaTimestampToTranscription(segment, timestamps) {
  var _a;
  return __spreadProps(__spreadValues({}, segment), {
    receivedAtMediaTimestamp: (_a = timestamps.rtpTimestamp) != null ? _a : 0,
    receivedAt: timestamps.timestamp
  });
}
function dedupeSegments(prevSegments, newSegments, windowSize) {
  return [...prevSegments, ...newSegments].reduceRight((acc, segment) => {
    if (!acc.find((val) => val.id === segment.id)) {
      acc.unshift(segment);
    }
    return acc;
  }, []).slice(0 - windowSize);
}
function didActiveSegmentsChange(prevActive, newActive) {
  if (newActive.length !== prevActive.length) {
    return true;
  }
  return !newActive.every((newSegment) => {
    return prevActive.find(
      (prevSegment) => prevSegment.id === newSegment.id && prevSegment.text === newSegment.text && prevSegment.final === newSegment.final && prevSegment.language === newSegment.language && prevSegment.startTime === newSegment.startTime && prevSegment.endTime === newSegment.endTime
    );
  });
}

// src/types.ts
var PIN_DEFAULT_STATE = [];
var WIDGET_DEFAULT_STATE = {
  showChat: false,
  unreadMessages: 0,
  showSettings: false
};
function isSourceWitOptions(source) {
  return typeof source === "object";
}
function isSourcesWithOptions(sources) {
  return Array.isArray(sources) && sources.filter(isSourceWitOptions).length > 0;
}

// src/sorting/sort-track-bundles.ts
import { Track as Track2 } from "livekit-client";

// src/sorting/base-sort-functions.ts
import { Track } from "livekit-client";
function sortParticipantsByAudioLevel(a, b) {
  return b.audioLevel - a.audioLevel;
}
function sortParticipantsByIsSpeaking(a, b) {
  if (a.isSpeaking === b.isSpeaking) {
    return 0;
  } else {
    return a.isSpeaking ? -1 : 1;
  }
}
function sortParticipantsByLastSpokenAT(a, b) {
  var _a, _b, _c, _d;
  if (a.lastSpokeAt !== void 0 || b.lastSpokeAt !== void 0) {
    return ((_b = (_a = b.lastSpokeAt) == null ? void 0 : _a.getTime()) != null ? _b : 0) - ((_d = (_c = a.lastSpokeAt) == null ? void 0 : _c.getTime()) != null ? _d : 0);
  } else {
    return 0;
  }
}
function sortParticipantsByJoinedAt(a, b) {
  var _a, _b, _c, _d;
  return ((_b = (_a = a.joinedAt) == null ? void 0 : _a.getTime()) != null ? _b : 0) - ((_d = (_c = b.joinedAt) == null ? void 0 : _c.getTime()) != null ? _d : 0);
}
function sortTrackReferencesByType(a, b) {
  if (isTrackReference(a)) {
    if (isTrackReference(b)) {
      return 0;
    } else {
      return -1;
    }
  } else if (isTrackReference(b)) {
    return 1;
  } else {
    return 0;
  }
}
function sortTrackRefsByIsCameraEnabled(a, b) {
  const aVideo = a.participant.isCameraEnabled;
  const bVideo = b.participant.isCameraEnabled;
  if (aVideo !== bVideo) {
    if (aVideo) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

// src/sorting/sort-track-bundles.ts
function sortTrackReferences(tracks) {
  const localTracks = [];
  const screenShareTracks = [];
  const cameraTracks = [];
  const undefinedTracks = [];
  tracks.forEach((trackRef) => {
    if (trackRef.participant.isLocal && trackRef.source === Track2.Source.Camera) {
      localTracks.push(trackRef);
    } else if (trackRef.source === Track2.Source.ScreenShare) {
      screenShareTracks.push(trackRef);
    } else if (trackRef.source === Track2.Source.Camera) {
      cameraTracks.push(trackRef);
    } else {
      undefinedTracks.push(trackRef);
    }
  });
  const sortedScreenShareTracks = sortScreenShareTracks(screenShareTracks);
  const sortedCameraTracks = sortCameraTracks(cameraTracks);
  return [...localTracks, ...sortedScreenShareTracks, ...sortedCameraTracks, ...undefinedTracks];
}
function sortScreenShareTracks(screenShareTracks) {
  const localScreenShares = [];
  const remoteScreenShares = [];
  screenShareTracks.forEach((trackRef) => {
    if (trackRef.participant.isLocal) {
      localScreenShares.push(trackRef);
    } else {
      remoteScreenShares.push(trackRef);
    }
  });
  localScreenShares.sort((a, b) => sortParticipantsByJoinedAt(a.participant, b.participant));
  remoteScreenShares.sort((a, b) => sortParticipantsByJoinedAt(a.participant, b.participant));
  const sortedScreenShareTrackRefs = [...remoteScreenShares, ...localScreenShares];
  return sortedScreenShareTrackRefs;
}
function sortCameraTracks(cameraTrackReferences) {
  const localCameraTracks = [];
  const remoteCameraTracks = [];
  cameraTrackReferences.forEach((trackRef) => {
    if (trackRef.participant.isLocal) {
      localCameraTracks.push(trackRef);
    } else {
      remoteCameraTracks.push(trackRef);
    }
  });
  remoteCameraTracks.sort((a, b) => {
    if (a.participant.isSpeaking && b.participant.isSpeaking) {
      return sortParticipantsByAudioLevel(a.participant, b.participant);
    }
    if (a.participant.isSpeaking !== b.participant.isSpeaking) {
      return sortParticipantsByIsSpeaking(a.participant, b.participant);
    }
    if (a.participant.lastSpokeAt !== b.participant.lastSpokeAt) {
      return sortParticipantsByLastSpokenAT(a.participant, b.participant);
    }
    if (isTrackReference(a) !== isTrackReference(b)) {
      return sortTrackReferencesByType(a, b);
    }
    if (a.participant.isCameraEnabled !== b.participant.isCameraEnabled) {
      return sortTrackRefsByIsCameraEnabled(a, b);
    }
    return sortParticipantsByJoinedAt(a.participant, b.participant);
  });
  return [...localCameraTracks, ...remoteCameraTracks];
}

// src/sorting/sort-participants.ts
function sortParticipants(participants) {
  const sortedParticipants = [...participants];
  sortedParticipants.sort((a, b) => {
    if (a.isSpeaking && b.isSpeaking) {
      return sortParticipantsByAudioLevel(a, b);
    }
    if (a.isSpeaking !== b.isSpeaking) {
      return sortParticipantsByIsSpeaking(a, b);
    }
    if (a.lastSpokeAt !== b.lastSpokeAt) {
      return sortParticipantsByLastSpokenAT(a, b);
    }
    const aVideo = a.videoTrackPublications.size > 0;
    const bVideo = b.videoTrackPublications.size > 0;
    if (aVideo !== bVideo) {
      if (aVideo) {
        return -1;
      } else {
        return 1;
      }
    }
    return sortParticipantsByJoinedAt(a, b);
  });
  const localParticipant = sortedParticipants.find((p) => p.isLocal);
  if (localParticipant) {
    const localIdx = sortedParticipants.indexOf(localParticipant);
    if (localIdx >= 0) {
      sortedParticipants.splice(localIdx, 1);
      if (sortedParticipants.length > 0) {
        sortedParticipants.splice(0, 0, localParticipant);
      } else {
        sortedParticipants.push(localParticipant);
      }
    }
  }
  return sortedParticipants;
}

// src/helper/array-helper.ts
function chunk(input, size) {
  return input.reduce(
    (arr, item, idx) => {
      return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    },
    []
  );
}
function zip(a1, a2) {
  const resultLength = Math.max(a1.length, a2.length);
  return new Array(resultLength).fill([]).map((_val, idx) => [a1[idx], a2[idx]]);
}
function differenceBy(a1, a2, by) {
  return a1.filter((c) => !a2.map((v) => by(v)).includes(by(c)));
}

// src/track-reference/test-utils.ts
import { Participant, RemoteTrackPublication, Track as Track3 } from "livekit-client";
import { TrackInfo } from "@livekit/protocol";
function flatTrackReferenceArray(list) {
  return list.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return `${item}`;
    } else {
      return getTrackReferenceId(item);
    }
  });
}

// src/sorting/tile-array-update.ts
function visualPageChange(state, next) {
  return {
    dropped: differenceBy(state, next, getTrackReferenceId),
    added: differenceBy(next, state, getTrackReferenceId)
  };
}
function listNeedsUpdating(changes) {
  return changes.added.length !== 0 || changes.dropped.length !== 0;
}
function findIndex(trackReference, trackReferences) {
  const indexToReplace = trackReferences.findIndex(
    (trackReference_) => getTrackReferenceId(trackReference_) === getTrackReferenceId(trackReference)
  );
  if (indexToReplace === -1) {
    throw new Error(
      `Element not part of the array: ${getTrackReferenceId(
        trackReference
      )} not in ${flatTrackReferenceArray(trackReferences)}`
    );
  }
  return indexToReplace;
}
function swapItems(moveForward, moveBack, trackReferences) {
  const indexToReplace = findIndex(moveForward, trackReferences);
  const indexReplaceWith = findIndex(moveBack, trackReferences);
  trackReferences.splice(indexToReplace, 1, moveBack);
  trackReferences.splice(indexReplaceWith, 1, moveForward);
  return trackReferences;
}
function dropItem(itemToDrop, list) {
  const indexOfElementToDrop = findIndex(itemToDrop, list);
  list.splice(indexOfElementToDrop, 1);
  return list;
}
function addItem(itemToAdd, list) {
  return [...list, itemToAdd];
}
function divideIntoPages(list, maxElementsOnPage) {
  const pages = chunk(list, maxElementsOnPage);
  return pages;
}
function updatePages(currentList, nextList, maxItemsOnPage) {
  let updatedList = refreshList(currentList, nextList);
  if (updatedList.length < nextList.length) {
    const addedItems = differenceBy(nextList, updatedList, getTrackReferenceId);
    updatedList = [...updatedList, ...addedItems];
  }
  const currentPages = divideIntoPages(updatedList, maxItemsOnPage);
  const nextPages = divideIntoPages(nextList, maxItemsOnPage);
  zip(currentPages, nextPages).forEach(([currentPage, nextPage], pageIndex) => {
    if (currentPage && nextPage) {
      const updatedPage = divideIntoPages(updatedList, maxItemsOnPage)[pageIndex];
      const changes = visualPageChange(updatedPage, nextPage);
      if (listNeedsUpdating(changes)) {
        log.debug(
          `Detected visual changes on page: ${pageIndex}, current: ${flatTrackReferenceArray(
            currentPage
          )}, next: ${flatTrackReferenceArray(nextPage)}`,
          { changes }
        );
        if (changes.added.length === changes.dropped.length) {
          zip(changes.added, changes.dropped).forEach(([added, dropped]) => {
            if (added && dropped) {
              updatedList = swapItems(added, dropped, updatedList);
            } else {
              throw new Error(
                `For a swap action we need a addition and a removal one is missing: ${added}, ${dropped}`
              );
            }
          });
        }
        if (changes.added.length === 0 && changes.dropped.length > 0) {
          changes.dropped.forEach((item) => {
            updatedList = dropItem(item, updatedList);
          });
        }
        if (changes.added.length > 0 && changes.dropped.length === 0) {
          changes.added.forEach((item) => {
            updatedList = addItem(item, updatedList);
          });
        }
      }
    }
  });
  if (updatedList.length > nextList.length) {
    const missingItems = differenceBy(updatedList, nextList, getTrackReferenceId);
    updatedList = updatedList.filter(
      (item) => !missingItems.map(getTrackReferenceId).includes(getTrackReferenceId(item))
    );
  }
  return updatedList;
}
function refreshList(currentList, nextList) {
  return currentList.map((currentItem) => {
    const updateForCurrentItem = nextList.find(
      (newItem_) => (
        // If the IDs match or ..
        getTrackReferenceId(currentItem) === getTrackReferenceId(newItem_) || // ... if the current item is a placeholder and the new item is the track reference can replace it.
        typeof currentItem !== "number" && isTrackReferencePlaceholder(currentItem) && isTrackReference(newItem_) && isPlaceholderReplacement(currentItem, newItem_)
      )
    );
    return updateForCurrentItem != null ? updateForCurrentItem : currentItem;
  });
}

// src/components/mediaToggle.ts
import { Track as Track7 } from "livekit-client";
import { Subject as Subject2, map as map4, startWith as startWith4 } from "rxjs";

// src/observables/participant.ts
import { ParticipantEvent as ParticipantEvent2, RoomEvent as RoomEvent3, Track as Track6 } from "livekit-client";
import { Observable as Observable2, map as map3, startWith as startWith3, switchMap } from "rxjs";

// src/components/mediaTrack.ts
import { Track as Track4 } from "livekit-client";
import { map, startWith } from "rxjs";

// src/styles-interface/class-prefixer.ts
function prefixClass(unprefixedClassName) {
  return `${cssPrefix}-${unprefixedClassName}`;
}

// src/components/mediaTrack.ts
function setupMediaTrack(trackIdentifier) {
  const initialPub = getTrackByIdentifier(trackIdentifier);
  const trackObserver = observeParticipantMedia(trackIdentifier.participant).pipe(
    map(() => {
      return getTrackByIdentifier(trackIdentifier);
    }),
    startWith(initialPub)
  );
  const className = prefixClass(
    trackIdentifier.source === Track4.Source.Camera || trackIdentifier.source === Track4.Source.ScreenShare ? "participant-media-video" : "participant-media-audio"
  );
  return { className, trackObserver };
}
function getTrackByIdentifier(options) {
  if (isTrackReference(options)) {
    return options.publication;
  } else {
    const { source, name, participant } = options;
    if (source && name) {
      return participant.getTrackPublications().find((pub) => pub.source === source && pub.trackName === name);
    } else if (name) {
      return participant.getTrackPublicationByName(name);
    } else if (source) {
      return participant.getTrackPublication(source);
    } else {
      throw new Error("At least one of source and name needs to be defined");
    }
  }
}

// src/observables/room.ts
import { Room, RoomEvent as RoomEvent2, Track as Track5 } from "livekit-client";
import { concat, filter, finalize, map as map2, Observable, startWith as startWith2, Subject } from "rxjs";
function observeRoomEvents(room, ...events) {
  const observable = new Observable((subscribe) => {
    const onRoomUpdate = () => {
      subscribe.next(room);
    };
    events.forEach((evt) => {
      room.on(evt, onRoomUpdate);
    });
    const unsubscribe = () => {
      events.forEach((evt) => {
        room.off(evt, onRoomUpdate);
      });
    };
    return unsubscribe;
  }).pipe(startWith2(room));
  return observable;
}
function roomEventSelector(room, event) {
  const observable = new Observable((subscribe) => {
    const update = (...params) => {
      subscribe.next(params);
    };
    room.on(event, update);
    const unsubscribe = () => {
      room.off(event, update);
    };
    return unsubscribe;
  });
  return observable;
}
function roomObserver(room) {
  const observable = observeRoomEvents(
    room,
    RoomEvent2.ParticipantConnected,
    RoomEvent2.ParticipantDisconnected,
    RoomEvent2.ActiveSpeakersChanged,
    RoomEvent2.TrackSubscribed,
    RoomEvent2.TrackUnsubscribed,
    RoomEvent2.LocalTrackPublished,
    RoomEvent2.LocalTrackUnpublished,
    RoomEvent2.AudioPlaybackStatusChanged,
    RoomEvent2.ConnectionStateChanged
  );
  return observable;
}
function connectionStateObserver(room) {
  return roomEventSelector(room, RoomEvent2.ConnectionStateChanged).pipe(
    map2(([connectionState]) => connectionState),
    startWith2(room.state)
  );
}
function screenShareObserver(room) {
  let screenShareSubscriber;
  const observers = [];
  const observable = new Observable((subscriber) => {
    screenShareSubscriber = subscriber;
    return () => {
      observers.forEach((observer) => {
        observer.unsubscribe();
      });
    };
  });
  const screenShareTracks = [];
  const handleSub = (publication, participant) => {
    if (publication.source !== Track5.Source.ScreenShare && publication.source !== Track5.Source.ScreenShareAudio) {
      return;
    }
    let trackMap = screenShareTracks.find((tr) => tr.participant.identity === participant.identity);
    const getScreenShareTracks = (participant2) => {
      return participant2.getTrackPublications().filter(
        (track) => (track.source === Track5.Source.ScreenShare || track.source === Track5.Source.ScreenShareAudio) && track.track
      );
    };
    if (!trackMap) {
      trackMap = {
        participant,
        tracks: getScreenShareTracks(participant)
      };
    } else {
      const index = screenShareTracks.indexOf(trackMap);
      screenShareTracks.splice(index, 1);
      trackMap.tracks = getScreenShareTracks(participant);
    }
    if (trackMap.tracks.length > 0) {
      screenShareTracks.push(trackMap);
    }
    screenShareSubscriber.next(screenShareTracks);
  };
  observers.push(
    roomEventSelector(room, RoomEvent2.TrackSubscribed).subscribe(
      ([, ...args]) => handleSub(...args)
    )
  );
  observers.push(
    roomEventSelector(room, RoomEvent2.TrackUnsubscribed).subscribe(
      ([, ...args]) => handleSub(...args)
    )
  );
  observers.push(
    roomEventSelector(room, RoomEvent2.LocalTrackPublished).subscribe((args) => handleSub(...args))
  );
  observers.push(
    roomEventSelector(room, RoomEvent2.LocalTrackUnpublished).subscribe((args) => {
      handleSub(...args);
    })
  );
  observers.push(
    roomEventSelector(room, RoomEvent2.TrackMuted).subscribe((args) => {
      handleSub(...args);
    })
  );
  observers.push(
    roomEventSelector(room, RoomEvent2.TrackUnmuted).subscribe((args) => {
      handleSub(...args);
    })
  );
  setTimeout(() => {
    for (const p of room.remoteParticipants.values()) {
      p.getTrackPublications().forEach((track) => {
        handleSub(track, p);
      });
    }
  }, 1);
  return observable;
}
function roomInfoObserver(room) {
  const observer = observeRoomEvents(
    room,
    RoomEvent2.RoomMetadataChanged,
    RoomEvent2.ConnectionStateChanged
  ).pipe(
    map2((r) => {
      return { name: r.name, metadata: r.metadata };
    })
  );
  return observer;
}
function activeSpeakerObserver(room) {
  return roomEventSelector(room, RoomEvent2.ActiveSpeakersChanged).pipe(
    map2(([speakers]) => speakers)
  );
}
function createMediaDeviceObserver(kind, onError, requestPermissions = true) {
  var _a;
  const onDeviceChange = () => __async(this, null, function* () {
    try {
      const newDevices = yield Room.getLocalDevices(kind, requestPermissions);
      deviceSubject.next(newDevices);
    } catch (e) {
      onError == null ? void 0 : onError(e);
    }
  });
  const deviceSubject = new Subject();
  const observable = deviceSubject.pipe(
    finalize(() => {
      var _a2;
      (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.removeEventListener("devicechange", onDeviceChange);
    })
  );
  if (typeof window !== "undefined") {
    if (!window.isSecureContext) {
      throw new Error(
        `Accessing media devices is available only in secure contexts (HTTPS and localhost), in some or all supporting browsers. See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices`
      );
    }
    (_a = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a.addEventListener("devicechange", onDeviceChange);
  }
  return concat(
    Room.getLocalDevices(kind, requestPermissions).catch((e) => {
      onError == null ? void 0 : onError(e);
      return [];
    }),
    observable
  );
}
function createDataObserver(room) {
  return roomEventSelector(room, RoomEvent2.DataReceived);
}
function createChatObserver(room) {
  return roomEventSelector(room, RoomEvent2.ChatMessage);
}
function roomAudioPlaybackAllowedObservable(room) {
  const observable = observeRoomEvents(room, RoomEvent2.AudioPlaybackStatusChanged).pipe(
    map2((room2) => {
      return { canPlayAudio: room2.canPlaybackAudio };
    })
  );
  return observable;
}
function roomVideoPlaybackAllowedObservable(room) {
  const observable = observeRoomEvents(room, RoomEvent2.VideoPlaybackStatusChanged).pipe(
    map2((room2) => {
      return { canPlayVideo: room2.canPlaybackVideo };
    })
  );
  return observable;
}
function createActiveDeviceObservable(room, kind) {
  return roomEventSelector(room, RoomEvent2.ActiveDeviceChanged).pipe(
    filter(([kindOfDevice]) => kindOfDevice === kind),
    map2(([kind2, deviceId]) => {
      log.debug("activeDeviceObservable | RoomEvent.ActiveDeviceChanged", { kind: kind2, deviceId });
      return deviceId;
    })
  );
}
function encryptionStatusObservable(room, participant) {
  return roomEventSelector(room, RoomEvent2.ParticipantEncryptionStatusChanged).pipe(
    filter(
      ([, p]) => (participant == null ? void 0 : participant.identity) === (p == null ? void 0 : p.identity) || !p && (participant == null ? void 0 : participant.identity) === room.localParticipant.identity
    ),
    map2(([encrypted]) => encrypted),
    startWith2(
      (participant == null ? void 0 : participant.isLocal) ? participant.isE2EEEnabled : !!(participant == null ? void 0 : participant.isEncrypted)
    )
  );
}
function recordingStatusObservable(room) {
  return roomEventSelector(room, RoomEvent2.RecordingStatusChanged).pipe(
    map2(([recording]) => recording),
    startWith2(room.isRecording)
  );
}

// src/observables/participant.ts
function observeParticipantEvents(participant, ...events) {
  const observable = new Observable2((subscribe) => {
    const onParticipantUpdate = () => {
      subscribe.next(participant);
    };
    events.forEach((evt) => {
      participant.on(evt, onParticipantUpdate);
    });
    const unsubscribe = () => {
      events.forEach((evt) => {
        participant.off(evt, onParticipantUpdate);
      });
    };
    return unsubscribe;
  }).pipe(startWith3(participant));
  return observable;
}
function observeParticipantMedia(participant) {
  const participantObserver = observeParticipantEvents(
    participant,
    ParticipantEvent2.TrackMuted,
    ParticipantEvent2.TrackUnmuted,
    ParticipantEvent2.ParticipantPermissionsChanged,
    // ParticipantEvent.IsSpeakingChanged,
    ParticipantEvent2.TrackPublished,
    ParticipantEvent2.TrackUnpublished,
    ParticipantEvent2.LocalTrackPublished,
    ParticipantEvent2.LocalTrackUnpublished,
    ParticipantEvent2.MediaDevicesError,
    ParticipantEvent2.TrackSubscriptionStatusChanged
    // ParticipantEvent.ConnectionQualityChanged,
  ).pipe(
    map3((p) => {
      const { isMicrophoneEnabled, isCameraEnabled, isScreenShareEnabled } = p;
      const microphoneTrack = p.getTrackPublication(Track6.Source.Microphone);
      const cameraTrack = p.getTrackPublication(Track6.Source.Camera);
      const participantMedia = {
        isCameraEnabled,
        isMicrophoneEnabled,
        isScreenShareEnabled,
        cameraTrack,
        microphoneTrack,
        participant: p
      };
      return participantMedia;
    })
  );
  return participantObserver;
}
function createTrackObserver(participant, options) {
  return observeParticipantMedia(participant).pipe(
    map3(() => {
      return { publication: getTrackByIdentifier(options) };
    })
  );
}
function participantInfoObserver(participant) {
  if (!participant) {
    return void 0;
  }
  const observer = observeParticipantEvents(
    participant,
    ParticipantEvent2.ParticipantMetadataChanged,
    ParticipantEvent2.ParticipantNameChanged
  ).pipe(
    map3(({ name, identity, metadata }) => {
      return {
        name,
        identity,
        metadata
      };
    }),
    startWith3({
      name: participant.name,
      identity: participant.identity,
      metadata: participant.metadata
    })
  );
  return observer;
}
function createConnectionQualityObserver(participant) {
  const observer = participantEventSelector(
    participant,
    ParticipantEvent2.ConnectionQualityChanged
  ).pipe(
    map3(([quality]) => quality),
    startWith3(participant.connectionQuality)
  );
  return observer;
}
function participantEventSelector(participant, event) {
  const observable = new Observable2((subscribe) => {
    const update = (...params) => {
      subscribe.next(params);
    };
    participant.on(event, update);
    const unsubscribe = () => {
      participant.off(event, update);
    };
    return unsubscribe;
  });
  return observable;
}
function mutedObserver(trackRef) {
  var _a, _b, _c, _d;
  return observeParticipantEvents(
    trackRef.participant,
    ParticipantEvent2.TrackMuted,
    ParticipantEvent2.TrackUnmuted,
    ParticipantEvent2.TrackSubscribed,
    ParticipantEvent2.TrackUnsubscribed,
    ParticipantEvent2.LocalTrackPublished,
    ParticipantEvent2.LocalTrackUnpublished
  ).pipe(
    map3((participant) => {
      var _a2, _b2;
      const pub = (_a2 = trackRef.publication) != null ? _a2 : participant.getTrackPublication(trackRef.source);
      return (_b2 = pub == null ? void 0 : pub.isMuted) != null ? _b2 : true;
    }),
    startWith3(
      (_d = (_c = (_a = trackRef.publication) == null ? void 0 : _a.isMuted) != null ? _c : (_b = trackRef.participant.getTrackPublication(trackRef.source)) == null ? void 0 : _b.isMuted) != null ? _d : true
    )
  );
}
function createIsSpeakingObserver(participant) {
  return participantEventSelector(participant, ParticipantEvent2.IsSpeakingChanged).pipe(
    map3(([isSpeaking]) => isSpeaking)
  );
}
function connectedParticipantsObserver(room, options = {}) {
  var _a;
  let subscriber;
  const observable = new Observable2((sub) => {
    subscriber = sub;
    return () => listener.unsubscribe();
  }).pipe(startWith3(Array.from(room.remoteParticipants.values())));
  const additionalRoomEvents = (_a = options.additionalRoomEvents) != null ? _a : allParticipantRoomEvents;
  const roomEvents = Array.from(
    /* @__PURE__ */ new Set([
      RoomEvent3.ParticipantConnected,
      RoomEvent3.ParticipantDisconnected,
      RoomEvent3.ConnectionStateChanged,
      ...additionalRoomEvents
    ])
  );
  const listener = observeRoomEvents(room, ...roomEvents).subscribe(
    (r) => subscriber == null ? void 0 : subscriber.next(Array.from(r.remoteParticipants.values()))
  );
  if (room.remoteParticipants.size > 0) {
    subscriber == null ? void 0 : subscriber.next(Array.from(room.remoteParticipants.values()));
  }
  return observable;
}
function connectedParticipantObserver(room, identity, options = {}) {
  var _a;
  const additionalEvents = (_a = options.additionalEvents) != null ? _a : allParticipantEvents;
  const observable = observeRoomEvents(
    room,
    RoomEvent3.ParticipantConnected,
    RoomEvent3.ParticipantDisconnected,
    RoomEvent3.ConnectionStateChanged
  ).pipe(
    switchMap((r) => {
      const participant = r.getParticipantByIdentity(identity);
      if (participant) {
        return observeParticipantEvents(participant, ...additionalEvents);
      } else {
        return new Observable2((subscribe) => subscribe.next(void 0));
      }
    }),
    startWith3(room.getParticipantByIdentity(identity))
  );
  return observable;
}
function participantPermissionObserver(participant) {
  const observer = participantEventSelector(
    participant,
    ParticipantEvent2.ParticipantPermissionsChanged
  ).pipe(
    map3(() => participant.permissions),
    startWith3(participant.permissions)
  );
  return observer;
}
function participantByIdentifierObserver(room, { kind, identity }, options = {}) {
  var _a;
  const additionalEvents = (_a = options.additionalEvents) != null ? _a : allParticipantEvents;
  const matchesIdentifier = (participant) => {
    let isMatch = true;
    if (kind) {
      isMatch = isMatch && participant.kind === kind;
    }
    if (identity) {
      isMatch = isMatch && participant.identity === identity;
    }
    return isMatch;
  };
  const observable = observeRoomEvents(
    room,
    RoomEvent3.ParticipantConnected,
    RoomEvent3.ParticipantDisconnected,
    RoomEvent3.ConnectionStateChanged
  ).pipe(
    switchMap((r) => {
      const participant = Array.from(r.remoteParticipants.values()).find(
        (p) => matchesIdentifier(p)
      );
      if (participant) {
        return observeParticipantEvents(participant, ...additionalEvents);
      } else {
        return new Observable2((subscribe) => subscribe.next(void 0));
      }
    }),
    startWith3(Array.from(room.remoteParticipants.values()).find((p) => matchesIdentifier(p)))
  );
  return observable;
}
function participantAttributesObserver(participant) {
  if (typeof participant === "undefined") {
    return new Observable2();
  }
  return participantEventSelector(participant, ParticipantEvent2.AttributesChanged).pipe(
    map3(([changedAttributes]) => {
      return {
        changed: changedAttributes,
        attributes: participant.attributes
      };
    }),
    startWith3({ changed: participant.attributes, attributes: participant.attributes })
  );
}

// src/components/mediaToggle.ts
function setupMediaToggle(source, room, options, publishOptions, onError) {
  const { localParticipant } = room;
  const getSourceEnabled = (source2, localParticipant2) => {
    let isEnabled = false;
    switch (source2) {
      case Track7.Source.Camera:
        isEnabled = localParticipant2.isCameraEnabled;
        break;
      case Track7.Source.Microphone:
        isEnabled = localParticipant2.isMicrophoneEnabled;
        break;
      case Track7.Source.ScreenShare:
        isEnabled = localParticipant2.isScreenShareEnabled;
        break;
      default:
        break;
    }
    return isEnabled;
  };
  const enabledObserver = observeParticipantMedia(localParticipant).pipe(
    map4((media) => {
      return getSourceEnabled(source, media.participant);
    }),
    startWith4(getSourceEnabled(source, localParticipant))
  );
  const pendingSubject = new Subject2();
  const toggle = (forceState, captureOptions) => __async(this, null, function* () {
    try {
      captureOptions != null ? captureOptions : captureOptions = options;
      pendingSubject.next(true);
      switch (source) {
        case Track7.Source.Camera:
          yield localParticipant.setCameraEnabled(
            forceState != null ? forceState : !localParticipant.isCameraEnabled,
            captureOptions,
            publishOptions
          );
          return localParticipant.isCameraEnabled;
        case Track7.Source.Microphone:
          yield localParticipant.setMicrophoneEnabled(
            forceState != null ? forceState : !localParticipant.isMicrophoneEnabled,
            captureOptions,
            publishOptions
          );
          return localParticipant.isMicrophoneEnabled;
        case Track7.Source.ScreenShare:
          yield localParticipant.setScreenShareEnabled(
            forceState != null ? forceState : !localParticipant.isScreenShareEnabled,
            captureOptions,
            publishOptions
          );
          return localParticipant.isScreenShareEnabled;
        default:
          throw new TypeError("Tried to toggle unsupported source");
      }
    } catch (e) {
      if (onError && e instanceof Error) {
        onError == null ? void 0 : onError(e);
        return void 0;
      } else {
        throw e;
      }
    } finally {
      pendingSubject.next(false);
    }
  });
  const className = prefixClass("button");
  return {
    className,
    toggle,
    enabledObserver,
    pendingObserver: pendingSubject.asObservable()
  };
}
function setupManualToggle() {
  let state = false;
  const enabledSubject = new Subject2();
  const pendingSubject = new Subject2();
  const toggle = (forceState) => __async(this, null, function* () {
    pendingSubject.next(true);
    state = forceState != null ? forceState : !state;
    enabledSubject.next(state);
    pendingSubject.next(false);
  });
  const className = prefixClass("button");
  return {
    className,
    toggle,
    enabledObserver: enabledSubject.asObservable(),
    pendingObserver: pendingSubject.asObservable()
  };
}

// src/components/mediaDeviceSelect.ts
import {
  Track as Track8
} from "livekit-client";
import { BehaviorSubject } from "rxjs";
function setupDeviceSelector(kind, room, localTrack) {
  const activeDeviceSubject = new BehaviorSubject(void 0);
  const activeDeviceObservable = createActiveDeviceObservable(room, kind);
  const setActiveMediaDevice = (_0, ..._1) => __async(this, [_0, ..._1], function* (id, options = {}) {
    var _a, _b, _c;
    if (localTrack) {
      yield localTrack.setDeviceId(options.exact ? { exact: id } : id);
      const actualId = yield localTrack.getDeviceId(false);
      activeDeviceSubject.next(
        id === "default" && localTrack.mediaStreamTrack.label.startsWith("Default") ? id : actualId
      );
    } else if (room) {
      log.debug(`Switching active device of kind "${kind}" with id ${id}.`);
      yield room.switchActiveDevice(kind, id, options.exact);
      const actualDeviceId = (_a = room.getActiveDevice(kind)) != null ? _a : id;
      if (actualDeviceId !== id && id !== "default") {
        log.info(
          `We tried to select the device with id (${id}), but the browser decided to select the device with id (${actualDeviceId}) instead.`
        );
      }
      let targetTrack = void 0;
      if (kind === "audioinput")
        targetTrack = (_b = room.localParticipant.getTrackPublication(Track8.Source.Microphone)) == null ? void 0 : _b.track;
      else if (kind === "videoinput") {
        targetTrack = (_c = room.localParticipant.getTrackPublication(Track8.Source.Camera)) == null ? void 0 : _c.track;
      }
      const useDefault = id === "default" && !targetTrack || id === "default" && (targetTrack == null ? void 0 : targetTrack.mediaStreamTrack.label.startsWith("Default"));
      activeDeviceSubject.next(useDefault ? id : actualDeviceId);
    }
  });
  const className = prefixClass("media-device-select");
  return {
    className,
    activeDeviceObservable,
    setActiveMediaDevice
  };
}

// src/components/disconnectButton.ts
function setupDisconnectButton(room) {
  const disconnect = (stopTracks) => {
    room.disconnect(stopTracks);
  };
  const className = prefixClass("disconnect-button");
  return { className, disconnect };
}

// src/components/connectionQualityIndicator.ts
function setupConnectionQualityIndicator(participant) {
  const className = prefixClass("connection-quality");
  const connectionQualityObserver = createConnectionQualityObserver(participant);
  return { className, connectionQualityObserver };
}

// src/components/trackMutedIndicator.ts
import { Track as Track9 } from "livekit-client";
function setupTrackMutedIndicator(trackRef) {
  let classForSource = "track-muted-indicator-camera";
  switch (trackRef.source) {
    case Track9.Source.Camera:
      classForSource = "track-muted-indicator-camera";
      break;
    case Track9.Source.Microphone:
      classForSource = "track-muted-indicator-microphone";
      break;
    default:
      break;
  }
  const className = prefixClass(classForSource);
  const mediaMutedObserver = mutedObserver(trackRef);
  return { className, mediaMutedObserver };
}

// src/components/participantName.ts
function setupParticipantName(participant) {
  const infoObserver = participantInfoObserver(participant);
  return { className: "lk-participant-name", infoObserver };
}

// src/components/participantTile.ts
function setupParticipantTile() {
  const className = prefixClass("participant-tile");
  return {
    className
  };
}

// src/components/chat.ts
import { compareVersions, RoomEvent as RoomEvent4 } from "livekit-client";
import { BehaviorSubject as BehaviorSubject2, Subject as Subject3, scan, map as map6, takeUntil, from, filter as filter3 } from "rxjs";

// src/observables/dataChannel.ts
import { Observable as Observable3, filter as filter2, map as map5 } from "rxjs";
var DataTopic = {
  CHAT: "lk.chat"
};
var LegacyDataTopic = {
  CHAT: "lk-chat-topic"
};
function sendMessage(_0, _1) {
  return __async(this, arguments, function* (localParticipant, payload, options = {}) {
    const { reliable, destinationIdentities, topic } = options;
    yield localParticipant.publishData(payload, {
      destinationIdentities,
      topic,
      reliable
    });
  });
}
function setupDataMessageHandler(room, topic, onMessage) {
  const topics = Array.isArray(topic) ? topic : [topic];
  const messageObservable = createDataObserver(room).pipe(
    filter2(
      ([, , , messageTopic]) => topic === void 0 || messageTopic !== void 0 && topics.includes(messageTopic)
    ),
    map5(([payload, participant, , messageTopic]) => {
      const msg = {
        payload,
        topic: messageTopic,
        from: participant
      };
      onMessage == null ? void 0 : onMessage(msg);
      return msg;
    })
  );
  let isSendingSubscriber;
  const isSendingObservable = new Observable3((subscriber) => {
    isSendingSubscriber = subscriber;
  });
  const send = (_0, ..._1) => __async(this, [_0, ..._1], function* (payload, options = {}) {
    isSendingSubscriber.next(true);
    try {
      yield sendMessage(room.localParticipant, payload, __spreadValues({ topic: topics[0] }, options));
    } finally {
      isSendingSubscriber.next(false);
    }
  });
  return { messageObservable, isSendingObservable, send };
}
function setupChatMessageHandler(room) {
  const chatObservable = createChatObserver(room);
  const send = (text, options) => __async(this, null, function* () {
    const msg = yield room.localParticipant.sendChatMessage(text, options);
    yield room.localParticipant.sendText(text, options);
    return __spreadProps(__spreadValues({}, msg), { from: room.localParticipant, attachedFiles: options.attachments });
  });
  const edit = (text, originalMsg) => __async(this, null, function* () {
    const msg = yield room.localParticipant.editChatMessage(text, originalMsg);
    return msg;
  });
  return { chatObservable, send, edit };
}

// src/components/chat.ts
var topicSubjectMap = /* @__PURE__ */ new WeakMap();
function isIgnorableChatMessage(msg) {
  return msg.ignoreLegacy == true;
}
var decodeLegacyMsg = (message) => JSON.parse(new TextDecoder().decode(message));
var encodeLegacyMsg = (message) => new TextEncoder().encode(JSON.stringify(message));
function setupChat(room, options) {
  var _a, _b, _c, _d, _e, _f;
  const serverSupportsDataStreams = () => {
    var _a2, _b2, _c2;
    return ((_a2 = room.serverInfo) == null ? void 0 : _a2.edition) === 1 || !!((_b2 = room.serverInfo) == null ? void 0 : _b2.version) && compareVersions((_c2 = room.serverInfo) == null ? void 0 : _c2.version, "1.8.2") > 0;
  };
  const onDestroyObservable = new Subject3();
  const topic = (_a = options == null ? void 0 : options.channelTopic) != null ? _a : DataTopic.CHAT;
  const legacyTopic = (_b = options == null ? void 0 : options.channelTopic) != null ? _b : LegacyDataTopic.CHAT;
  let needsSetup = false;
  if (!topicSubjectMap.has(room)) {
    needsSetup = true;
  }
  const topicMap = (_c = topicSubjectMap.get(room)) != null ? _c : /* @__PURE__ */ new Map();
  const messageSubject = (_d = topicMap.get(topic)) != null ? _d : new Subject3();
  topicMap.set(topic, messageSubject);
  topicSubjectMap.set(room, topicMap);
  const finalMessageDecoder = (_e = options == null ? void 0 : options.messageDecoder) != null ? _e : decodeLegacyMsg;
  if (needsSetup) {
    room.registerTextStreamHandler(topic, (reader, participantInfo) => __async(this, null, function* () {
      const { id, timestamp } = reader.info;
      const streamObservable = from(reader).pipe(
        scan((acc, chunk2) => {
          return acc + chunk2;
        }),
        map6((chunk2) => {
          return {
            id,
            timestamp,
            message: chunk2,
            from: room.getParticipantByIdentity(participantInfo.identity)
            // editTimestamp: type === 'update' ? timestamp : undefined,
          };
        })
      );
      streamObservable.subscribe({
        next: (value) => messageSubject.next(value)
      });
    }));
    const { messageObservable } = setupDataMessageHandler(room, [legacyTopic]);
    messageObservable.pipe(
      map6((msg) => {
        const parsedMessage = finalMessageDecoder(msg.payload);
        if (isIgnorableChatMessage(parsedMessage)) {
          return void 0;
        }
        const newMessage = __spreadProps(__spreadValues({}, parsedMessage), { from: msg.from });
        return newMessage;
      }),
      filter3((msg) => !!msg),
      takeUntil(onDestroyObservable)
    ).subscribe(messageSubject);
  }
  const messagesObservable = messageSubject.pipe(
    scan((acc, value) => {
      if ("id" in value && acc.find((msg) => {
        var _a2, _b2;
        return ((_a2 = msg.from) == null ? void 0 : _a2.identity) === ((_b2 = value.from) == null ? void 0 : _b2.identity) && msg.id === value.id;
      })) {
        const replaceIndex = acc.findIndex((msg) => msg.id === value.id);
        if (replaceIndex > -1) {
          const originalMsg = acc[replaceIndex];
          acc[replaceIndex] = __spreadProps(__spreadValues({}, value), {
            timestamp: originalMsg.timestamp,
            editTimestamp: value.timestamp
          });
        }
        return [...acc];
      }
      return [...acc, value];
    }, []),
    takeUntil(onDestroyObservable)
  );
  const isSending$ = new BehaviorSubject2(false);
  const finalMessageEncoder = (_f = options == null ? void 0 : options.messageEncoder) != null ? _f : encodeLegacyMsg;
  const send = (message, options2) => __async(this, null, function* () {
    var _a2;
    if (!options2) {
      options2 = {};
    }
    (_a2 = options2.topic) != null ? _a2 : options2.topic = topic;
    isSending$.next(true);
    try {
      const info = yield room.localParticipant.sendText(message, options2);
      const chatMsg = {
        id: info.id,
        timestamp: Date.now(),
        message,
        from: room.localParticipant,
        attachedFiles: options2.attachments
      };
      messageSubject.next(chatMsg);
      const encodedLegacyMsg = finalMessageEncoder(__spreadProps(__spreadValues({}, chatMsg), {
        ignoreLegacy: serverSupportsDataStreams()
      }));
      yield sendMessage(room.localParticipant, encodedLegacyMsg, {
        reliable: true,
        topic: legacyTopic
      });
      return chatMsg;
    } finally {
      isSending$.next(false);
    }
  });
  function destroy() {
    onDestroyObservable.next();
    onDestroyObservable.complete();
    messageSubject.complete();
    topicSubjectMap.delete(room);
    room.unregisterTextStreamHandler(topic);
  }
  room.once(RoomEvent4.Disconnected, destroy);
  return {
    messageObservable: messagesObservable,
    isSendingObservable: isSending$,
    send
  };
}

// src/components/startAudio.ts
function setupStartAudio() {
  const handleStartAudioPlayback = (room) => __async(this, null, function* () {
    log.info("Start Audio for room: ", room);
    yield room.startAudio();
  });
  const className = prefixClass("start-audio-button");
  return { className, roomAudioPlaybackAllowedObservable, handleStartAudioPlayback };
}

// src/components/startVideo.ts
function setupStartVideo() {
  const handleStartVideoPlayback = (room) => __async(this, null, function* () {
    log.info("Start Video for room: ", room);
    yield room.startVideo();
  });
  const className = prefixClass("start-audio-button");
  return { className, roomVideoPlaybackAllowedObservable, handleStartVideoPlayback };
}

// src/components/chatToggle.ts
function setupChatToggle() {
  const className = [prefixClass("button"), prefixClass("chat-toggle")].join(" ");
  return { className };
}

// src/components/focusToggle.ts
function setupFocusToggle() {
  const className = [prefixClass("button"), prefixClass("focus-toggle-button")].join(" ");
  return { className };
}

// src/components/clearPinButton.ts
function setupClearPinButton() {
  const className = "lk-clear-pin-button lk-button";
  return { className };
}

// src/components/room.ts
function setupLiveKitRoom() {
  const className = "lk-room-container";
  return { className };
}

// src/observables/track.ts
import { RoomEvent as RoomEvent5, TrackEvent } from "livekit-client";
import { map as map7, Observable as Observable4, startWith as startWith5 } from "rxjs";
function trackObservable(track) {
  const trackObserver = observeTrackEvents(
    track,
    TrackEvent.Muted,
    TrackEvent.Unmuted,
    TrackEvent.Subscribed,
    TrackEvent.Unsubscribed
  );
  return trackObserver;
}
function observeTrackEvents(track, ...events) {
  const observable = new Observable4((subscribe) => {
    const onTrackUpdate = () => {
      subscribe.next(track);
    };
    events.forEach((evt) => {
      track.on(evt, onTrackUpdate);
    });
    const unsubscribe = () => {
      events.forEach((evt) => {
        track.off(evt, onTrackUpdate);
      });
    };
    return unsubscribe;
  }).pipe(startWith5(track));
  return observable;
}
function getTrackReferences(room, sources, onlySubscribedTracks = true) {
  const localParticipant = room.localParticipant;
  const allParticipants = [localParticipant, ...Array.from(room.remoteParticipants.values())];
  const trackReferences = [];
  allParticipants.forEach((participant) => {
    sources.forEach((source) => {
      const sourceReferences = Array.from(
        participant.trackPublications.values()
      ).filter(
        (track) => track.source === source && // either return all or only the ones that are subscribed
        (!onlySubscribedTracks || track.track)
      ).map((track) => {
        return {
          participant,
          publication: track,
          source: track.source
        };
      });
      trackReferences.push(...sourceReferences);
    });
  });
  return { trackReferences, participants: allParticipants };
}
function getParticipantTrackRefs(participant, identifier, onlySubscribedTracks = false) {
  const { sources, kind, name } = identifier;
  const sourceReferences = Array.from(participant.trackPublications.values()).filter(
    (pub) => (!sources || sources.includes(pub.source)) && (!kind || pub.kind === kind) && (!name || pub.trackName === name) && // either return all or only the ones that are subscribed
    (!onlySubscribedTracks || pub.track)
  ).map((track) => {
    return {
      participant,
      publication: track,
      source: track.source
    };
  });
  return sourceReferences;
}
function trackReferencesObservable(room, sources, options) {
  var _a, _b;
  const additionalRoomEvents = (_a = options.additionalRoomEvents) != null ? _a : allParticipantRoomEvents;
  const onlySubscribedTracks = (_b = options.onlySubscribed) != null ? _b : true;
  const roomEvents = Array.from(
    (/* @__PURE__ */ new Set([
      RoomEvent5.ParticipantConnected,
      RoomEvent5.ParticipantDisconnected,
      RoomEvent5.ConnectionStateChanged,
      RoomEvent5.LocalTrackPublished,
      RoomEvent5.LocalTrackUnpublished,
      RoomEvent5.TrackPublished,
      RoomEvent5.TrackUnpublished,
      RoomEvent5.TrackSubscriptionStatusChanged,
      ...additionalRoomEvents
    ])).values()
  );
  const observable = observeRoomEvents(room, ...roomEvents).pipe(
    map7((room2) => {
      const data = getTrackReferences(room2, sources, onlySubscribedTracks);
      log.debug(`TrackReference[] was updated. (length ${data.trackReferences.length})`, data);
      return data;
    }),
    startWith5(getTrackReferences(room, sources, onlySubscribedTracks))
  );
  return observable;
}
function participantTracksObservable(participant, trackIdentifier) {
  const observable = observeParticipantEvents(participant, ...participantTrackEvents).pipe(
    map7((participant2) => {
      const data = getParticipantTrackRefs(participant2, trackIdentifier);
      log.debug(`TrackReference[] was updated. (length ${data.length})`, data);
      return data;
    }),
    startWith5(getParticipantTrackRefs(participant, trackIdentifier))
  );
  return observable;
}
function trackEventSelector(publication, event) {
  const observable = new Observable4((subscribe) => {
    const update = (...params) => {
      subscribe.next(params);
    };
    publication.on(event, update);
    const unsubscribe = () => {
      publication.off(event, update);
    };
    return unsubscribe;
  });
  return observable;
}
function trackTranscriptionObserver(publication) {
  return trackEventSelector(publication, TrackEvent.TranscriptionReceived);
}
function trackSyncTimeObserver(track) {
  return trackEventSelector(track, TrackEvent.TimeSyncUpdate).pipe(
    map7(([timeUpdate]) => timeUpdate)
  );
}

// src/observables/dom-event.ts
import { concat as concat2, distinctUntilChanged, fromEvent, map as map8, of, skipUntil, timeout } from "rxjs";
function createInteractingObservable(htmlElement, inactiveAfter = 1e3) {
  if (htmlElement === null) return of(false);
  const move$ = fromEvent(htmlElement, "mousemove", { passive: true }).pipe(map8(() => true));
  const moveAndStop$ = move$.pipe(
    timeout({
      each: inactiveAfter,
      with: () => concat2(of(false), moveAndStop$.pipe(skipUntil(move$)))
    }),
    distinctUntilChanged()
  );
  return moveAndStop$;
}

// src/persistent-storage/local-storage-helpers.ts
function saveToLocalStorage(key, value) {
  if (typeof localStorage === "undefined") {
    log.error("Local storage is not available.");
    return;
  }
  try {
    if (value) {
      const nonEmptySettings = Object.fromEntries(
        Object.entries(value).filter(([, value2]) => value2 !== "")
      );
      localStorage.setItem(key, JSON.stringify(nonEmptySettings));
    }
  } catch (error) {
    log.error(`Error setting item to local storage: ${error}`);
  }
}
function loadFromLocalStorage(key) {
  if (typeof localStorage === "undefined") {
    log.error("Local storage is not available.");
    return void 0;
  }
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      log.warn(`Item with key ${key} does not exist in local storage.`);
      return void 0;
    }
    return JSON.parse(item);
  } catch (error) {
    log.error(`Error getting item from local storage: ${error}`);
    return void 0;
  }
}
function createLocalStorageInterface(key) {
  return {
    load: () => loadFromLocalStorage(key),
    save: (value) => saveToLocalStorage(key, value)
  };
}

// src/persistent-storage/user-choices.ts
var USER_CHOICES_KEY = `${cssPrefix}-user-choices`;
var defaultUserChoices = {
  videoEnabled: true,
  audioEnabled: true,
  videoDeviceId: "default",
  audioDeviceId: "default",
  username: ""
};
var { load, save } = createLocalStorageInterface(USER_CHOICES_KEY);
function saveUserChoices(userChoices, preventSave = false) {
  if (preventSave === true) {
    return;
  }
  save(userChoices);
}
function loadUserChoices(defaults, preventLoad = false) {
  var _a, _b, _c, _d, _e;
  const fallback = {
    videoEnabled: (_a = defaults == null ? void 0 : defaults.videoEnabled) != null ? _a : defaultUserChoices.videoEnabled,
    audioEnabled: (_b = defaults == null ? void 0 : defaults.audioEnabled) != null ? _b : defaultUserChoices.audioEnabled,
    videoDeviceId: (_c = defaults == null ? void 0 : defaults.videoDeviceId) != null ? _c : defaultUserChoices.videoDeviceId,
    audioDeviceId: (_d = defaults == null ? void 0 : defaults.audioDeviceId) != null ? _d : defaultUserChoices.audioDeviceId,
    username: (_e = defaults == null ? void 0 : defaults.username) != null ? _e : defaultUserChoices.username
  };
  if (preventLoad) {
    return fallback;
  } else {
    const maybeLoadedObject = load();
    const result = __spreadValues(__spreadValues({}, fallback), maybeLoadedObject != null ? maybeLoadedObject : {});
    return result;
  }
}

// src/components/textStream.ts
import { RoomEvent as RoomEvent6 } from "livekit-client";
import { from as from2, scan as scan2, Subject as Subject4 } from "rxjs";
import { share } from "rxjs/operators";
var observableCacheInstance = null;
var roomInstanceMapInstance = null;
var nextRoomId = 0;
function getObservableCache() {
  if (!observableCacheInstance) {
    observableCacheInstance = /* @__PURE__ */ new Map();
  }
  return observableCacheInstance;
}
function getRoomInstanceMap() {
  if (!roomInstanceMapInstance) {
    roomInstanceMapInstance = /* @__PURE__ */ new WeakMap();
  }
  return roomInstanceMapInstance;
}
function getCacheKey(room, topic) {
  const instanceMap = getRoomInstanceMap();
  let roomId = instanceMap.get(room);
  if (!roomId) {
    roomId = `room_${nextRoomId++}`;
    instanceMap.set(room, roomId);
  }
  return `${roomId}:${topic}`;
}
function setupTextStream(room, topic) {
  const cacheKey = getCacheKey(room, topic);
  const observableCache = getObservableCache();
  const existingObservable = observableCache.get(cacheKey);
  if (existingObservable) {
    return existingObservable;
  }
  const textStreamsSubject = new Subject4();
  const textStreams = [];
  room.registerTextStreamHandler(topic, (reader, participantInfo) => __async(this, null, function* () {
    const streamObservable = from2(reader).pipe(
      scan2((acc, chunk2) => {
        return acc + chunk2;
      }, "")
    );
    streamObservable.subscribe((accumulatedText) => {
      const index = textStreams.findIndex((stream) => stream.streamInfo.id === reader.info.id);
      if (index !== -1) {
        textStreams[index] = __spreadProps(__spreadValues({}, textStreams[index]), {
          text: accumulatedText
        });
        textStreamsSubject.next([...textStreams]);
      } else {
        textStreams.push({
          text: accumulatedText,
          participantInfo,
          streamInfo: reader.info
        });
        textStreamsSubject.next([...textStreams]);
      }
    });
  }));
  const sharedObservable = textStreamsSubject.asObservable().pipe(share());
  observableCache.set(cacheKey, sharedObservable);
  room.once(RoomEvent6.Disconnected, () => {
    textStreamsSubject.complete();
    getObservableCache().delete(cacheKey);
  });
  return sharedObservable;
}
export {
  DataTopic,
  GRID_LAYOUTS,
  LegacyDataTopic,
  PIN_DEFAULT_STATE,
  WIDGET_DEFAULT_STATE,
  activeSpeakerObserver,
  addMediaTimestampToTranscription,
  allParticipantEvents,
  allParticipantRoomEvents,
  allRemoteParticipantEvents,
  allRemoteParticipantRoomEvents,
  attachIfSubscribed,
  computeMenuPosition,
  connectedParticipantObserver,
  connectedParticipantsObserver,
  connectionStateObserver,
  createActiveDeviceObservable,
  createChatObserver,
  createConnectionQualityObserver,
  createDataObserver,
  createDefaultGrammar,
  createEmailRegExp,
  createInteractingObservable,
  createIsSpeakingObserver,
  createMediaDeviceObserver,
  createTrackObserver,
  createUrlRegExp,
  cssPrefix,
  dedupeSegments,
  defaultUserChoices,
  didActiveSegmentsChange,
  encryptionStatusObservable,
  getActiveTranscriptionSegments,
  getScrollBarWidth,
  getTrackByIdentifier,
  getTrackReferenceId,
  getTrackReferenceSource,
  isEqualTrackRef,
  isLocal,
  isMobileBrowser,
  isParticipantTrackReferencePinned,
  isPlaceholderReplacement,
  isRemote,
  isSourceWitOptions,
  isSourcesWithOptions,
  isTrackReference,
  isTrackReferencePinned,
  isTrackReferencePlaceholder,
  isWeb,
  loadUserChoices,
  log,
  mutedObserver,
  observeParticipantEvents,
  observeParticipantMedia,
  observeRoomEvents,
  observeTrackEvents,
  participantAttributesObserver,
  participantByIdentifierObserver,
  participantEventSelector,
  participantInfoObserver,
  participantPermissionObserver,
  participantTrackEvents,
  participantTracksObservable,
  recordingStatusObservable,
  roomAudioPlaybackAllowedObservable,
  roomEventSelector,
  roomInfoObserver,
  roomObserver,
  roomVideoPlaybackAllowedObservable,
  saveUserChoices,
  screenShareObserver,
  selectGridLayout,
  sendMessage,
  setDifference,
  setLogExtension,
  setLogLevel,
  setupChat,
  setupChatMessageHandler,
  setupChatToggle,
  setupClearPinButton,
  setupConnectionQualityIndicator,
  setupDataMessageHandler,
  setupDeviceSelector,
  setupDisconnectButton,
  setupFocusToggle,
  setupLiveKitRoom,
  setupManualToggle,
  setupMediaToggle,
  setupMediaTrack,
  setupParticipantName,
  setupParticipantTile,
  setupStartAudio,
  setupStartVideo,
  setupTextStream,
  setupTrackMutedIndicator,
  sortParticipants,
  sortTrackReferences,
  supportsScreenSharing,
  tokenize,
  trackEventSelector,
  trackObservable,
  trackReferencesObservable,
  trackSyncTimeObserver,
  trackTranscriptionObserver,
  updatePages,
  wasClickOutside
};
//# sourceMappingURL=index.mjs.map