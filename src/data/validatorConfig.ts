import { ValidatorConfig } from './../types/Entyties';

export const validatorConfig:ValidatorConfig = {
   city: {
      isRequired: {
         message: 'Город не выбран'
      }
   },
   name: {
      isRequired: {
         message: 'Поле не заполнено'
      }
   },
   email: {
      isRequired: {
         message: 'Поле не заполнено'
      }
   },
   phone: {
      isRequired: {
         message: 'Поле не заполнено'
      }
   },
   message: {
      isRequired: {
         message: 'Поле не заполнено'
      }
   },
   privacy: {
      isRequired: {
         message: 'Поле не заполнено'
      }
   }
}
