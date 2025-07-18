import { TextStreamData } from '../../packages/core/dist/index.d.ts';
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
    textStreams: TextStreamData[];
};
//# sourceMappingURL=useTextStream.d.ts.map