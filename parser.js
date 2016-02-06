function updateTestingParagraph(typedTextArea, displayParagraph){
	var newText = typedTextArea.value;
	newText = newText.replace(/\r?\n/g, '<br />');
	displayParagraph.innerHTML = newText;
}
