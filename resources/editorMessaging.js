(() => {
	let frame;
	const vscode = acquireVsCodeApi();

	window.addEventListener("message", (m) => {
		if (m.data._fromVscode) {
			frame.contentWindow.postMessage(m.data, "*");

			if (m.data.type === "open") {
				vscode.setState({
					editing: {
						assetType: m.data.assetType,
						assetId: m.data.assetId,
					},
				});
			}
		} else {
			vscode.postMessage(m.data);
		}
	});
	document.addEventListener("DOMContentLoaded", (event) => {
		frame = document.getElementById("editor-frame");
	});
})();
