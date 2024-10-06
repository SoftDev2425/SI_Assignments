import { IsEmail, IsEnum, IsObject, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Password must contain at least one letter and one number',
  })
  password: string;

  @IsString()
  @Matches(/^(0045|\+45|45)?\d{8}$/, {
    message: 'Phone number must be a danish phone number',
  })
  phone: string;

  @IsObject()
  address: Address;

  @IsEnum(['USER', 'ADMIN'])
  role: 'USER' | 'ADMIN';
}

class Address {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  zip: string;
}
