class EducationType {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
}

const HIGH_SCHOOL = new EducationType('HIGH_SCHOOL', 20);
const COLLEGE = new EducationType('COLLEGE', 20);
const NONE = new EducationType('NONE', 0);

exports.EducationType = EducationType;

exports.default = {
    HIGH_SCHOOL,
    COLLEGE,
    NONE
};
