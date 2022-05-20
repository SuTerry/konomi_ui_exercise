
export default (response: any, timeout = 2000): Promise<any> => new Promise((resolve) => {
    setTimeout(() => {
        resolve(response)
    }, timeout)
})
