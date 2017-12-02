const Employment = require('../Employment/Employment');
const Education = require('../Education/Education');

class Applicant {
    employment;
    education;
    age;
    hasFamily;

    setEmployment(employmentType) {
        this.employment = new Employment(employmentType);
    }

    setEducation(educationType) {
        this.education = new Education(educationType);
    }

    setAge(age) {
        this.age = age;
    }

    set(hasFamily) {
        this.hasFamily = hasFamily;
    }

    getCreditScore() {
        let creditScore = 0;

        creditScore = creditScore + this.employment.getScore() + this.education.getScore();

        if (this.age >= 25) {
            creditScore += 20;
        }

        if (this.hasFamily) {
            creditScore += 20;
        }

        return creditScore;
    }
}

exports = Applicant;
