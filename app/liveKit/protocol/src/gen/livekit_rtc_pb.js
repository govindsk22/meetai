// Copyright 2023 LiveKit, Inc.
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

// @generated by protoc-gen-es v1.10.0 with parameter "target=dts+js"
// @generated from file livekit_rtc.proto (package livekit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AudioTrackFeature, BackupCodecPolicy, ClientConfiguration, Codec, ConnectionQuality, DisconnectReason, Encryption_Type, ParticipantInfo, ParticipantTracks, Room, ServerInfo, SpeakerInfo, SubscriptionError, TrackInfo, TrackSource, TrackType, VideoLayer, VideoQuality } from "./livekit_models_pb.js";

/**
 * @generated from enum livekit.SignalTarget
 */
export const SignalTarget = /*@__PURE__*/ proto3.makeEnum(
  "livekit.SignalTarget",
  [
    {no: 0, name: "PUBLISHER"},
    {no: 1, name: "SUBSCRIBER"},
  ],
);

/**
 * @generated from enum livekit.StreamState
 */
export const StreamState = /*@__PURE__*/ proto3.makeEnum(
  "livekit.StreamState",
  [
    {no: 0, name: "ACTIVE"},
    {no: 1, name: "PAUSED"},
  ],
);

/**
 * @generated from enum livekit.CandidateProtocol
 */
export const CandidateProtocol = /*@__PURE__*/ proto3.makeEnum(
  "livekit.CandidateProtocol",
  [
    {no: 0, name: "UDP"},
    {no: 1, name: "TCP"},
    {no: 2, name: "TLS"},
  ],
);

/**
 * @generated from message livekit.SignalRequest
 */
export const SignalRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SignalRequest",
  () => [
    { no: 1, name: "offer", kind: "message", T: SessionDescription, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: SessionDescription, oneof: "message" },
    { no: 3, name: "trickle", kind: "message", T: TrickleRequest, oneof: "message" },
    { no: 4, name: "add_track", kind: "message", T: AddTrackRequest, oneof: "message" },
    { no: 5, name: "mute", kind: "message", T: MuteTrackRequest, oneof: "message" },
    { no: 6, name: "subscription", kind: "message", T: UpdateSubscription, oneof: "message" },
    { no: 7, name: "track_setting", kind: "message", T: UpdateTrackSettings, oneof: "message" },
    { no: 8, name: "leave", kind: "message", T: LeaveRequest, oneof: "message" },
    { no: 10, name: "update_layers", kind: "message", T: UpdateVideoLayers, oneof: "message" },
    { no: 11, name: "subscription_permission", kind: "message", T: SubscriptionPermission, oneof: "message" },
    { no: 12, name: "sync_state", kind: "message", T: SyncState, oneof: "message" },
    { no: 13, name: "simulate", kind: "message", T: SimulateScenario, oneof: "message" },
    { no: 14, name: "ping", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "message" },
    { no: 15, name: "update_metadata", kind: "message", T: UpdateParticipantMetadata, oneof: "message" },
    { no: 16, name: "ping_req", kind: "message", T: Ping, oneof: "message" },
    { no: 17, name: "update_audio_track", kind: "message", T: UpdateLocalAudioTrack, oneof: "message" },
    { no: 18, name: "update_video_track", kind: "message", T: UpdateLocalVideoTrack, oneof: "message" },
  ],
);

/**
 * @generated from message livekit.SignalResponse
 */
