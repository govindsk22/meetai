// Copyright 2023 LiveKit, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "target=dts+js"
// @generated from file livekit_agent.proto (package livekit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ParticipantInfo, ParticipantPermission, Room, ServerInfo } from "./livekit_models_pb.js";

/**
 * @generated from enum livekit.JobType
 */
export const JobType = /*@__PURE__*/ proto3.makeEnum(
  "livekit.JobType",
  [
    {no: 0, name: "JT_ROOM"},
    {no: 1, name: "JT_PUBLISHER"},
    {no: 2, name: "JT_PARTICIPANT"},
  ],
);

/**
 * @generated from enum livekit.WorkerStatus
 */
export const WorkerStatus = /*@__PURE__*/ proto3.makeEnum(
  "livekit.WorkerStatus",
  [
    {no: 0, name: "WS_AVAILABLE"},
    {no: 1, name: "WS_FULL"},
  ],
);

/**
 * @generated from enum livekit.JobStatus
 */
export const JobStatus = /*@__PURE__*/ proto3.makeEnum(
  "livekit.JobStatus",
  [
    {no: 0, name: "JS_PENDING"},
    {no: 1, name: "JS_RUNNING"},
    {no: 2, name: "JS_SUCCESS"},
    {no: 3, name: "JS_FAILED"},
  ],
);

/**
 * @generated from message livekit.Job
 */
export const Job = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.Job",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "dispatch_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(JobType) },
    { no: 3, name: "room", kind: "message", T: Room },
    { no: 4, name: "participant", kind: "message", T: ParticipantInfo, opt: true },
    { no: 5, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "agent_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "state", kind: "message", T: JobState },
  ],
);

/**
 * @generated from message livekit.JobState
 */
export const JobState = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.JobState",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(JobStatus) },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "started_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "ended_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "updated_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "participant_identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * from Worker to Server
 *
 * @generated from message livekit.WorkerMessage
 */
export const WorkerMessage = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.WorkerMessage",
  () => [
    { no: 1, name: "register", kind: "message", T: RegisterWorkerRequest, oneof: "message" },
    { no: 2, name: "availability", kind: "message", T: AvailabilityResponse, oneof: "message" },
    { no: 3, name: "update_worker", kind: "message", T: UpdateWorkerStatus, oneof: "message" },
    { no: 4, name: "update_job", kind: "message", T: UpdateJobStatus, oneof: "message" },
    { no: 5, name: "ping", kind: "message", T: WorkerPing, oneof: "message" },
    { no: 6, name: "simulate_job", kind: "message", T: SimulateJobRequest, oneof: "message" },
    { no: 7, name: "migrate_job", kind: "message", T: MigrateJobRequest, oneof: "message" },
  ],
);

/**
 * from Server to Worker
 *
 * @generated from message livekit.ServerMessage
 */
export const ServerMessage = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.ServerMessage",
  () => [
    { no: 1, name: "register", kind: "message", T: RegisterWorkerResponse, oneof: "message" },
    { no: 2, name: "availability", kind: "message", T: AvailabilityRequest, oneof: "message" },
    { no: 3, name: "assignment", kind: "message", T: JobAssignment, oneof: "message" },
    { no: 5, name: "termination", kind: "message", T: JobTermination, oneof: "message" },
    { no: 4, name: "pong", kind: "message", T: WorkerPong, oneof: "message" },
  ],
);

/**
 * @generated from message livekit.SimulateJobRequest
 */
export const SimulateJobRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.SimulateJobRequest",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(JobType) },
    { no: 2, name: "room", kind: "message", T: Room },
    { no: 3, name: "participant", kind: "message", T: ParticipantInfo },
  ],
);

/**
 * @generated from message livekit.WorkerPing
 */
export const WorkerPing = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.WorkerPing",
  () => [
    { no: 1, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message livekit.WorkerPong
 */
export const WorkerPong = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.WorkerPong",
  () => [
    { no: 1, name: "last_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message livekit.RegisterWorkerRequest
 */
export const RegisterWorkerRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RegisterWorkerRequest",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(JobType) },
    { no: 8, name: "agent_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ping_interval", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "allowed_permissions", kind: "message", T: ParticipantPermission },
  ],
);

/**
 * @generated from message livekit.RegisterWorkerResponse
 */
export const RegisterWorkerResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.RegisterWorkerResponse",
  () => [
    { no: 1, name: "worker_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "server_info", kind: "message", T: ServerInfo },
  ],
);

/**
 * @generated from message livekit.MigrateJobRequest
 */
export const MigrateJobRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.MigrateJobRequest",
  () => [
    { no: 2, name: "job_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message livekit.AvailabilityRequest
 */
export const AvailabilityRequest = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.AvailabilityRequest",
  () => [
    { no: 1, name: "job", kind: "message", T: Job },
    { no: 2, name: "resuming", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message livekit.AvailabilityResponse
 */
export const AvailabilityResponse = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.AvailabilityResponse",
  () => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "available", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "supports_resume", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "participant_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "participant_identity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "participant_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "participant_attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message livekit.UpdateJobStatus
 */
export const UpdateJobStatus = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateJobStatus",
  () => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(JobStatus) },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.UpdateWorkerStatus
 */
export const UpdateWorkerStatus = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.UpdateWorkerStatus",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(WorkerStatus), opt: true },
    { no: 3, name: "load", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "job_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message livekit.JobAssignment
 */
export const JobAssignment = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.JobAssignment",
  () => [
    { no: 1, name: "job", kind: "message", T: Job },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message livekit.JobTermination
 */
export const JobTermination = /*@__PURE__*/ proto3.makeMessageType(
  "livekit.JobTermination",
  () => [
    { no: 1, name: "job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

