export default function () {
  switch (this.diagnos) {
    case 'АГ':
      this.period.doctorExam = 3;
      this.period.surveys = 24;
      this.survey = {
        everyExam: 'Измерение АД',
        everySurvey: 'ЭКГ , ОАК, ОАМ, БАК(холестерин, триглицериды, липопротеины), ЭХО-КГ',
      };
      break;
    case 'Пневмония':
      this.period.doctorExam = 1;
      this.period.end = 6;
      this.period.surveys = 3;
      this.survey = {
        everyExam: 'Термометрия, осмотр',
        everySurvey: 'Спирометрия, ОАК, пневмотахометрия, анализ мокроты(при ее наличии)',
      };
      break;
    case 'Хронический бронхит':
      this.period.doctorExam = 3;
      this.period.surveys = 6;
      this.survey = {
        everyExam: 'Термометрия, спирометрия',
        everySurvey: 'ОАК, ОАМ, ЭКГ',
      };
      break;
    case 'Хронический тонзиллит':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'ОАК, ОАМ',
        everySurvey: 'БАК(СРБ), диафенилаланиновая проба, ЭКГ',
      };
      break;
    case 'БА':
      this.period.doctorExam = 3;
      this.period.surveys = 6;
      this.period.end = 36;
      this.survey = {
        everyExam: 'Спирометрия',
        everySurvey: 'ПОС, ЭКГ',
      };
      break;
    case 'Острый гастрит':
      this.period.doctorExam = 1;
      this.period.surveys = 1;
      this.period.end = 2;
      this.survey = {
        everyExam: 'Осмотр',
        everySurvey: 'анализ кала на яйца глистов и простейшие, ' +
          'на скрытую кровь и дизентерийную группу, исследование желудочной секреции',
      };
      break;
    case 'Хронический гастрит(нед. секреция)':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр, контроль массы тела, ОАК',
        everySurvey: 'ОАМ, анализ кала на яйца глистов 3-5 раз подряд, копрограмма',
      };
      break;
    case 'Хронический гастрит(сохр. секреция)':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, контроль массы тела',
        everySurvey: 'ОАК,ОАМ, анализ кала на яйца глистов, скрытую кровь, копрограмма, исследование жел. секреции'
      };
      break;
    case 'ЯБ':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, ОАК, анализ кала на скрытую кровь, яйца глистов, контроль ИМТ',
        everySurvey: 'ФГДС с биопсией на H.Pylori(если есть показания)'
      };
      break;
    case 'Ожирение':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, контроль массы тела',
        everySurvey: 'ОАК, ОАМ, ЭКГ, сахар крови, липидный обмен, тест толерантности к глюкозе'
      };
      break;
    case 'Острый пиелонефрит':
      this.period.doctorExam = 2;
      this.period.surveys = 6;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'ОАК, Нечипоренко, конс. нефролога; ЭКГ, холестерин и креатинин(раз в год)'
      };
      break;
    case 'Хронический пиелонефрит':
      this.period.doctorExam = 3;
      this.period.surveys = 6;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'Нечипоренко, кровь на ост. азот, белковые фракции.'
      };
      break;
    case 'Острый гломерулонефрит':
      this.period.doctorExam = 2;
      this.period.surveys = 6;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'ОАК, Нечипоренко, конс. нефролога; ЭКГ, холестерин и креатинин(раз в год)'
      };
      break;
    case 'Хронический гломерулонефрит':
      this.period.doctorExam = 3;
      this.period.surveys = 6;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр, измерение АД',
        everySurvey: 'ОАМ, ОАК, конс. нефролога'
      };
      break;
    case 'Анемия':
      this.period.doctorExam = 3;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК с формулой, свободный гемоглобин'
      };
      break;
    case 'Васкулиты':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 36;
      this.survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК с формулой, ОАМ, кровь на свертываемость'
      };
      break;
    case 'Геморрой':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК, ОАМ. Ректороманоскопия(по показаниям)'
      };
      break;
    case 'Варикоз':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 24;
      this.survey = {
        everyExam: 'Осмотр, ОАК',
        everySurvey: 'ОАМ, УЗИ вен конечностей'
      };
      break;
    case 'Эндоартериит':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр, ОАК',
        everySurvey: 'ОАМ, УЗИ (по показаниям)'
      };
      break;
    case 'МКБ':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 36;
      this.survey = {
        everyExam: 'Осмотр, ОАК, ОАМ',
        everySurvey: 'При наличии камня ежемесячные ОАМ, уролог'
      };
      break;
    case 'Хронический отит':
      this.period.doctorExam = 6;
      this.period.surveys = 6;
      this.period.end = 12;
      this.survey = {
        everyExam: 'Осмотр, ОАК, ОАМ',
        everySurvey: ''
      };
      break;
    case 'ИБС':
      this.period.doctorExam = 3;
      this.period.surveys = 12;
      this.survey = {
        everyExam: 'ЭКГ, измерение АД',
        everySurvey: 'ЭКГ с физнагрузкой, ОАК, ОАМ, БАК, ЭХО-КГ',
      };
      break;
    case 'Хронический аллергический риносинусит':
      this.period.doctorExam = 6;
      this.period.surveys = 12;
      this.period.end = 60;
      this.survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК, ОАМ'
      };
      break;

  }
}