export const SignalResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SignalResponse",
  () => [
    { no: 1, name: "join", kind: "message", T: JoinResponse, oneof: "message" },
    { no: 2, name: "answer", kind: "message", T: SessionDescription, oneof: "message" },
    { no: 3, name: "offer", kind: "message", T: SessionDescription, oneof: "message" },
    { no: 4, name: "trickle", kind: "message", T: TrickleRequest, oneof: "message" },
    { no: 5, name: "update", kind: "message", T: ParticipantUpdate, oneof: "message" },
    { no: 6, name: "track_published", kind: "message", T: TrackPublishedResponse, oneof: "message" },
    { no: 8, name: "leave", kind: "message", T: LeaveRequest, oneof: "message" },
    { no: 9, name: "mute", kind: "message", T: MuteTrackRequest, oneof: "message" },
    { no: 10, name: "speakers_changed", kind: "message", T: SpeakersChanged, oneof: "message" },
    { no: 11, name: "room_update", kind: "message", T: RoomUpdate, oneof: "message" },
    { no: 12, name: "connection_quality", kind: "message", T: ConnectionQualityUpdate, oneof: "message" },
    { no: 13, name: "stream_state_update", kind: "message", T: StreamStateUpdate, oneof: "message" },
    { no: 14, name: "subscribed_quality_update", kind: "message", T: SubscribedQualityUpdate, oneof: "message" },
    { no: 15, name: "subscription_permission_update", kind: "message", T: SubscriptionPermissionUpdate, oneof: "message" },
    { no: 16, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "message" },
    { no: 17, name: "track_unpublished", kind: "message", T: TrackUnpublishedResponse, oneof: "message" },
    { no: 18, name: "pong", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "message" },
    { no: 19, name: "reconnect", kind: "message", T: ReconnectResponse, oneof: "message" },
    { no: 20, name: "pong_resp", kind: "message", T: Pong, oneof: "message" },
    { no: 21, name: "subscription_response", kind: "message", T: SubscriptionResponse, oneof: "message" },
    { no: 22, name: "request_response", kind: "message", T: RequestResponse, oneof: "message" },
    { no: 23, name: "track_subscribed", kind: "message", T: TrackSubscribed, oneof: "message" },
  ],
);

/**
 * @generated from message livekit.SimulcastCodec
 */
export const SimulcastCodec = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SimulcastCodec",
  () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.AddTrackRequest
 */
export const AddTrackRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.AddTrackRequest",
  () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(TrackType) },
    { no: 4, name: "width", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "height", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "muted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "disable_dtx", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "source", kind: "enum", T: proto3.getEnumType(TrackSource) },
    { no: 9, name: "layers", kind: "message", T: VideoLayer, repeated: true },
    { no: 10, name: "simulcast_codecs", kind: "message", T: SimulcastCodec, repeated: true },
    { no: 11, name: "sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "stereo", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "disable_red", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "encryption", kind: "enum", T: proto3.getEnumType(Encryption_Type) },
    { no: 15, name: "stream", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "backup_codec_policy", kind: "enum", T: proto3.getEnumType(BackupCodecPolicy) },
  ],
);

/**
 * @generated from message livekit.TrickleRequest
 */
export const TrickleRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.TrickleRequest",
  () => [
    { no: 1, name: "candidateInit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target", kind: "enum", T: proto3.getEnumType(SignalTarget) },
    { no: 3, name: "final", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.MuteTrackRequest
 */
export const MuteTrackRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.MuteTrackRequest",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "muted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.JoinResponse
 */
export const JoinResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.JoinResponse",
  () => [
    { no: 1, name: "room", kind: "message", T: Room },
    { no: 2, name: "participant", kind: "message", T: ParticipantInfo },
    { no: 3, name: "other_participants", kind: "message", T: ParticipantInfo, repeated: true },
    { no: 4, name: "server_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ice_servers", kind: "message", T: ICEServer, repeated: true },
    { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "alternative_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "client_configuration", kind: "message", T: ClientConfiguration },
    { no: 9, name: "server_region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "ping_timeout", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "ping_interval", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "server_info", kind: "message", T: ServerInfo },
    { no: 13, name: "sif_trailer", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 14, name: "enabled_publish_codecs", kind: "message", T: Codec, repeated: true },
    { no: 15, name: "fast_publish", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.ReconnectResponse
 */
export const ReconnectResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ReconnectResponse",
  () => [
    { no: 1, name: "ice_servers", kind: "message", T: ICEServer, repeated: true },
    { no: 2, name: "client_configuration", kind: "message", T: ClientConfiguration },
  ],
);

/**
 * @generated from message livekit.TrackPublishedResponse
 */
export const TrackPublishedResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.TrackPublishedResponse",
  () => [
    { no: 1, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "track", kind: "message", T: TrackInfo },
  ],
);

/**
 * @generated from message livekit.TrackUnpublishedResponse
 */
export const TrackUnpublishedResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.TrackUnpublishedResponse",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.SessionDescription
 */
export const SessionDescription = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SessionDescription",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sdp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.ParticipantUpdate
 */
export const ParticipantUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ParticipantUpdate",
  () => [
    { no: 1, name: "participants", kind: "message", T: ParticipantInfo, repeated: true },
  ],
);

/**
 * @generated from message livekit.UpdateSubscription
 */
export const UpdateSubscription = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateSubscription",
  () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "subscribe", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "participant_tracks", kind: "message", T: ParticipantTracks, repeated: true },
  ],
);

