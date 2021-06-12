export default async function (promise, delay) {
	// Wait, until all promises execution and return first value.
	return new Promise(async (resolve, reject) => {
		resolve((await Promise.all([promise.catch((e) => reject(e)), new Promise(r => setTimeout(r, delay))]))[0])
	})
}
