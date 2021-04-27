const toDataUrl = (file: Blob): Promise<string> => {
  const reader = new FileReader()
  const promise = new Promise<string>((resolve, reject) => {
    reader.readAsDataURL(file)
    reader.onloadend = ({ target }) => {
      console.log(3, target)
      if (
        target &&
        target.result &&
        typeof target.result == 'string' &&
        target.readyState == FileReader.DONE
      ) {
        resolve(target.result)
      } else reject('')
    }
  })
  return promise
}
export default toDataUrl