(() => {
  document.querySelector<HTMLInputElement>('input[name="q"], input[name="query"]:not([type="hidden"])')
    ?.addEventListener('keydown', function (e) {
      let start = this.selectionStart || 0
      let end = this.selectionEnd || 0
      
      if (start === end || e.code !== 'Quote') return
      e.preventDefault()
      
      const { value, selectionDirection } = this

      if (e.key !== value[start - 1] || e.key !== value[end]) {
        start += value[start] === ' ' ? 1 : 0
        end -= value[end - 1] === ' ' ? 1 : 0
        this.setRangeText(`"${value.slice(start, end)}"`, start, end)
        this.setSelectionRange(start + 1, end + 1)
      } else this.setRangeText(value.slice(start, end), start - 1, end + 1)   
      
      this.selectionDirection = selectionDirection
    })
})()