/**
 * @generated from message livekit.UpdateTrackSettings
 */
export const UpdateTrackSettings = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateTrackSettings",
  () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "quality", kind: "enum", T: proto3.getEnumType(VideoQuality) },
    { no: 5, name: "width", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "height", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "fps", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "priority", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message livekit.UpdateLocalAudioTrack
 */
export const UpdateLocalAudioTrack = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateLocalAudioTrack",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "features", kind: "enum", T: proto3.getEnumType(AudioTrackFeature), repeated: true },
  ],
);

/**
 * @generated from message livekit.UpdateLocalVideoTrack
 */
export const UpdateLocalVideoTrack = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateLocalVideoTrack",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "width", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "height", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message livekit.LeaveRequest
 */
export const LeaveRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.LeaveRequest",
  () => [
    { no: 1, name: "can_reconnect", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "reason", kind: "enum", T: proto3.getEnumType(DisconnectReason) },
    { no: 3, name: "action", kind: "enum", T: proto3.getEnumType(LeaveRequest_Action) },
    { no: 4, name: "regions", kind: "message", T: RegionSettings },
  ],
);

/**
 * indicates action clients should take on receiving this message
 *
 * @generated from enum livekit.LeaveRequest.Action
 */
export const LeaveRequest_Action = /*@__PURE__*/ proto3.makeEnum(
  "livekit.LeaveRequest.Action",
  [
    {no: 0, name: "DISCONNECT"},
    {no: 1, name: "RESUME"},
    {no: 2, name: "RECONNECT"},
  ],
);

/**
 * message to indicate published video track dimensions are changing
 *
 * @generated from message livekit.UpdateVideoLayers
 * @deprecated
 */
export const UpdateVideoLayers = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateVideoLayers",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "layers", kind: "message", T: VideoLayer, repeated: true },
  ],
);

/**
 * @generated from message livekit.UpdateParticipantMetadata
 */
export const UpdateParticipantMetadata = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateParticipantMetadata",
  () => [
    { no: 1, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 4, name: "request_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message livekit.ICEServer
 */
export const ICEServer = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ICEServer",
  () => [
    { no: 1, name: "urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "credential", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.SpeakersChanged
 */
export const SpeakersChanged = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SpeakersChanged",
  () => [
    { no: 1, name: "speakers", kind: "message", T: SpeakerInfo, repeated: true },
  ],
);

/**
 * @generated from message livekit.RoomUpdate
 */
export const RoomUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RoomUpdate",
  () => [
    { no: 1, name: "room", kind: "message", T: Room },
  ],
);

/**
 * @generated from message livekit.ConnectionQualityInfo
 */
export const ConnectionQualityInfo = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ConnectionQualityInfo",
  () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "quality", kind: "enum", T: proto3.getEnumType(ConnectionQuality) },
    { no: 3, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message livekit.ConnectionQualityUpdate
 */
export const ConnectionQualityUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ConnectionQualityUpdate",
  () => [
    { no: 1, name: "updates", kind: "message", T: ConnectionQualityInfo, repeated: true },
  ],
);

/**
 * @generated from message livekit.StreamStateInfo
 */
export const StreamStateInfo = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.StreamStateInfo",
  () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(StreamState) },
  ],
);

/**
 * @generated from message livekit.StreamStateUpdate
 */
export const StreamStateUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.StreamStateUpdate",
  () => [
    { no: 1, name: "stream_states", kind: "message", T: StreamStateInfo, repeated: true },
  ],
);

/**
 * @generated from message livekit.SubscribedQuality
 */
