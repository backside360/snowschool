import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  types = {
    snowboard: 'Сноуборд',
    trampoline: 'Батут',
    skateboard: 'Скейтборд',
  };

  places = {
    kant: 'Кант',
    novoperedelkino: 'Новопеределкино',
    krylatskoe: 'Крылатское',
    allpro: 'Allpro Academy',
    cska: 'ЦСКА',
    snejcom: 'Снежком'
  };

  coaches = {
    misha: {
      key: 'misha',
      name: 'Михаил Фомченко',
      speciality: [
        this.types.skateboard,
        this.types.snowboard,
        this.types.trampoline,
      ],
      about: 'Веселый',
    },
    sasha: {
      key: 'sasha',
      name: 'Александр Зыков',
      speciality: [
        this.types.skateboard,
        this.types.snowboard,
        this.types.trampoline,
      ],
      about: 'Суровый',
    },
  };

  fullPlace = {
    [this.types.snowboard]: [
      this.places.snejcom,
      this.places.kant,
      this.places.krylatskoe,
      this.places.novoperedelkino,
    ],
    [this.types.skateboard]: [this.places.cska, this.places.allpro],
    [this.types.trampoline]: [this.places.allpro, this.places.cska],
  };
}
