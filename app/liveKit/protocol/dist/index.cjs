'use strict';

const protobuf = require('@bufbuild/protobuf');

const MetricLabel = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.MetricLabel",
  [
    { no: 0, name: "AGENTS_LLM_TTFT" },
    { no: 1, name: "AGENTS_STT_TTFT" },
    { no: 2, name: "AGENTS_TTS_TTFB" },
    { no: 3, name: "CLIENT_VIDEO_SUBSCRIBER_FREEZE_COUNT" },
    { no: 4, name: "CLIENT_VIDEO_SUBSCRIBER_TOTAL_FREEZE_DURATION" },
    { no: 5, name: "CLIENT_VIDEO_SUBSCRIBER_PAUSE_COUNT" },
    { no: 6, name: "CLIENT_VIDEO_SUBSCRIBER_TOTAL_PAUSES_DURATION" },
    { no: 7, name: "CLIENT_AUDIO_SUBSCRIBER_CONCEALED_SAMPLES" },
    { no: 8, name: "CLIENT_AUDIO_SUBSCRIBER_SILENT_CONCEALED_SAMPLES" },
    { no: 9, name: "CLIENT_AUDIO_SUBSCRIBER_CONCEALMENT_EVENTS" },
    { no: 10, name: "CLIENT_AUDIO_SUBSCRIBER_INTERRUPTION_COUNT" },
    { no: 11, name: "CLIENT_AUDIO_SUBSCRIBER_TOTAL_INTERRUPTION_DURATION" },
    { no: 12, name: "CLIENT_SUBSCRIBER_JITTER_BUFFER_DELAY" },
    { no: 13, name: "CLIENT_SUBSCRIBER_JITTER_BUFFER_EMITTED_COUNT" },
    { no: 14, name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_BANDWIDTH" },
    { no: 15, name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_CPU" },
    { no: 16, name: "CLIENT_VIDEO_PUBLISHER_QUALITY_LIMITATION_DURATION_OTHER" },
    { no: 17, name: "PUBLISHER_RTT" },
    { no: 18, name: "SERVER_MESH_RTT" },
    { no: 19, name: "SUBSCRIBER_RTT" },
    { no: 4096, name: "METRIC_LABEL_PREDEFINED_MAX_VALUE" }
  ]
);
const MetricsBatch = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MetricsBatch",
  () => [
    {
      no: 1,
      name: "timestamp_ms",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 2, name: "normalized_timestamp", kind: "message", T: protobuf.Timestamp },
    { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: true },
    { no: 4, name: "time_series", kind: "message", T: TimeSeriesMetric, repeated: true },
    { no: 5, name: "events", kind: "message", T: EventMetric, repeated: true }
  ]
);
const TimeSeriesMetric = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TimeSeriesMetric",
  () => [
    {
      no: 1,
      name: "label",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "participant_identity",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "track_sid",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 4, name: "samples", kind: "message", T: MetricSample, repeated: true },
    {
      no: 5,
      name: "rid",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const MetricSample = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MetricSample",
  () => [
    {
      no: 1,
      name: "timestamp_ms",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 2, name: "normalized_timestamp", kind: "message", T: protobuf.Timestamp },
    {
      no: 3,
      name: "value",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    }
  ]
);
const EventMetric = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.EventMetric",
  () => [
    {
      no: 1,
      name: "label",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "participant_identity",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "track_sid",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "start_timestamp_ms",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: true },
    { no: 6, name: "normalized_start_timestamp", kind: "message", T: protobuf.Timestamp },
    { no: 7, name: "normalized_end_timestamp", kind: "message", T: protobuf.Timestamp, opt: true },
    {
      no: 8,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "rid",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);

const AudioCodec = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.AudioCodec",
  [
    { no: 0, name: "DEFAULT_AC" },
    { no: 1, name: "OPUS" },
    { no: 2, name: "AAC" }
  ]
);
const VideoCodec = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.VideoCodec",
  [
    { no: 0, name: "DEFAULT_VC" },
    { no: 1, name: "H264_BASELINE" },
    { no: 2, name: "H264_MAIN" },
    { no: 3, name: "H264_HIGH" },
    { no: 4, name: "VP8" }
  ]
);
const ImageCodec = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ImageCodec",
  [
    { no: 0, name: "IC_DEFAULT" },
    { no: 1, name: "IC_JPEG" }
  ]
);
const BackupCodecPolicy = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.BackupCodecPolicy",
  [
    { no: 0, name: "PREFER_REGRESSION" },
    { no: 1, name: "SIMULCAST" },
    { no: 2, name: "REGRESSION" }
  ]
);
const TrackType = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.TrackType",
  [
    { no: 0, name: "AUDIO" },
    { no: 1, name: "VIDEO" },
    { no: 2, name: "DATA" }
  ]
);
const TrackSource = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.TrackSource",
  [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "CAMERA" },
    { no: 2, name: "MICROPHONE" },
    { no: 3, name: "SCREEN_SHARE" },
    { no: 4, name: "SCREEN_SHARE_AUDIO" }
  ]
);
const VideoQuality = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.VideoQuality",
  [
    { no: 0, name: "LOW" },
    { no: 1, name: "MEDIUM" },
    { no: 2, name: "HIGH" },
    { no: 3, name: "OFF" }
  ]
);
const ConnectionQuality = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ConnectionQuality",
  [
    { no: 0, name: "POOR" },
    { no: 1, name: "GOOD" },
    { no: 2, name: "EXCELLENT" },
    { no: 3, name: "LOST" }
  ]
);
const ClientConfigSetting = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ClientConfigSetting",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "DISABLED" },
    { no: 2, name: "ENABLED" }
  ]
);
const DisconnectReason = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.DisconnectReason",
  [
    { no: 0, name: "UNKNOWN_REASON" },
    { no: 1, name: "CLIENT_INITIATED" },
    { no: 2, name: "DUPLICATE_IDENTITY" },
    { no: 3, name: "SERVER_SHUTDOWN" },
    { no: 4, name: "PARTICIPANT_REMOVED" },
    { no: 5, name: "ROOM_DELETED" },
    { no: 6, name: "STATE_MISMATCH" },
    { no: 7, name: "JOIN_FAILURE" },
    { no: 8, name: "MIGRATION" },
    { no: 9, name: "SIGNAL_CLOSE" },
    { no: 10, name: "ROOM_CLOSED" },
    { no: 11, name: "USER_UNAVAILABLE" },
    { no: 12, name: "USER_REJECTED" },
    { no: 13, name: "SIP_TRUNK_FAILURE" }
  ]
);
const ReconnectReason = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ReconnectReason",
  [
    { no: 0, name: "RR_UNKNOWN" },
    { no: 1, name: "RR_SIGNAL_DISCONNECTED" },
    { no: 2, name: "RR_PUBLISHER_FAILED" },
    { no: 3, name: "RR_SUBSCRIBER_FAILED" },
    { no: 4, name: "RR_SWITCH_CANDIDATE" }
  ]
);
const SubscriptionError = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SubscriptionError",
  [
    { no: 0, name: "SE_UNKNOWN" },
    { no: 1, name: "SE_CODEC_UNSUPPORTED" },
    { no: 2, name: "SE_TRACK_NOTFOUND" }
  ]
);
const AudioTrackFeature = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.AudioTrackFeature",
  [
    { no: 0, name: "TF_STEREO" },
    { no: 1, name: "TF_NO_DTX" },
    { no: 2, name: "TF_AUTO_GAIN_CONTROL" },
    { no: 3, name: "TF_ECHO_CANCELLATION" },
    { no: 4, name: "TF_NOISE_SUPPRESSION" },
    { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" }
  ]
);
const Pagination = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Pagination",
  () => [
    {
      no: 1,
      name: "after_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);
const ListUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListUpdate",
  () => [
    { no: 1, name: "set", kind: "scalar", T: 9, repeated: true }
  ]
);
const Room = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Room",
  () => [
    {
      no: 1,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "empty_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 14,
      name: "departure_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "max_participants",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "creation_time",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 15,
      name: "creation_time_ms",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 6,
      name: "turn_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 7, name: "enabled_codecs", kind: "message", T: Codec, repeated: true },
    {
      no: 8,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "num_participants",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 11,
      name: "num_publishers",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "active_recording",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 13, name: "version", kind: "message", T: TimedVersion }
  ]
);
const Codec = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Codec",
  () => [
    {
      no: 1,
      name: "mime",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "fmtp_line",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const PlayoutDelay = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.PlayoutDelay",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "min",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "max",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const ParticipantPermission = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ParticipantPermission",
  () => [
    {
      no: 1,
      name: "can_subscribe",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "can_publish",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "can_publish_data",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 9, name: "can_publish_sources", kind: "enum", T: protobuf.proto3.getEnumType(TrackSource), repeated: true },
    {
      no: 7,
      name: "hidden",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 8,
      name: "recorder",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "can_update_metadata",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 11,
      name: "agent",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 12,
      name: "can_subscribe_metrics",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const ParticipantInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ParticipantInfo",
  () => [
    {
      no: 1,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "state", kind: "enum", T: protobuf.proto3.getEnumType(ParticipantInfo_State) },
    { no: 4, name: "tracks", kind: "message", T: TrackInfo, repeated: true },
    {
      no: 5,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "joined_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 17,
      name: "joined_at_ms",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 9,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 11, name: "permission", kind: "message", T: ParticipantPermission },
    {
      no: 12,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 13,
      name: "is_publisher",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 14, name: "kind", kind: "enum", T: protobuf.proto3.getEnumType(ParticipantInfo_Kind) },
    { no: 15, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 16, name: "disconnect_reason", kind: "enum", T: protobuf.proto3.getEnumType(DisconnectReason) },
    { no: 18, name: "kind_details", kind: "enum", T: protobuf.proto3.getEnumType(ParticipantInfo_KindDetail), repeated: true }
  ]
);
const ParticipantInfo_State = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ParticipantInfo.State",
  [
    { no: 0, name: "JOINING" },
    { no: 1, name: "JOINED" },
    { no: 2, name: "ACTIVE" },
    { no: 3, name: "DISCONNECTED" }
  ]
);
const ParticipantInfo_Kind = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ParticipantInfo.Kind",
  [
    { no: 0, name: "STANDARD" },
    { no: 1, name: "INGRESS" },
    { no: 2, name: "EGRESS" },
    { no: 3, name: "SIP" },
    { no: 4, name: "AGENT" }
  ]
);
const ParticipantInfo_KindDetail = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ParticipantInfo.KindDetail",
  [
    { no: 0, name: "CLOUD_AGENT" },
    { no: 1, name: "FORWARDED" }
  ]
);
const Encryption = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Encryption",
  []
);
const Encryption_Type = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.Encryption.Type",
  [
    { no: 0, name: "NONE" },
    { no: 1, name: "GCM" },
    { no: 2, name: "CUSTOM" }
  ]
);
const SimulcastCodecInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SimulcastCodecInfo",
  () => [
    {
      no: 1,
      name: "mime_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "mid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "cid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "layers", kind: "message", T: VideoLayer, repeated: true }
  ]
);
const TrackInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackInfo",
  () => [
    {
      no: 1,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "type", kind: "enum", T: protobuf.proto3.getEnumType(TrackType) },
    {
      no: 3,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "muted",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "simulcast",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 8,
      name: "disable_dtx",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 9, name: "source", kind: "enum", T: protobuf.proto3.getEnumType(TrackSource) },
    { no: 10, name: "layers", kind: "message", T: VideoLayer, repeated: true },
    {
      no: 11,
      name: "mime_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 12,
      name: "mid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 13, name: "codecs", kind: "message", T: SimulcastCodecInfo, repeated: true },
    {
      no: 14,
      name: "stereo",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 15,
      name: "disable_red",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 16, name: "encryption", kind: "enum", T: protobuf.proto3.getEnumType(Encryption_Type) },
    {
      no: 17,
      name: "stream",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 18, name: "version", kind: "message", T: TimedVersion },
    { no: 19, name: "audio_features", kind: "enum", T: protobuf.proto3.getEnumType(AudioTrackFeature), repeated: true },
    { no: 20, name: "backup_codec_policy", kind: "enum", T: protobuf.proto3.getEnumType(BackupCodecPolicy) }
  ]
);
const VideoLayer = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.VideoLayer",
  () => [
    { no: 1, name: "quality", kind: "enum", T: protobuf.proto3.getEnumType(VideoQuality) },
    {
      no: 2,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "bitrate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "ssrc",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const DataPacket = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataPacket",
  () => [
    { no: 1, name: "kind", kind: "enum", T: protobuf.proto3.getEnumType(DataPacket_Kind) },
    {
      no: 4,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "destination_identities", kind: "scalar", T: 9, repeated: true },
    { no: 2, name: "user", kind: "message", T: UserPacket, oneof: "value" },
    { no: 3, name: "speaker", kind: "message", T: ActiveSpeakerUpdate, oneof: "value" },
    { no: 6, name: "sip_dtmf", kind: "message", T: SipDTMF, oneof: "value" },
    { no: 7, name: "transcription", kind: "message", T: Transcription, oneof: "value" },
    { no: 8, name: "metrics", kind: "message", T: MetricsBatch, oneof: "value" },
    { no: 9, name: "chat_message", kind: "message", T: ChatMessage, oneof: "value" },
    { no: 10, name: "rpc_request", kind: "message", T: RpcRequest, oneof: "value" },
    { no: 11, name: "rpc_ack", kind: "message", T: RpcAck, oneof: "value" },
    { no: 12, name: "rpc_response", kind: "message", T: RpcResponse, oneof: "value" },
    { no: 13, name: "stream_header", kind: "message", T: DataStream_Header, oneof: "value" },
    { no: 14, name: "stream_chunk", kind: "message", T: DataStream_Chunk, oneof: "value" },
    { no: 15, name: "stream_trailer", kind: "message", T: DataStream_Trailer, oneof: "value" }
  ]
);
const DataPacket_Kind = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.DataPacket.Kind",
  [
    { no: 0, name: "RELIABLE" },
    { no: 1, name: "LOSSY" }
  ]
);
const ActiveSpeakerUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ActiveSpeakerUpdate",
  () => [
    { no: 1, name: "speakers", kind: "message", T: SpeakerInfo, repeated: true }
  ]
);
const SpeakerInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SpeakerInfo",
  () => [
    {
      no: 1,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "level",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 3,
      name: "active",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const UserPacket = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UserPacket",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "payload",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: true },
    { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true },
    { no: 4, name: "topic", kind: "scalar", T: 9, opt: true },
    { no: 8, name: "id", kind: "scalar", T: 9, opt: true },
    { no: 9, name: "start_time", kind: "scalar", T: 4, opt: true },
    { no: 10, name: "end_time", kind: "scalar", T: 4, opt: true },
    {
      no: 11,
      name: "nonce",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
);
const SipDTMF = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SipDTMF",
  () => [
    {
      no: 3,
      name: "code",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "digit",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const Transcription = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Transcription",
  () => [
    {
      no: 2,
      name: "transcribed_participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "track_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "segments", kind: "message", T: TranscriptionSegment, repeated: true }
  ]
);
const TranscriptionSegment = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TranscriptionSegment",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "text",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "start_time",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 4,
      name: "end_time",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 5,
      name: "final",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "language",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ChatMessage = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ChatMessage",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: true },
    {
      no: 4,
      name: "message",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "deleted",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "generated",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const RpcRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RpcRequest",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "method",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "payload",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "response_timeout_ms",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const RpcAck = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RpcAck",
  () => [
    {
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const RpcResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RpcResponse",
  () => [
    {
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" },
    { no: 3, name: "error", kind: "message", T: RpcError, oneof: "value" }
  ]
);
const RpcError = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RpcError",
  () => [
    {
      no: 1,
      name: "code",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "message",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "data",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ParticipantTracks = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ParticipantTracks",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: true }
  ]
);
const ServerInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ServerInfo",
  () => [
    { no: 1, name: "edition", kind: "enum", T: protobuf.proto3.getEnumType(ServerInfo_Edition) },
    {
      no: 2,
      name: "version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "protocol",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "node_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "debug_info",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "agent_protocol",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);
const ServerInfo_Edition = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ServerInfo.Edition",
  [
    { no: 0, name: "Standard" },
    { no: 1, name: "Cloud" }
  ]
);
const ClientInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ClientInfo",
  () => [
    { no: 1, name: "sdk", kind: "enum", T: protobuf.proto3.getEnumType(ClientInfo_SDK) },
    {
      no: 2,
      name: "version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "protocol",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "os",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "os_version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "device_model",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "browser",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "browser_version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "address",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "network",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "other_sdks",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ClientInfo_SDK = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ClientInfo.SDK",
  [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "JS" },
    { no: 2, name: "SWIFT" },
    { no: 3, name: "ANDROID" },
    { no: 4, name: "FLUTTER" },
    { no: 5, name: "GO" },
    { no: 6, name: "UNITY" },
    { no: 7, name: "REACT_NATIVE" },
    { no: 8, name: "RUST" },
    { no: 9, name: "PYTHON" },
    { no: 10, name: "CPP" },
    { no: 11, name: "UNITY_WEB" },
    { no: 12, name: "NODE" }
  ]
);
const ClientConfiguration = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ClientConfiguration",
  () => [
    { no: 1, name: "video", kind: "message", T: VideoConfiguration },
    { no: 2, name: "screen", kind: "message", T: VideoConfiguration },
    { no: 3, name: "resume_connection", kind: "enum", T: protobuf.proto3.getEnumType(ClientConfigSetting) },
    { no: 4, name: "disabled_codecs", kind: "message", T: DisabledCodecs },
    { no: 5, name: "force_relay", kind: "enum", T: protobuf.proto3.getEnumType(ClientConfigSetting) }
  ]
);
const VideoConfiguration = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.VideoConfiguration",
  () => [
    { no: 1, name: "hardware_encoder", kind: "enum", T: protobuf.proto3.getEnumType(ClientConfigSetting) }
  ]
);
const DisabledCodecs = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DisabledCodecs",
  () => [
    { no: 1, name: "codecs", kind: "message", T: Codec, repeated: true },
    { no: 2, name: "publish", kind: "message", T: Codec, repeated: true }
  ]
);
const RTPDrift = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RTPDrift",
  () => [
    { no: 1, name: "start_time", kind: "message", T: protobuf.Timestamp },
    { no: 2, name: "end_time", kind: "message", T: protobuf.Timestamp },
    {
      no: 3,
      name: "duration",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 4,
      name: "start_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 5,
      name: "end_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 6,
      name: "rtp_clock_ticks",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 7,
      name: "drift_samples",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 8,
      name: "drift_ms",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 9,
      name: "clock_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    }
  ]
);
const RTPStats = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RTPStats",
  () => [
    { no: 1, name: "start_time", kind: "message", T: protobuf.Timestamp },
    { no: 2, name: "end_time", kind: "message", T: protobuf.Timestamp },
    {
      no: 3,
      name: "duration",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 4,
      name: "packets",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "packet_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 6,
      name: "bytes",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 39,
      name: "header_bytes",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 7,
      name: "bitrate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 8,
      name: "packets_lost",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "packet_loss_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 10,
      name: "packet_loss_percentage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 11,
      name: "packets_duplicate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 12,
      name: "packet_duplicate_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 13,
      name: "bytes_duplicate",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 40,
      name: "header_bytes_duplicate",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 14,
      name: "bitrate_duplicate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 15,
      name: "packets_padding",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 16,
      name: "packet_padding_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 17,
      name: "bytes_padding",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 41,
      name: "header_bytes_padding",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 18,
      name: "bitrate_padding",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 19,
      name: "packets_out_of_order",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 20,
      name: "frames",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 21,
      name: "frame_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 22,
      name: "jitter_current",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    {
      no: 23,
      name: "jitter_max",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    { no: 24, name: "gap_histogram", kind: "map", K: 5, V: {
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    } },
    {
      no: 25,
      name: "nacks",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 37,
      name: "nack_acks",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 26,
      name: "nack_misses",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 38,
      name: "nack_repeated",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 27,
      name: "plis",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 28, name: "last_pli", kind: "message", T: protobuf.Timestamp },
    {
      no: 29,
      name: "firs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 30, name: "last_fir", kind: "message", T: protobuf.Timestamp },
    {
      no: 31,
      name: "rtt_current",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 32,
      name: "rtt_max",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 33,
      name: "key_frames",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 34, name: "last_key_frame", kind: "message", T: protobuf.Timestamp },
    {
      no: 35,
      name: "layer_lock_plis",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 36, name: "last_layer_lock_pli", kind: "message", T: protobuf.Timestamp },
    { no: 44, name: "packet_drift", kind: "message", T: RTPDrift },
    { no: 45, name: "ntp_report_drift", kind: "message", T: RTPDrift },
    { no: 46, name: "rebased_report_drift", kind: "message", T: RTPDrift },
    { no: 47, name: "received_report_drift", kind: "message", T: RTPDrift }
  ]
);
const RTCPSenderReportState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RTCPSenderReportState",
  () => [
    {
      no: 1,
      name: "rtp_timestamp",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "rtp_timestamp_ext",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 3,
      name: "ntp_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 4,
      name: "at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 5,
      name: "at_adjusted",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 6,
      name: "packets",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "octets",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    }
  ]
);
const RTPForwarderState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RTPForwarderState",
  () => [
    {
      no: 1,
      name: "started",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "reference_layer_spatial",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "pre_start_time",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 4,
      name: "ext_first_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 5,
      name: "dummy_start_timestamp_offset",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    { no: 6, name: "rtp_munger", kind: "message", T: RTPMungerState },
    { no: 7, name: "vp8_munger", kind: "message", T: VP8MungerState, oneof: "codec_munger" },
    { no: 8, name: "sender_report_state", kind: "message", T: RTCPSenderReportState, repeated: true }
  ]
);
const RTPMungerState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RTPMungerState",
  () => [
    {
      no: 1,
      name: "ext_last_sequence_number",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 2,
      name: "ext_second_last_sequence_number",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 3,
      name: "ext_last_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 4,
      name: "ext_second_last_timestamp",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 5,
      name: "last_marker",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "second_last_marker",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const VP8MungerState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.VP8MungerState",
  () => [
    {
      no: 1,
      name: "ext_last_picture_id",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 2,
      name: "picture_id_used",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "last_tl0_pic_idx",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "tl0_pic_idx_used",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "tid_used",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "last_key_idx",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "key_idx_used",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const TimedVersion = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TimedVersion",
  () => [
    {
      no: 1,
      name: "unix_micro",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 2,
      name: "ticks",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);
const DataStream = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream",
  []
);
const DataStream_OperationType = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.DataStream.OperationType",
  [
    { no: 0, name: "CREATE" },
    { no: 1, name: "UPDATE" },
    { no: 2, name: "DELETE" },
    { no: 3, name: "REACTION" }
  ]
);
const DataStream_TextHeader = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream.TextHeader",
  () => [
    { no: 1, name: "operation_type", kind: "enum", T: protobuf.proto3.getEnumType(DataStream_OperationType) },
    {
      no: 2,
      name: "version",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "reply_to_stream_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "attached_stream_ids", kind: "scalar", T: 9, repeated: true },
    {
      no: 5,
      name: "generated",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "DataStream_TextHeader" }
);
const DataStream_ByteHeader = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream.ByteHeader",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ],
  { localName: "DataStream_ByteHeader" }
);
const DataStream_Header = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream.Header",
  () => [
    {
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "topic",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "mime_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "total_length", kind: "scalar", T: 4, opt: true },
    { no: 7, name: "encryption_type", kind: "enum", T: protobuf.proto3.getEnumType(Encryption_Type) },
    { no: 8, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 9, name: "text_header", kind: "message", T: DataStream_TextHeader, oneof: "content_header" },
    { no: 10, name: "byte_header", kind: "message", T: DataStream_ByteHeader, oneof: "content_header" }
  ],
  { localName: "DataStream_Header" }
);
const DataStream_Chunk = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream.Chunk",
  () => [
    {
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "chunk_index",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 3,
      name: "content",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    {
      no: 4,
      name: "version",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 5, name: "iv", kind: "scalar", T: 12, opt: true }
  ],
  { localName: "DataStream_Chunk" }
);
const DataStream_Trailer = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataStream.Trailer",
  () => [
    {
      no: 1,
      name: "stream_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "reason",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ],
  { localName: "DataStream_Trailer" }
);

const JobType = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.JobType",
  [
    { no: 0, name: "JT_ROOM" },
    { no: 1, name: "JT_PUBLISHER" },
    { no: 2, name: "JT_PARTICIPANT" }
  ]
);
const WorkerStatus = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.WorkerStatus",
  [
    { no: 0, name: "WS_AVAILABLE" },
    { no: 1, name: "WS_FULL" }
  ]
);
const JobStatus = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.JobStatus",
  [
    { no: 0, name: "JS_PENDING" },
    { no: 1, name: "JS_RUNNING" },
    { no: 2, name: "JS_SUCCESS" },
    { no: 3, name: "JS_FAILED" }
  ]
);
const Job = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Job",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "dispatch_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "type", kind: "enum", T: protobuf.proto3.getEnumType(JobType) },
    { no: 3, name: "room", kind: "message", T: Room },
    { no: 4, name: "participant", kind: "message", T: ParticipantInfo, opt: true },
    {
      no: 5,
      name: "namespace",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "agent_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 8, name: "state", kind: "message", T: JobState }
  ]
);
const JobState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.JobState",
  () => [
    { no: 1, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(JobStatus) },
    {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 4,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 5,
      name: "updated_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 6,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const WorkerMessage = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.WorkerMessage",
  () => [
    { no: 1, name: "register", kind: "message", T: RegisterWorkerRequest, oneof: "message" },
    { no: 2, name: "availability", kind: "message", T: AvailabilityResponse, oneof: "message" },
    { no: 3, name: "update_worker", kind: "message", T: UpdateWorkerStatus, oneof: "message" },
    { no: 4, name: "update_job", kind: "message", T: UpdateJobStatus, oneof: "message" },
    { no: 5, name: "ping", kind: "message", T: WorkerPing, oneof: "message" },
    { no: 6, name: "simulate_job", kind: "message", T: SimulateJobRequest, oneof: "message" },
    { no: 7, name: "migrate_job", kind: "message", T: MigrateJobRequest, oneof: "message" }
  ]
);
const ServerMessage = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ServerMessage",
  () => [
    { no: 1, name: "register", kind: "message", T: RegisterWorkerResponse, oneof: "message" },
    { no: 2, name: "availability", kind: "message", T: AvailabilityRequest, oneof: "message" },
    { no: 3, name: "assignment", kind: "message", T: JobAssignment, oneof: "message" },
    { no: 5, name: "termination", kind: "message", T: JobTermination, oneof: "message" },
    { no: 4, name: "pong", kind: "message", T: WorkerPong, oneof: "message" }
  ]
);
const SimulateJobRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SimulateJobRequest",
  () => [
    { no: 1, name: "type", kind: "enum", T: protobuf.proto3.getEnumType(JobType) },
    { no: 2, name: "room", kind: "message", T: Room },
    { no: 3, name: "participant", kind: "message", T: ParticipantInfo }
  ]
);
const WorkerPing = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.WorkerPing",
  () => [
    {
      no: 1,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const WorkerPong = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.WorkerPong",
  () => [
    {
      no: 1,
      name: "last_timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const RegisterWorkerRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RegisterWorkerRequest",
  () => [
    { no: 1, name: "type", kind: "enum", T: protobuf.proto3.getEnumType(JobType) },
    {
      no: 8,
      name: "agent_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "ping_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 6, name: "namespace", kind: "scalar", T: 9, opt: true },
    { no: 7, name: "allowed_permissions", kind: "message", T: ParticipantPermission }
  ]
);
const RegisterWorkerResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RegisterWorkerResponse",
  () => [
    {
      no: 1,
      name: "worker_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "server_info", kind: "message", T: ServerInfo }
  ]
);
const MigrateJobRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MigrateJobRequest",
  () => [
    { no: 2, name: "job_ids", kind: "scalar", T: 9, repeated: true }
  ]
);
const AvailabilityRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AvailabilityRequest",
  () => [
    { no: 1, name: "job", kind: "message", T: Job },
    {
      no: 2,
      name: "resuming",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const AvailabilityResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AvailabilityResponse",
  () => [
    {
      no: 1,
      name: "job_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "available",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "supports_resume",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "participant_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "participant_metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 7, name: "participant_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ]
);
const UpdateJobStatus = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateJobStatus",
  () => [
    {
      no: 1,
      name: "job_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(JobStatus) },
    {
      no: 3,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const UpdateWorkerStatus = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateWorkerStatus",
  () => [
    { no: 1, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(WorkerStatus), opt: true },
    {
      no: 3,
      name: "load",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "job_count",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const JobAssignment = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.JobAssignment",
  () => [
    { no: 1, name: "job", kind: "message", T: Job },
    { no: 2, name: "url", kind: "scalar", T: 9, opt: true },
    {
      no: 3,
      name: "token",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const JobTermination = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.JobTermination",
  () => [
    {
      no: 1,
      name: "job_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);

const CreateAgentDispatchRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateAgentDispatchRequest",
  () => [
    {
      no: 1,
      name: "agent_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const RoomAgentDispatch = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomAgentDispatch",
  () => [
    {
      no: 1,
      name: "agent_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const DeleteAgentDispatchRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteAgentDispatchRequest",
  () => [
    {
      no: 1,
      name: "dispatch_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ListAgentDispatchRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListAgentDispatchRequest",
  () => [
    {
      no: 1,
      name: "dispatch_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ListAgentDispatchResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListAgentDispatchResponse",
  () => [
    { no: 1, name: "agent_dispatches", kind: "message", T: AgentDispatch, repeated: true }
  ]
);
const AgentDispatch = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AgentDispatch",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "agent_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "state", kind: "message", T: AgentDispatchState }
  ]
);
const AgentDispatchState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AgentDispatchState",
  () => [
    { no: 1, name: "jobs", kind: "message", T: Job, repeated: true },
    {
      no: 2,
      name: "created_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "deleted_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);

const EncodedFileType = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.EncodedFileType",
  [
    { no: 0, name: "DEFAULT_FILETYPE" },
    { no: 1, name: "MP4" },
    { no: 2, name: "OGG" }
  ]
);
const SegmentedFileProtocol = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SegmentedFileProtocol",
  [
    { no: 0, name: "DEFAULT_SEGMENTED_FILE_PROTOCOL" },
    { no: 1, name: "HLS_PROTOCOL" }
  ]
);
const SegmentedFileSuffix = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SegmentedFileSuffix",
  [
    { no: 0, name: "INDEX" },
    { no: 1, name: "TIMESTAMP" }
  ]
);
const ImageFileSuffix = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.ImageFileSuffix",
  [
    { no: 0, name: "IMAGE_SUFFIX_INDEX" },
    { no: 1, name: "IMAGE_SUFFIX_TIMESTAMP" }
  ]
);
const StreamProtocol = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.StreamProtocol",
  [
    { no: 0, name: "DEFAULT_PROTOCOL" },
    { no: 1, name: "RTMP" },
    { no: 2, name: "SRT" }
  ]
);
const AudioMixing = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.AudioMixing",
  [
    { no: 0, name: "DEFAULT_MIXING" },
    { no: 1, name: "DUAL_CHANNEL_AGENT" },
    { no: 2, name: "DUAL_CHANNEL_ALTERNATE" }
  ]
);
const EncodingOptionsPreset = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.EncodingOptionsPreset",
  [
    { no: 0, name: "H264_720P_30" },
    { no: 1, name: "H264_720P_60" },
    { no: 2, name: "H264_1080P_30" },
    { no: 3, name: "H264_1080P_60" },
    { no: 4, name: "PORTRAIT_H264_720P_30" },
    { no: 5, name: "PORTRAIT_H264_720P_60" },
    { no: 6, name: "PORTRAIT_H264_1080P_30" },
    { no: 7, name: "PORTRAIT_H264_1080P_60" }
  ]
);
const EgressStatus = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.EgressStatus",
  [
    { no: 0, name: "EGRESS_STARTING" },
    { no: 1, name: "EGRESS_ACTIVE" },
    { no: 2, name: "EGRESS_ENDING" },
    { no: 3, name: "EGRESS_COMPLETE" },
    { no: 4, name: "EGRESS_FAILED" },
    { no: 5, name: "EGRESS_ABORTED" },
    { no: 6, name: "EGRESS_LIMIT_REACHED" }
  ]
);
const EgressSourceType = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.EgressSourceType",
  [
    { no: 0, name: "EGRESS_SOURCE_TYPE_WEB", localName: "WEB" },
    { no: 1, name: "EGRESS_SOURCE_TYPE_SDK", localName: "SDK" }
  ]
);
const RoomCompositeEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomCompositeEgressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "layout",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "audio_only",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 15, name: "audio_mixing", kind: "enum", T: protobuf.proto3.getEnumType(AudioMixing) },
    {
      no: 4,
      name: "video_only",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "custom_base_url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "file", kind: "message", T: EncodedFileOutput, oneof: "output" },
    { no: 7, name: "stream", kind: "message", T: StreamOutput, oneof: "output" },
    { no: 10, name: "segments", kind: "message", T: SegmentedFileOutput, oneof: "output" },
    { no: 8, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(EncodingOptionsPreset), oneof: "options" },
    { no: 9, name: "advanced", kind: "message", T: EncodingOptions, oneof: "options" },
    { no: 11, name: "file_outputs", kind: "message", T: EncodedFileOutput, repeated: true },
    { no: 12, name: "stream_outputs", kind: "message", T: StreamOutput, repeated: true },
    { no: 13, name: "segment_outputs", kind: "message", T: SegmentedFileOutput, repeated: true },
    { no: 14, name: "image_outputs", kind: "message", T: ImageOutput, repeated: true }
  ]
);
const WebEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.WebEgressRequest",
  () => [
    {
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "audio_only",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "video_only",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 12,
      name: "await_start_signal",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 4, name: "file", kind: "message", T: EncodedFileOutput, oneof: "output" },
    { no: 5, name: "stream", kind: "message", T: StreamOutput, oneof: "output" },
    { no: 6, name: "segments", kind: "message", T: SegmentedFileOutput, oneof: "output" },
    { no: 7, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(EncodingOptionsPreset), oneof: "options" },
    { no: 8, name: "advanced", kind: "message", T: EncodingOptions, oneof: "options" },
    { no: 9, name: "file_outputs", kind: "message", T: EncodedFileOutput, repeated: true },
    { no: 10, name: "stream_outputs", kind: "message", T: StreamOutput, repeated: true },
    { no: 11, name: "segment_outputs", kind: "message", T: SegmentedFileOutput, repeated: true },
    { no: 13, name: "image_outputs", kind: "message", T: ImageOutput, repeated: true }
  ]
);
const ParticipantEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ParticipantEgressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "screen_share",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 4, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(EncodingOptionsPreset), oneof: "options" },
    { no: 5, name: "advanced", kind: "message", T: EncodingOptions, oneof: "options" },
    { no: 6, name: "file_outputs", kind: "message", T: EncodedFileOutput, repeated: true },
    { no: 7, name: "stream_outputs", kind: "message", T: StreamOutput, repeated: true },
    { no: 8, name: "segment_outputs", kind: "message", T: SegmentedFileOutput, repeated: true },
    { no: 9, name: "image_outputs", kind: "message", T: ImageOutput, repeated: true }
  ]
);
const TrackCompositeEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackCompositeEgressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "audio_track_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "video_track_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "file", kind: "message", T: EncodedFileOutput, oneof: "output" },
    { no: 5, name: "stream", kind: "message", T: StreamOutput, oneof: "output" },
    { no: 8, name: "segments", kind: "message", T: SegmentedFileOutput, oneof: "output" },
    { no: 6, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(EncodingOptionsPreset), oneof: "options" },
    { no: 7, name: "advanced", kind: "message", T: EncodingOptions, oneof: "options" },
    { no: 11, name: "file_outputs", kind: "message", T: EncodedFileOutput, repeated: true },
    { no: 12, name: "stream_outputs", kind: "message", T: StreamOutput, repeated: true },
    { no: 13, name: "segment_outputs", kind: "message", T: SegmentedFileOutput, repeated: true },
    { no: 14, name: "image_outputs", kind: "message", T: ImageOutput, repeated: true }
  ]
);
const TrackEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackEgressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "track_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "file", kind: "message", T: DirectFileOutput, oneof: "output" },
    { no: 4, name: "websocket_url", kind: "scalar", T: 9, oneof: "output" }
  ]
);
const EncodedFileOutput = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.EncodedFileOutput",
  () => [
    { no: 1, name: "file_type", kind: "enum", T: protobuf.proto3.getEnumType(EncodedFileType) },
    {
      no: 2,
      name: "filepath",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "disable_manifest",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 3, name: "s3", kind: "message", T: S3Upload, oneof: "output" },
    { no: 4, name: "gcp", kind: "message", T: GCPUpload, oneof: "output" },
    { no: 5, name: "azure", kind: "message", T: AzureBlobUpload, oneof: "output" },
    { no: 7, name: "aliOSS", kind: "message", T: AliOSSUpload, oneof: "output" }
  ]
);
const SegmentedFileOutput = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SegmentedFileOutput",
  () => [
    { no: 1, name: "protocol", kind: "enum", T: protobuf.proto3.getEnumType(SegmentedFileProtocol) },
    {
      no: 2,
      name: "filename_prefix",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "playlist_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "live_playlist_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "segment_duration",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 10, name: "filename_suffix", kind: "enum", T: protobuf.proto3.getEnumType(SegmentedFileSuffix) },
    {
      no: 8,
      name: "disable_manifest",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 5, name: "s3", kind: "message", T: S3Upload, oneof: "output" },
    { no: 6, name: "gcp", kind: "message", T: GCPUpload, oneof: "output" },
    { no: 7, name: "azure", kind: "message", T: AzureBlobUpload, oneof: "output" },
    { no: 9, name: "aliOSS", kind: "message", T: AliOSSUpload, oneof: "output" }
  ]
);
const DirectFileOutput = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DirectFileOutput",
  () => [
    {
      no: 1,
      name: "filepath",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "disable_manifest",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "s3", kind: "message", T: S3Upload, oneof: "output" },
    { no: 3, name: "gcp", kind: "message", T: GCPUpload, oneof: "output" },
    { no: 4, name: "azure", kind: "message", T: AzureBlobUpload, oneof: "output" },
    { no: 6, name: "aliOSS", kind: "message", T: AliOSSUpload, oneof: "output" }
  ]
);
const ImageOutput = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ImageOutput",
  () => [
    {
      no: 1,
      name: "capture_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "width",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "height",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "filename_prefix",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "filename_suffix", kind: "enum", T: protobuf.proto3.getEnumType(ImageFileSuffix) },
    { no: 6, name: "image_codec", kind: "enum", T: protobuf.proto3.getEnumType(ImageCodec) },
    {
      no: 7,
      name: "disable_manifest",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 8, name: "s3", kind: "message", T: S3Upload, oneof: "output" },
    { no: 9, name: "gcp", kind: "message", T: GCPUpload, oneof: "output" },
    { no: 10, name: "azure", kind: "message", T: AzureBlobUpload, oneof: "output" },
    { no: 11, name: "aliOSS", kind: "message", T: AliOSSUpload, oneof: "output" }
  ]
);
const S3Upload = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.S3Upload",
  () => [
    {
      no: 1,
      name: "access_key",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "secret",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "session_token",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "endpoint",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "bucket",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "force_path_style",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 7, name: "metadata", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    {
      no: 8,
      name: "tagging",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "content_disposition",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 10, name: "proxy", kind: "message", T: ProxyConfig }
  ]
);
const GCPUpload = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.GCPUpload",
  () => [
    {
      no: 1,
      name: "credentials",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "bucket",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "proxy", kind: "message", T: ProxyConfig }
  ]
);
const AzureBlobUpload = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AzureBlobUpload",
  () => [
    {
      no: 1,
      name: "account_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "account_key",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "container_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const AliOSSUpload = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AliOSSUpload",
  () => [
    {
      no: 1,
      name: "access_key",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "secret",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "endpoint",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "bucket",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ProxyConfig = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ProxyConfig",
  () => [
    {
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const StreamOutput = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StreamOutput",
  () => [
    { no: 1, name: "protocol", kind: "enum", T: protobuf.proto3.getEnumType(StreamProtocol) },
    { no: 2, name: "urls", kind: "scalar", T: 9, repeated: true }
  ]
);
const EncodingOptions = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.EncodingOptions",
  () => [
    {
      no: 1,
      name: "width",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 2,
      name: "height",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "depth",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "framerate",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 5, name: "audio_codec", kind: "enum", T: protobuf.proto3.getEnumType(AudioCodec) },
    {
      no: 6,
      name: "audio_bitrate",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 11,
      name: "audio_quality",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 7,
      name: "audio_frequency",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 8, name: "video_codec", kind: "enum", T: protobuf.proto3.getEnumType(VideoCodec) },
    {
      no: 9,
      name: "video_bitrate",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 12,
      name: "video_quality",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 10,
      name: "key_frame_interval",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    }
  ]
);
const UpdateLayoutRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateLayoutRequest",
  () => [
    {
      no: 1,
      name: "egress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "layout",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const UpdateStreamRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateStreamRequest",
  () => [
    {
      no: 1,
      name: "egress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "add_output_urls", kind: "scalar", T: 9, repeated: true },
    { no: 3, name: "remove_output_urls", kind: "scalar", T: 9, repeated: true }
  ]
);
const ListEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListEgressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "egress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "active",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const ListEgressResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListEgressResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: EgressInfo, repeated: true }
  ]
);
const StopEgressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StopEgressRequest",
  () => [
    {
      no: 1,
      name: "egress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const EgressInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.EgressInfo",
  () => [
    {
      no: 1,
      name: "egress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "room_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 13,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 26, name: "source_type", kind: "enum", T: protobuf.proto3.getEnumType(EgressSourceType) },
    { no: 3, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(EgressStatus) },
    {
      no: 10,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 11,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 18,
      name: "updated_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 21,
      name: "details",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 22,
      name: "error_code",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 4, name: "room_composite", kind: "message", T: RoomCompositeEgressRequest, oneof: "request" },
    { no: 14, name: "web", kind: "message", T: WebEgressRequest, oneof: "request" },
    { no: 19, name: "participant", kind: "message", T: ParticipantEgressRequest, oneof: "request" },
    { no: 5, name: "track_composite", kind: "message", T: TrackCompositeEgressRequest, oneof: "request" },
    { no: 6, name: "track", kind: "message", T: TrackEgressRequest, oneof: "request" },
    { no: 7, name: "stream", kind: "message", T: StreamInfoList, oneof: "result" },
    { no: 8, name: "file", kind: "message", T: FileInfo, oneof: "result" },
    { no: 12, name: "segments", kind: "message", T: SegmentsInfo, oneof: "result" },
    { no: 15, name: "stream_results", kind: "message", T: StreamInfo, repeated: true },
    { no: 16, name: "file_results", kind: "message", T: FileInfo, repeated: true },
    { no: 17, name: "segment_results", kind: "message", T: SegmentsInfo, repeated: true },
    { no: 20, name: "image_results", kind: "message", T: ImagesInfo, repeated: true },
    {
      no: 23,
      name: "manifest_location",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 25,
      name: "backup_storage_used",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const StreamInfoList = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StreamInfoList",
  () => [
    { no: 1, name: "info", kind: "message", T: StreamInfo, repeated: true }
  ]
);
const StreamInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StreamInfo",
  () => [
    {
      no: 1,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 4,
      name: "duration",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 5, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(StreamInfo_Status) },
    {
      no: 6,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const StreamInfo_Status = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.StreamInfo.Status",
  [
    { no: 0, name: "ACTIVE" },
    { no: 1, name: "FINISHED" },
    { no: 2, name: "FAILED" }
  ]
);
const FileInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.FileInfo",
  () => [
    {
      no: 1,
      name: "filename",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 6,
      name: "duration",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 4,
      name: "size",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 5,
      name: "location",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SegmentsInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SegmentsInfo",
  () => [
    {
      no: 1,
      name: "playlist_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "live_playlist_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "duration",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "size",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 4,
      name: "playlist_location",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "live_playlist_location",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "segment_count",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 6,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 7,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const ImagesInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ImagesInfo",
  () => [
    {
      no: 4,
      name: "filename_prefix",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 1,
      name: "image_count",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 2,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 3,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const AutoParticipantEgress = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AutoParticipantEgress",
  () => [
    { no: 1, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(EncodingOptionsPreset), oneof: "options" },
    { no: 2, name: "advanced", kind: "message", T: EncodingOptions, oneof: "options" },
    { no: 3, name: "file_outputs", kind: "message", T: EncodedFileOutput, repeated: true },
    { no: 4, name: "segment_outputs", kind: "message", T: SegmentedFileOutput, repeated: true }
  ]
);
const AutoTrackEgress = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AutoTrackEgress",
  () => [
    {
      no: 1,
      name: "filepath",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "disable_manifest",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "s3", kind: "message", T: S3Upload, oneof: "output" },
    { no: 3, name: "gcp", kind: "message", T: GCPUpload, oneof: "output" },
    { no: 4, name: "azure", kind: "message", T: AzureBlobUpload, oneof: "output" },
    { no: 6, name: "aliOSS", kind: "message", T: AliOSSUpload, oneof: "output" }
  ]
);

const IngressInput = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.IngressInput",
  [
    { no: 0, name: "RTMP_INPUT" },
    { no: 1, name: "WHIP_INPUT" },
    { no: 2, name: "URL_INPUT" }
  ]
);
const IngressAudioEncodingPreset = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.IngressAudioEncodingPreset",
  [
    { no: 0, name: "OPUS_STEREO_96KBPS" },
    { no: 1, name: "OPUS_MONO_64KBS" }
  ]
);
const IngressVideoEncodingPreset = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.IngressVideoEncodingPreset",
  [
    { no: 0, name: "H264_720P_30FPS_3_LAYERS" },
    { no: 1, name: "H264_1080P_30FPS_3_LAYERS" },
    { no: 2, name: "H264_540P_25FPS_2_LAYERS" },
    { no: 3, name: "H264_720P_30FPS_1_LAYER" },
    { no: 4, name: "H264_1080P_30FPS_1_LAYER" },
    { no: 5, name: "H264_720P_30FPS_3_LAYERS_HIGH_MOTION" },
    { no: 6, name: "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION" },
    { no: 7, name: "H264_540P_25FPS_2_LAYERS_HIGH_MOTION" },
    { no: 8, name: "H264_720P_30FPS_1_LAYER_HIGH_MOTION" },
    { no: 9, name: "H264_1080P_30FPS_1_LAYER_HIGH_MOTION" }
  ]
);
const CreateIngressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateIngressRequest",
  () => [
    { no: 1, name: "input_type", kind: "enum", T: protobuf.proto3.getEnumType(IngressInput) },
    {
      no: 9,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "participant_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "participant_metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "bypass_transcoding",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 11, name: "enable_transcoding", kind: "scalar", T: 8, opt: true },
    { no: 6, name: "audio", kind: "message", T: IngressAudioOptions },
    { no: 7, name: "video", kind: "message", T: IngressVideoOptions },
    { no: 12, name: "enabled", kind: "scalar", T: 8, opt: true }
  ]
);
const IngressAudioOptions = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressAudioOptions",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "source", kind: "enum", T: protobuf.proto3.getEnumType(TrackSource) },
    { no: 3, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(IngressAudioEncodingPreset), oneof: "encoding_options" },
    { no: 4, name: "options", kind: "message", T: IngressAudioEncodingOptions, oneof: "encoding_options" }
  ]
);
const IngressVideoOptions = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressVideoOptions",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "source", kind: "enum", T: protobuf.proto3.getEnumType(TrackSource) },
    { no: 3, name: "preset", kind: "enum", T: protobuf.proto3.getEnumType(IngressVideoEncodingPreset), oneof: "encoding_options" },
    { no: 4, name: "options", kind: "message", T: IngressVideoEncodingOptions, oneof: "encoding_options" }
  ]
);
const IngressAudioEncodingOptions = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressAudioEncodingOptions",
  () => [
    { no: 1, name: "audio_codec", kind: "enum", T: protobuf.proto3.getEnumType(AudioCodec) },
    {
      no: 2,
      name: "bitrate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "disable_dtx",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "channels",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const IngressVideoEncodingOptions = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressVideoEncodingOptions",
  () => [
    { no: 1, name: "video_codec", kind: "enum", T: protobuf.proto3.getEnumType(VideoCodec) },
    {
      no: 2,
      name: "frame_rate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    },
    { no: 3, name: "layers", kind: "message", T: VideoLayer, repeated: true }
  ]
);
const IngressInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressInfo",
  () => [
    {
      no: 1,
      name: "ingress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "stream_key",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "input_type", kind: "enum", T: protobuf.proto3.getEnumType(IngressInput) },
    {
      no: 13,
      name: "bypass_transcoding",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 15, name: "enable_transcoding", kind: "scalar", T: 8, opt: true },
    { no: 6, name: "audio", kind: "message", T: IngressAudioOptions },
    { no: 7, name: "video", kind: "message", T: IngressVideoOptions },
    {
      no: 8,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "participant_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 14,
      name: "participant_metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "reusable",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 12, name: "state", kind: "message", T: IngressState },
    { no: 16, name: "enabled", kind: "scalar", T: 8, opt: true }
  ]
);
const IngressState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.IngressState",
  () => [
    { no: 1, name: "status", kind: "enum", T: protobuf.proto3.getEnumType(IngressState_Status) },
    {
      no: 2,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "video", kind: "message", T: InputVideoState },
    { no: 4, name: "audio", kind: "message", T: InputAudioState },
    {
      no: 5,
      name: "room_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 8,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 10,
      name: "updated_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 9,
      name: "resource_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "tracks", kind: "message", T: TrackInfo, repeated: true }
  ]
);
const IngressState_Status = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.IngressState.Status",
  [
    { no: 0, name: "ENDPOINT_INACTIVE" },
    { no: 1, name: "ENDPOINT_BUFFERING" },
    { no: 2, name: "ENDPOINT_PUBLISHING" },
    { no: 3, name: "ENDPOINT_ERROR" },
    { no: 4, name: "ENDPOINT_COMPLETE" }
  ]
);
const InputVideoState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.InputVideoState",
  () => [
    {
      no: 1,
      name: "mime_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "average_bitrate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "framerate",
      kind: "scalar",
      T: 1
      /* ScalarType.DOUBLE */
    }
  ]
);
const InputAudioState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.InputAudioState",
  () => [
    {
      no: 1,
      name: "mime_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "average_bitrate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "channels",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "sample_rate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const UpdateIngressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateIngressRequest",
  () => [
    {
      no: 1,
      name: "ingress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "participant_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "participant_metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 8, name: "bypass_transcoding", kind: "scalar", T: 8, opt: true },
    { no: 10, name: "enable_transcoding", kind: "scalar", T: 8, opt: true },
    { no: 6, name: "audio", kind: "message", T: IngressAudioOptions },
    { no: 7, name: "video", kind: "message", T: IngressVideoOptions },
    { no: 11, name: "enabled", kind: "scalar", T: 8, opt: true }
  ]
);
const ListIngressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListIngressRequest",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "ingress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ListIngressResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListIngressResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: IngressInfo, repeated: true }
  ]
);
const DeleteIngressRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteIngressRequest",
  () => [
    {
      no: 1,
      name: "ingress_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);

const CreateRoomRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateRoomRequest",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 12,
      name: "room_preset",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "empty_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "departure_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "max_participants",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "node_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "egress", kind: "message", T: RoomEgress },
    {
      no: 7,
      name: "min_playout_delay",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "max_playout_delay",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "sync_streams",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 13,
      name: "replay_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 14, name: "agents", kind: "message", T: RoomAgentDispatch, repeated: true }
  ]
);
const RoomEgress = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomEgress",
  () => [
    { no: 1, name: "room", kind: "message", T: RoomCompositeEgressRequest },
    { no: 3, name: "participant", kind: "message", T: AutoParticipantEgress },
    { no: 2, name: "tracks", kind: "message", T: AutoTrackEgress }
  ]
);
const RoomAgent = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomAgent",
  () => [
    { no: 1, name: "dispatches", kind: "message", T: RoomAgentDispatch, repeated: true }
  ]
);
const ListRoomsRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListRoomsRequest",
  () => [
    { no: 1, name: "names", kind: "scalar", T: 9, repeated: true }
  ]
);
const ListRoomsResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListRoomsResponse",
  () => [
    { no: 1, name: "rooms", kind: "message", T: Room, repeated: true }
  ]
);
const DeleteRoomRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteRoomRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const DeleteRoomResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteRoomResponse",
  []
);
const ListParticipantsRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListParticipantsRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ListParticipantsResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListParticipantsResponse",
  () => [
    { no: 1, name: "participants", kind: "message", T: ParticipantInfo, repeated: true }
  ]
);
const RoomParticipantIdentity = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomParticipantIdentity",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const RemoveParticipantResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RemoveParticipantResponse",
  []
);
const MuteRoomTrackRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MuteRoomTrackRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "muted",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const MuteRoomTrackResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MuteRoomTrackResponse",
  () => [
    { no: 1, name: "track", kind: "message", T: TrackInfo }
  ]
);
const UpdateParticipantRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateParticipantRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "permission", kind: "message", T: ParticipantPermission },
    {
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ]
);
const UpdateSubscriptionsRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSubscriptionsRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true },
    {
      no: 4,
      name: "subscribe",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 5, name: "participant_tracks", kind: "message", T: ParticipantTracks, repeated: true }
  ]
);
const UpdateSubscriptionsResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSubscriptionsResponse",
  []
);
const SendDataRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SendDataRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "data",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 3, name: "kind", kind: "enum", T: protobuf.proto3.getEnumType(DataPacket_Kind) },
    { no: 4, name: "destination_sids", kind: "scalar", T: 9, repeated: true },
    { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true },
    { no: 5, name: "topic", kind: "scalar", T: 9, opt: true },
    {
      no: 7,
      name: "nonce",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
);
const SendDataResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SendDataResponse",
  []
);
const UpdateRoomMetadataRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateRoomMetadataRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const RoomConfiguration = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomConfiguration",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "empty_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "departure_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "max_participants",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 5, name: "egress", kind: "message", T: RoomEgress },
    {
      no: 7,
      name: "min_playout_delay",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "max_playout_delay",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "sync_streams",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 10, name: "agents", kind: "message", T: RoomAgentDispatch, repeated: true }
  ]
);
const ForwardParticipantRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ForwardParticipantRequest",
  () => [
    {
      no: 1,
      name: "room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "destination_room",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ForwardParticipantResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ForwardParticipantResponse",
  []
);

const SignalTarget = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SignalTarget",
  [
    { no: 0, name: "PUBLISHER" },
    { no: 1, name: "SUBSCRIBER" }
  ]
);
const StreamState = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.StreamState",
  [
    { no: 0, name: "ACTIVE" },
    { no: 1, name: "PAUSED" }
  ]
);
const CandidateProtocol = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.CandidateProtocol",
  [
    { no: 0, name: "UDP" },
    { no: 1, name: "TCP" },
    { no: 2, name: "TLS" }
  ]
);
const SignalRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
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
    { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" },
    { no: 15, name: "update_metadata", kind: "message", T: UpdateParticipantMetadata, oneof: "message" },
    { no: 16, name: "ping_req", kind: "message", T: Ping, oneof: "message" },
    { no: 17, name: "update_audio_track", kind: "message", T: UpdateLocalAudioTrack, oneof: "message" },
    { no: 18, name: "update_video_track", kind: "message", T: UpdateLocalVideoTrack, oneof: "message" }
  ]
);
const SignalResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
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
    { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" },
    { no: 17, name: "track_unpublished", kind: "message", T: TrackUnpublishedResponse, oneof: "message" },
    { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" },
    { no: 19, name: "reconnect", kind: "message", T: ReconnectResponse, oneof: "message" },
    { no: 20, name: "pong_resp", kind: "message", T: Pong, oneof: "message" },
    { no: 21, name: "subscription_response", kind: "message", T: SubscriptionResponse, oneof: "message" },
    { no: 22, name: "request_response", kind: "message", T: RequestResponse, oneof: "message" },
    { no: 23, name: "track_subscribed", kind: "message", T: TrackSubscribed, oneof: "message" }
  ]
);
const SimulcastCodec = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SimulcastCodec",
  () => [
    {
      no: 1,
      name: "codec",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "cid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const AddTrackRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.AddTrackRequest",
  () => [
    {
      no: 1,
      name: "cid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "type", kind: "enum", T: protobuf.proto3.getEnumType(TrackType) },
    {
      no: 4,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "muted",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 7,
      name: "disable_dtx",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 8, name: "source", kind: "enum", T: protobuf.proto3.getEnumType(TrackSource) },
    { no: 9, name: "layers", kind: "message", T: VideoLayer, repeated: true },
    { no: 10, name: "simulcast_codecs", kind: "message", T: SimulcastCodec, repeated: true },
    {
      no: 11,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 12,
      name: "stereo",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 13,
      name: "disable_red",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 14, name: "encryption", kind: "enum", T: protobuf.proto3.getEnumType(Encryption_Type) },
    {
      no: 15,
      name: "stream",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 16, name: "backup_codec_policy", kind: "enum", T: protobuf.proto3.getEnumType(BackupCodecPolicy) }
  ]
);
const TrickleRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrickleRequest",
  () => [
    {
      no: 1,
      name: "candidateInit",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "target", kind: "enum", T: protobuf.proto3.getEnumType(SignalTarget) },
    {
      no: 3,
      name: "final",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const MuteTrackRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.MuteTrackRequest",
  () => [
    {
      no: 1,
      name: "sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "muted",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const JoinResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.JoinResponse",
  () => [
    { no: 1, name: "room", kind: "message", T: Room },
    { no: 2, name: "participant", kind: "message", T: ParticipantInfo },
    { no: 3, name: "other_participants", kind: "message", T: ParticipantInfo, repeated: true },
    {
      no: 4,
      name: "server_version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "ice_servers", kind: "message", T: ICEServer, repeated: true },
    {
      no: 6,
      name: "subscriber_primary",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 7,
      name: "alternative_url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 8, name: "client_configuration", kind: "message", T: ClientConfiguration },
    {
      no: 9,
      name: "server_region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "ping_timeout",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 11,
      name: "ping_interval",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 12, name: "server_info", kind: "message", T: ServerInfo },
    {
      no: 13,
      name: "sif_trailer",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 14, name: "enabled_publish_codecs", kind: "message", T: Codec, repeated: true },
    {
      no: 15,
      name: "fast_publish",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const ReconnectResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ReconnectResponse",
  () => [
    { no: 1, name: "ice_servers", kind: "message", T: ICEServer, repeated: true },
    { no: 2, name: "client_configuration", kind: "message", T: ClientConfiguration }
  ]
);
const TrackPublishedResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackPublishedResponse",
  () => [
    {
      no: 1,
      name: "cid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "track", kind: "message", T: TrackInfo }
  ]
);
const TrackUnpublishedResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackUnpublishedResponse",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SessionDescription = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SessionDescription",
  () => [
    {
      no: 1,
      name: "type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "sdp",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const ParticipantUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ParticipantUpdate",
  () => [
    { no: 1, name: "participants", kind: "message", T: ParticipantInfo, repeated: true }
  ]
);
const UpdateSubscription = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSubscription",
  () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true },
    {
      no: 2,
      name: "subscribe",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 3, name: "participant_tracks", kind: "message", T: ParticipantTracks, repeated: true }
  ]
);
const UpdateTrackSettings = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateTrackSettings",
  () => [
    { no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true },
    {
      no: 3,
      name: "disabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 4, name: "quality", kind: "enum", T: protobuf.proto3.getEnumType(VideoQuality) },
    {
      no: 5,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "fps",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "priority",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const UpdateLocalAudioTrack = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateLocalAudioTrack",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "features", kind: "enum", T: protobuf.proto3.getEnumType(AudioTrackFeature), repeated: true }
  ]
);
const UpdateLocalVideoTrack = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateLocalVideoTrack",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const LeaveRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.LeaveRequest",
  () => [
    {
      no: 1,
      name: "can_reconnect",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "reason", kind: "enum", T: protobuf.proto3.getEnumType(DisconnectReason) },
    { no: 3, name: "action", kind: "enum", T: protobuf.proto3.getEnumType(LeaveRequest_Action) },
    { no: 4, name: "regions", kind: "message", T: RegionSettings }
  ]
);
const LeaveRequest_Action = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.LeaveRequest.Action",
  [
    { no: 0, name: "DISCONNECT" },
    { no: 1, name: "RESUME" },
    { no: 2, name: "RECONNECT" }
  ]
);
const UpdateVideoLayers = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateVideoLayers",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "layers", kind: "message", T: VideoLayer, repeated: true }
  ]
);
const UpdateParticipantMetadata = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateParticipantMetadata",
  () => [
    {
      no: 1,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    {
      no: 4,
      name: "request_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
const ICEServer = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ICEServer",
  () => [
    { no: 1, name: "urls", kind: "scalar", T: 9, repeated: true },
    {
      no: 2,
      name: "username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "credential",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SpeakersChanged = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SpeakersChanged",
  () => [
    { no: 1, name: "speakers", kind: "message", T: SpeakerInfo, repeated: true }
  ]
);
const RoomUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RoomUpdate",
  () => [
    { no: 1, name: "room", kind: "message", T: Room }
  ]
);
const ConnectionQualityInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ConnectionQualityInfo",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "quality", kind: "enum", T: protobuf.proto3.getEnumType(ConnectionQuality) },
    {
      no: 3,
      name: "score",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    }
  ]
);
const ConnectionQualityUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ConnectionQualityUpdate",
  () => [
    { no: 1, name: "updates", kind: "message", T: ConnectionQualityInfo, repeated: true }
  ]
);
const StreamStateInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StreamStateInfo",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "state", kind: "enum", T: protobuf.proto3.getEnumType(StreamState) }
  ]
);
const StreamStateUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.StreamStateUpdate",
  () => [
    { no: 1, name: "stream_states", kind: "message", T: StreamStateInfo, repeated: true }
  ]
);
const SubscribedQuality = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscribedQuality",
  () => [
    { no: 1, name: "quality", kind: "enum", T: protobuf.proto3.getEnumType(VideoQuality) },
    {
      no: 2,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const SubscribedCodec = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscribedCodec",
  () => [
    {
      no: 1,
      name: "codec",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "qualities", kind: "message", T: SubscribedQuality, repeated: true }
  ]
);
const SubscribedQualityUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscribedQualityUpdate",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "subscribed_qualities", kind: "message", T: SubscribedQuality, repeated: true },
    { no: 3, name: "subscribed_codecs", kind: "message", T: SubscribedCodec, repeated: true }
  ]
);
const TrackPermission = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackPermission",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "all_tracks",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true },
    {
      no: 4,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SubscriptionPermission = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscriptionPermission",
  () => [
    {
      no: 1,
      name: "all_participants",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "track_permissions", kind: "message", T: TrackPermission, repeated: true }
  ]
);
const SubscriptionPermissionUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscriptionPermissionUpdate",
  () => [
    {
      no: 1,
      name: "participant_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "allowed",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const SyncState = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SyncState",
  () => [
    { no: 1, name: "answer", kind: "message", T: SessionDescription },
    { no: 2, name: "subscription", kind: "message", T: UpdateSubscription },
    { no: 3, name: "publish_tracks", kind: "message", T: TrackPublishedResponse, repeated: true },
    { no: 4, name: "data_channels", kind: "message", T: DataChannelInfo, repeated: true },
    { no: 5, name: "offer", kind: "message", T: SessionDescription },
    { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: true }
  ]
);
const DataChannelInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DataChannelInfo",
  () => [
    {
      no: 1,
      name: "label",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "target", kind: "enum", T: protobuf.proto3.getEnumType(SignalTarget) }
  ]
);
const SimulateScenario = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SimulateScenario",
  () => [
    { no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" },
    { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 5, name: "switch_candidate_protocol", kind: "enum", T: protobuf.proto3.getEnumType(CandidateProtocol), oneof: "scenario" },
    { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3, oneof: "scenario" },
    { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8, oneof: "scenario" },
    { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8, oneof: "scenario" }
  ]
);
const Ping = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Ping",
  () => [
    {
      no: 1,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 2,
      name: "rtt",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const Pong = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.Pong",
  () => [
    {
      no: 1,
      name: "last_ping_timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 2,
      name: "timestamp",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const RegionSettings = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RegionSettings",
  () => [
    { no: 1, name: "regions", kind: "message", T: RegionInfo, repeated: true }
  ]
);
const RegionInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RegionInfo",
  () => [
    {
      no: 1,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "url",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "distance",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    }
  ]
);
const SubscriptionResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SubscriptionResponse",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "err", kind: "enum", T: protobuf.proto3.getEnumType(SubscriptionError) }
  ]
);
const RequestResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.RequestResponse",
  () => [
    {
      no: 1,
      name: "request_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "reason", kind: "enum", T: protobuf.proto3.getEnumType(RequestResponse_Reason) },
    {
      no: 3,
      name: "message",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const RequestResponse_Reason = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.RequestResponse.Reason",
  [
    { no: 0, name: "OK" },
    { no: 1, name: "NOT_FOUND" },
    { no: 2, name: "NOT_ALLOWED" },
    { no: 3, name: "LIMIT_EXCEEDED" }
  ]
);
const TrackSubscribed = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TrackSubscribed",
  () => [
    {
      no: 1,
      name: "track_sid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);

const SIPStatusCode = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPStatusCode",
  [
    { no: 0, name: "SIP_STATUS_UNKNOWN" },
    { no: 100, name: "SIP_STATUS_TRYING" },
    { no: 180, name: "SIP_STATUS_RINGING" },
    { no: 181, name: "SIP_STATUS_CALL_IS_FORWARDED" },
    { no: 182, name: "SIP_STATUS_QUEUED" },
    { no: 183, name: "SIP_STATUS_SESSION_PROGRESS" },
    { no: 200, name: "SIP_STATUS_OK" },
    { no: 202, name: "SIP_STATUS_ACCEPTED" },
    { no: 301, name: "SIP_STATUS_MOVED_PERMANENTLY" },
    { no: 302, name: "SIP_STATUS_MOVED_TEMPORARILY" },
    { no: 305, name: "SIP_STATUS_USE_PROXY" },
    { no: 400, name: "SIP_STATUS_BAD_REQUEST" },
    { no: 401, name: "SIP_STATUS_UNAUTHORIZED" },
    { no: 402, name: "SIP_STATUS_PAYMENT_REQUIRED" },
    { no: 403, name: "SIP_STATUS_FORBIDDEN" },
    { no: 404, name: "SIP_STATUS_NOTFOUND" },
    { no: 405, name: "SIP_STATUS_METHOD_NOT_ALLOWED" },
    { no: 406, name: "SIP_STATUS_NOT_ACCEPTABLE" },
    { no: 407, name: "SIP_STATUS_PROXY_AUTH_REQUIRED" },
    { no: 408, name: "SIP_STATUS_REQUEST_TIMEOUT" },
    { no: 409, name: "SIP_STATUS_CONFLICT" },
    { no: 410, name: "SIP_STATUS_GONE" },
    { no: 413, name: "SIP_STATUS_REQUEST_ENTITY_TOO_LARGE" },
    { no: 414, name: "SIP_STATUS_REQUEST_URI_TOO_LONG" },
    { no: 415, name: "SIP_STATUS_UNSUPPORTED_MEDIA_TYPE" },
    { no: 416, name: "SIP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE" },
    { no: 420, name: "SIP_STATUS_BAD_EXTENSION" },
    { no: 421, name: "SIP_STATUS_EXTENSION_REQUIRED" },
    { no: 423, name: "SIP_STATUS_INTERVAL_TOO_BRIEF" },
    { no: 480, name: "SIP_STATUS_TEMPORARILY_UNAVAILABLE" },
    { no: 481, name: "SIP_STATUS_CALL_TRANSACTION_DOES_NOT_EXISTS" },
    { no: 482, name: "SIP_STATUS_LOOP_DETECTED" },
    { no: 483, name: "SIP_STATUS_TOO_MANY_HOPS" },
    { no: 484, name: "SIP_STATUS_ADDRESS_INCOMPLETE" },
    { no: 485, name: "SIP_STATUS_AMBIGUOUS" },
    { no: 486, name: "SIP_STATUS_BUSY_HERE" },
    { no: 487, name: "SIP_STATUS_REQUEST_TERMINATED" },
    { no: 488, name: "SIP_STATUS_NOT_ACCEPTABLE_HERE" },
    { no: 500, name: "SIP_STATUS_INTERNAL_SERVER_ERROR" },
    { no: 501, name: "SIP_STATUS_NOT_IMPLEMENTED" },
    { no: 502, name: "SIP_STATUS_BAD_GATEWAY" },
    { no: 503, name: "SIP_STATUS_SERVICE_UNAVAILABLE" },
    { no: 504, name: "SIP_STATUS_GATEWAY_TIMEOUT" },
    { no: 505, name: "SIP_STATUS_VERSION_NOT_SUPPORTED" },
    { no: 513, name: "SIP_STATUS_MESSAGE_TOO_LARGE" },
    { no: 600, name: "SIP_STATUS_GLOBAL_BUSY_EVERYWHERE" },
    { no: 603, name: "SIP_STATUS_GLOBAL_DECLINE" },
    { no: 604, name: "SIP_STATUS_GLOBAL_DOES_NOT_EXIST_ANYWHERE" },
    { no: 606, name: "SIP_STATUS_GLOBAL_NOT_ACCEPTABLE" }
  ]
);
const SIPTransport = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPTransport",
  [
    { no: 0, name: "SIP_TRANSPORT_AUTO" },
    { no: 1, name: "SIP_TRANSPORT_UDP" },
    { no: 2, name: "SIP_TRANSPORT_TCP" },
    { no: 3, name: "SIP_TRANSPORT_TLS" }
  ]
);
const SIPHeaderOptions = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPHeaderOptions",
  [
    { no: 0, name: "SIP_NO_HEADERS" },
    { no: 1, name: "SIP_X_HEADERS" },
    { no: 2, name: "SIP_ALL_HEADERS" }
  ]
);
const SIPMediaEncryption = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPMediaEncryption",
  [
    { no: 0, name: "SIP_MEDIA_ENCRYPT_DISABLE" },
    { no: 1, name: "SIP_MEDIA_ENCRYPT_ALLOW" },
    { no: 2, name: "SIP_MEDIA_ENCRYPT_REQUIRE" }
  ]
);
const SIPCallStatus = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPCallStatus",
  [
    { no: 0, name: "SCS_CALL_INCOMING" },
    { no: 1, name: "SCS_PARTICIPANT_JOINED" },
    { no: 2, name: "SCS_ACTIVE" },
    { no: 3, name: "SCS_DISCONNECTED" },
    { no: 4, name: "SCS_ERROR" }
  ]
);
const SIPFeature = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPFeature",
  [
    { no: 0, name: "NONE" },
    { no: 1, name: "KRISP_ENABLED" }
  ]
);
const SIPCallDirection = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPCallDirection",
  [
    { no: 0, name: "SCD_UNKNOWN" },
    { no: 1, name: "SCD_INBOUND" },
    { no: 2, name: "SCD_OUTBOUND" }
  ]
);
const SIPStatus = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPStatus",
  () => [
    { no: 1, name: "code", kind: "enum", T: protobuf.proto3.getEnumType(SIPStatusCode) },
    {
      no: 2,
      name: "status",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const CreateSIPTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateSIPTrunkRequest",
  () => [
    { no: 1, name: "inbound_addresses", kind: "scalar", T: 9, repeated: true },
    {
      no: 2,
      name: "outbound_address",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "outbound_number",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "inbound_numbers_regex", kind: "scalar", T: 9, repeated: true },
    { no: 9, name: "inbound_numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 5,
      name: "inbound_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "inbound_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "outbound_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "outbound_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 10,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPTrunkInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPTrunkInfo",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 14, name: "kind", kind: "enum", T: protobuf.proto3.getEnumType(SIPTrunkInfo_TrunkKind) },
    { no: 2, name: "inbound_addresses", kind: "scalar", T: 9, repeated: true },
    {
      no: 3,
      name: "outbound_address",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "outbound_number",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 13, name: "transport", kind: "enum", T: protobuf.proto3.getEnumType(SIPTransport) },
    { no: 5, name: "inbound_numbers_regex", kind: "scalar", T: 9, repeated: true },
    { no: 10, name: "inbound_numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 6,
      name: "inbound_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "inbound_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "outbound_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "outbound_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 12,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPTrunkInfo_TrunkKind = /* @__PURE__ */ protobuf.proto3.makeEnum(
  "livekit.SIPTrunkInfo.TrunkKind",
  [
    { no: 0, name: "TRUNK_LEGACY" },
    { no: 1, name: "TRUNK_INBOUND" },
    { no: 2, name: "TRUNK_OUTBOUND" }
  ]
);
const CreateSIPInboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateSIPInboundTrunkRequest",
  () => [
    { no: 1, name: "trunk", kind: "message", T: SIPInboundTrunkInfo }
  ]
);
const UpdateSIPInboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSIPInboundTrunkRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "replace", kind: "message", T: SIPInboundTrunkInfo, oneof: "action" },
    { no: 3, name: "update", kind: "message", T: SIPInboundTrunkUpdate, oneof: "action" }
  ]
);
const SIPInboundTrunkInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPInboundTrunkInfo",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "numbers", kind: "scalar", T: 9, repeated: true },
    { no: 5, name: "allowed_addresses", kind: "scalar", T: 9, repeated: true },
    { no: 6, name: "allowed_numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 7,
      name: "auth_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "auth_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 9, name: "headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 10, name: "headers_to_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 14, name: "attributes_to_headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 15, name: "include_headers", kind: "enum", T: protobuf.proto3.getEnumType(SIPHeaderOptions) },
    { no: 11, name: "ringing_timeout", kind: "message", T: protobuf.Duration },
    { no: 12, name: "max_call_duration", kind: "message", T: protobuf.Duration },
    {
      no: 13,
      name: "krisp_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 16, name: "media_encryption", kind: "enum", T: protobuf.proto3.getEnumType(SIPMediaEncryption) }
  ]
);
const SIPInboundTrunkUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPInboundTrunkUpdate",
  () => [
    { no: 1, name: "numbers", kind: "message", T: ListUpdate },
    { no: 2, name: "allowed_addresses", kind: "message", T: ListUpdate },
    { no: 3, name: "allowed_numbers", kind: "message", T: ListUpdate },
    { no: 4, name: "auth_username", kind: "scalar", T: 9, opt: true },
    { no: 5, name: "auth_password", kind: "scalar", T: 9, opt: true },
    { no: 6, name: "name", kind: "scalar", T: 9, opt: true },
    { no: 7, name: "metadata", kind: "scalar", T: 9, opt: true }
  ]
);
const CreateSIPOutboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateSIPOutboundTrunkRequest",
  () => [
    { no: 1, name: "trunk", kind: "message", T: SIPOutboundTrunkInfo }
  ]
);
const UpdateSIPOutboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSIPOutboundTrunkRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "replace", kind: "message", T: SIPOutboundTrunkInfo, oneof: "action" },
    { no: 3, name: "update", kind: "message", T: SIPOutboundTrunkUpdate, oneof: "action" }
  ]
);
const SIPOutboundTrunkInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPOutboundTrunkInfo",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "address",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "transport", kind: "enum", T: protobuf.proto3.getEnumType(SIPTransport) },
    { no: 6, name: "numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 7,
      name: "auth_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "auth_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 9, name: "headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 10, name: "headers_to_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 11, name: "attributes_to_headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 12, name: "include_headers", kind: "enum", T: protobuf.proto3.getEnumType(SIPHeaderOptions) },
    { no: 13, name: "media_encryption", kind: "enum", T: protobuf.proto3.getEnumType(SIPMediaEncryption) }
  ]
);
const SIPOutboundTrunkUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPOutboundTrunkUpdate",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9, opt: true },
    { no: 2, name: "transport", kind: "enum", T: protobuf.proto3.getEnumType(SIPTransport), opt: true },
    { no: 3, name: "numbers", kind: "message", T: ListUpdate },
    { no: 4, name: "auth_username", kind: "scalar", T: 9, opt: true },
    { no: 5, name: "auth_password", kind: "scalar", T: 9, opt: true },
    { no: 6, name: "name", kind: "scalar", T: 9, opt: true },
    { no: 7, name: "metadata", kind: "scalar", T: 9, opt: true }
  ]
);
const GetSIPInboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.GetSIPInboundTrunkRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const GetSIPInboundTrunkResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.GetSIPInboundTrunkResponse",
  () => [
    { no: 1, name: "trunk", kind: "message", T: SIPInboundTrunkInfo }
  ]
);
const GetSIPOutboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.GetSIPOutboundTrunkRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const GetSIPOutboundTrunkResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.GetSIPOutboundTrunkResponse",
  () => [
    { no: 1, name: "trunk", kind: "message", T: SIPOutboundTrunkInfo }
  ]
);
const ListSIPTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPTrunkRequest",
  () => [
    { no: 1, name: "page", kind: "message", T: Pagination }
  ]
);
const ListSIPTrunkResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPTrunkResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: SIPTrunkInfo, repeated: true }
  ]
);
const ListSIPInboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPInboundTrunkRequest",
  () => [
    { no: 3, name: "page", kind: "message", T: Pagination },
    { no: 1, name: "trunk_ids", kind: "scalar", T: 9, repeated: true },
    { no: 2, name: "numbers", kind: "scalar", T: 9, repeated: true }
  ]
);
const ListSIPInboundTrunkResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPInboundTrunkResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: SIPInboundTrunkInfo, repeated: true }
  ]
);
const ListSIPOutboundTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPOutboundTrunkRequest",
  () => [
    { no: 3, name: "page", kind: "message", T: Pagination },
    { no: 1, name: "trunk_ids", kind: "scalar", T: 9, repeated: true },
    { no: 2, name: "numbers", kind: "scalar", T: 9, repeated: true }
  ]
);
const ListSIPOutboundTrunkResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPOutboundTrunkResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: SIPOutboundTrunkInfo, repeated: true }
  ]
);
const DeleteSIPTrunkRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteSIPTrunkRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPDispatchRuleDirect = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRuleDirect",
  () => [
    {
      no: 1,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "pin",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPDispatchRuleIndividual = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRuleIndividual",
  () => [
    {
      no: 1,
      name: "room_prefix",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "pin",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPDispatchRuleCallee = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRuleCallee",
  () => [
    {
      no: 1,
      name: "room_prefix",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "pin",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "randomize",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const SIPDispatchRule = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRule",
  () => [
    { no: 1, name: "dispatch_rule_direct", kind: "message", T: SIPDispatchRuleDirect, oneof: "rule" },
    { no: 2, name: "dispatch_rule_individual", kind: "message", T: SIPDispatchRuleIndividual, oneof: "rule" },
    { no: 3, name: "dispatch_rule_callee", kind: "message", T: SIPDispatchRuleCallee, oneof: "rule" }
  ]
);
const CreateSIPDispatchRuleRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateSIPDispatchRuleRequest",
  () => [
    { no: 10, name: "dispatch_rule", kind: "message", T: SIPDispatchRuleInfo },
    { no: 1, name: "rule", kind: "message", T: SIPDispatchRule },
    { no: 2, name: "trunk_ids", kind: "scalar", T: 9, repeated: true },
    {
      no: 3,
      name: "hide_phone_number",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 6, name: "inbound_numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 4,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 7, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    {
      no: 8,
      name: "room_preset",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 9, name: "room_config", kind: "message", T: RoomConfiguration }
  ]
);
const UpdateSIPDispatchRuleRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.UpdateSIPDispatchRuleRequest",
  () => [
    {
      no: 1,
      name: "sip_dispatch_rule_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "replace", kind: "message", T: SIPDispatchRuleInfo, oneof: "action" },
    { no: 3, name: "update", kind: "message", T: SIPDispatchRuleUpdate, oneof: "action" }
  ]
);
const SIPDispatchRuleInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRuleInfo",
  () => [
    {
      no: 1,
      name: "sip_dispatch_rule_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "rule", kind: "message", T: SIPDispatchRule },
    { no: 3, name: "trunk_ids", kind: "scalar", T: 9, repeated: true },
    {
      no: 4,
      name: "hide_phone_number",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 7, name: "inbound_numbers", kind: "scalar", T: 9, repeated: true },
    {
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 8, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    {
      no: 9,
      name: "room_preset",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 10, name: "room_config", kind: "message", T: RoomConfiguration },
    {
      no: 11,
      name: "krisp_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 12, name: "media_encryption", kind: "enum", T: protobuf.proto3.getEnumType(SIPMediaEncryption) }
  ]
);
const SIPDispatchRuleUpdate = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPDispatchRuleUpdate",
  () => [
    { no: 1, name: "trunk_ids", kind: "message", T: ListUpdate },
    { no: 2, name: "rule", kind: "message", T: SIPDispatchRule },
    { no: 3, name: "name", kind: "scalar", T: 9, opt: true },
    { no: 4, name: "metadata", kind: "scalar", T: 9, opt: true },
    { no: 5, name: "attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ]
);
const ListSIPDispatchRuleRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPDispatchRuleRequest",
  () => [
    { no: 3, name: "page", kind: "message", T: Pagination },
    { no: 1, name: "dispatch_rule_ids", kind: "scalar", T: 9, repeated: true },
    { no: 2, name: "trunk_ids", kind: "scalar", T: 9, repeated: true }
  ]
);
const ListSIPDispatchRuleResponse = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.ListSIPDispatchRuleResponse",
  () => [
    { no: 1, name: "items", kind: "message", T: SIPDispatchRuleInfo, repeated: true }
  ]
);
const DeleteSIPDispatchRuleRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.DeleteSIPDispatchRuleRequest",
  () => [
    {
      no: 1,
      name: "sip_dispatch_rule_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPOutboundConfig = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPOutboundConfig",
  () => [
    {
      no: 1,
      name: "hostname",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "transport", kind: "enum", T: protobuf.proto3.getEnumType(SIPTransport) },
    {
      no: 3,
      name: "auth_username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "auth_password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "headers_to_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 6, name: "attributes_to_headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ]
);
const CreateSIPParticipantRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.CreateSIPParticipantRequest",
  () => [
    {
      no: 1,
      name: "sip_trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 20, name: "trunk", kind: "message", T: SIPOutboundConfig },
    {
      no: 2,
      name: "sip_call_to",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 15,
      name: "sip_number",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "participant_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "participant_metadata",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 9, name: "participant_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    {
      no: 5,
      name: "dtmf",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "play_ringtone",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 13,
      name: "play_dialtone",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "hide_phone_number",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 16, name: "headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 17, name: "include_headers", kind: "enum", T: protobuf.proto3.getEnumType(SIPHeaderOptions) },
    { no: 11, name: "ringing_timeout", kind: "message", T: protobuf.Duration },
    { no: 12, name: "max_call_duration", kind: "message", T: protobuf.Duration },
    {
      no: 14,
      name: "krisp_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 18, name: "media_encryption", kind: "enum", T: protobuf.proto3.getEnumType(SIPMediaEncryption) },
    {
      no: 19,
      name: "wait_until_answered",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
const SIPParticipantInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPParticipantInfo",
  () => [
    {
      no: 1,
      name: "participant_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "sip_call_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const TransferSIPParticipantRequest = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.TransferSIPParticipantRequest",
  () => [
    {
      no: 1,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "transfer_to",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "play_dialtone",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 5, name: "headers", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } }
  ]
);
const SIPCallInfo = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPCallInfo",
  () => [
    {
      no: 1,
      name: "call_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "trunk_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 16,
      name: "dispatch_rule_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 17,
      name: "region",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "room_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "room_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "participant_identity",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 18, name: "participant_attributes", kind: "map", K: 9, V: {
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    } },
    { no: 6, name: "from_uri", kind: "message", T: SIPUri },
    { no: 7, name: "to_uri", kind: "message", T: SIPUri },
    {
      no: 9,
      name: "created_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 10,
      name: "started_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 11,
      name: "ended_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 14, name: "enabled_features", kind: "enum", T: protobuf.proto3.getEnumType(SIPFeature), repeated: true },
    { no: 15, name: "call_direction", kind: "enum", T: protobuf.proto3.getEnumType(SIPCallDirection) },
    { no: 8, name: "call_status", kind: "enum", T: protobuf.proto3.getEnumType(SIPCallStatus) },
    {
      no: 22,
      name: "created_at_ns",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 23,
      name: "started_at_ns",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 24,
      name: "ended_at_ns",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    { no: 12, name: "disconnect_reason", kind: "enum", T: protobuf.proto3.getEnumType(DisconnectReason) },
    {
      no: 13,
      name: "error",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 19, name: "call_status_code", kind: "message", T: SIPStatus },
    {
      no: 20,
      name: "audio_codec",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 21,
      name: "media_encryption",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
const SIPUri = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.SIPUri",
  () => [
    {
      no: 1,
      name: "user",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "host",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "ip",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "port",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 5, name: "transport", kind: "enum", T: protobuf.proto3.getEnumType(SIPTransport) }
  ]
);

const WebhookEvent = /* @__PURE__ */ protobuf.proto3.makeMessageType(
  "livekit.WebhookEvent",
  () => [
    {
      no: 1,
      name: "event",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "room", kind: "message", T: Room },
    { no: 3, name: "participant", kind: "message", T: ParticipantInfo },
    { no: 9, name: "egress_info", kind: "message", T: EgressInfo },
    { no: 10, name: "ingress_info", kind: "message", T: IngressInfo },
    { no: 8, name: "track", kind: "message", T: TrackInfo },
    {
      no: 6,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "created_at",
      kind: "scalar",
      T: 3
      /* ScalarType.INT64 */
    },
    {
      no: 11,
      name: "num_dropped",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);

const version = "1.36.1";

exports.protoInt64 = protobuf.protoInt64;
exports.ActiveSpeakerUpdate = ActiveSpeakerUpdate;
exports.AddTrackRequest = AddTrackRequest;
exports.AgentDispatch = AgentDispatch;
exports.AgentDispatchState = AgentDispatchState;
exports.AliOSSUpload = AliOSSUpload;
exports.AudioCodec = AudioCodec;
exports.AudioMixing = AudioMixing;
exports.AudioTrackFeature = AudioTrackFeature;
exports.AutoParticipantEgress = AutoParticipantEgress;
exports.AutoTrackEgress = AutoTrackEgress;
exports.AvailabilityRequest = AvailabilityRequest;
exports.AvailabilityResponse = AvailabilityResponse;
exports.AzureBlobUpload = AzureBlobUpload;
exports.BackupCodecPolicy = BackupCodecPolicy;
exports.CandidateProtocol = CandidateProtocol;
exports.ChatMessage = ChatMessage;
exports.ClientConfigSetting = ClientConfigSetting;
exports.ClientConfiguration = ClientConfiguration;
exports.ClientInfo = ClientInfo;
exports.ClientInfo_SDK = ClientInfo_SDK;
exports.Codec = Codec;
exports.ConnectionQuality = ConnectionQuality;
exports.ConnectionQualityInfo = ConnectionQualityInfo;
exports.ConnectionQualityUpdate = ConnectionQualityUpdate;
exports.CreateAgentDispatchRequest = CreateAgentDispatchRequest;
exports.CreateIngressRequest = CreateIngressRequest;
exports.CreateRoomRequest = CreateRoomRequest;
exports.CreateSIPDispatchRuleRequest = CreateSIPDispatchRuleRequest;
exports.CreateSIPInboundTrunkRequest = CreateSIPInboundTrunkRequest;
exports.CreateSIPOutboundTrunkRequest = CreateSIPOutboundTrunkRequest;
exports.CreateSIPParticipantRequest = CreateSIPParticipantRequest;
exports.CreateSIPTrunkRequest = CreateSIPTrunkRequest;
exports.DataChannelInfo = DataChannelInfo;
exports.DataPacket = DataPacket;
exports.DataPacket_Kind = DataPacket_Kind;
exports.DataStream = DataStream;
exports.DataStream_ByteHeader = DataStream_ByteHeader;
exports.DataStream_Chunk = DataStream_Chunk;
exports.DataStream_Header = DataStream_Header;
exports.DataStream_OperationType = DataStream_OperationType;
exports.DataStream_TextHeader = DataStream_TextHeader;
exports.DataStream_Trailer = DataStream_Trailer;
exports.DeleteAgentDispatchRequest = DeleteAgentDispatchRequest;
exports.DeleteIngressRequest = DeleteIngressRequest;
exports.DeleteRoomRequest = DeleteRoomRequest;
exports.DeleteRoomResponse = DeleteRoomResponse;
exports.DeleteSIPDispatchRuleRequest = DeleteSIPDispatchRuleRequest;
exports.DeleteSIPTrunkRequest = DeleteSIPTrunkRequest;
exports.DirectFileOutput = DirectFileOutput;
exports.DisabledCodecs = DisabledCodecs;
exports.DisconnectReason = DisconnectReason;
exports.EgressInfo = EgressInfo;
exports.EgressSourceType = EgressSourceType;
exports.EgressStatus = EgressStatus;
exports.EncodedFileOutput = EncodedFileOutput;
exports.EncodedFileType = EncodedFileType;
exports.EncodingOptions = EncodingOptions;
exports.EncodingOptionsPreset = EncodingOptionsPreset;
exports.Encryption = Encryption;
exports.Encryption_Type = Encryption_Type;
exports.EventMetric = EventMetric;
exports.FileInfo = FileInfo;
exports.ForwardParticipantRequest = ForwardParticipantRequest;
exports.ForwardParticipantResponse = ForwardParticipantResponse;
exports.GCPUpload = GCPUpload;
exports.GetSIPInboundTrunkRequest = GetSIPInboundTrunkRequest;
exports.GetSIPInboundTrunkResponse = GetSIPInboundTrunkResponse;
exports.GetSIPOutboundTrunkRequest = GetSIPOutboundTrunkRequest;
exports.GetSIPOutboundTrunkResponse = GetSIPOutboundTrunkResponse;
exports.ICEServer = ICEServer;
exports.ImageCodec = ImageCodec;
exports.ImageFileSuffix = ImageFileSuffix;
exports.ImageOutput = ImageOutput;
exports.ImagesInfo = ImagesInfo;
exports.IngressAudioEncodingOptions = IngressAudioEncodingOptions;
exports.IngressAudioEncodingPreset = IngressAudioEncodingPreset;
exports.IngressAudioOptions = IngressAudioOptions;
exports.IngressInfo = IngressInfo;
exports.IngressInput = IngressInput;
exports.IngressState = IngressState;
exports.IngressState_Status = IngressState_Status;
exports.IngressVideoEncodingOptions = IngressVideoEncodingOptions;
exports.IngressVideoEncodingPreset = IngressVideoEncodingPreset;
exports.IngressVideoOptions = IngressVideoOptions;
exports.InputAudioState = InputAudioState;
exports.InputVideoState = InputVideoState;
exports.Job = Job;
exports.JobAssignment = JobAssignment;
exports.JobState = JobState;
exports.JobStatus = JobStatus;
exports.JobTermination = JobTermination;
exports.JobType = JobType;
exports.JoinResponse = JoinResponse;
exports.LeaveRequest = LeaveRequest;
exports.LeaveRequest_Action = LeaveRequest_Action;
exports.ListAgentDispatchRequest = ListAgentDispatchRequest;
exports.ListAgentDispatchResponse = ListAgentDispatchResponse;
exports.ListEgressRequest = ListEgressRequest;
exports.ListEgressResponse = ListEgressResponse;
exports.ListIngressRequest = ListIngressRequest;
exports.ListIngressResponse = ListIngressResponse;
exports.ListParticipantsRequest = ListParticipantsRequest;
exports.ListParticipantsResponse = ListParticipantsResponse;
exports.ListRoomsRequest = ListRoomsRequest;
exports.ListRoomsResponse = ListRoomsResponse;
exports.ListSIPDispatchRuleRequest = ListSIPDispatchRuleRequest;
exports.ListSIPDispatchRuleResponse = ListSIPDispatchRuleResponse;
exports.ListSIPInboundTrunkRequest = ListSIPInboundTrunkRequest;
exports.ListSIPInboundTrunkResponse = ListSIPInboundTrunkResponse;
exports.ListSIPOutboundTrunkRequest = ListSIPOutboundTrunkRequest;
exports.ListSIPOutboundTrunkResponse = ListSIPOutboundTrunkResponse;
exports.ListSIPTrunkRequest = ListSIPTrunkRequest;
exports.ListSIPTrunkResponse = ListSIPTrunkResponse;
exports.ListUpdate = ListUpdate;
exports.MetricLabel = MetricLabel;
exports.MetricSample = MetricSample;
exports.MetricsBatch = MetricsBatch;
exports.MigrateJobRequest = MigrateJobRequest;
exports.MuteRoomTrackRequest = MuteRoomTrackRequest;
exports.MuteRoomTrackResponse = MuteRoomTrackResponse;
exports.MuteTrackRequest = MuteTrackRequest;
exports.Pagination = Pagination;
exports.ParticipantEgressRequest = ParticipantEgressRequest;
exports.ParticipantInfo = ParticipantInfo;
exports.ParticipantInfo_Kind = ParticipantInfo_Kind;
exports.ParticipantInfo_KindDetail = ParticipantInfo_KindDetail;
exports.ParticipantInfo_State = ParticipantInfo_State;
exports.ParticipantPermission = ParticipantPermission;
exports.ParticipantTracks = ParticipantTracks;
exports.ParticipantUpdate = ParticipantUpdate;
exports.Ping = Ping;
exports.PlayoutDelay = PlayoutDelay;
exports.Pong = Pong;
exports.ProxyConfig = ProxyConfig;
exports.RTCPSenderReportState = RTCPSenderReportState;
exports.RTPDrift = RTPDrift;
exports.RTPForwarderState = RTPForwarderState;
exports.RTPMungerState = RTPMungerState;
exports.RTPStats = RTPStats;
exports.ReconnectReason = ReconnectReason;
exports.ReconnectResponse = ReconnectResponse;
exports.RegionInfo = RegionInfo;
exports.RegionSettings = RegionSettings;
exports.RegisterWorkerRequest = RegisterWorkerRequest;
exports.RegisterWorkerResponse = RegisterWorkerResponse;
exports.RemoveParticipantResponse = RemoveParticipantResponse;
exports.RequestResponse = RequestResponse;
exports.RequestResponse_Reason = RequestResponse_Reason;
exports.Room = Room;
exports.RoomAgent = RoomAgent;
exports.RoomAgentDispatch = RoomAgentDispatch;
exports.RoomCompositeEgressRequest = RoomCompositeEgressRequest;
exports.RoomConfiguration = RoomConfiguration;
exports.RoomEgress = RoomEgress;
exports.RoomParticipantIdentity = RoomParticipantIdentity;
exports.RoomUpdate = RoomUpdate;
exports.RpcAck = RpcAck;
exports.RpcError = RpcError;
exports.RpcRequest = RpcRequest;
exports.RpcResponse = RpcResponse;
exports.S3Upload = S3Upload;
exports.SIPCallDirection = SIPCallDirection;
exports.SIPCallInfo = SIPCallInfo;
exports.SIPCallStatus = SIPCallStatus;
exports.SIPDispatchRule = SIPDispatchRule;
exports.SIPDispatchRuleCallee = SIPDispatchRuleCallee;
exports.SIPDispatchRuleDirect = SIPDispatchRuleDirect;
exports.SIPDispatchRuleIndividual = SIPDispatchRuleIndividual;
exports.SIPDispatchRuleInfo = SIPDispatchRuleInfo;
exports.SIPDispatchRuleUpdate = SIPDispatchRuleUpdate;
exports.SIPFeature = SIPFeature;
exports.SIPHeaderOptions = SIPHeaderOptions;
exports.SIPInboundTrunkInfo = SIPInboundTrunkInfo;
exports.SIPInboundTrunkUpdate = SIPInboundTrunkUpdate;
exports.SIPMediaEncryption = SIPMediaEncryption;
exports.SIPOutboundConfig = SIPOutboundConfig;
exports.SIPOutboundTrunkInfo = SIPOutboundTrunkInfo;
exports.SIPOutboundTrunkUpdate = SIPOutboundTrunkUpdate;
exports.SIPParticipantInfo = SIPParticipantInfo;
exports.SIPStatus = SIPStatus;
exports.SIPStatusCode = SIPStatusCode;
exports.SIPTransport = SIPTransport;
exports.SIPTrunkInfo = SIPTrunkInfo;
exports.SIPTrunkInfo_TrunkKind = SIPTrunkInfo_TrunkKind;
exports.SIPUri = SIPUri;
exports.SegmentedFileOutput = SegmentedFileOutput;
exports.SegmentedFileProtocol = SegmentedFileProtocol;
exports.SegmentedFileSuffix = SegmentedFileSuffix;
exports.SegmentsInfo = SegmentsInfo;
exports.SendDataRequest = SendDataRequest;
exports.SendDataResponse = SendDataResponse;
exports.ServerInfo = ServerInfo;
exports.ServerInfo_Edition = ServerInfo_Edition;
exports.ServerMessage = ServerMessage;
exports.SessionDescription = SessionDescription;
exports.SignalRequest = SignalRequest;
exports.SignalResponse = SignalResponse;
exports.SignalTarget = SignalTarget;
exports.SimulateJobRequest = SimulateJobRequest;
exports.SimulateScenario = SimulateScenario;
exports.SimulcastCodec = SimulcastCodec;
exports.SimulcastCodecInfo = SimulcastCodecInfo;
exports.SipDTMF = SipDTMF;
exports.SpeakerInfo = SpeakerInfo;
exports.SpeakersChanged = SpeakersChanged;
exports.StopEgressRequest = StopEgressRequest;
exports.StreamInfo = StreamInfo;
exports.StreamInfoList = StreamInfoList;
exports.StreamInfo_Status = StreamInfo_Status;
exports.StreamOutput = StreamOutput;
exports.StreamProtocol = StreamProtocol;
exports.StreamState = StreamState;
exports.StreamStateInfo = StreamStateInfo;
exports.StreamStateUpdate = StreamStateUpdate;
exports.SubscribedCodec = SubscribedCodec;
exports.SubscribedQuality = SubscribedQuality;
exports.SubscribedQualityUpdate = SubscribedQualityUpdate;
exports.SubscriptionError = SubscriptionError;
exports.SubscriptionPermission = SubscriptionPermission;
exports.SubscriptionPermissionUpdate = SubscriptionPermissionUpdate;
exports.SubscriptionResponse = SubscriptionResponse;
exports.SyncState = SyncState;
exports.TimeSeriesMetric = TimeSeriesMetric;
exports.TimedVersion = TimedVersion;
exports.TrackCompositeEgressRequest = TrackCompositeEgressRequest;
exports.TrackEgressRequest = TrackEgressRequest;
exports.TrackInfo = TrackInfo;
exports.TrackPermission = TrackPermission;
exports.TrackPublishedResponse = TrackPublishedResponse;
exports.TrackSource = TrackSource;
exports.TrackSubscribed = TrackSubscribed;
exports.TrackType = TrackType;
exports.TrackUnpublishedResponse = TrackUnpublishedResponse;
exports.Transcription = Transcription;
exports.TranscriptionSegment = TranscriptionSegment;
exports.TransferSIPParticipantRequest = TransferSIPParticipantRequest;
exports.TrickleRequest = TrickleRequest;
exports.UpdateIngressRequest = UpdateIngressRequest;
exports.UpdateJobStatus = UpdateJobStatus;
exports.UpdateLayoutRequest = UpdateLayoutRequest;
exports.UpdateLocalAudioTrack = UpdateLocalAudioTrack;
exports.UpdateLocalVideoTrack = UpdateLocalVideoTrack;
exports.UpdateParticipantMetadata = UpdateParticipantMetadata;
exports.UpdateParticipantRequest = UpdateParticipantRequest;
exports.UpdateRoomMetadataRequest = UpdateRoomMetadataRequest;
exports.UpdateSIPDispatchRuleRequest = UpdateSIPDispatchRuleRequest;
exports.UpdateSIPInboundTrunkRequest = UpdateSIPInboundTrunkRequest;
exports.UpdateSIPOutboundTrunkRequest = UpdateSIPOutboundTrunkRequest;
exports.UpdateStreamRequest = UpdateStreamRequest;
exports.UpdateSubscription = UpdateSubscription;
exports.UpdateSubscriptionsRequest = UpdateSubscriptionsRequest;
exports.UpdateSubscriptionsResponse = UpdateSubscriptionsResponse;
exports.UpdateTrackSettings = UpdateTrackSettings;
exports.UpdateVideoLayers = UpdateVideoLayers;
exports.UpdateWorkerStatus = UpdateWorkerStatus;
exports.UserPacket = UserPacket;
exports.VP8MungerState = VP8MungerState;
exports.VideoCodec = VideoCodec;
exports.VideoConfiguration = VideoConfiguration;
exports.VideoLayer = VideoLayer;
exports.VideoQuality = VideoQuality;
exports.WebEgressRequest = WebEgressRequest;
exports.WebhookEvent = WebhookEvent;
exports.WorkerMessage = WorkerMessage;
exports.WorkerPing = WorkerPing;
exports.WorkerPong = WorkerPong;
exports.WorkerStatus = WorkerStatus;
exports.version = version;
//# sourceMappingURL=index.cjs.map