export const SubscribedQuality = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscribedQuality",
  () => [
    { no: 1, name: "quality", kind: "enum", T: proto3.getEnumType(VideoQuality) },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.SubscribedCodec
 */
export const SubscribedCodec = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscribedCodec",
  () => [
    { no: 1, name: "codec", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "qualities", kind: "message", T: SubscribedQuality, repeated: true },
  ],
);

/**
 * @generated from message livekit.SubscribedQualityUpdate
 */
export const SubscribedQualityUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscribedQualityUpdate",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscribed_qualities", kind: "message", T: SubscribedQuality, repeated: true },
    { no: 3, name: "subscribed_codecs", kind: "message", T: SubscribedCodec, repeated: true },
  ],
);

/**
 * @generated from message livekit.TrackPermission
 */
export const TrackPermission = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.TrackPermission",
  () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "all_tracks", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "track_sids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "participant_identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.SubscriptionPermission
 */
export const SubscriptionPermission = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscriptionPermission",
  () => [
    { no: 1, name: "all_participants", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "track_permissions", kind: "message", T: TrackPermission, repeated: true },
  ],
);

/**
 * @generated from message livekit.SubscriptionPermissionUpdate
 */
export const SubscriptionPermissionUpdate = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscriptionPermissionUpdate",
  () => [
    { no: 1, name: "participant_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allowed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.SyncState
 */
export const SyncState = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SyncState",
  () => [
    { no: 1, name: "answer", kind: "message", T: SessionDescription },
    { no: 2, name: "subscription", kind: "message", T: UpdateSubscription },
    { no: 3, name: "publish_tracks", kind: "message", T: TrackPublishedResponse, repeated: true },
    { no: 4, name: "data_channels", kind: "message", T: DataChannelInfo, repeated: true },
    { no: 5, name: "offer", kind: "message", T: SessionDescription },
    { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message livekit.DataChannelInfo
 */
export const DataChannelInfo = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.DataChannelInfo",
  () => [
    { no: 1, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "target", kind: "enum", T: proto3.getEnumType(SignalTarget) },
  ],
);

/**
 * @generated from message livekit.SimulateScenario
 */
export const SimulateScenario = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SimulateScenario",
  () => [
    { no: 1, name: "speaker_update", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "scenario" },
    { no: 2, name: "node_failure", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
    { no: 3, name: "migration", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
    { no: 4, name: "server_leave", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
    { no: 5, name: "switch_candidate_protocol", kind: "enum", T: proto3.getEnumType(CandidateProtocol), oneof: "scenario" },
    { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "scenario" },
    { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
    { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
    { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "scenario" },
  ],
);

/**
 * @generated from message livekit.Ping
 */
export const Ping = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.Ping",
  () => [
    { no: 1, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "rtt", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message livekit.Pong
 */
export const Pong = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.Pong",
  () => [
    { no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message livekit.RegionSettings
 */
export const RegionSettings = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RegionSettings",
  () => [
    { no: 1, name: "regions", kind: "message", T: RegionInfo, repeated: true },
  ],
);

/**
 * @generated from message livekit.RegionInfo
 */
export const RegionInfo = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RegionInfo",
  () => [
    { no: 1, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "distance", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message livekit.SubscriptionResponse
 */
export const SubscriptionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SubscriptionResponse",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "err", kind: "enum", T: proto3.getEnumType(SubscriptionError) },
  ],
);

/**
 * @generated from message livekit.RequestResponse
 */
export const RequestResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RequestResponse",
  () => [
    { no: 1, name: "request_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "reason", kind: "enum", T: proto3.getEnumType(RequestResponse_Reason) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from enum livekit.RequestResponse.Reason
 */
export const RequestResponse_Reason = /*@__PURE__*/ proto3.makeEnum(
  "livekit.RequestResponse.Reason",
  [
    {no: 0, name: "OK"},
    {no: 1, name: "NOT_FOUND"},
    {no: 2, name: "NOT_ALLOWED"},
    {no: 3, name: "LIMIT_EXCEEDED"},
  ],
);

/**
 * @generated from message livekit.TrackSubscribed
 */
export const TrackSubscribed = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.TrackSubscribed",
  () => [
    { no: 1, name: "track_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

