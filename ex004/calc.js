let func = {
    conclusionAge: (birth, conclusion) => {
        return conclusion - birth;
    },
    actualAge: (birth, thisYear) => {
        return thisYear - birth;
    }
}
module.exports = func;