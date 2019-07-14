const calcRank = (fields) => {
    const ranks = [
        "S-TEC",
        "A-TEC",
        "B-TEC",
        "C-TEC",
        "D-TEC",
		"D-POW",
		"C-POW",
		"B-POW",
		"A-POW",
		"S-POW"
    ];

    let rankValue = 52;
    let rankName = "";

    // Turns
    if(fields.turns <= 4)
        rankValue = rankValue + 12;
    
    else if(fields.turns <= 8)
        rankValue = rankValue + 8;
    
    else if(fields.turns >= 29 && fields.turns <= 32)
        rankValue = rankValue - 8;
    
    else if(fields.turns >= 33)
        rankValue = rankValue - 12;

    // Fusions
    if(fields.fusions == 0)
        rankValue = rankValue + 4;

    else if(fields.fusions >= 5 &&  fields.fusions <= 9)
        rankValue = rankValue - 4;

    else if(fields.fusions >= 5 &&  fields.fusions <= 14)
        rankValue = rankValue - 8;

    else if(fields.fusions >= 15)
        rankValue = rankValue - 12;

    // Defensive wins
    if(fields.defensiveWins >= 3 && fields.defensiveWins <= 6)
        rankValue = rankValue - 10;

    else if(fields.defensiveWins >= 3 && fields.defensiveWins <= 10)
        rankValue = rankValue - 20;

    else if(fields.defensiveWins >= 3 && fields.defensiveWins <= 15)
        rankValue = rankValue - 30;

    else if(fields.defensiveWins >= 3 && fields.defensiveWins >= 16)
        rankValue = rankValue - 40;

    // Effective attacks
    if(fields.effectiveAttacks <= 1)
        rankValue = rankValue + 4;

    else if(fields.effectiveAttacks <= 3)
        rankValue = rankValue + 2;

    else if(fields.effectiveAttacks >= 10 && fields.effectiveAttacks <= 19)
        rankValue = rankValue - 2;

    else if(fields.effectiveAttacks >= 20)
        rankValue = rankValue - 4;

    // Pure magics
    if(fields.magicsUsed == 0)
        rankValue = rankValue + 2;
    
    else if(fields.magicsUsed <= 3)
        rankValue = rankValue - 4;
    
    else if(fields.magicsUsed <= 6)
        rankValue = rankValue - 8;
    
    else if(fields.magicsUsed <= 9)
        rankValue = rankValue - 12;
    
    else if(fields.magicsUsed >= 10)
        rankValue = rankValue - 16;

    // Equipments
    if(fields.equipmentsUsed == 0)
        rankValue = rankValue + 4;

    else if(fields.equipmentsUsed >= 5 && fields.equipmentsUsed <= 9)
        rankValue = rankValue - 4;

    else if(fields.equipmentsUsed >= 10 && fields.equipmentsUsed <= 14)
        rankValue = rankValue - 8;

    else if(fields.equipmentsUsed >= 15)
        rankValue = rankValue - 12;

    // Traps activated
    if(fields.trapsActivated == 0)
        rankValue = rankValue + 2;
        
    else if(fields.trapsActivated <= 2)
        rankValue = rankValue - 8;
        
    else if(fields.trapsActivated <= 4)
        rankValue = rankValue - 16;
        
    else if(fields.trapsActivated <= 6)
        rankValue = rankValue - 24;
        
    else if(fields.trapsActivated >= 7)
        rankValue = rankValue - 32;

    // Cards used
    if(fields.cardsUsed <= 8)
        rankValue = rankValue + 15;

    else if(fields.cardsUsed <= 12)
        rankValue = rankValue + 12;

    else if(fields.cardsUsed >= 33 && fields.cardsUsed <= 36)
        rankValue = rankValue - 5;

    else if(fields.cardsUsed >= 37)
        rankValue = rankValue - 7;

    // Lifepoints
    if(fields.lifepoints < 100)
        rankValue = rankValue - 7;

    else if(fields.lifepoints < 1000)
        rankValue = rankValue - 5;

    else if(fields.lifepoints >= 7000 && fields.lifepoints < 8000)
        rankValue = rankValue + 4;

    else if(fields.lifepoints >= 8000)
        rankValue = rankValue + 6;

    // Facedowns
    if(fields.facedownCards > 0 && fields.facedownCards <= 10)
        rankValue = rankValue - 2;
	
	else if(fields.facedownCards > 0 && fields.facedownCards <= 20)
        rankValue = rankValue - 4;
	
	else if(fields.facedownCards > 0 && fields.facedownCards <= 30)
        rankValue = rankValue - 6;
	
	else if(fields.facedownCards > 30)
        rankValue = rankValue - 8;

    
    rankName = ranks[Math.floor(rankValue/10)];

	let rankClass = "";
	if(rankValue < 20)
		rankClass = "tech";
	else if(rankValue >= 80)
		rankClass = "pow";

    return {
        value: rankValue,
        name: rankName,
		class: rankClass
    };
}

export default calcRank;
