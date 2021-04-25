export const compare = (a, b) => {
	let comparison = 0;
	if (
		(a.solutionsAccepted + a.solutionsSubmitted) / 2 >
		(b.solutionsAccepted + b.solutionsSubmitted) / 2
	) {
		comparison = -1;
	} else if (
		(a.solutionsAccepted + a.solutionsSubmitted) / 2 <
		(b.solutionsAccepted + b.solutionsSubmitted) / 2
	) {
		comparison = 1;
	}
	return comparison;
};
