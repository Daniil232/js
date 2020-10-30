const postData = async (url, data) => { // async - асинхронно, жжем результат
	const res = await fetch(url, { // await дождаться
		method: "POST",
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	});

	return await res.json();
};

const getResource = async (url) => { // async - асинхронно, жжем результат
	const res = await fetch(url); // await дождаться

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

export {postData};
export {getResource};