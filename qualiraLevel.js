(function() {
	const qualiraMonkeys = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer']
	let monkeysWithQualiraScore = qualiraMonkeys.map(qualiraMonkey => {
		return { 
			monkeyName: qualiraMonkey, 
			qualiraScore: Math.random() * (10000 * 1) + 1};
	});
	console.log(monkeysWithQualiraScore.sort((a, b) => a.qualiraScore - b.qualiraScore));
	monkeysWithQualiraScore.forEach(qualiraMonkey => {
		if(qualiraMonkey.qualiraScore > 9000) {
			console.log(`The qualira level of ${qualiraMonkey.monkeyName} is over NINE THOUSAND!!!`);
	}});
})();
