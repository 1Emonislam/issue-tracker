document
	.getElementById('issueInputForm')
	.addEventListener('submit', submitIssue);

function submitIssue(e) {
	const getInputValue = id => document.getElementById(id).value;
	const description = getInputValue('issueDescription');
	const severity = getInputValue('issueSeverity');
	const assignedTo = getInputValue('issueAssignedTo');
	const id = Math.floor(Math.random() * 100000000) + '';
	const status = 'Open';

	const issue = { id, description, severity, assignedTo, status };
	let issues = [];
	if (localStorage.getItem('issues')) {
		issues = JSON.parse(localStorage.getItem('issues'));
	}
	issues.push(issue);
	localStorage.setItem('issues', JSON.stringify(issues));

	document.getElementById('issueInputForm').reset();
	fetchIssues();
	e.preventDefault();
}
