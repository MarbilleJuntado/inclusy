class User {
  user_profile_creation_date;
  user_profile_id;
  user_background;
  constructor(id) {
    this.id = id;
  }
  create () {
    let rand_year = Math.floor(Math.random()*13) + 1;
    let rand_work = Math.floor(Math.random()*5);
    let rand_educ = Math.floor(Math.random()*3);
    let bool = Math.floor(Math.random()*2) === 0;
    this.user_profile_creation_date = moment().subtract(rand_year,'years');
    this.user_profile_id = this.id;
    let user_background = {};
    user_background.work = this.getWorkStatus(rand_work);
    user_background.education = this.getEducation(rand_educ);
    user_background.age = bool ? 24 : 26;
    user_background.family = bool;
    this.user_background = user_background;
  }

  getWorkStatus (num) {
    switch (num) {
      case 0:
        return 'UNEMPLOYED';
      case 1:
        return 'OTHER_MICRO_VENDOR';
      case 2:
        return 'SARI_SARI_VENDOR';
      case 3:
        return 'MARKET_VENDOR';
      case 4:
        return 'EMPLOYEE';
    }
  }

  getEducation (num) {
    switch (num) {
      case 0:
        return 'NONE';
      case 1:
        return 'HIGH_SCHOOL';
      case 2:
        return 'COLLEGE';
    }
  }
}

exports.default = User;