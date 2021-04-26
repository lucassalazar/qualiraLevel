(function() {
	'use strict'

	const qualiraMonkeys = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer', 'Leònidas', 'Menino Neitan', 'Felipão V1D4 L0K4'];
	const monkeysWithQualiraScore = qualiraMonkeys.map(qualiraMonkey => {
		return { 
			monkeyName: qualiraMonkey, 
			qualiraScore: Math.random() * (10000 * 1) + 1
		};
	});
	console.log(monkeysWithQualiraScore.sort((a, b) => a.qualiraScore - b.qualiraScore));
	monkeysWithQualiraScore.forEach(qualiraMonkey => {
		if(qualiraMonkey.qualiraScore > 9000) {
			console.log(`The qualira level of ${qualiraMonkey.monkeyName} is over NINE THOUSAND!!!`);
	}});
})();
