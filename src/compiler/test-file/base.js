import { escapeRegExp as escapeRe } from 'lodash';

export default class TestFileCompilerBase {
    constructor () {
        const escapedExt = escapeRe(this.getSupportedExtension());

        this.supportedExtensionRe = new RegExp(`${escapedExt}$`);
    }

    _hasTests (/* code */) {
        throw new Error('Not implemented');
    }

    getSupportedExtension () {
        throw new Error('Not implemented');
    }

    async precompile (/* testFilesInfo */) {
        throw new Error('Not implemented');
    }

    async compile (/* code, filename */) {
        throw new Error('Not implemented');
    }

    async execute (/* compiledCode, filename */) {
        throw new Error('Not implemented');
    }

    canCompile (code, filename) {
        return this.supportedExtensionRe.test(filename);
    }

    get canPrecompile () {
        return false;
    }

    cleanUp () {
        // NOTE: Optional. Do nothing by default.
    }
}
