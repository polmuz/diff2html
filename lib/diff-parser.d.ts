import { DiffFile } from './types';
export interface DiffParserConfig {
    srcPrefix?: string;
    dstPrefix?: string;
}
export declare function parse(diffInput: string, config?: DiffParserConfig): DiffFile[];
//# sourceMappingURL=diff-parser.d.ts.map