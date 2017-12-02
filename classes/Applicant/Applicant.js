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
        const isAgeValid = isNaN(age) || age % 1 !== 0 || age < 1;

        if (!isAgeValid) {
            throw new Error('Invalid age!')
        }

        this.age = age;
    }

    setFamily(hasFamily) {
        if (typeof hasFamily !== 'boolean') {
            throw new Error('hasFamily must be boolean!');
        }

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
