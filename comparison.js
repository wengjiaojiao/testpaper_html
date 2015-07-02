function comparison() {
    var formvaluegetter = new FormValueGetter("form");
    var questionBanks = AllQuestionBank();
    var sumScore = 0;
    var formvalues = formvaluegetter.getValues();

    formvalues.forEach(function(formvalue ,i) {
        if(formvalue.name === questionBanks[i].name && formvalue.value === questionBanks[i].answer) {
            sumScore +=  questionBanks[i].score;
        }
    });
    return sumScore;
}
