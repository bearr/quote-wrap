(() => {
  const search = document.querySelector([
    'input[name="q"]', // google, github, ...
    'input[name="query"]:not([type="hidden"])' // craigslist
  ].join(','))

  if (search instanceof HTMLInputElement) {
    search.addEventListener('keydown', function (e) {
      let {
        selectionStart: start,
        selectionEnd: end
      } = this

      if (start === end || e.code !== 'Quote') return
      e.preventDefault()

      const { value: q, selectionDirection } = this

      if (e.key === q[start - 1] && e.key === q[end])
        this.setRangeText(q.slice(start, end), start - 1, end + 1)
      else {
        start += q[start] === ' ' ? 1 : 0
        end -= q[end - 1] === ' ' ? 1 : 0
        this.setRangeText(`"${q.slice(start, end)}"`, start, end)
        this.setSelectionRange(start + 1, end + 1)
      }

      this.selectionDirection = selectionDirection
    })
  }
})()
