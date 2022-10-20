export default function (diagnos) {
  const period = {
    doctorExam: 0,
    end: 0,
    surveys: 0,
  };
  let survey = null;
  
  switch (diagnos) {
    case 'АГ':
      period.doctorExam = 3;
      period.surveys = 24;
      survey = {
        everyExam: 'Измерение АД',
        everySurvey: 'ЭКГ , ОАК, ОАМ, БАК(холестерин, триглицериды, липопротеины), ЭХО-КГ',
      };
      return { period, survey };
    case 'Пневмония':
      period.doctorExam = 1;
      period.end = 6;
      period.surveys = 3;
      survey = {
        everyExam: 'Термометрия, осмотр',
        everySurvey: 'Спирометрия, ОАК, пневмотахометрия, анализ мокроты(при ее наличии)',
      };
      return { period, survey };
    case 'Хронический бронхит':
      period.doctorExam = 3;
      period.surveys = 6;
      survey = {
        everyExam: 'Термометрия, спирометрия',
        everySurvey: 'ОАК, ОАМ, ЭКГ',
      };
      return { period, survey };
    case 'Хронический тонзиллит':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'ОАК, ОАМ',
        everySurvey: 'БАК(СРБ), диафенилаланиновая проба, ЭКГ',
      };
      return { period, survey };
    case 'БА':
      period.doctorExam = 3;
      period.surveys = 6;
      period.end = 36;
      survey = {
        everyExam: 'Спирометрия',
        everySurvey: 'ПОС, ЭКГ',
      };
      return { period, survey };
    case 'Острый гастрит':
      period.doctorExam = 1;
      period.surveys = 1;
      period.end = 2;
      survey = {
        everyExam: 'Осмотр',
        everySurvey: `анализ кала на яйца глистов и простейшие, на скрытую кровь и дизентерийную группу, исследование желудочной секреции`,
      };
      return { period, survey };
    case 'Хронический гастрит(нед. секреция)':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр, контроль массы тела, ОАК',
        everySurvey: 'ОАМ, анализ кала на яйца глистов 3-5 раз подряд, копрограмма',
      };
      return { period, survey };
    case 'Хронический гастрит(сохр. секреция)':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, контроль массы тела',
        everySurvey: 'ОАК,ОАМ, анализ кала на яйца глистов, скрытую кровь, копрограмма, исследование жел. секреции'
      };
      return { period, survey };
    case 'ЯБ':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, ОАК, анализ кала на скрытую кровь, яйца глистов, контроль ИМТ',
        everySurvey: 'ФГДС с биопсией на H.Pylori(если есть показания)'
      };
      return { period, survey };
    case 'Ожирение':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, контроль массы тела',
        everySurvey: 'ОАК, ОАМ, ЭКГ, сахар крови, липидный обмен, тест толерантности к глюкозе'
      };
      return { period, survey };
    case 'Острый пиелонефрит':
      period.doctorExam = 2;
      period.surveys = 6;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'ОАК, Нечипоренко, конс. нефролога; ЭКГ, холестерин и креатинин(раз в год)'
      };
      return { period, survey };
    case 'Хронический пиелонефрит':
      period.doctorExam = 3;
      period.surveys = 6;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'Нечипоренко, кровь на ост. азот, белковые фракции.'
      };
      return { period, survey };
    case 'Острый гломерулонефрит':
      period.doctorExam = 2;
      period.surveys = 6;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, измерение АД, ОАМ',
        everySurvey: 'ОАК, Нечипоренко, конс. нефролога; ЭКГ, холестерин и креатинин(раз в год)'
      };
      return { period, survey };
    case 'Хронический гломерулонефрит':
      period.doctorExam = 3;
      period.surveys = 6;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр, измерение АД',
        everySurvey: 'ОАМ, ОАК, конс. нефролога'
      };
      return { period, survey };
    case 'Анемия':
      period.doctorExam = 3;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК с формулой, свободный гемоглобин'
      };
      return { period, survey };
    case 'Васкулиты':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 36;
      survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК с формулой, ОАМ, кровь на свертываемость'
      };
      return { period, survey };
    case 'Геморрой':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК, ОАМ. Ректороманоскопия(по показаниям)'
      };
      return { period, survey };
    case 'Варикоз':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 24;
      survey = {
        everyExam: 'Осмотр, ОАК',
        everySurvey: 'ОАМ, УЗИ вен конечностей'
      };
      return { period, survey };
    case 'Эндоартериит':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр, ОАК',
        everySurvey: 'ОАМ, УЗИ (по показаниям)'
      };
      return { period, survey };
    case 'МКБ':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 36;
      survey = {
        everyExam: 'Осмотр, ОАК, ОАМ',
        everySurvey: 'При наличии камня ежемесячные ОАМ, уролог'
      };
      return { period, survey };
    case 'Хронический отит':
      period.doctorExam = 6;
      period.surveys = 6;
      period.end = 12;
      survey = {
        everyExam: 'Осмотр, ОАК, ОАМ',
        everySurvey: ''
      };
      return { period, survey };
    case 'ИБС':
      period.doctorExam = 3;
      period.surveys = 12;
      survey = {
        everyExam: 'ЭКГ, измерение АД',
        everySurvey: 'ЭКГ с физнагрузкой, ОАК, ОАМ, БАК, ЭХО-КГ',
      };
      return { period, survey };
    case 'Хронический аллергический риносинусит':
      period.doctorExam = 6;
      period.surveys = 12;
      period.end = 60;
      survey = {
        everyExam: 'Осмотр',
        everySurvey: 'ОАК, ОАМ'
      };
      return { period, survey };
  }
}
