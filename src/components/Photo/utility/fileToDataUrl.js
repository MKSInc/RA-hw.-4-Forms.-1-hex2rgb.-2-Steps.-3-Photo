export default function fileToDataUrl (file) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();

		fileReader.addEventListener('load', evt => {
			resolve({
				dataUrl: evt.currentTarget.result,
				title: file.name,
			});
		});

		fileReader.addEventListener('error', evt => {
			reject(new Error(evt.currentTarget.error));
		});

		fileReader.readAsDataURL(file);
	});
}
