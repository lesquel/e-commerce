import { Meta } from '@angular/platform-browser';
import { User } from '@app/features/auth/models';
import { InfoBasicEntity } from '@app/shared/models';

export interface InfoUser extends InfoBasicEntity {
  nacionality?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  user?: User;
  birthDate?: Date;
}

export interface InfoUsers {
  data: InfoUser[];
  meta: Meta;
}
