import {
  ArrayNotEmpty,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Status } from '../task.interface';

export class CreateClassDto {
  @IsString({ message: 'Название обязательно' })
  @IsNotEmpty({ message: 'Название обязательно' })
  task: string;

  @ArrayNotEmpty({ message: 'Необходимо указать теги' })
  @IsString({ each: true, message: 'Теги должны быть строчными' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'Неверный тип статуса' })
  status: Status;
}
