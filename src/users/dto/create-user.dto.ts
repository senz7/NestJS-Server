import { ApiProperty } from '@nestjs/swagger';

export class CreateUsetDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'E-mail adress' })
  readonly email: string;
  @ApiProperty({ example: 'Password', description: 'User password' })
  readonly password: string;
}
