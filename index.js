const fetchData = async searchTerm => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "a42483f6",
			s: searchTerm
		}
	});
	console.log(response.data);
};

const input = document.querySelector("input");

const onInput = event => {
	fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput));
