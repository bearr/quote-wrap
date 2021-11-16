"use strict";
(function () {
    var _a;
    (_a = document.querySelector('input[name="q"], input[name="query"]:not([type="hidden"])')) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', function (e) {
        var start = this.selectionStart || 0;
        var end = this.selectionEnd || 0;
        var _a = this, value = _a.value, selectionDirection = _a.selectionDirection;
        if (start === end || e.code !== 'Quote')
            return;
        e.preventDefault();
        if (e.key === value[start - 1] && e.key === value[end])
            this.setRangeText(value.slice(start, end), start - 1, end + 1);
        else {
            start += value[start] === ' ' ? 1 : 0;
            end -= value[end - 1] === ' ' ? 1 : 0;
            this.setRangeText("\"" + value.slice(start, end) + "\"", start, end);
            this.setSelectionRange(start + 1, end + 1);
        }
        this.selectionDirection = selectionDirection;
    });
})();
