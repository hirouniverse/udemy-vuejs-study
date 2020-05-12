export const sampleMixin = {
    data() {
        return {
            textMixin: 'This is the text of mixin.'
        }
    },
    computed: {
        reversedWordMixin() {
            return this.textMixin.split('').reverse().join('');
        },
        countedWordsMixin() {
            return `${this.textMixin} (${this.textMixin.length})`;
        }
    }
}